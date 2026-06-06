# Margaret Zuo — Personal Portfolio

A long-term, AI-native digital space for editorial work, strategic storytelling, and brand thinking.

**Live:** `open index.html` or `python3 -m http.server 4500`

---

## What this is

Not a resume website. Not a template. A living digital space that evolves alongside the work — equal parts portfolio, editorial platform, and strategic document.

Built with plain HTML / CSS / JS to stay fast, portable, and fully owned.

---

## Structure

```
portfolio/
├── _context/               # Strategy, decisions, inspiration — non-public
│   └── inspiration/        # Reference links, mood boards, benchmarks
├── _drafts/                # WIP content, unpublished writing
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│       ├── headshot/       # Profile photos
│       ├── work/           # Case study visuals (project-slug/*)
│       └── og/             # Open Graph / social share images
├── content/
│   ├── work/               # Case study source files (.md)
│   └── writing/            # Essays, editorial pieces (.md)
├── public/                 # favicon, robots.txt, sitemap
├── index.html
├── styles.css
├── script.js
├── README.md
└── project-context.md      # Living project strategy doc
```

---

## Naming conventions

| Type | Convention | Example |
|------|-----------|---------|
| HTML/CSS/JS files | `kebab-case` | `case-study.html` |
| Content files | `kebab-case` | `brand-launch-campaign.md` |
| Images | `[project-slug]--[descriptor]` | `alumni-gala--hero.jpg` |
| OG images | `og--[page-slug]` | `og--home.jpg` |
| Draft files | `DRAFT--[title]` | `DRAFT--about-rewrite.md` |

---

## Working with AI (Claude)

This project uses `project-context.md` as the persistent source of truth for all AI-assisted work. Before starting any session, reference that file. All decisions, direction changes, and constraints live there — not in conversation history.

---

## Tech

- Plain HTML / CSS / JS — no build step, no framework
- Google Fonts: Inter + Playfair Display
- Deployed via: _TBD (GitHub Pages / Vercel / Netlify)_
