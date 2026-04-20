# Innovent Events Website

Flashy, classy single-page site for Innovent Events featuring immersive storytelling, premium service overview, and lead capture CTA.

## Stack
- Pure HTML / CSS / JavaScript (no build step)
- Custom glassmorphic aesthetic with animated marquee + modal showreel prompt
- Edge-handled form posts to Innovent's FastAPI + Mail.app bridge (no third-party verification)
- Ready for GitHub Pages deployment (root `index.html`)

## Local preview
```bash
python3 -m http.server 4000
# visit http://localhost:4000
```

### Legacy FormSubmit (disabled)
- Original action: `https://formsubmit.co/ahtisham.m@innovent.io` (kept here for reference only)
- We now bypass FormSubmit entirely; see "Lead form plumbing" for the active flow

## Lead form plumbing
- Front-end posts to `https://saints-olive-motorola-contributed.trycloudflare.com/lead`
- Required hidden field: `token=innovent-royal-token`
- Backend (FastAPI) relays emails via Mail.app to ahtisham.m@innovent.io + hello@innoventevents.com and auto-replies to the visitor
- Update `backendUrl` in `script.js` if the tunnel URL changes
