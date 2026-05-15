/**
 * Site URLs — always set NEXT_PUBLIC_SITE_URL (and APK URL) in production.
 * Fallback is local dev only; no hard-coded production hostname in source.
 */

function normalizeOrigin(raw: string | undefined): string {
  const t = raw?.trim();
  if (!t) return "http://localhost:3000";
  return t.replace(/\/$/, "");
}

export const SITE_URL = normalizeOrigin(process.env.NEXT_PUBLIC_SITE_URL);

/** Raw hostname from SITE_URL (may be localhost in dev). */
export function getSiteHostname(): string {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return "";
  }
}

/** Hostname safe to show in UI — never localhost / loopback (avoid "official · localhost"). */
export function getPublicSiteHostname(): string {
  const h = getSiteHostname();
  if (!h || h === "localhost" || h === "127.0.0.1" || h.endsWith(".localhost")) {
    return "";
  }
  return h;
}

/**
 * Canonical lobby / APK entry (opens in browser — not a forced file download). Env overrides in deploy.
 */
export const DEFAULT_LOBBY_URL =
  "https://www.bro444.org/?r=ntv0138" as const;

/** Every primary play CTA — full URL recommended (may include referral query). Opens in new tab via UI. */
export const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL?.trim() || DEFAULT_LOBBY_URL;

function inferredSupportEmail(): string {
  try {
    const h = new URL(SITE_URL).hostname;
    if (h && h !== "localhost" && h !== "127.0.0.1" && !h.endsWith(".localhost")) {
      return `support@${h}`;
    }
  } catch {
    /* ignore */
  }
  return "";
}

/**
 * Mailto shown on `/contact` and footer. Env wins; else `support@` + public site hostname (no hard-coded domain in copy).
 */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || inferredSupportEmail();

/** Build a fully-qualified URL for schema.org and metadata. */
export const absoluteUrl = (urlOrPath: string) =>
  urlOrPath.startsWith("http")
    ? urlOrPath
    : `${SITE_URL.replace(/\/$/, "")}${urlOrPath.startsWith("/") ? urlOrPath : `/${urlOrPath}`}`;
