/**
 * Media resolution. Content never hard-codes storage hosts — it says
 * "supabase:specimens/l-hesperus-ventral.jpg" and this decides the URL.
 *
 * Supabase Storage is the museum's media vault (photographs, micrographs,
 * video, .glb models for future Three.js exhibits). Science text and
 * citations stay in git, where they're reviewable and versioned.
 */
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL?.replace(/\/$/, "");

export function mediaUrl(src: string): string {
  if (src.startsWith("supabase:")) {
    const objectPath = src.slice("supabase:".length).replace(/^\/+/, "");
    if (!SUPABASE_URL) {
      console.warn(`[media] ${src} requested but NEXT_PUBLIC_SUPABASE_URL is not set`);
      return "";
    }
    return `${SUPABASE_URL}/storage/v1/object/public/${objectPath}`;
  }
  return src;
}
