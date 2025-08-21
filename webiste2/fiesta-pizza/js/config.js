/*
  Central configuration for Fiesta Pizza
  Edit the values below to update business details across the site.
*/
const siteConfig = {
  name: 'Fiesta Pizza',
  // Updated address provided by the owner
  address: '1122 Lancaster Dr NE, Salem, OR 97301',
  // Updated contact phone
  phone: '(503) 832-4763',
  // Updated contact email
  email: 'coyn2015@gmail.com',
  // Operating hours (retain defaults for now)
  hours: 'Sun–Thu 11a–9p • Fri–Sat 11a–10p',
  social: '@fiestapizzasalem',
  // DoorDash store URL. Still a placeholder until provided.
  doordashUrl: 'https://www.doordash.com/store/fiesta-pizza-salem-601260/1552157/?event_type=autocomplete&pickup=false',
};

/**
 * Append common UTM parameters to outbound ordering links.
 */
function getDoordashUrl() {
  const base = siteConfig.doordashUrl;
  if (!base || base.includes('PUT_DOORDASH_URL_HERE')) return '#';
  const query = 'utm_source=website&utm_medium=cta&utm_campaign=fiesta_pizza_site';
  return base.includes('?') ? `${base}&${query}` : `${base}?${query}`;
}