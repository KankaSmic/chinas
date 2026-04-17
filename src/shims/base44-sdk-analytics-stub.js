/**
 * Replaces @base44/sdk's analytics module so the client never queues or POSTs
 * to /api/apps/.../analytics/track/batch (enabled by default in the SDK).
 * Wired via resolve.alias in vite.config.js.
 */
export function createAnalyticsModule() {
  return {
    track() {},
    cleanup() {},
  }
}
