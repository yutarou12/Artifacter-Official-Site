function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ArtifacterBot</h3>
            <p>ビルド画像生成で、聖遺物厳選などをサポート</p>
          </div>
          
          <div className="footer-section">
            <h4>リンク</h4>
            <ul className="footer-links">
              <li><a href="/commands">コマンド一覧</a></li>
              <li><a href="/news">最新ニュース</a></li>
              <li><a href="/contact">サポート</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>コミュニティ</h4>
            <ul className="footer-links">
              <li><a href="https://discord.gg/k5Feum44gE" target="_blank" rel="noopener noreferrer">Discord サーバー</a></li>
              <li><a href="https://github.com/yutarou12/Artifacter-Bot" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://donate.stripe.com/3cI6oG6lz19k44t2hfenS09" target="_blank" rel="noopener noreferrer">寄付</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024-2026 OratyLabo - ArtifacterBot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer