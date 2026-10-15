# JourPlan

This repository contains **JourPlan**, a browser-based review demo of a travel-planning and travel-money app. It recreates the iOS app's main screens and interactions in a fixed, portrait phone frame for presentations and judging.

## Live demo

Open the [JourPlan web demo](https://jamesswnn.github.io/JourPlan/).

## Demo overview

- The interface is fixed at **393 × 852 px** and is intentionally not responsive. Open it on a desktop and view the complete phone-sized canvas.
- Explore trip planning, hotel booking, place recommendations, itinerary details, route estimates, travel money, cart, history, favorites, and settings.
- Scan a price or banknote using a camera or image upload. Tesseract.js runs OCR in the browser; manual amount entry is available as a fallback.
- Exchange rates are requested from the Frankfurter API. The place detail screen uses an OpenStreetMap embed.
- Demo trips, bookings, cart items, favorites, settings, and scan history are saved in browser `localStorage`.

## Run locally

From the repository root, start a static HTTP server:

```sh
python3 -m http.server 8000
```

Open <http://localhost:8000>. Camera access is available on `localhost` or on an HTTPS deployment, subject to the browser's permission prompt. OCR recognition data is loaded from the Tesseract.js CDN, so OCR requires an internet connection.

## Project structure

- `index.html` — page entry point
- `styles.css` — fixed-size mobile layout and visual styling
- `app.js` — screens, interactions, local persistence, API calls, and OCR flow
- `JourPlan/` — original SwiftUI iOS project source

## Demo notes

This is a presentation prototype, not a production travel service. Route durations and distances are illustrative estimates. Browser icons are inline SVG approximations of the original SF Symbols. OCR accuracy depends on image quality and currency format. The web demo does not send scan images to a custom backend; OCR is performed in the browser, while OCR engine assets, exchange-rate requests, and map tiles or embeds are provided by their respective external services.
