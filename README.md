# PKHosting VPS pricing page assessment

This project presents four VPS plans with billing and currency controls, a plan comparison, FAQs, and payment information based on the available PKHosting research.

## Run locally

Open `index.html` directly in a current web browser. No local server, package installation, or build step is required.

## Implemented

- Four plans: Starter, Growth, Scale, and Dedicated Core.
- Monthly and annual billing display. Annual billing totals are calculated as ten monthly payments for twelve months of service.
- PKR, USD, and GBP display using the fixed exchange rates documented in the page script.
- Billing period and currency preferences saved in browser `localStorage` when available.
- A comparison table with a contained horizontal scroll area, native expandable FAQ items, and a responsive footer.
- Responsive pricing layout, labelled controls, keyboard focus styles, and a live region for price updates.

The project uses local HTML, CSS, and JavaScript only. It has no external fonts, libraries, images, APIs, or network requests, so the page can be opened offline. The fixed exchange rates avoid a live-rate service but can become stale. Billing and currency preferences use browser `localStorage`; they stay in that browser profile, do not sync to an account, and fall back to monthly PKR when storage is unavailable.

## Verification status

Browsers tested: none. Browser testing has not been performed. `node --check script.js` and `git diff --check` passed. No automated test suite or Lighthouse run has been performed. Responsive behavior at 360px, 768px, and 1440px, 200% zoom, keyboard interaction, and preference restoration still need manual browser verification.

## Remaining work

The VPS resource specifications in the comparison table remain marked for confirmation because verified values were not provided for this assessment. Displayed plan prices are illustrative assessment examples, not verified live PKHosting prices. Confirm specifications, current prices, and checkout terms with the provider before purchase. The required 360px, 768px, and 1440px screenshots and Lighthouse report/run are not present and remain to be completed.

FAQ presentation: The native FAQ accordion uses the site’s navy and blue palette, with visible focus and open/closed states. It remains usable without JavaScript.
The footer uses the page's navy and blue palette, with readable text, clear link hover and keyboard-focus states, and spacing adapted for narrow screens.

## AI assistance

AI tools assisted with parts of the implementation and review. The project has been reviewed, but manual browser testing remains outstanding. No automated test suite has been run.
