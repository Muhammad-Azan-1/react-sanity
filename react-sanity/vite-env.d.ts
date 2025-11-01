/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SANITY_PROJECT_ID: string
  readonly VITE_SANITY_DATASET: string
  readonly VITE_SANITY_API_VERSION: string
  readonly VITE_SANITY_API_TOKEN?: string
  // add other VITE_ variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
