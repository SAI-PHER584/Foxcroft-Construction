# Foxcroft Construction homepage concept — source register

Every factual statement on the page is listed here with where it came from.
Captured from the live site on 2026-09-16.

`[src: site]` = present on foxcroft-construction.co.uk
`[src: photos]` = visible in Foxcroft's own project photographs
`[UNVERIFIED]` = wanted but not supportable, so NOT written into the page

---

## Sourced claims used on the page

| Claim on the page | Source |
|---|---|
| Roofers, builders, slaters and joiners | `[src: site]` About: "We are Roofers, Builders, Slaters and Joiners" |
| Established 1989 | `[src: site]` About: "Established in 1989" |
| Family run firm | `[src: site]` About: "small family run firm" |
| Friendly service and high standards (quoted verbatim) | `[src: site]` About, quoted as a quote |
| Morecambe, Lancaster, Heysham and surrounding areas | `[src: site]` Home |
| Lancashire and Cumbria | `[src: site]` About |
| Experience in south Cumbria and north Lakes districts | `[src: site]` About |
| Manage your job from beginning to end | `[src: site]` About |
| Two storey extension or a summer conservatory | `[src: site]` About |
| Site manager, regular updates, on time and to cost | `[src: site]` Home: "modern project management techniques to ensure your project runs on time and to cost, with regular updates from your site manager" |
| "We pride ourselves on deliverability" (pull quote) | `[src: site]` Home, verbatim |
| Domestic services: extensions, new builds, loft conversions, roofing, windows, project management | `[src: site]` Home |
| Commercial: offices, schools, roofing, timber frames, windows | `[src: site]` Home |
| Project: Nursery Building, Mossgate Park Primary School | `[src: site]` Projects page title |
| Project: Kitchen & House Extension, Windermere Park | `[src: site]` Projects page title |
| Project: Loft Conversion, Bare | `[src: site]` Projects page title |
| Project: Bathroom, Bare | `[src: site]` Projects page title |
| The nursery was built in timber frame | `[src: photos]` nursery gallery shows timber frame erection |
| Build sequence: groundworks, frame up, roof on, handover | `[src: photos]` nursery gallery, in that order |
| Loft conversion involved stairs, plastering, rooflights | `[src: photos]` bare-loft gallery |
| Unit 2A, White Lund Avenue, Morecambe, LA3 3ED | `[src: site]` footer |
| 07983 407984 / 01524 422393 | `[src: site]` footer and tel: links |
| Trades as Foxcroft Roofing on Facebook | `[src: site]` links to facebook.com/FoxcroftRoofing |

No stock imagery is used.

## Photography provenance

The live site has four galleries, holding 45 full size originals between them:
`/images/nursery/` (25), `/images/bare-loft/` (7), `/images/windermere/` (6)
and `/images/bathroom-bare/` (3). Crawled 2026-09-17.

Eleven of the photographs on the page were matched back to a named original in
those galleries by image comparison, and are used at the original's own
resolution. The earlier versions in this repo had been scaled **up** (for
example the bathroom from 720x960 to 1100x1467), which added file size and no
detail. That has been undone.

**Three images cannot be traced to the live site.** `nursery-deck.jpg`,
`nursery-front.jpg` and `nursery-mossgate.jpg` are all 1400x1050. Nothing in
any gallery uses that aspect ratio, and the closest matches score far outside
the range of a true match. More to the point, every one of the 25 nursery
photographs on the live site shows work in progress: **there is no finished
photograph of the nursery building anywhere on the current site.**

Those three are the only images we hold of a completed building, so they are
doing the heaviest lifting on the page.

**Question for the client:** where did these three come from, and do we have
the right to use them? If they came off the Facebook page or a phone, we should
get the originals. `[UNVERIFIED — confirm with client]`

## The hero footage

The live site's Projects section links a Videos page holding two YouTube
embeds, both uploaded April 2016 by the account `@jfox1992`:

| Video | Length | Source |
|---|---|---|
| Foxcroft Construction - Flat Roof, Stud Work and Plasterboarding | 43s | `[src: site]` `youtube.com/watch?v=yljIENW0nAw` |
| Foxcroft Construction - Concrete and Timber Frames | 9s | `[src: site]` `youtube.com/watch?v=ZIBBYqvSIAs` |

The hero uses one continuous segment of the first, t=2.2s to t=14.8s, which
is the only stretch of either video that is outdoors, continuously framed and
free of obstruction. The rest of that video cuts between interiors, and the
9s video has a large out-of-focus object fixed in the left of frame
throughout.

Both are GoPro timelapses, so the segment was de-fisheyed (`lenscorrection`
k1=-0.18), cropped 10% to drop the stretched edges and the camera housing,
lifted in exposure, and encoded to 1152x648 at 24fps. Nothing was added to or
removed from the frame. It is 1.3MB, and it is not served to phones at all.

**Question for the client:** does he still hold the original camera files? A
brighter day and a longer continuous take would make a far better hero, and
the YouTube re-encode is the worst copy of this footage that exists.
`[UNVERIFIED — confirm with client]`

**Also for the client:** the videos sit on a personal YouTube account rather
than a company one. Worth confirming who owns them before they anchor the
homepage. `[UNVERIFIED — confirm with client]`

## The watermark

Two of the six Windermere kitchen photographs carry a burned-in green overlay
reading "Foxcroft Construction all enquiries 07983407984". The best of the six
(`/images/windermere/10626584...jpg`, a wide view taking in the island, the
oak worktops and the full run of units) is one of them.

The overlay sits on flat ceiling and wall, so it was reconstructed by masking
the glyphs themselves and diffusing the surrounding wall tone inward. Nothing
structural in the photograph was repainted or invented.

**Question for the client:** does he have these kitchen photographs without the
phone number burned in? `[UNVERIFIED — confirm with client]`

## The logo

The mark is Foxcroft's own, redrawn as vector. The original at
`/images/foxcroft-logo.png` is 252x180 and breaks up above roughly 120px wide,
so it could not be used at the sizes this layout needs.

Nothing about the concept changed: driving rain, a sheltering arc, a house
underneath. The green is sampled from the original artwork and now carries the
whole palette as the single accent colour. The original's mid blue is pushed
down into the blue-black base rather than used as a second accent.

**Question for the client:** does he hold the original vector artwork (.ai,
.eps or .svg)? If so we should work from that rather than a redraw.

## One number deliberately changed

The live About page says **"Over the last 26 years we have grown our company"**.
With an establishment date of 1989 that sentence was written around 2015 and has
not been updated since. The concept does not repeat 26. It shows **37**,
computed from 1989 at build time, so it cannot go stale again.

**Question for the client:** confirm 1989 is the correct founding year, since
the two figures on the current site do not agree.

## [UNVERIFIED] — asked for, not found, therefore not written

None of the following appear anywhere on the current site, so none of them are
on the page. Each is worth asking the client for, because each would earn its
place:

- Accreditations and memberships (FMB, CHAS, TrustMark, NHBC, Constructionline)
- Public liability insurance cover and employer's liability
- Any workmanship guarantee or warranty period
- Company registration number and VAT number
- Owner and site manager names
- Team size, or number of trades employed
- Any client testimonial or review, and any review platform profile
- Project values, durations or completion dates
- Whether quotes and site visits are free
- Waste carrier licence, scaffolding arrangements, CSCS cards
- Whether they hold Gas Safe, NICEIC or Part P registered trades in-house

The most valuable of these for winning work are **testimonials**, an
**insurance and guarantee statement**, and **accreditations**. Three real
customer quotes would do more for conversion than any further design work.

## Copy check

- Em dashes in page copy: none
- Banned vocabulary list: zero hits
- "rather than" constructions: zero
- Person: second person throughout for the reader, first person plural for the
  firm, third person only where quoting Foxcroft's own words
