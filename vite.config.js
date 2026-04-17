import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const base44AnalyticsStubPath = path.resolve(__dirname, 'src/shims/base44-sdk-analytics-stub.js')

/** @base44/sdk always loads analytics (batch POST) from createClient. Rollup resolves `./modules/analytics.js` relative to client.js first — match that id + importer, not only absolute paths. */
function base44SdkAnalyticsStub() {
  return {
    name: 'base44-sdk-analytics-stub',
    enforce: 'pre',
    resolveId(id, importer) {
      const cleanId = id.replace(/\\/g, '/').split('?')[0]
      const cleanImporter = (importer ?? '').replace(/\\/g, '/').split('?')[0]
      const fromClient =
        cleanImporter.includes('@base44/sdk/dist/client.js') &&
        (cleanId === './modules/analytics.js' || cleanId.endsWith('/modules/analytics.js'))
      const absoluteSdkAnalytics =
        cleanId.includes('@base44/sdk/dist/modules/analytics.js')
      if (fromClient || absoluteSdkAnalytics) {
        return base44AnalyticsStubPath
      }
      return null
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    base44SdkAnalyticsStub(),
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
      hmrNotifier: true,
      navigationNotifier: true,
      // Avoid /api/apps/null/analytics/track/batch when VITE_BASE44_APP_ID is unset (e.g. self-hosted prod)
      analyticsTracker: false,
      visualEditAgent: true
    }),
    react(),
  ]
});