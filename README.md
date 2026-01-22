# 🤖 ArtifacterBot Official Website

> **TypeScript + React + Vite + Cloudflare** で構築されたArtifacterBotの公式ウェブサイト

[![Deploy Status](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange)](https://pages.cloudflare.com/)
[![Database](https://img.shields.io/badge/Database-Cloudflare%20D1-blue)](https://developers.cloudflare.com/d1/)
[![Framework](https://img.shields.io/badge/Framework-React%2019-61dafb)](https://react.dev/)
[![Language](https://img.shields.io/badge/Language-TypeScript-3178c6)](https://www.typescriptlang.org/)
[![Build Tool](https://img.shields.io/badge/Build-Vite%207-646cff)](https://vitejs.dev/)

🌐 **Live Site**: [artifacter.syutarou.xyz](https://artifacter.syutarou.xyz)  

## ✨ 主な機能

### 🎯 コア機能
- **⚡ 高性能**: Vite による爆速な開発・ビルド体験
- **🛡️ 型安全**: TypeScript による厳密な型チェック
- **📱 レスポンシブ**: モバイル・タブレット・デスクトップ完全対応
- **🎨 モダンUI**: React 19 + CSS Grid/Flexbox による美しいデザイン

### 🚀 高度機能
- **🗄️ 動的ニュース**: Cloudflare D1 による高速データベース + 管理画面
- **💰 収益化**: Google AdSense 統合（GDPR対応）
- **🔒 プライバシー**: Cookie同意機能 + プライバシーポリシー完備
- **📊 SEO最適化**: メタタグ、sitemap.xml、robots.txt、構造化データ
- **📱 PWA対応**: アプリライクな体験を提供

### 🌐 インフラストラクチャ
- **☁️ Cloudflare Pages**: グローバルエッジ配信
- **🗃️ Cloudflare D1**: SQLiteベースの高速データベース  
- **⚙️ Cloudflare Workers**: サーバーレス API エンドポイント
- **🔄 CI/CD**: GitHubプッシュで自動デプロイ

## 🚀 クイックスタート

### 📋 前提条件
- Node.js 18+ 
- pnpm 8+
- Cloudflareアカウント（本番デプロイ用）

### ⚙️ ローカル開発

```bash
# 🔧 依存関係のインストール
pnpm install

# 🚀 開発サーバー起動 (http://localhost:3000)
pnpm dev

# 🏗️ 本番ビルド
pnpm build

# 👀 ビルド結果プレビュー
pnpm preview

# 🔍 TypeScript型チェック
pnpm type-check
```

### 🌐 本番デプロイ

```bash
# 1️⃣ Wrangler CLI インストール
npm install -g wrangler

# 2️⃣ Cloudflare にログイン
wrangler login

# 3️⃣ D1 データベース作成
wrangler d1 create db

# 4️⃣ データベーススキーマ適用
wrangler d1 execute db --file=database/schema.sql

# 5️⃣ Workers API デプロイ
wrangler deploy workers/news-d1-api.js --name api

# 6️⃣ Cloudflare Pages で GitHub連携してデプロイ
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
- `wrangler.jsonc`: Cloudflare Pages設定
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