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

### FormSubmit notes
- Action: `https://formsubmit.co/ahtisham.m@innovent.io` (activation email goes to Ahtisham, CC to concierge)
- Hidden `_cc` keeps hello@innoventevents.com copied on every submission
- `_autoresponse` provides the visitor welcome email, `_next` preserves the success alert

## Lead form plumbing
- Front-end posts to `https://spies-somewhat-donations-proper.trycloudflare.com/lead`
- Required hidden field: `token=innovent-royal-token`
- Backend (FastAPI) relays emails via Mail.app to ahtisham.m@innovent.io + hello@innoventevents.com and auto-replies to the visitor
- Update `backendUrl` in `script.js` if the tunnel URL changes
