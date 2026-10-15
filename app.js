const phone = document.getElementById('phone');
const CITIES = [
  { name: 'Tokyo', country: 'Japan', flag: '🇯🇵' },
  { name: 'Paris', country: 'France', flag: '🇫🇷' },
  { name: 'Rome', country: 'Italy', flag: '🇮🇹' },
  { name: 'Bangkok', country: 'Thailand', flag: '🇹🇭' },
  { name: 'Chiang Mai', country: 'Thailand', flag: '🇹🇭' },
  { name: 'Phuket', country: 'Thailand', flag: '🇹🇭' },
  { name: 'Seoul', country: 'South Korea', flag: '🇰🇷' },
];
const BUDGETS = [
  ['Shoestring', 'Spend as little as possible', 900],
  ['Budget', 'Great value, thoughtful choices', 1500],
  ['Moderate', 'A comfortable balance', 3000],
  ['Upscale', 'A few special moments', 5500],
  ['Luxury', 'Make it unforgettable', 10000],
];
const PREFS = [
  ['Shopping', 'bag'], ['Popular', 'sparkles'], ['Foodie', 'fork.knife'],
  ['Culture', 'building.columns'], ['Nature', 'leaf'], ['Nightlife', 'moon.stars'],
];
const PLACES = [
  { id: 'wat-arun', name: 'Wat Arun', subtitle: 'Temple of Dawn · Riverside', category: 'Things to do', key: 'attraction', lat: 13.7437, lng: 100.4889, image: 'https://images.unsplash.com/photo-1666418096686-da94c2e70e6d?auto=format&fit=crop&w=1200&q=82', description: 'A riverside landmark known for its porcelain-covered central prang and beautiful late-afternoon light.', rating: '4.8', walk: 18, drive: 12, bus: 22, train: 16 },
  { id: 'yaowarat', name: 'Yaowarat Road', subtitle: 'Chinatown · Street food', category: 'Food', key: 'food', lat: 13.7394, lng: 100.5101, image: 'https://images.unsplash.com/photo-1753272379004-2c2b342073f7?auto=format&fit=crop&w=1200&q=82', description: 'A lively food street packed with family-run restaurants, local snacks, and neon-lit evening stalls.', rating: '4.7', walk: 14, drive: 10, bus: 18, train: 12 },
  { id: 'chatuchak', name: 'Chatuchak Weekend Market', subtitle: 'Shopping · Local finds', category: 'Things to do', key: 'attraction', lat: 13.7999, lng: 100.5507, image: 'https://images.unsplash.com/photo-1672934324126-257a393a9aa8?auto=format&fit=crop&w=1200&q=82', description: 'Explore a sprawling weekend market for vintage finds, clothing, crafts, and casual local eats.', rating: '4.6', walk: 9, drive: 8, bus: 16, train: 11 },
  { id: 'grand-palace', name: 'The Grand Palace', subtitle: 'Historic · Old City', category: 'Things to do', key: 'attraction', lat: 13.7500, lng: 100.4913, image: 'https://images.unsplash.com/photo-1587308688353-bc58083be441?auto=format&fit=crop&w=1200&q=82', description: "A landmark complex of royal halls and ornate temples at the heart of Bangkok's historic district.", rating: '4.8', walk: 12, drive: 9, bus: 18, train: 15 },
  { id: 'sathorn-hotel', name: 'Riverside Boutique Stay', subtitle: 'Hotel · Chao Phraya', category: 'Hotels', key: 'hotel', lat: 13.7217, lng: 100.5131, image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=82', description: 'A relaxed riverside stay with easy access to ferry piers and the old town.', rating: '4.6', walk: 11, drive: 8, bus: 16, train: 13 },
  { id: 'ari-cafe', name: 'Ari Café Quarter', subtitle: 'Cafés · Neighbourhood', category: 'Food', key: 'food', lat: 13.7797, lng: 100.5448, image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=82', description: 'Independent cafés, bakeries, and small restaurants make this neighbourhood an easygoing food stop.', rating: '4.5', walk: 7, drive: 6, bus: 15, train: 9 },
];
const HOTELS = [
  { id: 'riverside-house', name: 'Riverside House Bangkok', area: 'Bang Rak · River view', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=82', rating: '4.8', price: 2450, description: 'A calm riverside base with a pool, breakfast, and easy ferry access.', transit: 6 },
  { id: 'citrus-sukhumvit', name: 'Citrus Sukhumvit Stay', area: 'Sukhumvit · City centre', image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=82', rating: '4.6', price: 1890, description: 'A bright city stay close to shopping, dining, and the BTS.', transit: 4 },
  { id: 'old-city-hideaway', name: 'Old City Hideaway', area: 'Phra Nakhon · Historic quarter', image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1400&q=82', rating: '4.7', price: 3150, description: 'A boutique retreat within easy reach of temples and local markets.', transit: 9 },
];
const CURRENCIES = [
  ['USD', 'US Dollar'], ['JPY', 'Japanese Yen'], ['THB', 'Thai Baht'],
  ['CNY', 'Chinese Yuan'], ['EUR', 'Euro'], ['SGD', 'Singapore Dollar'],
];
const ICON_PATHS = {
  'location.fill': '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  'suitcase.rolling': '<rect x="5" y="7" width="14" height="13" rx="2"/><path d="M9 7V4h6v3M8 20v2m8-2v2M8 10v7m8-7v7"/>',
  'bed.double': '<path d="M3 20v-8m18 8v-5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m0 0v5m0-3h18M7 12V8a2 2 0 0 1 2-2h3v6m0-6h3a2 2 0 0 1 2 2v4"/>',
  'map': '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
  'banknote': '<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M6 9h.01M18 15h.01"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'textformat.size': '<path d="M4 7V4h16v3M12 4v16m-4 0h8M3 20l3-9 3 9m-5-3h4"/>',
  'arrow.right': '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  'chevron.down': '<path d="m6 9 6 6 6-6"/>',
  'chevron.right': '<path d="m9 18 6-6-6-6"/>',
  'chevron.left': '<path d="m15 18-6-6 6-6"/>',
  'ellipsis': '<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  'sparkles': '<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15ZM5 14l.8 2.2L8 17l-2.2.8L5 20l-.8-2.2L2 17l2.2-.8L5 14Z"/>',
  'fork.knife': '<path d="M7 3v7m-3-7v4a3 3 0 0 0 6 0V3m-3 7v11m10-18v18m0-18c-2 2-3 5-3 8h3"/>',
  'building.columns': '<path d="M3 9h18M5 9v10m4-10v10m6-10v10m4-10v10M3 21h18M12 3 3 7h18l-9-4Z"/>',
  'leaf': '<path d="M20 4c-8 0-14 3-14 10a6 6 0 0 0 6 6c7 0 8-8 8-16ZM4 21c3-5 7-8 12-11"/>',
  'moon.stars': '<path d="M19 15A8 8 0 0 1 9 5a8 8 0 1 0 10 10Z"/><path d="m17 3 .7 1.8L20 5.5l-2.3.7L17 8l-.7-1.8L14 5.5l2.3-.7L17 3Zm4 7 .5 1.2L23 12l-1.5.5L21 14l-.5-1.5L19 12l1.5-.8L21 10Z"/>',
  'viewfinder': '<path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m13-5v3a2 2 0 0 1-2 2h-3M8 8h8v8H8z"/>',
  'clock.arrow.circlepath': '<path d="M3 12a9 9 0 1 0 2.6-6.4L3 8m0-5v5h5m4-1v5l3 2"/>',
  'bag': '<path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2"/>',
  'cart.fill': '<path d="M3 4h2l2.2 11.5A2 2 0 0 0 9.2 17H18a2 2 0 0 0 1.9-1.4L22 9H6M10 21h.01M18 21h.01"/>',
  'cart.badge.plus': '<path d="M3 4h2l2.2 11.5A2 2 0 0 0 9.2 17H17m-9-4h10l1-4H6m5 10h.01M18 19h.01M17 5h5m-2.5-2.5v5"/>',
  'pencil': '<path d="m16 4 4 4M4 20l4-.8L19 8a2.1 2.1 0 0 0-3-3L5 16l-1 4Z"/>',
  'heart': '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/>',
  'heart.fill': '<path d="M20.8 8.8c0 5.2-8.8 10.2-8.8 10.2S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" fill="currentColor"/>',
  'checkmark': '<path d="m5 12 4 4L19 6"/>',
  'checkmark.circle.fill': '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/>',
  'checkmark.seal.fill': '<path d="m12 2 2 1 2.3-.2 1.2 2 2 1.2-.2 2.3 1 2-1 2 .2 2.3-2 1.2-1.2 2-2.3-.2-2 1-2-1-2.3.2-1.2-2-2-1.2.2-2.3-1-2 1-2-.2-2.3 2-1.2 1.2-2 2.3.2 2-1Z"/><path d="m8 12 2.4 2.4L16 9"/>',
  'exclamationmark.circle.fill': '<circle cx="12" cy="12" r="9"/><path d="M12 7v6m0 3h.01"/>',
  'chart.pie.fill': '<path d="M11 3a9 9 0 1 0 10 10H11V3Z"/><path d="M14 3v7h7a9 9 0 0 0-7-7Z"/>',
  'wallet': '<rect x="3" y="5" width="18" height="15" rx="2"/><path d="M3 9h18m-6 5h3"/>',
  'xmark': '<path d="m6 6 12 12M18 6 6 18"/>',
  'star.fill': '<path d="m12 2 3 6 7 1-5 5 1.2 7L12 18l-6.2 3L7 14l-5-5 7-1 3-6Z" fill="currentColor"/>',
  'flame.fill': '<path d="M13 2c1 5-4 5-2 10 1-2 3-3 4-5 4 4 5 8 2 12a7 7 0 0 1-12-5c0-3 2-6 5-8-.4 3 .5 4 1 5 2-3 1-6 2-9Z"/>',
  'bed.double.fill': '<path d="M3 20v-8m18 8v-5a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3m0 0v5m0-3h18M7 12V8a2 2 0 0 1 2-2h3v6m0-6h3a2 2 0 0 1 2 2v4"/>',
  'bus.fill': '<path d="M5 5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v13H5V5Zm0 3h14M7 18v3m10-3v3M8 12h.01M16 12h.01"/><path d="M7 5h10v3H7z"/>',
  'tram.fill': '<rect x="5" y="2" width="14" height="17" rx="4"/><path d="M5 8h14m-10 4h.01M15 12h.01M8 19l-2 3m10-3 2 3M8 16h8"/>',
  'car.fill': '<path d="m5 11 1.4-5A2 2 0 0 1 8.3 4h7.4a2 2 0 0 1 1.9 2l1.4 5v7H5v-7Zm0 0h14M7 14h.01M17 14h.01M8 18v2m8-2v2"/>',
  'figure.walk': '<circle cx="14" cy="4" r="2"/><path d="m12 8-3 4 3 2-1 6m1-12 4 3 3 1m-9-1-3 4-3 1m10-5-2 5 4 3"/>',
  'arrow.up.right': '<path d="M7 17 17 7M7 7h10v10"/>',
  'arrow.counterclockwise': '<path d="M4 7V3m0 4h4m-4 0a8 8 0 1 1-1 8"/>',
  'bag.fill': '<path d="M5 8h14l1 13H4L5 8Zm4 0V6a3 3 0 0 1 6 0v2Z"/>',
  'map.fill': '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>',
  'magnifyingglass': '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
};
function icon(name, size = 20) {
  const p = ICON_PATHS[name] || ICON_PATHS.sparkles;
  const filled = /\.fill$/.test(name);
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${filled ? 1.65 : 1.8}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}
function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function uid() { return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`; }
function load(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(`utopia.${key}`)); return value ?? fallback; }
  catch { return fallback; }
}
const state = {
  tab: 'trip',
  priceCurrency: load('priceCurrency', 'THB'),
  changeCurrency: load('changeCurrency', 'USD'),
  conversionRate: 0,
  rateLoading: false,
  rateUnavailable: false,
  trips: load('trips', []),
  selectedTrip: load('selectedTrip', null),
  bookings: load('bookings', []),
  history: load('history', []),
  favorites: load('favorites', []),
  cart: load('cart', []),
  textScale: load('textScale', 1),
  boldText: load('boldText', false),
  modal: null,
  parentModal: null,
  toast: '',
  showPlaces: true,
  placeFilter: 'All',
  selectedDay: null,
  routeExpandedKey: null,
  routeModes: {},
  composer: { step: 'where', query: '', city: '', start: '', end: '', budget: 2, prefs: [] },
  hotelNights: 1,
  editingCart: null,
  scan: {
    active: false, step: 'price', price: 0, tendered: 0, received: 0,
    product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false,
    isCartCheckout: false, message: '', ocrRunning: false, ocrProgress: 0,
    currentFavorite: false,
  },
  cameraError: '',
};
let mediaStream = null;
let ocrWorker = null;
let toastTimer = null;
let scanImageData = null;
let rateRequestNumber = 0;

function persist(key, value) { try { localStorage.setItem(`utopia.${key}`, JSON.stringify(value)); } catch {} }
function saveState() {
  ['priceCurrency', 'changeCurrency', 'trips', 'selectedTrip', 'bookings', 'history', 'favorites', 'cart', 'textScale', 'boldText'].forEach(key => persist(key, state[key]));
}
function currencyFormat(amount, currency = state.priceCurrency, decimals = 0) {
  try { return new Intl.NumberFormat('en-US', { style: 'currency', currency, maximumFractionDigits: decimals, minimumFractionDigits: 0 }).format(Number(amount) || 0); }
  catch { return `${Number(amount || 0).toFixed(decimals)} ${currency}`; }
}
function selectedTrip() { return state.trips.find(t => t.id === state.selectedTrip) || null; }
function selectedBooking() { return state.bookings.find(b => b.tripId === state.selectedTrip) || null; }
function tripHistory() { const trip = selectedTrip(); return trip ? state.history.filter(h => h.tripId === trip.id) : state.history; }
function budgetFor(trip) { return BUDGETS[trip?.budget ?? 2] || BUDGETS[2]; }
function tripDateLabel(trip) {
  if (!trip?.start) return 'Bangkok';
  const start = new Date(`${trip.start}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  const end = trip.end && trip.end !== trip.start ? new Date(`${trip.end}T00:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : '';
  return end ? `${start} – ${end}` : start;
}
function routeEstimate(from, to, mode = 'walk') {
  const rad = n => n * Math.PI / 180;
  const dLat = rad(to.lat - from.lat), dLng = rad(to.lng - from.lng);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(from.lat)) * Math.cos(rad(to.lat)) * Math.sin(dLng / 2) ** 2;
  const straight = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const factors = { walk: [1.28, 4.5, 0], transit: [1.42, 17, 8], drive: [1.36, 24, 5] }[mode];
  const distance = Math.max(straight * factors[0], .2);
  const minutes = Math.max(Math.ceil(distance / factors[1] * 60) + factors[2], 2);
  return { distance, minutes };
}
function dateDayCount(start, end) {
  if (!start) return 1;
  const a = new Date(`${start}T00:00:00`), b = end ? new Date(`${end}T00:00:00`) : a;
  return Math.max(1, Math.round((b - a) / 86400000) + 1);
}
function toast(message) {
  state.toast = message;
  render();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { state.toast = ''; render(); }, 2300);
}
async function fetchRate() {
  const request = ++rateRequestNumber;
  if (state.priceCurrency === state.changeCurrency) {
    state.conversionRate = 1; state.rateUnavailable = false; state.rateLoading = false; render(); return;
  }
  state.rateLoading = true; state.rateUnavailable = false; render();
  try {
    const url = new URL('https://api.frankfurter.dev/v1/latest');
    url.searchParams.set('base', state.priceCurrency);
    url.searchParams.set('symbols', state.changeCurrency);
    const response = await fetch(url);
    if (!response.ok) throw new Error('Rate unavailable');
    const result = await response.json();
    const rate = Number(result.rates?.[state.changeCurrency]);
    if (!(rate > 0)) throw new Error('Rate unavailable');
    if (request !== rateRequestNumber) return;
    state.conversionRate = rate; state.rateUnavailable = false;
  } catch {
    if (request !== rateRequestNumber) return;
    state.conversionRate = 0; state.rateUnavailable = true;
  } finally {
    if (request === rateRequestNumber) { state.rateLoading = false; render(); }
  }
}

function statusBar() {
  return `<div class="status-bar ${state.scan.active ? 'dark-status' : ''}"><span>9:41</span><span class="status-right"><i class="signal"></i><i class="wifi"></i><i class="battery"></i></span></div>`;
}
function navBar() {
  const items = [
    ['trip', 'Trip', 'suitcase.rolling'], ['booking', 'Booking', 'bed.double'],
    ['recommend', 'Recommend', 'map'], ['money', 'Money', 'banknote'],
  ];
  return `<nav class="nav-dock" aria-label="Main navigation">
    ${items.slice(0, 2).map(([id, title, symbol]) => `<button class="nav-item ${state.tab === id ? 'active' : ''}" data-action="tab" data-tab="${id}">${icon(symbol)}<span>${title}</span></button>`).join('')}
    <button class="nav-add" data-action="new-trip" aria-label="New Trip">${icon('plus', 22)}</button>
    ${items.slice(2).map(([id, title, symbol]) => `<button class="nav-item ${state.tab === id ? 'active' : ''}" data-action="tab" data-tab="${id}">${icon(symbol)}<span>${title}</span></button>`).join('')}
  </nav>`;
}
function settingsButton() { return `<button class="settings-button" data-action="settings" aria-label="Text settings">${icon('textformat.size')}</button>`; }
function tripHome() {
  const trips = state.trips.map(t => `<article class="trip-card">
    <button class="trip-card-main" data-action="trip-detail" data-id="${t.id}">
      <img class="trip-thumb" src="${PLACES[0].image}" alt="Bangkok temple" />
      <span class="trip-card-copy"><h3>${dateDayCount(t.start, t.end)} Days in ${escapeHtml(t.city)}</h3><p>${escapeHtml(t.start ? tripDateLabel(t) : `${dateDayCount(t.start, t.end)} days · Bangkok`)}</p><span class="trip-chip-row"><span class="chip">${icon('wallet', 13)} ${escapeHtml(budgetFor(t)[0])}</span><span class="chip blue">${t.prefs.length} interests</span></span></span>
    </button>
    <button class="trip-menu" data-action="trip-options" data-id="${t.id}" aria-label="Trip options">${icon('ellipsis')}</button>
  </article>`).join('');
  const guides = PLACES.slice(0, 3).map(p => `<button class="guide-card" data-action="place-detail" data-id="${p.id}"><img src="${p.image}" alt="${escapeHtml(p.name)}"/><span class="guide-label"><strong>${escapeHtml(p.name)}</strong><span>${escapeHtml(p.subtitle)}</span></span></button>`).join('');
  return `<main class="page"><div class="page-stack">
    <header class="header-row"><h1 class="location-title">${icon('location.fill', 18)} Bangkok, Thailand</h1>${settingsButton()}</header>
    <section class="trip-section"><h2 class="section-title">My Trips</h2>${trips ? `<div class="trip-list">${trips}</div>` : `<div class="card empty-card"><h3>Your next story starts here</h3><p>Create a trip and we’ll keep every day in one lovely plan.</p></div>`}<button class="outline-button" data-action="new-trip">${icon('plus')} Create New Trip</button></section>
    <section class="trip-section"><h2 class="section-title">Guides</h2><div class="guide-row">${guides}</div></section>
  </div></main>`;
}
function bookingPage() {
  const trip = selectedTrip(), booking = selectedBooking();
  if (!trip) return `<main class="page"><div class="page-stack"><header class="header-row"><h1 class="page-title">Booking</h1>${settingsButton()}</header><div class="card empty-card" style="padding:28px;text-align:center"><div style="color:var(--blue);margin-bottom:10px">${icon('bed.double.fill', 32)}</div><h3>A stay starts with a trip</h3><p>Create a Bangkok trip before choosing a place to stay.</p><button class="primary-button" style="margin-top:16px" data-action="new-trip">Create New Trip</button></div></div></main>`;
  const hotelCards = HOTELS.map(h => `<button class="hotel-card" data-action="hotel" data-id="${h.id}" ${dateDayCount(trip.start, trip.end) <= 1 ? 'disabled' : ''}><img src="${h.image}" alt="${escapeHtml(h.name)}"/><span class="hotel-copy"><span class="hotel-rating">${icon('star.fill', 12)} ${h.rating}</span><strong>${escapeHtml(h.name)}</strong><small>${escapeHtml(h.area)}</small><span class="hotel-price">${currencyFormat(h.price, 'THB')} <span>/ night</span></span></span></button>`).join('');
  return `<main class="page"><div class="page-stack"><header class="header-row"><h1 class="page-title">Booking</h1>${settingsButton()}</header>
    <div class="booking-context">${icon('suitcase.rolling', 19)}<div><strong>For your Bangkok trip</strong><span>${Math.max(0, dateDayCount(trip.start, trip.end) - 1)} night${dateDayCount(trip.start, trip.end) === 2 ? '' : 's'} · ${tripDateLabel(trip)}</span></div></div>
    ${booking ? `<div class="booking-saved"><div class="eyebrow">${icon('checkmark.seal.fill', 13)} Booking saved</div><h3>${escapeHtml(booking.name)}</h3><p>${booking.nights} night${booking.nights === 1 ? '' : 's'} · ${currencyFormat(booking.price * booking.nights, 'THB')} total</p></div>` : ''}
    <section class="trip-section"><div><h2 class="section-title" style="font-size:19px">Places to stay</h2><p class="section-subtitle">${dateDayCount(trip.start, trip.end) > 1 ? 'Choose where you’d like to stay.' : 'Overnight stays need a trip of at least two days.'}</p></div><div class="hotel-list">${hotelCards}</div></section>
  </div></main>`;
}
function visiblePlaces() {
  return state.placeFilter === 'All' ? PLACES : PLACES.filter(p => p.category === state.placeFilter);
}
function mapPage() {
  const filters = ['All', 'Hotels', 'Food', 'Things to do'];
  const markers = visiblePlaces().map((p, i) => {
    const xy = [[44, 43], [64, 59], [67, 27], [38, 38], [54, 72], [76, 43]][PLACES.indexOf(p)];
    return `<button class="map-marker ${p.key}" style="left:${xy[0]}%;top:${xy[1]}%" data-action="place-detail" data-id="${p.id}" aria-label="${escapeHtml(p.name)}">${icon(p.key === 'food' ? 'fork.knife' : p.key === 'hotel' ? 'bed.double' : 'sparkles', 15)}</button>`;
  }).join('');
  const list = visiblePlaces().map(p => `<button class="place-row" data-action="place-detail" data-id="${p.id}"><img src="${p.image}" alt=""/><span class="place-row-copy"><span class="place-row-top"><span>${p.category}</span><span>${icon('star.fill', 10)} ${p.rating}</span></span><h3>${escapeHtml(p.name)}</h3><p>${escapeHtml(p.subtitle)}</p><span class="place-times">${icon('figure.walk', 11)} ${p.walk}m ${icon('tram.fill', 11)} ${p.train}m ${icon('car.fill', 11)} ${p.drive}m</span></span></button>`).join('');
  return `<main class="page map-page"><div class="map-art"><iframe class="map-embed" title="Bangkok map" loading="eager" referrerpolicy="no-referrer-when-downgrade" src="https://www.openstreetmap.org/export/embed.html?bbox=100.462%2C13.704%2C100.568%2C13.807&layer=mapnik"></iframe>${markers}<span class="map-attribution">© OpenStreetMap contributors</span></div>
    <div class="map-top"><div class="map-location"><div><h1 class="location-title">${icon('location.fill', 17)} Bangkok, Thailand</h1><p>Explore nearby places</p></div>${settingsButton()}</div><div class="filter-row">${filters.map(f => `<button class="filter-pill ${state.placeFilter === f ? 'active' : ''}" data-action="place-filter" data-filter="${f}">${f}</button>`).join('')}</div></div>
    ${state.showPlaces ? `<section class="place-sheet"><div class="sheet-handle"></div><div class="sheet-title-row"><div><h2>Around Bangkok</h2><p>${visiblePlaces().length} nearby places</p></div><button class="icon-button" style="width:32px;height:32px" data-action="collapse-places" aria-label="Collapse places">${icon('chevron.down', 16)}</button></div><div class="filter-row" style="margin-bottom:8px">${filters.map(f => `<button class="filter-pill ${state.placeFilter === f ? 'active' : ''}" data-action="place-filter" data-filter="${f}" style="padding:7px 12px;font-size:11px">${f}</button>`).join('')}</div><div class="places-list">${list}</div></section>` : `<button class="filter-pill" style="position:absolute;z-index:4;bottom:28px;left:50%;transform:translateX(-50%)" data-action="collapse-places">${icon('map')} Around Bangkok · ${visiblePlaces().length} places</button>`}
  </main>`;
}
function moneyPage() {
  const trip = selectedTrip(), entries = tripHistory();
  const spent = trip ? entries.reduce((sum, h) => sum + (h.priceCurrency === trip.currency ? h.price : (h.changeCurrency === trip.currency ? (h.converted ?? 0) : 0)), 0) : 0;
  const estimate = trip ? BUDGETS[trip.budget][2] * dateDayCount(trip.start, trip.end) : 0;
  const latest = entries[0];
  const progress = trip ? Math.min(spent / Math.max(estimate, 1), 1) * 100 : 0;
  return `<main class="page"><div class="page-stack"><header class="header-row"><h1 class="page-title">Money</h1>${settingsButton()}</header>
    <section class="spent-card"><div class="spent-label">${icon('chart.pie.fill', 13)} SPENT THIS TRIP <span style="margin-left:auto;color:rgba(255,255,255,.88)">${trip ? `${escapeHtml(trip.city)} · ${dateDayCount(trip.start, trip.end)}d` : ''}</span></div><div class="spent-total">${currencyFormat(spent, trip?.currency || 'THB')}</div>${trip ? `<div class="progress-track"><span style="width:${progress}%"></span></div><div class="progress-meta"><span>Trip estimate ${currencyFormat(estimate, 'THB')}</span><span>${entries.length} scans</span></div>` : `<p class="spent-note">Create a trip to start tracking its spending.</p>`}</section>
    <button class="scan-link" data-action="start-scan"><span class="scan-link-icon">${icon('viewfinder')}</span><span class="scan-link-copy"><strong>Start scanning</strong><small>Check change and convert currency</small></span>${icon('arrow.right', 17)}</button>
    <section class="trip-section"><div class="header-row" style="align-items:end"><div><h2 class="section-title" style="font-size:19px">History</h2><p class="section-subtitle">${trip ? 'Latest scans for this trip' : 'Saved scan checks'}</p></div>${entries.length ? `<button class="secondary-button" style="width:auto;min-height:31px;padding:0 10px;border:0;background:transparent;font-size:12px" data-action="history">More</button>` : ''}</div>
      ${latest ? `<button class="history-card" data-action="history"><span class="history-top"><span>${icon('checkmark.circle.fill', 13)} ${latest.verified ? 'Change matched' : 'Review change'}</span><span style="color:var(--secondary);font-weight:450">${new Date(latest.date).toLocaleDateString('en-US',{month:'short',day:'numeric'})}</span></span><span class="history-details">${latest.products?.[0]?.image ? `<img class="history-thumb" src="${latest.products[0].image}" alt=""/>` : `<span class="history-thumb">${icon('bag', 22)}</span>`}<span><h4>${escapeHtml(latest.products?.[0]?.name || 'Scanned purchase')}</h4><p>${new Date(latest.date).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})} · ${latest.products?.length || 1} item</p></span><span class="history-amount">${currencyFormat(latest.price, latest.priceCurrency)}<small>${latest.converted == null ? '' : `≈ ${currencyFormat(latest.converted, latest.changeCurrency)}`}</small></span></span></button>` : `<div class="card empty-card"><h3>No scans saved to this trip yet</h3><p>Your latest price and change checks will appear here.</p></div>`}</section>
    ${!trip ? `<button class="secondary-button" style="min-height:38px;width:auto;align-self:flex-start;border:0;background:transparent" data-action="new-trip">Create New Trip</button>` : ''}
  </div></main>`;
}

function currencyPill(label, value, dest = false) {
  return `<label class="currency-select ${dest ? 'destination' : ''}"><span style="font-size:10px;opacity:.78">${label}</span> <select aria-label="${label} currency" data-field="${dest ? 'changeCurrency' : 'priceCurrency'}" ${!dest && state.cart.length ? 'disabled' : ''}>${CURRENCIES.map(([code]) => `<option ${value === code ? 'selected' : ''} value="${code}">${code}</option>`).join('')}</select> ${icon('chevron.down', 10)}</label>`;
}
function priceScanCard() {
  const converted = state.rateUnavailable ? '—' : state.rateLoading ? '…' : currencyFormat(state.scan.price * state.conversionRate, state.changeCurrency, 2);
  const favorite = state.scan.currentFavorite || state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - state.scan.price) < .001);
  return `<section class="scan-card"><div class="scan-card-head"><button data-action="keypad" data-target="price">${icon('pencil', 14)} Edit</button><span class="spacer"></span><button class="favorite ${favorite ? 'on' : ''}" data-action="favorite" aria-label="Save favorite">${icon(favorite ? 'heart.fill' : 'heart', 19)}</button></div><div class="scan-values"><div class="scan-value"><label>PRICE FOUND</label><strong>${currencyFormat(state.scan.price, state.priceCurrency)}</strong></div><div class="scan-value converted"><label>CONVERTED</label><strong>${converted}</strong></div></div><input class="text-input" aria-label="Scanned product name" data-field="product" value="${escapeHtml(state.scan.product)}" placeholder="Item name"/><div class="scan-actions"><button class="secondary-button" data-action="add-cart">${icon('cart.badge.plus')} Add to cart</button><button class="primary-button" data-action="calculate-change">Calculate change ${icon('arrow.right')}</button></div></section>`;
}
function tenderedCard() {
  const due = Math.max(0, state.scan.tendered - state.scan.price);
  return `<section class="scan-card compact"><div class="scan-card-head"><span class="spacer"></span><button data-action="keypad" data-target="tendered">${icon('pencil', 14)} Edit</button></div><div class="value-row"><span>Price</span><strong>${currencyFormat(state.scan.price)}</strong></div><div class="value-row"><span>Amount paid</span><strong class="blue-text">${currencyFormat(state.scan.tendered)}</strong></div><div class="value-row" style="margin-top:8px;border-top:1px solid #e4eaf2;padding-top:12px;align-items:flex-start"><span style="font-size:16px;color:var(--ink);font-weight:700">Expected change</span><span style="text-align:right"><strong style="font-size:27px">${currencyFormat(due)}</strong><small style="display:block;color:var(--blue);margin-top:4px">≈ ${currencyFormat(due * state.conversionRate, state.changeCurrency)}</small></span></div><button class="primary-button" style="margin-top:12px" data-action="verify-change">${due === 0 ? 'Finish' : 'Verify change'} ${icon(due === 0 ? 'checkmark' : 'arrow.right')}</button></section>`;
}
function coinCard() {
  const due = Math.max(0, state.scan.tendered - state.scan.price), diff = state.scan.received - due;
  const matched = Math.abs(diff) < .01;
  return `<section class="scan-card compact"><div class="change-result"><div class="result-col"><label>EXPECTED</label><strong>${currencyFormat(due)}</strong></div><div class="result-col"><label>RECEIVED</label><strong style="color:#e59a32">${currencyFormat(state.scan.received)}</strong></div></div><div class="result-status ${matched ? 'good' : 'warn'}">${icon(matched ? 'checkmark.circle.fill' : 'exclamationmark.circle.fill', 17)} ${matched ? 'Correct change' : `Difference: ${currencyFormat(Math.abs(diff))}`}</div><button class="primary-button" data-action="keypad" data-target="coins">${icon('pencil')} Adjust amount</button><p style="margin:9px 0 0;text-align:center;color:#7c8998;font-size:11px">Close to save this transaction to History</p></section>`;
}
function scannerPage() {
  const step = state.scan.step;
  const hasCard = step === 'price' ? state.scan.priceCard : step === 'tendered' ? state.scan.tenderedCard : state.scan.coinCard;
  const title = step === 'price' ? 'Scan price' : step === 'tendered' ? 'Scan amount paid' : 'Scan change received';
  const hint = step === 'price' ? 'Point at the price and tap Scan' : step === 'tendered' ? 'Point at the amount paid and tap Scan' : 'Point at the returned amount and tap Scan';
  const card = hasCard ? (step === 'price' ? priceScanCard() : step === 'tendered' ? tenderedCard() : coinCard()) : '';
  const dockAction = step === 'coin' && state.scan.coinCard ? 'complete' : step === 'tendered' && state.scan.tenderedCard ? 'return-price' : '';
  const shutter = dockAction ? `<button class="close-stage" data-action="${dockAction}" aria-label="Close">${icon('xmark', 22)}</button>` : `<button class="shutter ${step === 'price' && state.scan.priceCard ? 'reset' : ''}" data-action="capture" aria-label="Scan amount"></button>`;
  const showManual = step === 'price' || step === 'tendered' || (step === 'coin' && !state.scan.coinCard);
  const noCamera = !mediaStream;
  return `<div class="scanner"><video id="camera-preview" class="camera-video" autoplay playsinline muted></video><div class="camera-shade"></div><input id="camera-file" type="file" accept="image/*" capture="environment" hidden/>
    <div class="scanner-header"><button class="scanner-close" data-action="close-scan" aria-label="Close scanner">${icon('xmark', 16)}</button>
      ${step === 'price' ? `<div class="currency-pair">${currencyPill('Price', state.priceCurrency)}<span>${icon('arrow.right', 14)}</span>${currencyPill('To', state.changeCurrency, true)}</div>` : `<div style="font-size:15px;font-weight:650">${state.priceCurrency} &nbsp;→&nbsp; ${state.changeCurrency}</div>`}
      <div class="scan-title">${title}</div>
    </div>
    ${noCamera ? `<div class="camera-message">${icon('viewfinder', 33)}<h3>${state.cameraError ? 'Camera is unavailable' : 'Camera access'}</h3><p>${state.cameraError ? escapeHtml(state.cameraError) : 'Allow camera access to scan a price, or choose an image to read.'}</p><button class="secondary-button" style="width:auto;min-height:39px;padding:0 14px" data-action="request-camera">${icon('viewfinder', 15)} Enable camera</button><button class="manual-link" style="margin-top:9px" data-action="pick-image">Choose photo</button></div>` : ''}
    ${!hasCard && !state.scan.ocrRunning ? `<div class="scan-guide" data-guide="true"></div><div class="scan-hint">${hint}</div>` : ''}
    ${state.scan.ocrRunning ? `<div class="busy" style="position:absolute;z-index:4;top:52%;left:50%;transform:translate(-50%,-50%)"><span class="spinner"></span> Reading amount…</div>` : ''}
    ${state.scan.message ? `<div style="position:absolute;z-index:6;top:112px;left:50%;transform:translateX(-50%);white-space:nowrap;padding:9px 15px;background:rgba(255,255,255,.88);border-radius:99px;color:var(--ink);font-size:12px;font-weight:650">${escapeHtml(state.scan.message)}</div>` : ''}
    ${card}
    <div class="scan-dock"><div class="dock-row"><button class="cart-button" data-action="cart" aria-label="Cart">${icon('cart.fill', 19)}${state.cart.length ? `<span class="cart-count">${state.cart.reduce((sum, item) => sum + item.quantity, 0)}</span>` : ''}</button>${shutter}<button class="dock-spacer" style="border:0;background:transparent" aria-hidden="true"></button></div>${showManual ? `<button class="manual-link" data-action="keypad" data-target="${step === 'price' ? 'price' : step === 'tendered' ? 'tendered' : 'coins'}">Enter amount</button>` : ''}</div>
  </div>`;
}

function render() {
  document.body.classList.toggle('bold-text', state.boldText);
  phone.style.setProperty('--text-scale', state.textScale);
  const page = state.scan.active ? scannerPage() : ({ trip: tripHome, booking: bookingPage, recommend: mapPage, money: moneyPage }[state.tab] || tripHome)();
  phone.innerHTML = `${statusBar()}<div class="app-layer ${state.scan.active ? 'scanner-layer' : ''}">${page}</div>${state.scan.active ? '' : navBar()}${modalView()}${state.toast ? `<div class="toast">${escapeHtml(state.toast)}</div>` : ''}`;
  if (state.scan.active && mediaStream) {
    const video = document.getElementById('camera-preview');
    if (video) { video.srcObject = mediaStream; video.play().catch(() => {}); }
  }
}

function modalHeader(title, left = 'Done', right = '', options = {}) {
  const leftAction = options.leftAction || 'close-modal';
  return `<div class="modal-head"><button data-action="${leftAction}">${left}</button><h2>${title}</h2><button class="right" data-action="${options.rightAction || 'noop'}">${right}</button></div>`;
}
function citySummary() { return state.composer.city || 'Choose destination'; }
function composerSummary(step) {
  if (step === 'where') return citySummary();
  if (step === 'when') return state.composer.start ? `${state.composer.start}${state.composer.end ? ` – ${state.composer.end}` : ''}` : 'Choose travel dates';
  if (step === 'budget') return BUDGETS[state.composer.budget][0];
  return state.composer.prefs.length ? state.composer.prefs.join(' · ') : 'Choose interests';
}
function composerSection(step, title, content) {
  const active = state.composer.step === step;
  return `<section class="composer-section ${active ? 'active' : ''}"><button class="composer-heading" data-action="composer-step" data-step="${step}"><span><h3>${title}</h3>${active ? '' : `<p>${escapeHtml(composerSummary(step))}</p>`}</span>${active ? '' : `<span class="chev">${icon('chevron.down', 13)}</span>`}</button>${active ? `<div class="composer-content">${content}</div>` : ''}</section>`;
}
function composerBody() {
  const matching = CITIES.filter(c => `${c.name} ${c.country}`.toLowerCase().includes(state.composer.query.toLowerCase()));
  const cityContent = `<div class="search-box">${icon('magnifyingglass', 18)}<input data-field="city-query" value="${escapeHtml(state.composer.query)}" placeholder="Search for a destination" /></div><div class="city-list"><h4>${icon('flame.fill', 14)} Trending</h4>${matching.map(city => `<button class="city-row" data-action="select-city" data-city="${city.name}" ${city.name !== 'Bangkok' ? 'disabled' : ''}><span class="city-flag">${city.flag}</span><span><strong>${city.name}</strong><small>${city.country}</small></span>${city.name === 'Bangkok' && state.composer.city ? `<span class="soon">${icon('checkmark.circle.fill', 18)}</span>` : city.name !== 'Bangkok' ? '<span class="soon">Soon</span>' : ''}</button>`).join('')}</div>`;
  const whenContent = `<span class="field-label">Choose your trip dates</span><div class="date-fields"><label><span class="field-label" style="font-size:10px">Start</span><input type="date" data-field="trip-start" value="${state.composer.start}" min="${new Date().toISOString().slice(0, 10)}" /></label><label><span class="field-label" style="font-size:10px">End</span><input type="date" data-field="trip-end" value="${state.composer.end}" min="${state.composer.start || new Date().toISOString().slice(0, 10)}" /></label></div>${state.composer.start ? `<p class="inline-note">${dateDayCount(state.composer.start, state.composer.end)} day${dateDayCount(state.composer.start, state.composer.end) === 1 ? '' : 's'} · ${tripDateLabel({ start: state.composer.start, end: state.composer.end })}</p><button class="secondary-button" style="margin-top:10px;min-height:43px" data-action="composer-step" data-step="budget">Continue ${icon('arrow.right', 15)}</button>` : `<p class="inline-note">Select one date for a day trip, or two dates for an overnight stay.</p>`}`;
  const b = BUDGETS[state.composer.budget];
  const budgetContent = `<h3 class="budget-title">${b[0]}</h3><p class="budget-detail">${b[1]}</p><input class="budget-slider" type="range" min="0" max="4" step="1" value="${state.composer.budget}" data-field="budget"/><div class="budget-labels">${BUDGETS.map((x, i) => `<span class="${i === state.composer.budget ? 'selected' : ''}">${x[0]}</span>`).join('')}</div><button class="secondary-button" style="margin-top:17px;min-height:43px" data-action="composer-step" data-step="preferences">Continue ${icon('arrow.right', 15)}</button>`;
  const prefsContent = `<div class="pref-grid">${PREFS.map(([name, symbol]) => `<button class="pref-button ${state.composer.prefs.includes(name) ? 'selected' : ''}" data-action="toggle-pref" data-pref="${name}">${icon(symbol, 18)} ${name}</button>`).join('')}</div>`;
  return `${composerSection('where', 'Where', cityContent)}${composerSection('when', 'When', whenContent)}${composerSection('budget', 'Budget', budgetContent)}${composerSection('preferences', 'Preferences', prefsContent)}`;
}
function createTripModal() {
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader('Create Trip', ' ', '×', { leftAction: 'close-modal', rightAction: 'close-modal' })}<div class="modal-body stack">${composerBody()}</div>${state.composer.step === 'preferences' ? `<footer class="modal-footer"><button class="primary-button" data-action="create-trip" ${state.composer.prefs.length ? '' : 'disabled'}>${icon('sparkles', 16)} Create trip</button></footer>` : ''}</section></div>`;
}
function settingsModal() {
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Text settings')}<div class="modal-body stack"><div class="settings-panel"><h3>Make it easy to read</h3><p>Adjust text size across your trip and money screens.</p><div class="range-row">${icon('textformat.size', 15)}<input type="range" min="0.85" max="1.45" step="0.05" value="${state.textScale}" data-field="text-scale"/>${icon('textformat.size', 20)}</div><div class="settings-meta">Text size <strong>${Math.round(state.textScale * 100)}%</strong><button data-action="reset-scale">${icon('arrow.counterclockwise', 16)}</button></div></div><label class="toggle-row">Bold text<input type="checkbox" data-field="bold-text" ${state.boldText ? 'checked' : ''}/></label></div></section></div>`;
}
function historyModal() {
  const entries = tripHistory();
  const cards = entries.map(item => `<article class="history-entry ${item.verified ? '' : 'warn'}"><div class="history-entry-top"><span class="entry-status">${icon(item.verified ? 'checkmark.circle.fill' : 'exclamationmark.circle.fill', 13)} ${item.verified ? 'Matched' : 'Check difference'}</span><span class="muted">${new Date(item.date).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'})} · ${new Date(item.date).toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})}</span></div><p style="margin-top:10px"><strong>${escapeHtml(item.products?.[0]?.name || 'Scanned item')}</strong></p>${(item.products || []).map(product => `<div class="history-product-row">${product.image ? `<img src="${product.image}" alt=""/>` : `<span>${icon('bag', 16)}</span>`}<p>${escapeHtml(product.name)} · ${product.quantity || 1} × ${currencyFormat(product.price, product.currency || item.priceCurrency)}</p></div>`).join('')}<div class="value-row"><span>Price</span><strong>${currencyFormat(item.price, item.priceCurrency)}</strong></div><div class="value-row"><span>Paid</span><strong>${currencyFormat(item.paid, item.priceCurrency)}</strong></div><div class="value-row"><span>Expected change</span><strong>${currencyFormat(item.expected, item.priceCurrency)}</strong></div><div class="value-row"><span>Received</span><strong style="color:var(--success)">${currencyFormat(item.received, item.priceCurrency)}</strong></div>${item.converted == null ? '' : `<p style="color:var(--blue)">≈ ${currencyFormat(item.converted, item.changeCurrency)}</p>`}<button class="danger-button" data-action="delete-history" data-id="${item.id}">Delete</button></article>`).join('');
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader('History', entries.length ? 'Clear' : 'Done', '', { leftAction: entries.length ? 'clear-history' : 'close-modal' })}<div class="modal-body">${cards ? `<div class="history-list">${cards}</div>` : `<div class="card empty-card" style="text-align:center;margin-top:25px"><div style="color:var(--secondary);margin-bottom:10px">${icon('clock.arrow.circlepath', 30)}</div><h3>No history yet</h3><p>Completed change checks will appear here.</p></div>`}</div></section></div>`;
}
function cartModal() {
  const items = state.cart.map(item => `<article class="cart-item"><div class="cart-item-row"><span class="cart-thumb">${item.image ? `<img src="${item.image}" alt=""/>` : icon('bag', 23)}</span><span class="cart-main"><strong>${escapeHtml(item.name)}</strong><small>Each · ${currencyFormat(item.price, item.currency, 2)}</small><b>Total · ${currencyFormat(item.price * item.quantity, item.currency, 2)}</b></span><button class="icon-button" style="width:37px;height:37px" data-action="edit-cart" data-id="${item.id}">${icon('pencil', 15)}</button></div><div class="quantity-row"><span>Quantity</span><span class="grow"></span><button data-action="quantity" data-id="${item.id}" data-delta="-1">−</button><strong>${item.quantity}</strong><button data-action="quantity" data-id="${item.id}" data-delta="1">＋</button></div></article>`).join('');
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader(`Cart · ${state.cart.reduce((s,i) => s+i.quantity,0)}`, 'Done', state.cart.length ? 'Clear' : '', { leftAction: 'close-modal', rightAction: 'clear-cart' })}<div class="modal-body">${items ? `<div class="cart-list">${items}</div><div class="cart-total"><span>Total · ${state.priceCurrency}</span><strong>${currencyFormat(state.cart.reduce((sum,i) => sum+i.price*i.quantity,0), state.priceCurrency, 2)}</strong></div><button class="primary-button" data-action="checkout">Checkout · Calculate change ${icon('arrow.right')}</button>` : `<div class="card empty-card" style="text-align:center;margin-top:20px"><div style="color:var(--secondary);margin-bottom:10px">${icon('cart.fill', 30)}</div><h3>Your cart is empty</h3><p>Scan a price and tap Add to cart.</p></div>`}</div></section></div>`;
}
function keypadModal() {
  const target = state.modal.target;
  const value = state.modal.value ?? '';
  const title = target === 'price' ? `Amount · ${state.priceCurrency}` : target === 'tendered' ? `Amount paid · ${state.priceCurrency}` : `Amount · ${state.priceCurrency}`;
  const keys = ['1','2','3','4','5','6','7','8','9','.','0','⌫'];
  return `<div class="modal-backdrop"><section class="modal full" style="height:92%">${modalHeader(title, 'Cancel', '', { leftAction: 'close-modal' })}<div class="modal-body" style="display:flex;flex-direction:column;justify-content:center"><div class="keypad-value"><strong>${escapeHtml(value || '0')}</strong><p>≈ ${currencyFormat((Number(value) || 0) * state.conversionRate, state.changeCurrency)}</p></div><div class="quick-chips"><button data-action="quick-add" data-add="100">+100</button><button data-action="quick-add" data-add="10">+10</button><button data-action="key-clear" style="color:#d65d5d">Clear</button></div><div class="keypad-grid">${keys.map(k => `<button data-action="key" data-key="${k}">${k}</button>`).join('')}</div><button class="primary-button" style="margin-top:16px" data-action="key-confirm">${target === 'coins' ? 'Save and finish' : 'Confirm'}</button></div></section></div>`;
}
function hotelModal() {
  const h = HOTELS.find(x => x.id === state.modal.id); if (!h) return '';
  const trip = selectedTrip(), max = Math.max(0, dateDayCount(trip?.start, trip?.end) - 1);
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Choose stay')}<div class="modal-body stack"><img class="hotel-hero" src="${h.image}" alt="${escapeHtml(h.name)}"/><div class="place-detail-copy"><h2 style="font-size:21px">${escapeHtml(h.name)}</h2><p>${escapeHtml(h.area)} · ${h.rating} ★<br>${escapeHtml(h.description)}</p></div><div class="cart-total"><span>Number of nights</span><span style="display:flex;align-items:center;gap:12px"><button class="icon-button" style="width:31px;height:31px" data-action="hotel-night" data-delta="-1">−</button><strong style="font-size:17px">${state.hotelNights}</strong><button class="icon-button" style="width:31px;height:31px" data-action="hotel-night" data-delta="1">＋</button></span></div><div class="card empty-card" style="display:flex;justify-content:space-between"><span>Total</span><strong>${currencyFormat(h.price * state.hotelNights, 'THB')}</strong></div><button class="primary-button" data-action="confirm-hotel" data-id="${h.id}" ${max < 1 ? 'disabled' : ''}>Save booking</button></div></section></div>`;
}
function placeModal() {
  const p = PLACES.find(x => x.id === state.modal.id); if (!p) return '';
  const mapBox = `${(p.lng - .012).toFixed(4)}%2C${(p.lat - .010).toFixed(4)}%2C${(p.lng + .012).toFixed(4)}%2C${(p.lat + .010).toFixed(4)}`;
  return `<div class="modal-backdrop"><section class="modal full" style="height:92%">${modalHeader('Place details')}<div class="modal-body stack"><img class="hotel-hero" src="${p.image}" alt="${escapeHtml(p.name)}"/><div class="place-detail-copy"><span class="eyebrow" style="color:#7899bb;font-size:10px;font-weight:750;letter-spacing:.08em;text-transform:uppercase">${p.category}</span><h2>${escapeHtml(p.name)}</h2><p>${escapeHtml(p.subtitle)}</p></div><div class="card empty-card"><span style="color:#d9a63f;font-weight:750">${icon('star.fill', 14)} ${p.rating}</span></div><p class="modal-copy">${escapeHtml(p.description)}</p><div class="transport-grid"><div class="transport">${icon('figure.walk')}<strong>${p.walk} min</strong><small>Walk</small></div><div class="transport">${icon('bus.fill')}<strong>${p.bus} min</strong><small>Bus</small></div><div class="transport">${icon('tram.fill')}<strong>${p.train} min</strong><small>Train</small></div><div class="transport">${icon('car.fill')}<strong>${p.drive} min</strong><small>Drive</small></div></div><button class="primary-button" data-action="navigation">${icon('arrow.up.right')} Start navigation</button><div class="modal-map"><iframe class="map-embed" title="Map for ${escapeHtml(p.name)}" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${mapBox}&layer=mapnik&marker=${p.lat}%2C${p.lng}"></iframe></div><small class="muted">Travel times are approximate · © OpenStreetMap contributors</small></div></section></div>`;
}
function renderDayStops(day, plan) {
  const start = { id: 'bangkok-center', name: 'Central Bangkok', lat: 13.7563, lng: 100.5018 };
  return plan.map((place, i) => {
    const origin = i ? plan[i - 1] : start;
    const key = `day-${day}-${i}`;
    const mode = state.routeModes[key] || 'walk';
    const route = routeEstimate(origin, place, mode);
    const modeName = { walk: 'Walk', transit: 'Bus', drive: 'Car' }[mode];
    const modeIcon = { walk: 'figure.walk', transit: 'bus.fill', drive: 'car.fill' }[mode];
    const expanded = state.routeExpandedKey === key;
    const modes = ['walk', 'transit', 'drive'].map(m => {
      const estimate = routeEstimate(origin, place, m);
      return `<button class="route-choice ${m === mode ? 'active' : ''}" data-action="route-mode" data-key="${key}" data-mode="${m}"><span>${icon({walk:'figure.walk',transit:'bus.fill',drive:'car.fill'}[m],13)} ${({walk:'Walk',transit:'Bus',drive:'Car'}[m])}</span><small>${estimate.minutes}m · ${estimate.distance.toFixed(1)}km</small></button>`;
    }).join('');
    return `<div class="itinerary-stop"><span class="itinerary-time">${['9:00 AM','12:30 PM','4:00 PM'][i]}</span><div class="itinerary-place"><img src="${place.image}" alt=""/><span><strong>${escapeHtml(place.name)}</strong><small>${escapeHtml(place.subtitle)}</small><small style="color:var(--blue)">${place.category}</small></span></div></div><div class="route-leg"><button class="route-summary" data-action="route-expand" data-key="${key}">${icon(modeIcon,13)} ${modeName} ${route.minutes}m · ${route.distance.toFixed(1)}km ${icon(expanded ? 'chevron.down' : 'chevron.right',10)}</button><button class="route-map-button" data-action="route-map" data-origin="${escapeHtml(origin.name)}" data-destination="${escapeHtml(place.name)}" data-origin-lat="${origin.lat}" data-origin-lng="${origin.lng}" data-dest-lat="${place.lat}" data-dest-lng="${place.lng}" data-mode="${mode}" aria-label="Show route on map">${icon('map.fill',14)}</button>${expanded ? `<div class="route-choices">${modes}</div>` : ''}</div>`;
  }).join('');
}
function tripModal() {
  const trip = state.trips.find(t => t.id === state.modal.id); if (!trip) return '';
  const hotel = state.bookings.find(b => b.tripId === trip.id), days = dateDayCount(trip.start, trip.end);
  const isDay = state.selectedDay != null;
  const title = `${days === 2 ? 'Two' : days} Days in ${trip.city}`;
  let content = '';
  if (isDay) {
    const d = state.selectedDay;
    const plan = [PLACES[(d * 3 - 3) % PLACES.length], PLACES[(d * 3 - 2) % PLACES.length], PLACES[(d * 3 - 1) % PLACES.length]];
    content = `<div class="overview-card"><h3>${['Temples, river & old town','Markets, cafés & local life','A Bangkok day out'][(d-1)%3]}</h3><small class="muted">Day ${d} · ${trip.start ? new Date(new Date(`${trip.start}T00:00:00`).getTime()+(d-1)*86400000).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : 'Bangkok'}</small></div>${renderDayStops(d, plan)}`;
  } else {
    content = `<div class="overview-card"><h3>${icon('bed.double.fill', 17)} Hotel</h3>${hotel ? `<p class="modal-copy">${escapeHtml(hotel.name)} · ${hotel.nights} night${hotel.nights===1?'':'s'}<br>${currencyFormat(hotel.price*hotel.nights,'THB')}</p>` : `<p class="modal-copy">${days===1?'No overnight stay for a one-day trip.':'No hotel added yet.'}</p>`}<button class="secondary-button" style="min-height:42px;margin-top:10px" data-action="book-from-trip">${icon('bed.double')} ${hotel?'Change hotel':'Book hotel'}</button></div><div style="display:flex;align-items:center;justify-content:space-between"><div><h3 style="margin:0;font-size:19px">Your days</h3><p class="section-subtitle">Tap a day to see stops and how to get there.</p></div>${icon('map.fill', 22)}</div>${Array.from({length:days},(_,i)=>`<button class="day-card" data-action="trip-day" data-day="${i+1}"><span class="day-number" style="background:${['#d99a32','#1a66d1','#d96d9d','#5e9a78','#8877c7'][i%5]}">Day ${i+1}</span><span class="day-copy"><strong>${['Temples, river & old town','Markets, cafés & local life','A Bangkok day out'][i%3]}</strong><small>${trip.start ? new Date(new Date(`${trip.start}T00:00:00`).getTime()+i*86400000).toLocaleDateString('en-US',{month:'short',day:'numeric'}) : '3 places to explore'}</small></span><span class="distance">~4.8 km · 3 spots</span></button>`).join('')}`;
  }
  return `<div class="modal-backdrop"><section class="modal full">${modalHeader('My Trip', '', '×', { leftAction: 'close-modal', rightAction: 'close-modal' })}<div class="modal-body stack"><div class="trip-hero"><img src="${PLACES[0].image}"/><span><h3>${title}</h3><p>${days} days · ${days*3} spots</p><span class="blue-note">${tripDateLabel(trip)}</span></span></div><div class="segmented"><button class="segment-button ${!isDay?'active':''}" data-action="trip-day" data-day="overview">${icon('map', 14)} Overview</button>${Array.from({length:days},(_,i)=>`<button class="segment-button ${state.selectedDay===i+1?'active':''}" data-action="trip-day" data-day="${i+1}">Day ${i+1}</button>`).join('')}</div>${content}<p class="inline-note">Times and distances are approximate.</p></div></section></div>`;
}
function routeMapModal() {
  const r = state.modal;
  const minLng = Math.min(r.originLng, r.destLng) - .008, maxLng = Math.max(r.originLng, r.destLng) + .008;
  const minLat = Math.min(r.originLat, r.destLat) - .008, maxLat = Math.max(r.originLat, r.destLat) + .008;
  const bbox = `${minLng.toFixed(4)}%2C${minLat.toFixed(4)}%2C${maxLng.toFixed(4)}%2C${maxLat.toFixed(4)}`;
  const mode = r.mode || 'walk', modeName = {walk:'Walk',transit:'Bus',drive:'Car'}[mode];
  const from = { lat: r.originLat, lng: r.originLng }, to = { lat: r.destLat, lng: r.destLng };
  const estimate = routeEstimate(from, to, mode);
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Route details')}<div class="modal-body stack"><div class="route-points"><div class="route-point"><span class="route-dot"></span><span><strong>${escapeHtml(r.origin)}</strong><small>Start point</small></span></div><i></i><div class="route-point"><span class="route-dot end"></span><span><strong>${escapeHtml(r.destination)}</strong><small>Destination</small></span></div></div><div class="route-summary large">${icon({walk:'figure.walk',transit:'bus.fill',drive:'car.fill'}[mode],16)} ${modeName} ${estimate.minutes} min · ${estimate.distance.toFixed(1)} km</div><div class="modal-map"><iframe class="map-embed" title="Route map" loading="lazy" src="https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${r.destLat}%2C${r.destLng}"></iframe><span class="route-path"></span></div><small class="muted">Approximate demo route · © OpenStreetMap contributors</small></div></section></div>`;
}
function duplicateModal() {
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:2px 0;font-size:21px">Add another item?</h2><p class="modal-copy">A product with this price is already in your cart. Add 1 to its quantity or keep it separate.</p><button class="primary-button" data-action="duplicate-quantity">Add 1 to existing item</button><button class="secondary-button" data-action="duplicate-separate">Keep as separate item</button><button class="danger-button" data-action="close-modal">Cancel</button></div></section></div>`;
}
function deleteTripModal() {
  const trip = state.trips.find(t => t.id === state.modal.id); if (!trip) return '';
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:0;font-size:24px">Remove this trip?</h2><div class="card empty-card"><strong>${dateDayCount(trip.start,trip.end)} Days in ${escapeHtml(trip.city)}</strong><p>${tripDateLabel(trip)}</p></div><p class="modal-copy">Bookings for this trip will also be removed.</p><button class="danger-button" style="height:46px;border-radius:99px;background:#fff0ef" data-action="confirm-delete-trip">Delete trip</button><button class="secondary-button" data-action="close-modal">Cancel</button></div></section></div>`;
}
function tripOptionsModal() {
  const trip = state.trips.find(t => t.id === state.modal.id); if (!trip) return '';
  return `<div class="modal-backdrop"><section class="modal center"><div class="modal-body stack"><h2 style="margin:0;font-size:20px">Trip options</h2><div class="card empty-card"><strong>${dateDayCount(trip.start,trip.end)} Days in ${escapeHtml(trip.city)}</strong><p>${tripDateLabel(trip)}</p></div><button class="secondary-button" data-action="duplicate-trip">${icon('plus', 16)} Duplicate</button><button class="danger-button" style="min-height:44px;border-radius:99px;background:#fff0ef" data-action="delete-trip">${icon('xmark', 14)} Delete</button><button class="secondary-button" data-action="close-modal">Cancel</button></div></section></div>`;
}
function editCartModal() {
  const item = state.cart.find(x => x.id === state.modal.id); if (!item) return '';
  return `<div class="modal-backdrop"><section class="modal"><div class="sheet-handle" style="margin-top:10px"></div>${modalHeader('Edit item')}<div class="modal-body stack"><div class="form-group"><label>Item name</label><input data-field="edit-name" value="${escapeHtml(item.name)}"/></div><div class="form-group"><label>Unit price (${item.currency})</label><input type="number" min="0.01" step="0.01" data-field="edit-price" value="${item.price}"/></div><div class="form-group"><label>Quantity</label><input type="number" min="1" step="1" data-field="edit-quantity" value="${item.quantity}"/></div><div class="card empty-card">Currency: ${item.currency}<br>Line total: ${currencyFormat(item.price*item.quantity,item.currency,2)}</div><button class="primary-button" data-action="save-cart-edit">Save</button></div></section></div>`;
}
function modalView() {
  if (!state.modal) return '';
  switch (state.modal.type) {
    case 'createTrip': return createTripModal();
    case 'settings': return settingsModal();
    case 'history': return historyModal();
    case 'cart': return cartModal();
    case 'keypad': return keypadModal();
    case 'hotel': return hotelModal();
    case 'place': return placeModal();
    case 'trip': return tripModal();
    case 'routeMap': return routeMapModal();
    case 'duplicate': return duplicateModal();
    case 'deleteTrip': return deleteTripModal();
    case 'tripOptions': return tripOptionsModal();
    case 'editCart': return editCartModal();
    default: return '';
  }
}

function openComposer() {
  state.composer = { step: 'where', query: '', city: '', start: '', end: '', budget: 2, prefs: [] };
  state.modal = { type: 'createTrip' };
  render();
}
function openScan() {
  state.modal = null;
  scanImageData = null;
  state.scan = { active: true, step: 'price', price: 0, tendered: 0, received: 0, product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: false, message: '', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  state.cameraError = '';
  render();
  requestCamera();
  fetchRate();
}
async function requestCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    state.cameraError = 'Camera preview needs a secure browser page (HTTPS or localhost). You can choose a photo or enter the amount.';
    render(); return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } }, audio: false });
    if (!state.scan.active) { stream.getTracks().forEach(track => track.stop()); return; }
    mediaStream = stream;
    state.cameraError = '';
    render();
  } catch (error) {
    mediaStream = null;
    state.cameraError = error?.name === 'NotAllowedError' ? 'Camera access is off. Allow camera access in your browser, or choose a photo.' : 'The camera is unavailable on this device. Choose a photo or enter the amount.';
    render();
  }
}
function closeScan() {
  if (mediaStream) { mediaStream.getTracks().forEach(track => track.stop()); mediaStream = null; }
  scanImageData = null;
  state.scan.active = false;
  state.modal = null;
  render();
}
function pickImage() { document.getElementById('camera-file')?.click(); }
async function captureAmount() {
  if (!mediaStream) { pickImage(); return; }
  const video = document.getElementById('camera-preview');
  if (!video || !video.videoWidth) { pickImage(); return; }
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth; canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.toBlob(blob => { if (blob) performOCR(blob); else toast('Could not capture an image.'); }, 'image/jpeg', .92);
}
async function compressedImageData(blob) {
  try {
    const bitmap = await createImageBitmap(blob);
    const scale = Math.min(1, 1024 / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(bitmap.width * scale); canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext('2d').drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    bitmap.close?.();
    return canvas.toDataURL('image/jpeg', .72);
  } catch {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = () => reject(new Error('Could not save the scan image.'));
      reader.readAsDataURL(blob);
    });
  }
}
function parseAmount(data) {
  const lines = data?.lines || [];
  const width = data?.image?.width || 1, height = data?.image?.height || 1;
  const candidates = [];
  for (const line of lines) {
    const text = String(line.text || '').replace(/,/g, '');
    const box = line.bbox || { x0: width / 2, y0: height / 2, x1: width / 2, y1: height / 2 };
    const distance = Math.hypot(((box.x0 + box.x1) / 2) / width - .5, ((box.y0 + box.y1) / 2) / height - .5);
    for (const match of text.matchAll(/\d+(?:\.\d{1,2})?/g)) {
      const amount = Number(match[0]);
      if (amount > 0) candidates.push({ amount, score: (Number(line.confidence) || 0) - distance * 20 });
    }
  }
  if (!candidates.length) {
    for (const match of String(data?.text || '').replace(/,/g, '').matchAll(/\d+(?:\.\d{1,2})?/g)) {
      const amount = Number(match[0]); if (amount > 0) candidates.push({ amount, score: 0 });
    }
  }
  candidates.sort((a, b) => b.score - a.score);
  return candidates[0]?.amount ?? null;
}
async function performOCR(image) {
  state.scan.ocrRunning = true; state.scan.ocrProgress = 0; state.scan.message = '';
  render();
  try {
    const recognizedImageData = await compressedImageData(image);
    if (!window.Tesseract?.createWorker) throw new Error('OCR library is not available. Check your connection, then try again.');
    if (!ocrWorker) {
      ocrWorker = await window.Tesseract.createWorker('eng', 1, {
        logger: progress => {
          if (progress.status === 'recognizing text') {
            state.scan.ocrProgress = Math.round((progress.progress || 0) * 100);
            render();
          }
        },
      });
    }
    const result = await ocrWorker.recognize(image);
    const amount = parseAmount(result.data);
    if (!amount) {
      if (state.scan.step === 'price') scanImageData = null;
      state.scan.ocrRunning = false;
      state.scan.message = 'No price found. Try again or enter the amount.';
      render();
      setTimeout(() => { if (state.scan.active) { state.scan.message = ''; render(); } }, 2600);
      return;
    }
    if (state.scan.step === 'price') scanImageData = recognizedImageData;
    state.scan.ocrRunning = false;
    acceptAmount(amount);
  } catch (error) {
    if (state.scan.step === 'price') scanImageData = null;
    state.scan.ocrRunning = false;
    state.scan.message = error?.message || 'Could not read the amount. Try again or enter it manually.';
    render();
    setTimeout(() => { if (state.scan.active) { state.scan.message = ''; render(); } }, 2800);
  }
}
function acceptAmount(amount) {
  const value = Number(amount);
  if (!(value > 0)) { state.scan.message = 'Enter an amount greater than zero.'; render(); return; }
  if (state.scan.step === 'price') {
    state.scan.price = value; state.scan.priceCard = true;
    state.scan.currentFavorite = state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - value) < .001);
  } else if (state.scan.step === 'tendered') {
    state.scan.tendered = value; state.scan.tenderedCard = true;
  } else { state.scan.received = value; state.scan.coinCard = true; }
  state.scan.message = '';
  render();
}
function openKeypad(target) {
  let current = target === 'price' ? state.scan.price : target === 'tendered' ? state.scan.tendered : state.scan.received;
  state.modal = { type: 'keypad', target, value: current ? String(current) : '' };
  render();
}
function confirmKeypad() {
  const target = state.modal.target, amount = Number(state.modal.value);
  if (!Number.isFinite(amount) || state.modal.value === '') { toast('Enter a valid amount.'); return; }
  if (target === 'price' && amount <= 0) { toast('Price must be greater than zero.'); return; }
  if (target === 'tendered' && amount <= 0) { toast('Amount paid must be greater than zero.'); return; }
  if (target === 'price') { state.scan.price = amount; state.scan.priceCard = true; state.scan.currentFavorite = state.favorites.some(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - amount) < .001); }
  if (target === 'tendered') { state.scan.tendered = amount; state.scan.tenderedCard = true; }
  if (target === 'coins') { state.scan.received = amount; state.scan.coinCard = amount > 0; state.modal = null; completeChangeFlow(); return; }
  state.modal = null; render();
}
function toggleFavorite() {
  const index = state.favorites.findIndex(f => f.priceCurrency === state.priceCurrency && Math.abs(f.price - state.scan.price) < .001);
  if (index >= 0) { state.favorites.splice(index, 1); state.scan.currentFavorite = false; }
  else { state.favorites.unshift({ id: uid(), price: state.scan.price, priceCurrency: state.priceCurrency, date: new Date().toISOString() }); state.scan.currentFavorite = true; }
  persist('favorites', state.favorites); render();
}
function addCurrentToCart(forceSeparate = false) {
  const match = state.cart.find(item => item.currency === state.priceCurrency && Math.abs(item.price - state.scan.price) < .001);
  if (match && !forceSeparate) { state.modal = { type: 'duplicate' }; render(); return; }
  const next = Math.max(0, ...state.cart.map(item => Number(String(item.name).match(/item\s+(\d+)/i)?.[1]) || 0)) + 1;
  state.cart.push({ id: uid(), name: `item ${next}`, price: state.scan.price, quantity: 1, currency: state.priceCurrency, image: scanImageData });
  state.modal = null; saveState(); render();
}
function completeChangeFlow() {
  const expected = Math.max(0, state.scan.tendered - state.scan.price);
  const received = state.scan.received;
  const products = state.scan.isCartCheckout
    ? state.cart.map(item => ({ name: item.name, price: item.price, quantity: item.quantity, currency: item.currency, image: item.image || null }))
    : [{ name: state.scan.product.trim() || 'Scanned item', price: state.scan.price, quantity: 1, currency: state.priceCurrency, image: scanImageData }];
  const entry = {
    id: uid(), date: new Date().toISOString(), price: state.scan.price,
    converted: state.rateUnavailable || state.rateLoading ? null : state.scan.price * state.conversionRate,
    paid: state.scan.tendered, expected, received,
    priceCurrency: state.priceCurrency, changeCurrency: state.changeCurrency,
    verified: Math.abs(received - expected) < .01, products,
    tripId: selectedTrip()?.id || null,
  };
  state.history.unshift(entry);
  if (state.scan.isCartCheckout) state.cart = [];
  scanImageData = null;
  state.scan = { active: true, step: 'price', price: 0, tendered: 0, received: 0, product: 'Scanned item', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: false, message: 'Saved to History', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  saveState(); render();
  setTimeout(() => { if (state.scan.active && state.scan.message === 'Saved to History') { state.scan.message = ''; render(); } }, 2500);
}
function checkoutCart() {
  const total = state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  if (!(total > 0)) return;
  state.scan = { active: true, step: 'tendered', price: total, tendered: 0, received: 0, product: 'Scanned purchase', priceCard: false, tenderedCard: false, coinCard: false, isCartCheckout: true, message: '', ocrRunning: false, ocrProgress: 0, currentFavorite: false };
  state.modal = null; render();
}
function selectTrip(id) { state.selectedTrip = id; persist('selectedTrip', id); }
function createTrip() {
  if (!state.composer.prefs.length) return;
  const start = state.composer.start || '', end = state.composer.end || (start ? start : '');
  const trip = { id: uid(), city: state.composer.city || 'Bangkok', countryCode: 'TH', start, end, budget: Number(state.composer.budget), prefs: [...state.composer.prefs], currency: 'THB', created: new Date().toISOString() };
  state.trips.unshift(trip); state.selectedTrip = trip.id; state.tab = 'trip'; state.modal = null; saveState(); render();
}
function duplicateTrip(id) {
  const trip = state.trips.find(t => t.id === id); if (!trip) return;
  const copy = { ...trip, id: uid(), created: new Date().toISOString() };
  state.trips.unshift(copy); selectTrip(copy.id); state.modal = null; saveState(); render();
}
function removeTrip(id) {
  state.trips = state.trips.filter(t => t.id !== id);
  state.bookings = state.bookings.filter(b => b.tripId !== id);
  if (state.selectedTrip === id) state.selectedTrip = state.trips[0]?.id || null;
  state.modal = null; saveState(); render();
}

async function doAction(action, el) {
  const id = el.dataset.id;
  switch (action) {
    case 'tab': state.tab = el.dataset.tab; state.modal = null; render(); break;
    case 'new-trip': openComposer(); break;
    case 'settings': state.modal = { type: 'settings' }; render(); break;
    case 'start-scan': openScan(); break;
    case 'close-scan': closeScan(); break;
    case 'request-camera': requestCamera(); break;
    case 'pick-image': pickImage(); break;
    case 'capture':
      if (state.scan.step === 'price' && state.scan.priceCard) {
        state.scan.price = 0; state.scan.priceCard = false; state.scan.tendered = 0; state.scan.received = 0; scanImageData = null;
        state.scan.message = ''; render();
      } else captureAmount();
      break;
    case 'cart': state.modal = { type: 'cart' }; render(); break;
    case 'history': state.modal = { type: 'history' }; render(); break;
    case 'close-modal':
      if (state.modal?.type === 'routeMap' && state.parentModal) { state.modal = state.parentModal; state.parentModal = null; }
      else { state.modal = null; state.parentModal = null; }
      render(); break;
    case 'noop': break;
    case 'composer-step': state.composer.step = el.dataset.step; render(); break;
    case 'select-city': if (el.dataset.city === 'Bangkok') { state.composer.city = 'Bangkok'; state.composer.step = 'when'; render(); } break;
    case 'toggle-pref': {
      const pref = el.dataset.pref;
      state.composer.prefs = state.composer.prefs.includes(pref) ? state.composer.prefs.filter(p => p !== pref) : [...state.composer.prefs, pref];
      render(); break;
    }
    case 'create-trip': createTrip(); break;
    case 'place-filter': state.placeFilter = el.dataset.filter; render(); break;
    case 'collapse-places': state.showPlaces = !state.showPlaces; render(); break;
    case 'place-detail': state.modal = { type: 'place', id }; render(); break;
    case 'trip-detail': selectTrip(id); state.selectedDay = null; state.modal = { type: 'trip', id }; render(); break;
    case 'trip-options': state.modal = { type: 'tripOptions', id }; render(); break;
    case 'duplicate-trip': duplicateTrip(state.modal.id); break;
    case 'delete-trip': state.modal = { type: 'deleteTrip', id: state.modal.id }; render(); break;
    case 'confirm-delete-trip': removeTrip(state.modal.id); break;
    case 'trip-day': state.selectedDay = el.dataset.day === 'overview' ? null : Number(el.dataset.day); render(); break;
    case 'route-expand': state.routeExpandedKey = state.routeExpandedKey === el.dataset.key ? null : el.dataset.key; render(); break;
    case 'route-mode': state.routeModes[el.dataset.key] = el.dataset.mode; render(); break;
    case 'route-map':
      state.parentModal = state.modal;
      state.modal = { type: 'routeMap', origin: el.dataset.origin, destination: el.dataset.destination, originLat: Number(el.dataset.originLat), originLng: Number(el.dataset.originLng), destLat: Number(el.dataset.destLat), destLng: Number(el.dataset.destLng), mode: el.dataset.mode };
      render(); break;
    case 'book-from-trip': {
      const trip = state.trips.find(t => t.id === state.modal.id);
      if (!trip || dateDayCount(trip.start, trip.end) <= 1) break;
      if (trip) selectTrip(trip.id);
      state.modal = null; state.tab = 'booking'; render(); break;
    }
    case 'hotel': state.hotelNights = Math.max(1, dateDayCount(selectedTrip()?.start, selectedTrip()?.end) - 1); state.modal = { type: 'hotel', id }; render(); break;
    case 'hotel-night': state.hotelNights = Math.max(1, Math.min(Math.max(1, dateDayCount(selectedTrip()?.start, selectedTrip()?.end) - 1), state.hotelNights + Number(el.dataset.delta))); render(); break;
    case 'confirm-hotel': {
      const hotel = HOTELS.find(h => h.id === el.dataset.id), trip = selectedTrip();
      if (hotel && trip && dateDayCount(trip.start, trip.end) > 1) {
        const booking = { tripId: trip.id, hotelId: hotel.id, name: hotel.name, area: hotel.area, price: hotel.price, nights: Math.min(state.hotelNights, dateDayCount(trip.start, trip.end) - 1), guests: 1 };
        state.bookings = [booking, ...state.bookings.filter(b => b.tripId !== trip.id)];
        state.modal = null; saveState(); render(); toast('Booking saved');
      } break;
    }
    case 'navigation': state.modal = null; render(); toast('Travel times are approximate.'); break;
    case 'favorite': toggleFavorite(); break;
    case 'keypad': openKeypad(el.dataset.target); break;
    case 'key': {
      const key = el.dataset.key; let val = state.modal.value || '';
      if (key === '⌫') val = val.slice(0, -1);
      else if (key === '.') { if (!val.includes('.')) val += '.'; }
      else val = val === '0' ? key : val + key;
      state.modal.value = val; render(); break;
    }
    case 'quick-add': state.modal.value = String((Number(state.modal.value) || 0) + Number(el.dataset.add)); render(); break;
    case 'key-clear': state.modal.value = '0'; render(); break;
    case 'key-confirm': confirmKeypad(); break;
    case 'calculate-change': state.scan.step = 'tendered'; state.scan.tenderedCard = false; render(); break;
    case 'verify-change': {
      const due = Math.max(0, state.scan.tendered - state.scan.price);
      if (due > 0) { state.scan.step = 'coin'; state.scan.coinCard = false; render(); }
      else { state.scan.received = 0; completeChangeFlow(); }
      break;
    }
    case 'return-price': state.scan.step = 'price'; state.scan.tenderedCard = false; render(); break;
    case 'complete': completeChangeFlow(); break;
    case 'add-cart': addCurrentToCart(false); break;
    case 'duplicate-quantity': {
      const match = state.cart.find(item => item.currency === state.priceCurrency && Math.abs(item.price - state.scan.price) < .001);
      if (match) match.quantity += 1;
      state.modal = null; saveState(); render(); break;
    }
    case 'duplicate-separate': addCurrentToCart(true); break;
    case 'quantity': {
      const item = state.cart.find(x => x.id === id); if (item) item.quantity += Number(el.dataset.delta);
      state.cart = state.cart.filter(x => x.quantity > 0); saveState(); render(); break;
    }
    case 'clear-cart': if (state.cart.length) { state.cart = []; saveState(); render(); } break;
    case 'checkout': checkoutCart(); break;
    case 'edit-cart': state.modal = { type: 'editCart', id }; render(); break;
    case 'save-cart-edit': {
      const item = state.cart.find(x => x.id === state.modal.id);
      const name = document.querySelector('[data-field="edit-name"]')?.value.trim();
      const price = Number(document.querySelector('[data-field="edit-price"]')?.value);
      const quantity = Number(document.querySelector('[data-field="edit-quantity"]')?.value);
      if (item && price > 0 && Number.isInteger(quantity) && quantity > 0) { item.name = name || item.name; item.price = price; item.quantity = quantity; state.modal = { type: 'cart' }; saveState(); render(); }
      else toast('Enter a price and quantity greater than zero.');
      break;
    }
    case 'clear-history': if (confirm('Clear all saved transactions?')) { state.history = []; saveState(); render(); } break;
    case 'delete-history': state.history = state.history.filter(h => h.id !== id); saveState(); render(); break;
    case 'reset-scale': state.textScale = 1; saveState(); render(); break;
  }
}

phone.addEventListener('click', event => {
  const target = event.target.closest('[data-action]');
  if (target) { void doAction(target.dataset.action, target); return; }
  if (event.target.classList.contains('modal-backdrop')) {
    if (state.modal?.type === 'routeMap' && state.parentModal) { state.modal = state.parentModal; state.parentModal = null; }
    else { state.modal = null; state.parentModal = null; }
    render();
  }
});
phone.addEventListener('input', event => {
  const field = event.target.dataset.field;
  if (field === 'product') { state.scan.product = event.target.value; return; }
  if (field === 'text-scale') {
    state.textScale = Number(event.target.value);
    phone.style.setProperty('--text-scale', state.textScale);
    const badge = phone.querySelector('.settings-meta strong');
    if (badge) badge.textContent = `${Math.round(state.textScale * 100)}%`;
    return;
  }
  if (field === 'city-query') {
    const value = event.target.value, selection = event.target.selectionStart;
    state.composer.query = value; render();
    const input = phone.querySelector('[data-field="city-query"]');
    if (input) { input.focus(); input.setSelectionRange(selection, selection); }
  }
});
phone.addEventListener('change', event => {
  const field = event.target.dataset.field;
  if (field === 'priceCurrency' || field === 'changeCurrency') {
    if (field === 'priceCurrency' && state.cart.length) { event.target.value = state.priceCurrency; return; }
    state[field] = event.target.value; saveState(); render(); fetchRate(); return;
  }
  if (field === 'product') { state.scan.product = event.target.value; return; }
  if (field === 'trip-start') {
    state.composer.start = event.target.value;
    if (state.composer.end && state.composer.end < state.composer.start) state.composer.end = '';
    render(); return;
  }
  if (field === 'trip-end') { state.composer.end = event.target.value; render(); return; }
  if (field === 'budget') { state.composer.budget = Number(event.target.value); render(); return; }
  if (field === 'text-scale') { state.textScale = Number(event.target.value); saveState(); render(); return; }
  if (field === 'bold-text') { state.boldText = event.target.checked; saveState(); render(); return; }
  if (event.target.id === 'camera-file') {
    const file = event.target.files?.[0];
    if (file) performOCR(file);
  }
});

render();
fetchRate();
