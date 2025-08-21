// Global client‑side logic for Fiesta Pizza

document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  setupNewsletterForm();
  setupMenuFiltering();
});

/**
 * Apply values from siteConfig to elements with data‑config attributes and
 * assign the DoorDash URL to all order links.
 */
function applyConfig() {
  // Populate text content from data attributes
  document.querySelectorAll('[data-config]').forEach((el) => {
    const key = el.getAttribute('data-config');
    if (siteConfig[key]) {
      el.textContent = siteConfig[key];
      // If this element is a phone or email link, also update the href
      if (key === 'phone' && el.tagName === 'A') {
        const digits = siteConfig.phone.replace(/\D/g, '');
        el.setAttribute('href', 'tel:' + digits);
      }
      if (key === 'email' && el.tagName === 'A') {
        el.setAttribute('href', 'mailto:' + siteConfig.email);
      }
    }
  });
  // Set door dash links
  const orderLinks = document.querySelectorAll('.doordash-link');
  const orderUrl = getDoordashUrl();
  orderLinks.forEach((a) => {
    a.setAttribute('href', orderUrl);
  });
}

/**
 * Setup newsletter form validation and submission. The form is client‑side
 * only; no data is sent to a server.
 */
function setupNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  const emailInput = form.querySelector('input[type="email"]');
  const messageEl = document.getElementById('newsletter-message');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
      messageEl.textContent = 'Please enter a valid email address.';
      messageEl.classList.add('error');
      return;
    }
    messageEl.textContent = 'Thank you! You have been added to our list.';
    messageEl.classList.remove('error');
    // Clear the field
    emailInput.value = '';
  });
}

/**
 * Basic email validation.
 * @param {string} email
 */
function validateEmail(email) {
  return /.+@.+\..+/.test(email);
}

/**
 * Menu page filtering: show items by category when filter buttons are clicked.
 */
function setupMenuFiltering() {
  const filterButtons = document.querySelectorAll('.menu-filter button');
  if (!filterButtons.length) return;
  const items = document.querySelectorAll('.menu-item');
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      // Update active state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      // Filter items
      items.forEach((item) => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.removeAttribute('hidden');
        } else {
          item.setAttribute('hidden', '');
        }
      });
    });
  });
}