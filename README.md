# PKHosting VPS Pricing Page Assessment

This project is a responsive VPS pricing page created for the TechAbout Web Developer assessment. It includes four VPS plans, monthly and annual billing, currency conversion, a comparison table, FAQs, and payment information based on the available PKHosting research.

## How to Run

Open `index.html` directly in a modern web browser. No package installation, build step, or local server is required.

## Features

- Four pricing plans: Starter, Growth, Scale, and Dedicated Core.
- Monthly and annual billing with calculated annual totals and savings.
- PKR, USD, and GBP currency options using fixed exchange rates.
- Billing period and currency preferences saved in browser `localStorage` when available.
- A comparison table with ten technical specification rows.
- Responsive layout for mobile, tablet, and desktop screens.
- Expandable FAQ items using native HTML elements.
- Keyboard-accessible controls, visible focus styles, and a live region for price updates.
- Local HTML, CSS, and JavaScript with no external libraries, fonts, images, or APIs.

The plan prices and VPS specifications are illustrative assessment data, not verified live PKHosting offers. The exchange rates are fixed and do not update automatically.

## Testing and Verification

**Browser manually tested:** Google Chrome.

The following checks were performed manually:

- Responsive layouts at 360px, 768px, and 1440px.
- Monthly and annual prices, annual totals, and savings calculations.
- USD and GBP currency switching.
- Billing and currency preferences after reloading the page.
- Keyboard navigation, visible focus, and FAQ expand/collapse.
- Monthly PKR prices and the comparison table with JavaScript disabled.
- Direct opening of `index.html` using a local `file:///` URL.
- Layout at 200% browser zoom.
- Chrome Console check. A missing `favicon.ico` request was identified and addressed.

The following technical checks passed:

- `node --check script.js`
- `git diff --check`

### Offline Testing

Opening `index.html` directly from the local file system displayed the page correctly.

However, reloading the page while Chrome DevTools was set to Offline with the local Live Server URL did not work. This test alone does not establish an internet dependency because the local server may be unreachable in Offline mode. Direct file opening was verified, but a separate comprehensive offline test has not been completed.

### Testing Limitations

- Firefox testing has not been performed.
- Automated browser tests have not been run.
- A complete independent accessibility contrast audit has not been performed.
- A Lighthouse audit was run in Chrome, and a screenshot of the results is saved in the `Screenshot/` folder. The exported Lighthouse HTML report is not included.

## Project Screenshots

The `Screenshot/` folder contains screenshots of the mobile, tablet, desktop, and Lighthouse views.

## Decisions and Trade-offs

- Billing and currency preferences use browser `localStorage` when available. These preferences remain within the current browser profile and do not sync across devices.
- If browser storage is unavailable, the page falls back to its default settings.
- Exchange rates are hard-coded as required by the assessment, avoiding external API requests.
- VPS specifications remain unverified and should be confirmed before use in a real commercial offer.
- Payment-method choices and research limitations are documented in `NOTES.md`.

## AI Assistance

I built most of the project myself. I used AI assistance for guidance and ideas while implementing parts of the JavaScript, particularly around understanding and reviewing the pricing logic. I also used it for help with a few parts of the CSS. The overall implementation, layout decisions, and remaining work were handled and reviewed by me.

## Future Improvements

- Test the page in Firefox.
- Perform more detailed accessibility and screen-reader checks.
- Include the exported Lighthouse HTML report in the repository.
- Verify VPS specifications, prices, and payment options against reliable provider information.