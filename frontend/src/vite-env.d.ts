// For defining environment variables in Vite such that Intellisense is aware of them
// https://vitejs.dev/guide/env-and-mode.html#env-variables

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OIDC_ISSUER: string
  readonly VITE_OIDC_CLIENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
