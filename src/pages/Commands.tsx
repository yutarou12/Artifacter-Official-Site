function Commands() {
  return (
    <div className="commands">
      <div className="commands-container">
        <div className="page-header">
          <h1>コマンド一覧</h1>
          <p>ArtifacterBotで使用できる全てのコマンドをご紹介します。</p>
        </div>

        <div className="commands-list">
          {/* /build コマンド */}
          <div className="command-card">
            <div className="command-header">
              <h2>/build</h2>
              <span className="command-type">メイン機能</span>
            </div>
            <div className="command-content">
              <p className="command-description">
                指定されたUIDのキャラクタービルド画像を生成します。聖遺物のスコア計算機能付き。
              </p>
              <div className="command-usage">
                <h4>使用方法</h4>
                <code>/build &lt;UID&gt;</code>
                <p>または、事前にUIDを登録している場合は</p>
                <code>/build</code>
                <img src="/images/blog-artifacterbot-build-compressed.png" alt="ビルド画像例"/>
              </div>
              <div className="command-features">
                <h4>特徴</h4>
                <ul>
                  <li>ボタンで計算方式を簡単切り替え</li>
                  <li>会心ダメージ・会心率を基準としたスコア計算</li>
                  <li>約2～3秒での高速画像生成</li>
                  <li>複数の計算方式に対応</li>
                </ul>
              </div>
              <div className='command-features command-result-example'>
                <h4>生成例</h4>
                <img src="/images/build-image-example.png" alt="ビルド画像例"/>
              </div>
              <div className="command-note">
                <p><strong>注意:</strong> キャラクターが一覧に表示されない場合は、原神のプロフィール設定でキャラクターを公開設定にしてください。</p>
              </div>
            </div>
          </div>

          {/* /uid コマンド */}
          <div className="command-card">
            <div className="command-header">
              <h2><a id="uid">/uid</a></h2>
              <span className="command-type">設定</span>
            </div>
            <div className="command-content">
              <p className="command-description">
                DiscordアカウントとUIDを紐づけることで、/buildコマンド使用時のUID入力を省略できます。
              </p>
              <div className="command-usage">
                <h4>使用方法</h4>
                <code>/uid &lt;あなたのUID&gt;</code>
              </div>
              <div className="command-features">
                <h4>機能</h4>
                <ul>
                  <li>DiscordアカウントとUIDの紐づけ</li>
                  <li>/buildコマンドでのUID入力省略</li>
                  <li>再度実行することで紐づけ解除・変更</li>
                  <li>データベースからの自動削除（解除時）</li>
                </ul>
              </div>
              <div className="command-note">
                <p><strong>プライバシー:</strong> 保存されたUIDは、コマンドの正常動作および不具合対応のみに使用されます。</p>
              </div>
            </div>
          </div>

          {/* /party コマンド */}
          <div className="command-card">
            <div className="command-header">
              <h2>/party</h2>
              <span className="command-type">画像生成</span>
            </div>
            <div className="command-content">
              <p className="command-description">
                メインキャラクター1人とサブキャラクター3人のステータス情報を1枚の画像にまとめます。
              </p>
              
              <div className="command-usage">
                <h4>使用方法</h4>
                <code>/party</code>
                <p>コマンド実行後、メインとサブキャラクターを順次選択</p>
                <img src="/images/blog-artifacterbot-party-1-compressed.png" alt="ビルド画像例"/>
              </div>
              <div className="command-features">
                <h4>用途</h4>
                <ul>
                  <li>深境螺旋のパーティー構成共有</li>
                  <li>探索パーティーの紹介</li>
                  <li>チーム編成の相談</li>
                  <li>4人のキャラクター情報を一目で確認</li>
                </ul>
              </div>
              <div className='command-features command-result-example'>
                <h4>生成例</h4>
                <img src="/images/party-image.jpg" alt="パーティーカード例"/>
              </div>
              <div className="command-note">
                <p><strong>注意:</strong> パーティーに含めたいキャラクターは事前に原神のプロフィールに設定してください。</p>
              </div>
            </div>
          </div>

          {/* /週ボス コマンド */}
          <div className="command-card">
            <div className="command-header">
              <h2>/週ボス</h2>
              <span className="command-type">ユーティリティ</span>
            </div>
            <div className="command-content">
              <p className="command-description">
                週3回の征討領域（週ボス）をランダムで3つ選択してくれます。どこをやるか迷った時に便利。
              </p>
              <div className="command-usage">
                <h4>使用方法</h4>
                <code>/週ボス</code>
              </div>
              <div className="command-features">
                <h4>機能</h4>
                <ul>
                  <li>ランダムで3つの週ボスを選択</li>
                  <li>あなたにのみ表示されるプライベート表示</li>
                  <li>各週ボスの詳細情報ボタン付き</li>
                  <li>報酬のキャラクター育成素材確認可能</li>
                </ul>
              </div>
              <div className="command-note">
                <p><strong>便利:</strong> 必要ない素材の週ボスが選ばれても、詳細情報ですぐに確認できます。</p>
              </div>
            </div>
          </div>

          {/* /螺旋 コマンド */}
          <div className="command-card">
            <div className="command-header">
              <h2>/螺旋</h2>
              <span className="command-type">ユーティリティ</span>
            </div>
            <div className="command-content">
              <p className="command-description">
                深境螺旋の編成をランダムに生成してくれます。縛りプレイをしたい時に便利。
              </p>
              <div className="command-usage">
                <h4>使用方法</h4>
                <code>/螺旋 設定</code>
                <p>このコマンドで持っているキャラクターを設定します。</p>
                <img src="/images/cmd-rasen-setting-1.png" alt="螺旋設定画像例"/>
                <br/>
                <code>/螺旋 生成</code>
                <p>設定されたキャラクターからランダムに8人を選出して編成を生成します。</p>
              </div>
              <div className="command-features">
                <h4>機能</h4>
                <ul>
                  <li>ランダムで深境螺旋の編成を生成</li>
                  <li>キャラを視覚的に確認可能</li>
                  <li>螺旋編成を共有できるような機能も開発中</li>
                </ul>
              </div>
              <div className='command-features command-result-example'>
                <h4>生成例</h4>
                <img src="/images/cmd-rasen-generate.png" alt="パーティーカード例"/>
              </div>
              <div className="command-note">
                <p><strong>注意:</strong> 8人以上のキャラクターを事前に設定してください。</p>
              </div>
            </div>
          </div>
        </div>

        <div className="commands-footer">
          <div className="getting-started">
            <h3>はじめに</h3>
            <ol>
              <li>ArtifacterBotをあなたのDiscordサーバーに追加</li>
              <li><code>/uid</code>コマンドで原神のUIDを登録</li>
              <li><code>/build</code>コマンドでビルド画像を生成</li>
            </ol>
            <a 
              href="https://discord.com/api/oauth2/authorize?client_id=1083699450238742568" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              今すぐ導入する
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commands