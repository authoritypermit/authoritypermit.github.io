# Authority Permit LLC — Website

Final approved build. All Round 2 edits applied.

## Pages

- **index.html** — Home (Consider it approved.)
- **services.html** — Services (13 permit types + compliance note)
- **about.html** — About (The Authority on permits.)
- **resources.html** — FAQ / Resources (NEW)
- **contact.html** — Contact + quote form

## Before launching

**1. Formspree setup (5 min, required for contact form)**
- Sign up free at formspree.io using authoritypermit@gmail.com
- Create a form, copy the ID
- Open contact.html, find `YOUR_FORM_ID`, replace with your real ID
- Re-upload contact.html to GitHub

## GitHub Pages deployment

1. Drag all files from this folder into your `authoritypermit.github.io` repo on GitHub.com
2. Click "Commit changes" at the bottom
3. In Settings → Pages, enable Pages from the `main` branch, root folder
4. Wait 1–2 minutes, visit `https://authoritypermit.github.io`

## Custom domain (authoritypermit.com)

CNAME file already included. Add these DNS records at your domain registrar:

- A records: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
- CNAME: `www` → `authoritypermit.github.io`

In GitHub Pages settings, enter `authoritypermit.com` as the custom domain and enable Enforce HTTPS once available (24h for DNS to propagate).

## What's live

- 5 pages, all with sticky sidebar scroll tracking
- FAQ structured data on Resources for Google rich snippets
- LocalBusiness structured data on Home with 5 county service areas
- sitemap.xml and robots.txt for SEO crawlability
- Full mobile responsiveness
- Tagline "Consider it approved." in hero, footer, and brand positioning throughout

## Cost

- GitHub Pages: $0/month
- Formspree free tier: $0/month (50 form submissions)
- Domain renewal: whatever your registrar charges
