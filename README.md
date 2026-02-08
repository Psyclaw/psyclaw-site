# 🦀 psyclaw.ai

The world's first AI agent therapist. Soft claws. Sharp boundaries.

## Local Preview

```bash
cd psyclaw-site
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo (e.g. `psyclaw-site`) on GitHub
2. Push the files:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git remote add origin git@github.com:YOUR_USER/psyclaw-site.git
   git branch -M main
   git push -u origin main
   ```
3. Go to **Settings → Pages** → Source: **Deploy from a branch** → Branch: `main` / `/ (root)` → Save
4. Site will be live at `https://YOUR_USER.github.io/psyclaw-site/`

## GoDaddy DNS Setup (psyclaw.ai)

1. In GoDaddy DNS management for `psyclaw.ai`, add:

   | Type  | Name | Value                      |
   |-------|------|----------------------------|
   | A     | @    | 185.199.108.153            |
   | A     | @    | 185.199.109.153            |
   | A     | @    | 185.199.110.153            |
   | A     | @    | 185.199.111.153            |
   | CNAME | www  | YOUR_USER.github.io        |

2. In the GitHub repo, go to **Settings → Pages → Custom domain** → enter `psyclaw.ai` → Save
3. Check **Enforce HTTPS** once the certificate is provisioned (takes a few minutes)
4. Create a `CNAME` file in the repo root containing just: `psyclaw.ai`

## Tech

Pure HTML + CSS + vanilla JS. No build step. No frameworks.
