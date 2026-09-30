# Sample values to replace before launch

All About-section copy is original RNOW draft content. Values that would be
specific company facts were filled with **invented sample values** so the pages
read as finished. None of them are real. Replace each with verified information
before you publish.

Content lives in `data/about/*.ts`, so nothing needs to change in components.

## Company facts (invented)
| Value shown | Where | Replace with |
|---|---|---|
| 500+ team members, 25 locations, 40+ years | Careers stats | Real headcount, branch count, years in business |
| 10 weeks; October through February | Internship page | Real program length and application window |
| 6 months per rotation; September through January | Rotational page | Real rotation length and window |
| ethics@rnowindustrial.com, +1 (800) 555-0142 | Compliance, Citizenship FAQ | Real confidential reporting email and hotline |
| 2 hours quote, 1 hour order confirmation, 98% on-time | Service Commitment | Targets RNOW can consistently meet |
| +1 (800) 555-0177 | Service Commitment (emergency line) | Real 24/7 emergency number |
| Houston, TX; Houston Distribution Center | Sample events | Real locations |
| Medical/dental/vision, retirement match, paid time off | Careers | Actual benefits |
| Openings in Houston, Midland, Lafayette, Denver | Careers FAQ | Real locations |
| Paid internship, housing assistance | Internship FAQ | Actual policy |
| 15% energy-intensity cut, 90% landfill diversion by 2030 | Sustainability | Approved targets |
| 16 paid volunteer hours per year | RNOW Cares | Actual policy |
| Events free for customers | Events FAQ and detail pages | Actual pricing |

## Certifications and approvals
The Quality page now says RNOW's system is **built on ISO 9001 principles and
aligned with API Q1**. It does not claim RNOW holds either certificate. Do not
change this to say "certified" unless you hold the certificates. Add the real
certifications and customer approvals you have.

## Needs professional review
- **Compliance Statements** are a starting framework, not legal advice. Have
  qualified counsel review them, then remove the amber "Draft content" notice
  (`notice` field in `data/about/citizenship.ts`).
- The Sustainability and Service Commitment pages carry the same draft notice
  until their targets are real.

## Sample content (invented, labelled "Sample" on the site)
Each data file has a `TODO (sample content)` comment.
- 6 company news articles (`data/about/news.ts`, `newsArticles`)
- 5 events (`data/about/news.ts`, `events`)
- 5 case studies (`data/about/whyRnow.ts`, `caseStudies`), including the final
  "result" line in each, which is a made-up figure

To go live with real items: edit the arrays, then remove the `sample: true`
flag and the `SampleBadge` / `SampleNotice` usages (`components/about-section/`).

## Imagery
All About pages reuse RNOW's existing photography via `lib/aboutHeroes.ts`.
Replace with page-specific photos when available.
