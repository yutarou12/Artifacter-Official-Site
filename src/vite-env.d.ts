/// <reference types="vite/client" />

interface ImportMetaEnv {
  // News API URL for Cloudflare Workers
  readonly VITE_NEWS_API_URL?: string
  // Build mode
  readonly MODE: string
  readonly BASE_URL: string
  readonly PROD: boolean
  readonly DEV: boolean
  readonly SSR: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}