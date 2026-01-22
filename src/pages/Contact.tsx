import AdSense from '../components/AdSense'

function Contact() {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="page-header">
          <h1>お問い合わせ・サポート</h1>
          <p>ArtifacterBotに関するご質問・不具合報告・ご要望はこちらから</p>
        </div>

        <div className="contact-content">
          <div className="contact-main">
            <div className="contact-card">
              <div className="contact-icon">💬</div>
              <h2>サポートDiscordサーバー</h2>
              <p>
                ArtifacterBotに関するお問い合わせは、サポートDiscordサーバーにて承っております。
                お気軽にお声掛けください。
              </p>
              <a 
                href="https://discord.gg/k5Feum44gE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-discord"
              >
                Discordサーバーに参加
              </a>
            </div>

            <div className="contact-categories">
              <h3>お問い合わせ内容</h3>
              <div className="categories-grid">
                <div className="category-item">
                  <h4>🐛 不具合報告</h4>
                  <p>コマンドが正常に動作しない、エラーが発生する等の不具合についてお知らせください。</p>
                </div>
                <div className="category-item">
                  <h4>❓ 使い方の質問</h4>
                  <p>コマンドの使用方法やBot の機能についてご不明な点があればお気軽にお尋ねください。</p>
                </div>
                <div className="category-item">
                  <h4>💡 機能要望</h4>
                  <p>新しい機能のご提案や既存機能の改善要望がございましたらお聞かせください。</p>
                </div>
                <div className="category-item">
                  <h4>📊 その他</h4>
                  <p>上記以外のご質問やご相談事項についてもお気軽にお問い合わせください。</p>
                </div>
              </div>
            </div>
            
            <div className="contact-footer">
              <div className="support-note">
                <h3>📝 お問い合わせ時のお願い</h3>
                <p>
                  より迅速で正確なサポートを提供するため、お問い合わせ時には以下の情報をお教えください
                </p>
                <ul>
                  <li>使用したコマンド</li>
                  <li>エラーメッセージ（該当する場合）</li>
                  <li>UID</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-sidebar">
            <div className="info-box">
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
            <div className="info-box">
              <h3>サポート対応について</h3>
              <ul>
                <li>平日・土日問わず対応いたします</li>
                <li>回答まで最大24時間程度お時間をいただく場合があります</li>
                <li>日本語での対応となります</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>よくある質問</h3>
              <div className="faq-item">
                <h4>Q: キャラクターが一覧に出てこない</h4>
                <p>A: 原神のプロフィール設定で、該当キャラクターを「詳細表示」に設定してください。</p>
              </div>
              <div className="faq-item">
                <h4>Q: UIDの変更方法は？</h4>
                <p>A: <code>/uid</code>コマンドを再度実行することで変更できます。</p>
              </div>
            </div>

            <div className="info-box">
              <h3>関連リンク</h3>
              <ul className="link-list">
                <li><a href="/commands">コマンド一覧</a></li>
                <li><a href="/news">最新ニュース</a></li>
                <li><a href="https://github.com/yutarou12/Artifacter-Bot" target="_blank" rel="noopener noreferrer">GitHubリポジトリ</a></li>
                <li><a href="https://donate.stripe.com/3cI6oG6lz19k44t2hfenS09" target="_blank" rel="noopener noreferrer">寄付</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact