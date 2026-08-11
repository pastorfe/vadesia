Netlify setup and Deploy Previews

This repo is ready to be connected to Netlify for automatic deploys and Pull Request previews.

Quick connect steps (UI):

1. Go to https://app.netlify.com and sign in (GitHub recommended).
2. Click "New site from Git" -> Choose GitHub and authorize if prompted.
3. Find and select the `pastorfe/vadesia` repository.
4. Build command: leave empty (no build step).
5. Publish directory: `.` (project root).
6. Finish: Netlify will create the site and run an initial deploy. Deploy Previews are enabled by default for PRs.

Netlify CLI (optional, if you want me to run commands locally):

```bash
npm install -g netlify-cli
netlify login
# then, to create/init a site and connect it to this repo interactively:
netlify init
```

Local preview (fast):

```bash
python3 -m http.server 8000
# or
npx serve .
```

Notes:
- The `netlify.toml` file in the repo sets the publish directory to the project root.
- I cannot complete the GitHub <-> Netlify authorization from here without you signing in; once you authorize Netlify I can finish any remote configuration if you want.
