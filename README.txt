Duluth Dental Studio — Netlify Web 2.0 Site
=============================================

Pages:
- index.html    Home page
- about.html    About Us page
- contact.html  Contact Us page
- styles.css    Shared stylesheet (matches the main site's colors: cerulean blue #1EA1ED, slate #50585D, off-white #F7FAFC)
- script.js     Scroll-in animations + contact form handler
- sitemap.xml   XML sitemap
- robots.txt    Crawler rules, points to sitemap.xml
- llms.txt      AI/LLM-readable summary of the practice and key pages

IMPORTANT — Add your logo:
This zip does not include a logo file (none was available to embed).
Save your actual logo as images/logo.png in this same folder before
deploying. It's referenced in all three pages for: the nav logo, the
hero image, the browser favicon, and the Open Graph / Twitter Card
preview image. If you skip this step, those spots will show a broken
image icon.

Before deploying, also update the placeholder domain:
All canonical tags, Open Graph URLs, Twitter Card URLs, sitemap.xml,
robots.txt, and llms.txt use "duluthdentalstudio.netlify.app" as a
placeholder. Once you deploy and get your real Netlify URL (or attach
a custom domain), find-and-replace that placeholder across all files.

Deploying to Netlify:
1. Put logo.png in an "images" folder alongside index.html.
2. Log in to Netlify.
3. Drag and drop this whole folder into the Netlify "Sites" upload area.
4. Netlify deploys it instantly and gives you a live URL.

Notes:
- The contact form shows a confirmation alert but does not actually
  send anywhere, since this is a static site with no backend. Connect
  it to Netlify Forms (add a `netlify` attribute to the <form> tag) or
  a service like Formspree if you want real submissions.
- Font Awesome icons are loaded from cdnjs for the footer social icons.
- Brand-name hyperlinks to your other web properties (PRLog, Simdif,
  Website3, GitHub Pages, Render, Odoo, Linktree, SlideShare, Solo.to,
  Lnk.bio, and the Newswire article) are woven into the Home and About
  page content, as requested. All 14 social platforms are linked as
  icons in the footer on every page.
