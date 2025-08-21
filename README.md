# Fiesta Pizza Website

This repository contains a fully‑responsive, mobile‑first website for **Fiesta Pizza**, a Salem, Oregon pizzeria specialising in Mexican‑inspired pies. The site is entirely static—no build tools or back‑end are required—so you can deploy it anywhere you can host HTML, CSS and JavaScript.

## Features

* **Configurable**: All business information (name, address, phone, email, hours, social handle and DoorDash link) is centralised in `/js/config.js` so you can update it in one place.
* **Ordering integration**: Every “Order” button automatically links to your DoorDash store with UTM tracking parameters. Simply drop your DoorDash URL into `siteConfig.doordashUrl` and the site does the rest.
* **Responsive design**: The layout adapts gracefully from small phones to large desktops. A floating order button appears on small screens for quick access.
* **Accessible**: Includes skip links, semantic HTML, labelled forms, ARIA attributes and colour contrast that meets WCAG 2.1 AA.
* **SEO‑ready**: Each page has unique titles, meta descriptions, Open Graph/Twitter tags and JSON‑LD structured data for a restaurant and its menu.
* **Schema‑enhanced menu**: Menu items are described using [Schema.org Menu](https://schema.org/Menu) vocabulary so search engines can understand your offerings.
* **No tracking**: There are no cookies or analytics scripts. A brief privacy note is included in the footer.

## Quick edit guide

1. **Update business info and DoorDash URL**
   
   Open `/js/config.js` and edit the values in the `siteConfig` object. In particular, replace the placeholder `PUT_DOORDASH_URL_HERE` with your actual DoorDash store URL. All “Order” buttons across the site will automatically pick up this value and append UTM parameters for analytics.

2. **Edit the menu**
   
   Menu items live in `/menu.html`. Each item is represented by an `<article>` with the class `menu-item`. To add a new item:

   ```html
   <article class="menu-item card" data-category="pizza">
     <div class="card-icon" aria-hidden="true">🍕</div>
     <h3 class="card-title">Name of Pizza</h3>
     <p class="card-desc">Brief description of the pizza.</p>
     <p class="card-price">$12.00</p>
     <p class="card-tags"><span aria-label="Vegetarian">V</span></p>
     <a href="order.html" class="button small doordash-link" aria-label="Order Name of Pizza on DoorDash">Order</a>
   </article>
   ```

   * Change `data-category` to `pizza`, `side`, `drink` or `dessert` so filtering works correctly.
   * Use Unicode icons (🍕, 🍹, etc.) or replace with your own images—just ensure you provide meaningful alt text or `aria-label`.
   * Update the `schema` in the `<script type="application/ld+json">` block if you want search engines to recognise the new item.

3. **Replace images**
   
   All images live in `/assets/`. Currently the design uses abstract patterns generated specifically for this site. To replace them with real photography:

   * Save your hero/background image as `hero-bg.png` in `assets/`. Aim for at least 1600×900 px for best quality. The hero uses a dark overlay so bright images work best.
   * Replace `icon-192.png` and `icon-512.png` with your own branded icons if desired. These are used for the PWA manifest and favicon.
   * If you add additional pictures for menu items or team members, place them in `assets/` and reference them with `<img src="assets/your-image.png" alt="…">`.

4. **Change hours or holidays**
   
   The opening hours appear in the footer and structured data. Update the `hours` property in `/js/config.js`. For special holiday hours you can either update the text manually or add a note to the footer.

5. **Deployment**
   
   Because this project is static, deployment is as simple as uploading the contents of the `fiesta-pizza` folder to your hosting provider. Here are a few options:

   * **GitHub Pages**: Create a new repository, commit the files and enable GitHub Pages from the repository settings. Set the source branch to `main` (or whichever branch contains your code) and the root to `/`.
   * **Netlify**: Drag and drop the `fiesta-pizza` folder onto the Netlify dashboard or point a Git repository at it. Netlify will serve the HTML without any build step.
   * **Vercel**: Similar to Netlify—import the repo and select “Other” for the framework. Vercel will detect this as a static site.

## How to launch in 5 minutes

1. Fork or download this repository.
2. Edit `/js/config.js` with your real address, phone number, email, hours, social handle and DoorDash URL.
3. Replace the abstract images in `/assets/` with your own photos (optional but recommended).
4. Commit the changes and push to GitHub (or upload the folder to your hosting provider).
5. Visit your site’s URL and test the links. Use the included `test-checklist.md` to verify everything works.

## Files and structure

```
fiesta-pizza/
├── index.html           – home page with hero, highlights, popular pies and trust section
├── menu.html            – filterable menu with pizzas, sides, drinks and desserts
├── about.html           – story, team grid and values
├── contact.html         – contact info, map link and inquiry form
├── order.html           – DoorDash ordering hub with pickup/delivery info
├── 404.html             – friendly not‑found page
├── robots.txt           – allow all crawling and point to the sitemap
├── sitemap.xml          – list of all pages for search engines
├── manifest.webmanifest – PWA manifest with icons
├── assets/              – images and icons used throughout the site
│   ├── hero-bg.png      – hero/section background pattern
│   ├── icon-192.png     – 192×192 icon for manifest and favicon
│   └── icon-512.png     – 512×512 icon for manifest
├── css/
│   └── style.css        – global styles (no frameworks)
├── js/
│   ├── config.js        – central business configuration
│   └── main.js          – client‑side behaviour (config application, filtering, forms)
├── README.md            – this file
├── test-checklist.md    – manual QA checklist
└── ... (other supporting files)
```

## What I need from you to go live

To customise this template for your real restaurant, please supply:

* Your final **street address**, **city**, **state** and **ZIP code**.
* A contact **phone number**.
* A contact **email address**.
* Operating **hours** (weekday and weekend hours, plus any holiday notes).
* Your **DoorDash store URL**.
* Your **logo** and any **photography** you want to use (hero image, menu item photos, team pictures, etc.).
* A list of your **real menu items and prices**, including dietary tags (V, GF*, etc.).

Once provided, these details can be plugged into `config.js` and the HTML files to make the site production‑ready.