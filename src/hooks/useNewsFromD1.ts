// Cloudflare D1 APIからニュースを取得するフック
import { useState, useEffect } from 'react'

interface NewsItem {
  id: number
  date: string
  title: string
  content: string
  type: string
  isNew: boolean
}

interface NewsResponse {
  newsItems: NewsItem[]
}

export function useNewsFromD1() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchNews() {
      try {
        // 環境変数からWorkers APIのURLを取得（型安全）
        const workerApiUrl = import.meta.env.VITE_NEWS_API_URL || process.env.VITE_NEWS_API_URL
        
        // デバッグ情報
        console.log('🔧 Environment Debug Info:', {
          hostname: window.location.hostname,
          origin: window.location.origin,
          workerApiUrl: workerApiUrl,
          workerApiUrlType: typeof workerApiUrl,
          workerApiUrlLength: workerApiUrl?.length || 0,
          allEnvVars: import.meta.env
        })
        
        // APIエンドポイントの決定
        let apiUrl: string
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
          // 開発環境：静的JSONファイル
          apiUrl = '/api/news.json'
        } else if (workerApiUrl && workerApiUrl.trim() !== '' && workerApiUrl !== 'undefined') {
          // 本番環境：環境変数で指定されたWorkers API
          apiUrl = workerApiUrl
        } else {
          // フォールバック：同一ドメインのAPIルート
          apiUrl = 'https://artifacter-news-api.syutarou.xyz/api/news'
        }
                          
        const response = await fetch(apiUrl)
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`)
        }

        const data: NewsResponse = await response.json()
        setNews(data.newsItems || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error')
        
        // エラー時はJSONファイルにフォールバック
        try {
          const fallbackResponse = await fetch('/api/news.json')
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json()
            setNews(fallbackData.newsItems || [])
            setError(null) // エラーをクリア
          }
        } catch (fallbackErr) {
          console.error('Fallback also failed:', fallbackErr)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  return { news, loading, error }
}