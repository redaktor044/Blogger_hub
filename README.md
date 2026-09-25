# Forma Themes — Blogger Hub

Personal MVP of a bilingual theme library for Google Blogger. Twelve distinct visual directions, six page types per theme, light/dark dashboard, live desktop/mobile previews, favorites, search, category filters, name sorting, customization and XML/ZIP export.

## Run

Node.js 22 or newer. No dependency installation or build step required.

```sh
npm run dev
# http://127.0.0.1:4173
npm test
npm run export
```

The deployable static application is `dist/`. The local server binds only to localhost. Sites hosting is configured as owner-private; deploying the static files elsewhere requires that host's access control if privacy is required. No app login, billing, payment processing or booking engine is included.

## Collection

| Theme | Topic | Visual direction |
| --- | --- | --- |
| Studio Living | Interiors | Editorial, arch photography, italic serif |
| Roam Journal | Travel | Immersive photographic cover |
| Savor & Co. | Food | Red typography, round food photography |
| Signal | Technology | Dark, lime accents, geometric images |
| MUSE Editorial | Fashion | Oversized type, tall editorial photography |
| The Margin | Culture | Newspaper rules, image-first columns |
| Object Store | Homeware | Product-led neutral catalog |
| Good Pixels | Digital products | Purple, sculptural artwork |
| Drive Club | Cars | Dark automotive, wide photography |
| Basecamp | Outdoor rentals | Bold outdoor type, photo framing |
| Atelier North | Architecture/services | Restrained architectural composition |
| Frame / Folio | Photography | Monochrome photographic portfolio |

## Blogger installation and limitations

Download a package from a theme preview. `theme.xml` is the Blogger layout, not ordinary HTML. `INSTALL.txt` includes the installation steps in the selected language. `pages/` contains About and Contact copy; `content/` contains starter article and product/offer content. `preview/` contains six linked static preview pages; images still need internet access.

Back up the existing Blogger theme. Install the XML through Theme → Edit HTML / Restore, then create the pages and posts described in INSTALL.txt. About/Contact URLs must match `/p/about.html` and `/p/contact.html`, or the XML links must be updated. Homepage cards come from actual Blogger posts; demo cards are only sample content. Native labels and search URLs are supported by the post list. The optional PageList widget lets users add navigation to their other Blogger pages.

The generator handles posts, static pages, listing pagination, comments and 404 views. XML structural validation is not a Blogger compiler or an actual installation test. **Import/save and runtime behavior on a real test blog remain to be verified.** The MVP should not be sold as a certified Blogger theme package before that acceptance test. Product/rental offers use email inquiries; there is no checkout or availability calendar.

Customization applies to the current session and selected theme; favorites, language and dashboard appearance persist locally on the device. Export a package to keep a customized theme. Invalid emails fall back to the demo address; use a valid contact address before publication. Demo images are remote Unsplash assets, attributed in `dist/assets.js` and package instructions. Google Fonts are optional remote UI fonts with system fallbacks. No private user data, credentials, analytics or backend services are included in the repository.

## Structure

- `dist/catalog.js`: bilingual catalog and filtering.
- `dist/engine.js`: shared theme styles, HTML previews, Blogger XML and content packages.
- `dist/app.js`: accessible native dialog, UI and local preferences.
- `dist/styles.css`: responsive dashboard, dark mode and thumbnails.
- `dist/zip.js`: dependency-free UTF-8 ZIP writer with CRC32.
- `scripts/export.mjs`: all 24 localized theme packages.
- `tests/core.test.mjs`: export, escaping, filtering and archive-integrity tests.

The optional feature-detected WebMCP tool `browse_forma_themes` updates the same visible filters as the UI.

## Roadmap

Real Blogger acceptance tests → separate premium theme metadata and licensing → account-backed favorites and purchases → payment provider → external booking integrations. The current public source repository contains the starter collection; future paid theme source should be distributed separately.

## References

- [Blogger widget tags](https://support.google.com/blogger/answer/46995)
- [Blogger layout data](https://support.google.com/blogger/answer/47270)
- [Theme editing](https://support.google.com/blogger/answer/176245)
- [Creating pages](https://support.google.com/blogger/answer/165955)
