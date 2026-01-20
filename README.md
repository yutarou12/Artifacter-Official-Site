# ArtifacterBot 公式サイト

原神のキャラクタービルド画像を生成するDiscord Bot「ArtifacterBot」の公式ウェブサイトです。

## 🚀 技術スタック

- **フロントエンド**: React 19, TypeScript
- **ビルドツール**: Vite
- **ルーティング**: React Router
- **スタイリング**: CSS（カスタムプロパティ）
- **デプロイ**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## 📦 開発環境のセットアップ

### 前提条件
- Node.js 20+
- pnpm

### インストール
```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/Artifacter-Official-Site.git
cd Artifacter-Official-Site

# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev
```

## 🏗️ ビルドとデプロイ

### ローカルビルド
```bash
# 本番用ビルド
pnpm build

# ビルド結果をプレビュー
pnpm preview
```

### Cloudflare Pagesへのデプロイ

#### 初回セットアップ
1. Cloudflareアカウントにログイン
```bash
pnpm run cf:login
```

2. プロジェクトを作成（Cloudflare Dashboardで）

#### デプロイ
```bash
# 本番環境にデプロイ
pnpm run deploy

# プレビュー環境にデプロイ
pnpm run deploy:preview
```

### GitHub Actionsでの自動デプロイ

1. GitHubリポジトリの Settings > Secrets and variables > Actions で以下のシークレットを設定：
   - `CLOUDFLARE_API_TOKEN`: Cloudflare API トークン
   - `CLOUDFLARE_ACCOUNT_ID`: Cloudflare アカウント ID

2. `main`ブランチにプッシュすると自動的にビルド・デプロイされます

## 📁 プロジェクト構成

```
src/
├── components/          # 再利用可能なコンポーネント
│   ├── Header.tsx
│   └── Footer.tsx
├── pages/               # ページコンポーネント
│   ├── Home.tsx
│   ├── Commands.tsx
│   ├── Contact.tsx
│   └── News.tsx
├── styles/              # スタイルシート
│   └── global.css
├── App.tsx              # アプリケーションのルートコンポーネント
└── main.tsx            # エントリーポイント
```

## 🎨 デザインシステム

### カラーパレット
- **プライマリ**: 青系統（`#2563eb`）
- **セカンダリ**: グレー系統
- **アクセント**: シアン系統（`#0891b2`）

### レスポンシブブレークポイント
- モバイル: `< 768px`
- タブレット: `768px - 1024px`
- デスクトップ: `> 1024px`

## 🔧 設定ファイル

- `vite.config.ts`: Vite設定
- `tsconfig.json`: TypeScript設定
- `wrangler.toml`: Cloudflare Pages設定
- `.github/workflows/deploy.yml`: CI/CD設定

## 📈 パフォーマンス

- **目標読み込み速度**: < 2秒
- **Lighthouse スコア**: 90+
- **バンドルサイズ**: 最適化済み

## 🤝 コントリビューション

1. フォークして機能ブランチを作成
2. 変更をコミット
3. プルリクエストを作成

## 📄 ライセンス

MIT License

## 📞 サポート

- Discord: [ArtifacterBot サポートサーバー](https://discord.gg/k5Feum44gE)
- 公式サイト: https://artifacter-official-site.pages.dev