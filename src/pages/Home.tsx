function Home() {
  return (
    <div className="home">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">ArtifacterBot</h1>
            <p className="hero-subtitle">原神キャラクターのビルド画像を簡単に生成</p>
            <p className="hero-description">
              あなたのキャラクタービルドを美しい画像として共有しよう。
              聖遺物のスコア計算機能付きで、装備の最適化をサポートします。
            </p>
            <div className="hero-buttons">
              <a 
                href="https://discord.com/api/oauth2/authorize?client_id=1083699450238742568" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Discordに追加
              </a>
              <a href="/commands" className="btn btn-secondary">
                コマンド一覧
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
                <img src="/images/build-image-example.png" alt="ビルド画像例" className="build-image"/>
            </div>
          </div>
        </div>
      </section>

      {/* 機能紹介セクション */}
      <section className="features">
        <div className="features-container">
          <h2 className="section-title">主な機能</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3><a href='/commands#build'>ビルド画像生成</a></h3>
              <p>キャラクターの装備やステータス情報を美しい画像として生成。聖遺物のスコア計算機能付き。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3><a href='/commands#uid'>UID連携</a></h3>
              <p>DiscordアカウントとUIDを紐づけることで、コマンド使用時の入力を簡略化。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3><a href='/commands#party'>パーティーカード</a></h3>
              <p>4人のキャラクターのステータス情報を1枚の画像にまとめて、パーティー構成を共有。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎲</div>
              <h3><a href='/commands#週ボス'>週ボスランダム</a></h3>
              <p>週3回の征討領域をランダムで選択。どの週ボスをやるか迷った時に便利。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👯‍♀️</div>
              <h3><a href='/commands#螺旋'>深境螺旋 編成生成</a></h3>
              <p>深境螺旋の編成をランダムで8人選出。縛りプレイをしたい時に便利？</p>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="highlights">
        <div className="highlights-container">
          <h2 className="section-title">ArtifacterBotの特徴</h2>
          <div className="highlights-content">
            <div className="highlight-item">
              <h3>✨ 直感的なボタン操作</h3>
              <p>計算方式をボタンで簡単に切り替え。ドロップダウンよりも素早く操作できます。</p>
            </div>
            <div className="highlight-item">
              <h3>🔢 正確なスコア計算</h3>
              <p>会心ダメージと会心率を基準とした聖遺物スコア計算で、装備の価値を数値化。</p>
            </div>
            <div className="highlight-item">
              <h3>🚀 高速な画像生成</h3>
              <p>約2～3秒で高品質なビルド画像を生成。待ち時間を最小限に抑えました。</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="cta">
        <div className="cta-container">
          <h2>今すぐ始めよう</h2>
          <p>あなたのDiscordサーバーにArtifacterBotを追加して、原神ライフをもっと楽しく！</p>
          <div className="cta-buttons">
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
      </section>
    </div>
  )
}

export default Home