import type { NextConfig } from "next";

/**
 * Vercel Hobby budget notes
 * -------------------------
 * Images are plain <img> tags pointing at pre-compressed .webp files in /public,
 * so they never touch Vercel's Image Optimization quota. `unoptimized: true`
 * keeps it that way even if someone later reaches for next/image.
 *
 * /public files get no long browser cache by default, so every visit re-asks the
 * CDN. A one-day browser cache (plus a week of stale-while-revalidate) cuts
 * repeat requests and bandwidth. It is deliberately not "immutable": curators
 * replace a specimen by overwriting the same filename, and the corrected image
 * must show up within about a day. Each deploy also purges Vercel's CDN cache.
 */
const PUBLIC_ASSET_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: { unoptimized: true },
  async headers() {
    return [
      { source: "/specimens/:path*", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
      { source: "/models/:path*", headers: [{ key: "Cache-Control", value: PUBLIC_ASSET_CACHE }] },
    ];
  },
};

export default nextConfig;
