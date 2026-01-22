// Cloudflare D1を使用したニュースAPI (Workers)
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    }

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders })
    }

    try {
      // GET /api/news - ニュース一覧取得
      if (url.pathname === '/api/news' && request.method === 'GET') {
        const { results } = await env.DB.prepare(`
          SELECT 
            id,
            title,
            content,
            type,
            DATE(created_at) as date,
            is_new as isNew
          FROM news 
          WHERE is_published = true 
          ORDER BY created_at DESC 
          LIMIT 50
        `).all()

        return new Response(JSON.stringify({ newsItems: results }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }

      // POST /api/news - 新しいニュース追加（認証付き）
      if (url.pathname === '/api/news' && request.method === 'POST') {
        const authHeader = request.headers.get('Authorization')
        if (authHeader !== `Bearer ${env.API_SECRET}`) {
          return new Response('Unauthorized', { status: 401, headers: corsHeaders })
        }

        const { title, content, type = 'お知らせ' } = await request.json()
        
        if (!title || !content) {
          return new Response('Title and content required', { 
            status: 400, 
            headers: corsHeaders 
          })
        }

        const result = await env.DB.prepare(`
          INSERT INTO news (title, content, type) 
          VALUES (?, ?, ?)
        `).bind(title, content, type).run()

        return new Response(JSON.stringify({ 
          success: true, 
          id: result.meta.last_row_id 
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        })
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders })
      
    } catch (error) {
      return new Response(JSON.stringify({ 
        error: 'Internal Server Error',
        message: error.message 
      }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      })
    }
  }
}

/* 
wrangler.tomlに追加:

[[d1_databases]]
binding = "DB"
database_name = "artifacter-news"
database_id = "your-d1-database-id"
*/