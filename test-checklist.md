# Fiesta Pizza – Test Checklist

Use this checklist to verify the website works as expected before going live. Tick each item off after confirming.

## General

- [ ] Pages load quickly on both mobile and desktop.
- [ ] The site renders correctly at 320 px wide (mobile) and scales up to large screens without layout issues.
- [ ] Colour contrast meets WCAG 2.1 AA requirements (e.g. text against backgrounds is readable).
- [ ] All images include descriptive `alt` text or `aria-label`.
- [ ] You can navigate the site fully using only the keyboard (Tab/Shift+Tab).
- [ ] Skip link at the top of each page moves focus to the main content.
- [ ] There are no console errors when browsing the site.

## Links & Navigation

- [ ] Navigation links (Home, Menu, About, Contact, Order) go to the correct pages.
- [ ] The floating order button appears on small screens and links to the DoorDash store.
- [ ] All “Order” buttons across the site point to the DoorDash URL with UTM parameters.
- [ ] Footer links (address, email, phone, social) work as expected.
- [ ] The 404 page displays when you visit a non‑existent page and offers “Back to home” and “Order now” buttons.

## Forms

- [ ] The newsletter form validates an empty or invalid email and shows a helpful error message.
- [ ] Submitting a valid email on the newsletter form clears the field and displays a success message.
- [ ] The contact form shows errors when required fields are empty or the email is invalid.
- [ ] Submitting a valid contact form clears the fields and shows a thank‑you message.

## Menu Page

- [ ] Filter buttons for All, Pizzas, Sides, Drinks and Desserts show/hide items as expected.
- [ ] Dietary tags (V, GF, GF*) are visible and accurately reflect the item’s status.

## Order Page

- [ ] The “Go to DoorDash Store” button opens the DoorDash link in the same tab with UTM parameters.
- [ ] Pickup and delivery instructions are clear and easy to read.
- [ ] The fallback message instructs users to refresh or call if DoorDash is unreachable.

## SEO & Files

- [ ] Each page has a unique title and meta description.
- [ ] The manifest loads without errors and includes correct icons.
- [ ] `sitemap.xml` lists all pages and is referenced in `robots.txt`.
- [ ] JSON‑LD structured data is present on pages (home: Restaurant, menu: Menu).

Testing all of the above will help ensure a smooth launch and high Lighthouse scores.