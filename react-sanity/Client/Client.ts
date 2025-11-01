import { createClient } from '@sanity/client'

// Read env vars from Vite's runtime env (import.meta.env).
// In Vite you must prefix client-exposed variables with `VITE_`.
// Example in .env.local (project root):
// VITE_SANITY_PROJECT_ID=yourProjectId
// VITE_SANITY_DATASET=production
// VITE_SANITY_API_VERSION=2024-01-01
// VITE_SANITY_API_TOKEN=yourToken   <-- avoid exposing tokens to the browser if possible

const _env = (import.meta as any).env ?? {}
const projectId = _env.VITE_SANITY_PROJECT_ID ?? ''
const dataset = _env.VITE_SANITY_DATASET ?? 'production'
const apiVersion = _env.VITE_SANITY_API_VERSION ?? '2024-01-01'
const token = _env.VITE_SANITY_API_TOKEN ?? undefined

export const SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  // Do NOT expose a write token to the browser in production. If you need server-side
  // requests with a token, call a server endpoint that uses a secure env var.
  token,
})
