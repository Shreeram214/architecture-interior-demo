# Aaroh Design Studio — Architecture & Interior Design Demo

A premium, single-page portfolio website for a fictional architecture and interior design studio in Sangli, Maharashtra. Built by **CoreWeb AI** as a demo for architects, interior designers, modular kitchen studios and turnkey contractors.

**Stack:** HTML5 · CSS3 · Vanilla JavaScript. No frameworks, no build step, no backend.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Structure

```
aaroh-design-studio/
├── index.html          # All sections, SEO meta, Open Graph, LocalBusiness JSON-LD
├── css/style.css       # Design tokens (CSS variables), components, responsive rules
├── js/script.js        # Config, project data, all interactions
└── assets/images/      # Logo + favicon (SVG)
```

## Customising

All business details live at the top of `js/script.js`:

- `STUDIO`: name, phone, email, address, **WhatsApp number**, default WhatsApp message, map query, social links
- `PROJECTS`: portfolio data (title, category, filters, location, concept, challenge, solution, highlights, material palette, services, images). Cards, filters, the project modal, the lightbox and the footer project list are all rendered from this array.

Colours and fonts are CSS variables in `:root` at the top of `css/style.css`.

## Features

Sticky transparent-to-solid header · mobile menu · active-section highlighting · scroll reveals · portfolio filters · project detail modal with previous/next · gallery lightbox (keyboard + swipe) · services tabs/accordion · materials explorer · draggable before/after slider · testimonial carousel · FAQ accordion · validated enquiry form (Indian mobile + email) with simulated submission and a WhatsApp hand-off · click-to-load Google Map · floating WhatsApp button · back-to-top.

## Demo content notice

The business, statistics, testimonials and contact details are fictional. The enquiry form doesn't send data anywhere. Photography is from [Unsplash](https://unsplash.com) and loads from its CDN.
