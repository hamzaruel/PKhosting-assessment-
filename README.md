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

The project uses local HTML, CSS, and JavaScript only. It has no external fonts, libraries, images, APIs, or network requests. The page can be opened offline; saved preferences depend on browser storage availability.

## Verification status

Browser testing has not been performed. Responsive behavior at 360px, 768px, and 1440px, 200% zoom, keyboard interaction, and preference restoration still need manual verification. Automated tests and Lighthouse have not been run.

## Remaining work

The VPS resource specifications in the comparison table remain marked for confirmation because verified values were not provided for this assessment. Confirm final plan specifications and checkout terms before treating the page as production-ready.

FAQ presentation: The native FAQ accordion uses the site’s navy and blue palette, with visible focus and open/closed states. It remains usable without JavaScript.
The footer uses the page's navy and blue palette, with readable text, clear link hover and keyboard-focus states, and spacing adapted for narrow screens.
