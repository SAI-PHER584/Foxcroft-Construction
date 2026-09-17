/**
 * Where this build believes it is hosted.
 *
 * This matters more than it looks. Next resolves every relative metadata URL
 * against `metadataBase`, so whatever this returns is the absolute src that
 * LinkedIn, Facebook and Slack will actually fetch when someone shares a
 * link. Point it somewhere the file is not served and the scraper gets a 404
 * and shows no image at all.
 *
 * It must not be hardcoded to foxcroft-construction.co.uk. This is a concept
 * that is not hosted there, and claiming that origin would both break the
 * share card and point the canonical at somebody else's live homepage.
 */
function resolveSiteUrl(): string {
  // Set this in the host's env for a custom domain.
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel's stable production domain, then the per-deployment URL.
  const vercel =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();
