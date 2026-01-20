function News() {
  // 実際の運用では、これらのデータはAPIから取得されるべきです
  const newsItems = [
    {
      id: 1,
      date: '2026-01-15',
      title: 'ArtifacterBot 公式サイト開設',
      content: 'ArtifacterBotの公式サイトが開設されました。コマンド一覧や最新情報をこちらでご確認いただけます。',
      type: 'サイト更新',
      isNew: true
    },
    {
      id: 2,
      date: '2026-01-10',
      title: 'パフォーマンス改善アップデート',
      content: 'ビルド画像の生成速度を約30%向上させました。より快適にArtifacterBotをご利用いただけます。',
      type: '機能改善',
      isNew: true
    },
    {
      id: 4 ,
      date: '2024-01-21',
      title: '/partyコマンド追加',
      content: 'パーティーカード生成機能が追加されました。4人のキャラクター情報を1枚の画像で表示できます。',
      type: '新機能',
      isNew: false
    },
    {
      id: 3,
      date: '2025-01-16',
      title: 'サーバー導入数590突破',
      content: 'おかげさまで約590のDiscordサーバーに導入いただいております。安定してサービスを提供中です。',
      type: 'マイルストーン',
      isNew: false
    },
    {
      id: 5,
      date: '2024-01-01',
      title: 'ArtifacterBot正式リリース',
      content: 'GenshinArtifacter後継BotとしてArtifacterBotが正式リリースされました。',
      type: 'リリース',
      isNew: false
    }
  ]

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