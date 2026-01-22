import AdSense from '../components/AdSense'
import { useNewsFromD1 } from '../hooks/useNewsFromD1'         // Cloudflare D1版（推奨）

function News() {
  // Cloudflare D1 API経由でニュースデータを取得（フォールバック付き）
  const { news: newsItems, loading, error } = useNewsFromD1()
  
  // ローディング表示
  if (loading) {
    return (
      <div className="news">
        <div className="news-container">
          <div className="page-header">
            <h1>ニュース・更新情報</h1>
            <p>読み込み中...</p>
          </div>
        </div>
      </div>
    )
  }

  // エラー表示
  if (error) {
    return (
      <div className="news">
        <div className="news-container">
          <div className="page-header">
            <h1>ニュース・更新情報</h1>
            <p style={{color: 'red'}}>データの取得に失敗しました: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('ja-JP', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const getTypeClass = (type: string) => {
    switch (type) {
      case '新機能': return 'type-feature'
      case '機能改善': return 'type-improvement'
      case 'リリース': return 'type-release'
      case 'マイルストーン': return 'type-milestone'
      case 'サイト更新': return 'type-site'
      default: return 'type-default'
    }
  }

  return (
    <div className="news">
      <div className="news-container">
        <div className="page-header">
          <h1>ニュース・更新情報</h1>
          <p>ArtifacterBotの最新情報や機能追加のお知らせをお届けします</p>
        </div>

        <div className="news-content">
          <div className="news-list">
            {newsItems.map((item) => (
              <article key={item.id} className={`news-item ${item.isNew ? 'news-new' : ''}`}>
                <div className="news-header">
                  <div className="news-meta">
                    <time className="news-date">{formatDate(item.date)}</time>
                    <span className={`news-type ${getTypeClass(item.type)}`}>{item.type}</span>
                    {item.isNew && <span className="news-badge">NEW</span>}
                  </div>
                  <h2 className="news-title">{item.title}</h2>
                </div>
                <div className="news-body">
                  <p>{item.content}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="news-sidebar">
            <div className="sidebar-section">
              <h3>スポンサーリンク</h3>
              <div className="ad-container">
                <AdSense 
                    adSlot="8994340456" 
                    adFormat={undefined}
                    className=".card-ad"
                    style={{width: '220px', height: '250px'}}
                />
              </div>
            </div>
            <div className="sidebar-section">
              <h3>最新情報を受け取る</h3>
              <p>ArtifacterBotの最新情報は以下のサーバーでお知らせしています</p>
              <div className="social-links">
                <a 
                  href="https://discord.gg/k5Feum44gE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link discord"
                >
                  <span className="icon">💬</span>
                  Discordサーバー
                </a>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>カテゴリー</h3>
              <ul className="category-list">
                <li><span className="category-icon type-feature"></span>新機能</li>
                <li><span className="category-icon type-improvement"></span>機能改善</li>
                <li><span className="category-icon type-release"></span>リリース</li>
                <li><span className="category-icon type-milestone"></span>マイルストーン</li>
                <li><span className="category-icon type-site"></span>サイト更新</li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>統計情報</h3>
              <div className="stats">
                <div className="stat-item">
                  <span className="stat-number">1140+</span>
                  <span className="stat-label">導入サーバー数</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5</span>
                  <span className="stat-label">利用可能コマンド</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">2-3秒</span>
                  <span className="stat-label">画像生成時間</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="news-footer">
          <div className="cta-section">
            <h3>ArtifacterBotを始める</h3>
            <p>まだArtifacterBotを導入していない方は、今すぐDiscordサーバーに追加しましょう！</p>
            <a 
              href="https://discord.com/api/oauth2/authorize?client_id=1083699450238742568" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Discordに追加する
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News