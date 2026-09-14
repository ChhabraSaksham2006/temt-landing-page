const fallbackUrl = "https://temt-landing-page.vercel.app";

/** Set NEXT_PUBLIC_SITE_URL to the production custom domain in Vercel. */
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl;
export const siteUrl = new URL(
  configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`,
);

export const siteName = "TEMT";
export const siteDescription =
  "Transport emissions management software for audit-ready Scope 3 accounting, BRSR reporting, and enterprise carbon data.";
