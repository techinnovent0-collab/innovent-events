# Innovent Events Website

Flashy, classy single-page site for Innovent Events featuring immersive storytelling, premium service overview, and lead capture CTA.

## Stack
- Pure HTML / CSS / JavaScript (no build step)
- Custom glassmorphic aesthetic with animated marquee + modal showreel prompt
- FormSubmit integration sends real-time concierge email + autoresponder to prospects
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
