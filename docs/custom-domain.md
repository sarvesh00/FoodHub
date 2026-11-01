# Custom domain (placeholder)

Preferred domain: **suchef.in** (backups: suchef.foods, suchefoods.com). Not bought yet.

Until then the site stays at https://sarvesh00.github.io/FoodHub/.

## When the domain is bought

**Still on GitHub Pages:**
1. At the domain registrar, add a `CNAME` record `www` → `sarvesh00.github.io`, and `A` records for the apex domain pointing to GitHub Pages' IPs (see GitHub's "Managing a custom domain" docs).
2. Repo Settings → Pages → Custom domain: `www.suchef.in`, then tick "Enforce HTTPS".
   With the GitHub Actions deploy, the domain is set in Settings. A `CNAME` file in the repo is not needed.
3. In `.github/workflows/deploy-pages.yml`, the build picks up the new URL from Pages automatically.

**Moving to AWS (Phase 2):** S3 + CloudFront with an ACM certificate for suchef.in, deployed through a GitHub OIDC role scoped to one bucket and one distribution. No access keys. Build with `SITE_URL=https://www.suchef.in` and `BASE_PATH=/`.

Also update `plannedDomain` in `src/site.config.ts`.
