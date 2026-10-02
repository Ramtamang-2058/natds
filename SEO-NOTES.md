# SEO audit and launch follow-up — 2 October 2026

The public homepage returned HTTP 200 and robots.txt allowed crawling during this audit. These checks do not establish Google indexing, rankings or search traffic. Search Console and Bing Webmaster Tools data were not available in this session.

## Changes prepared

- Homepage content is rendered into the built HTML and hydrated by React, so basic content discovery does not require JavaScript execution.
- Five static training pages cover managers and project managers; researchers; teachers and education; NGOs and INGOs; and corporate teams. The corporate page explains possible workshop topics for banking, insurance, hydropower, hospitality, retail and small businesses.
- Pages have distinct titles, descriptions, canonical URLs, visible content, structured data and WhatsApp enquiries. Existing field notes and the homepage link to them. The build includes them in the sitemap.
- Removed keyword-stuffed business aliases and incomplete course offers. No invented reviews, prices, branches or client engagements were added. Pokhara copy invites enquiries about delivery; it does not claim a local office or scheduled class.
- The deployment workflow checks generated HTML, metadata, JSON-LD, local links and sitemap coverage.

## After deployment

1. Verify the domain in Google Search Console and Bing Webmaster Tools using accounts controlled by NATDS. Submit `https://natds.safalai.com.np/sitemap.xml` in both.
2. Inspect the homepage and five `/training/` URLs in Search Console. Check the fetched HTML, selected canonical and indexing status; request indexing where appropriate.
3. Record a baseline of impressions, clicks, CTR and average position. Review queries by audience and Nepal location over the following weeks. Do not infer position from a single personalised search.
4. Add real trainer biographies, approved participant feedback, detailed case studies and confirmed course dates/fees as these become available. Get permission for client material and substantiate outcome claims.
5. Ask existing partners to link to relevant NATDS training or engagement pages where useful. Maintain an accurate Google Business Profile if the organisation meets its eligibility requirements; use only genuine locations.
6. Check for CDN/WAF blocks if webmaster tools report crawler errors. The public robots file is permissive, but it cannot override edge security rules or guarantee inclusion in a search product.

## Editorial priorities

Start with the managers, researchers and NGO/INGO pages. Expand a sector into its own page when there is enough distinct, verified material: audience, exercises, trainer experience, delivery format and proof. Avoid near-identical pages for every city or misspelling. Teachers and new sector workshops are enquiry-based; confirm the scope before adding definite schedules or promises.

Google's AI search features use the same foundational SEO practices; special AI markup or an `llms.txt` file is not required. Accessible text, descriptive links, consistent business information and useful evidence are the priorities. Appearance or citations in AI tools cannot be guaranteed.

## References

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Google AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)

## Local verification

Run `npm run lint`, `npm run build`, then `npm run check:seo`. Review the generated site with `npm run preview`. Training pages are generated during production builds and are not routes in the Vite development server. No production deployment is performed by these commands.
