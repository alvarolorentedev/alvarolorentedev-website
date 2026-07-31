# SEO manual steps

The repository now enforces the SEO changes that can be automated safely. The items below require access to hosting, DNS, analytics, third-party publishing accounts, or Google Search Console.

## 1. Confirm production hosting

The active workflow deploys to GitHub Pages, while older documentation references Cloudflare Pages. Confirm which platform serves `alvarolorente.dev` before changing any indexed URL.

1. Check the DNS records and the deployment shown in the hosting dashboard.
2. Run `curl -I https://alvarolorente.dev/` and record the response headers.
3. Confirm whether the platform supports permanent path redirects at the edge.
4. Update repository documentation if GitHub Pages or Cloudflare Pages is definitively the production host.

Do not activate the malformed-route migration until this is resolved. The full redirect manifest and acceptance criteria are in [seo-route-migration.md](seo-route-migration.md).

## 2. Migrate malformed article routes

This is conditional and must ship as one release after permanent redirects are supported.

1. Add the 13 redirect rules from [seo-route-migration.md](seo-route-migration.md) using the production host's native redirect mechanism.
2. Add the documented `slug` values to the existing article frontmatter without renaming or moving files.
3. Build a preview and verify every old URL returns one `301` hop to a `200` destination.
4. Verify each clean destination has a self-referencing canonical and appears in the sitemap.
5. Deploy and retain the redirects indefinitely.

If production remains on GitHub Pages, use a redirect-capable proxy/CDN or leave the existing URLs unchanged. Client-side redirects are not an SEO-equivalent substitute for HTTP 301 responses.

## 3. Google Search Console

1. Verify the domain property for `alvarolorente.dev`.
2. Submit `https://alvarolorente.dev/sitemap.xml`.
3. Inspect the homepage, services page, and several recent articles to confirm Google-selected canonicals match the declared apex-domain canonicals.
4. After any route migration, inspect every old and new URL and request indexing for the clean destinations.
5. Monitor Pages, Sitemaps, Core Web Vitals, and Enhancements weekly for the first month, then monthly.
6. Investigate increases in `Duplicate, Google chose different canonical`, `Crawled - currently not indexed`, soft 404, or redirect errors.

## 4. Syndication ownership

For Substack, dev.to, Hashnode, and any future republisher:

1. Publish on `alvarolorente.dev` first when the workflow permits.
2. Set the syndicated copy's canonical URL to the exact website article URL.
3. Keep the original external publication URL in website frontmatter as `source_url`; never use it as the website canonical.
4. Spot-check the rendered HTML of syndicated copies after publishing because platform settings can change.

## 5. Backlinks and profiles

1. Export external links from Google Search Console. Optionally supplement with Ahrefs, Semrush, or Majestic.
2. Reclaim high-value links that point to broken, redirected, `www`, or external-syndication URLs.
3. Update owned profiles, speaker bios, conference pages, GitHub, LinkedIn, and newsletter profiles to link to `https://alvarolorente.dev/` or the most relevant service/article page.
4. Prioritize relevant editorial links from engineering leadership, architecture, delivery, and fractional CTO sources over directory submissions.
5. Review new links quarterly.

## 6. Conversion and search measurement

1. Confirm privacy-compliant analytics is installed and receiving production traffic.
2. Track contact-form submissions, calendar bookings, newsletter clicks, and qualified outbound clicks as conversions.
3. Connect Search Console to the analytics/reporting tool where available.
4. Record a baseline for organic clicks, impressions, non-brand queries, indexed pages, conversions, and top landing pages.
5. Review results monthly and compare changes over at least 28 days; avoid reacting to daily ranking noise.

## 7. Release checklist

Run before every SEO-sensitive deployment:

```bash
npm ci
npm run typecheck
npm run clear
npm run build
npm run seo:check
git diff --check
```

After deployment, verify:

```bash
curl -I https://alvarolorente.dev/
curl -I https://alvarolorente.dev/sitemap.xml
curl -I https://alvarolorente.dev/robots.txt
```

Confirm the production response is `200`, the sitemap and robots files are accessible, and representative page source contains the expected canonical, Open Graph metadata, Twitter metadata, and JSON-LD.
