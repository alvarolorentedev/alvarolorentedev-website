# SEO route migration

## Status

This migration is intentionally **not implemented**. The repository references both Cloudflare Pages and GitHub Pages, while only Cloudflare Pages can apply the proposed `_redirects` rules as HTTP 301 responses. Confirm the active production host before changing any article slug.

## Migration sequence

1. Confirm that `alvarolorente.dev` is served by Cloudflare Pages and that `static/_redirects` is deployed.
2. Add the redirect rules below and a clean `slug` value to each existing article's frontmatter in the same release. Do not rename or move the article files.
3. Run a production build and confirm that each destination is present in `build/sitemap.xml` with a self-referencing canonical.
4. Deploy to a preview environment and verify every old URL returns one `301` hop to a `200` destination.
5. Deploy to production, submit the new sitemap in Google Search Console, and retain the redirects indefinitely.

## Clean slug values

| Existing article date | Frontmatter `slug` |
| --- | --- |
| 2024-02-22 | `navigating-decision-making-in-engineering` |
| 2024-02-29 | `harmonizing-software-engineering-practices` |
| 2024-03-07 | `cost-of-software-development` |
| 2024-03-14 | `conways-law-and-software-architecture` |
| 2024-03-21 | `adapting-clean-code-and-architecture` |
| 2024-03-28 | `product-teams-aligning-to-value` |
| 2024-04-03 | `strategic-vs-tactical-mindset` |
| 2024-04-04 | `ai-in-the-workplace-llms-hype-or-reality` |
| 2024-04-14 | `second-level-relationships-at-work` |
| 2024-04-25 | `peer-reviews-in-the-software-industry` |
| 2024-05-01 | `make-remote-work-great` |
| 2024-05-14 | `t-shaped-players` |
| 2024-05-23 | `break-out-of-the-comfort-zone` |

## Cloudflare redirect rules

Place these rules in `static/_redirects` only after confirming Cloudflare Pages is the active production host.

```text
/blog/2024/02/22/T04%3A00%3A00.000Z-Navigating%20Decision-Making%20in%20Engineering%3A%20A%20Framework-Centric%20Approach /blog/2024/02/22/navigating-decision-making-in-engineering 301
/blog/2024/02/29/T04%3A00%3A00.000Z-Harmonizing%20Innovation%3A%20The%20Power%20of%20Common%20Practices%20in%20Software%20Engineering%20Organizations /blog/2024/02/29/harmonizing-software-engineering-practices 301
/blog/2024/03/07/T04%3A00%3A00.000Z-Beyond%20Coding%3A%20The%20Cost%20of%20Software%20Development /blog/2024/03/07/cost-of-software-development 301
/blog/2024/03/14/T00%3A00%3A00.000Z-Conways%20Law%3A%20The%20Organizational%20Frame%20your%20Architecture%20will%20not%20escape%20from /blog/2024/03/14/conways-law-and-software-architecture 301
/blog/2024/03/21/T03%3A00%3A00.000Z-Beyond%20Clean%20Code%20%26%20Architecture%3A%20Adapting%20Practices%20for%20Project%20Success /blog/2024/03/21/adapting-clean-code-and-architecture 301
/blog/2024/03/28/T03%3A00%3A00.000Z-Product%20teams%3A%20Aligning%20to%20Value /blog/2024/03/28/product-teams-aligning-to-value 301
/blog/2024/04/03/T22%3A00%3A00.000Z-The%20Strategic%20Vs.%20Tactical%20Mindset /blog/2024/04/03/strategic-vs-tactical-mindset 301
/blog/2024/04/04/T00%3A00%3A00.000Z-AI%20In%20The%20Workplace%3A%20Are%20LLMs%20Hype%20or%20Reality /blog/2024/04/04/ai-in-the-workplace-llms-hype-or-reality 301
/blog/2024/04/14/T00%3A00%3A00.000Z-Mastering%20Second%20Level%20Relationships%3A%20A%20Key%20Strategy%20for%20Workplace%20Success /blog/2024/04/14/second-level-relationships-at-work 301
/blog/2024/04/25/T00%3A00%3A00.000Z-Unpacking%20the%20Truth%20of%20Peer%20Reviews%20in%20the%20Software%20Industry /blog/2024/04/25/peer-reviews-in-the-software-industry 301
/blog/2024/05/01/T22%3A00%3A00.000Z-Make%20Remote%20Work%2C%20Great%20Again /blog/2024/05/01/make-remote-work-great 301
/blog/2024/05/14/T03%3A00%3A00.000Z-T-Shaped%20players%2C%20what%20the%20Market%20Needs%20Now /blog/2024/05/14/t-shaped-players 301
/blog/2024/05/23/T00%3A00%3A00.000Z-Break%20Out%20Of%20The%20Comfort%20Zone%3A%20The%20Need%20for%20Big%20Leaps%20Over%20Incremental%20Improvements /blog/2024/05/23/break-out-of-the-comfort-zone 301
```

## Acceptance checks

For every mapping:

- `curl -I <old-url>` returns `301` with the exact clean destination in `Location`.
- `curl -I <clean-url>` returns `200` without another redirect.
- The clean page canonical equals its clean URL.
- The old URL is absent and the clean URL is present in `sitemap.xml`.
- Internal links use only the clean destination after deployment.