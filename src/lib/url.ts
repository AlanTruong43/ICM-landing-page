// Prefix root-relative paths with the configured base (e.g. /ICM-landing-page on GitHub Pages).
// Empty base in production on a custom domain, so the paths stay unchanged there.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => base + (path.startsWith('/') ? path : '/' + path);
