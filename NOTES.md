# PKHosting VPS assessment notes

## Live-site observations

These notes summarize the accessible official pricing, VPS, and FAQ pages reviewed for the assessment. Site prices and terms can change; check the live pages and checkout before relying on them.

1. **Billing term choices:** The VPS pricing area listed monthly, annual, two-year, and three-year terms, with savings labels on longer terms. This makes commitment options visible, but the controls could not be tested interactively, so dynamic price changes were not confirmed.
2. **Prices in Pakistani rupees:** The accessible VPS prices were displayed in PKR. This helps local buyers estimate costs without first converting a foreign-currency price. A live currency selector was not confirmed in the accessible page content.
3. **Plan cards and labels:** Cloud VPS cards ranged from Starter to Ultra, with labels such as Best Value, Most Popular, and High Memory on selected plans. The labels help scan the choices, while the resource details remain necessary for a sound plan comparison.
4. **Technical details on cards:** Plan cards listed items such as vCPU, RAM, storage, port speed, transfer terms, and root/SSH access. This gives technical buyers useful decision information; terms such as fair use may still need explanation.
5. **Different VPS locations:** The page separated Cloud VPS in Germany from Premium VPS in Virginia, United States. Showing the location helps buyers consider geography and likely latency for their users.
6. **Add-on prices shown separately:** Windows licensing and backup charges appeared in separate plan tables, with shared extras listed apart from base VPS prices. Buyers need to combine selected add-ons with the base price to estimate the full cost.

## Assessment requirements versus observed live behavior

- The assessment requires a PKR/USD/GBP selector with fixed rates. This is an assessment feature; the research did not confirm that PKHosting provides this selector.
- The live pages listed several billing terms, but interactive switching and its price updates could not be tested. The assessment's specific annual calculation—ten monthly payments for twelve months—is a project requirement, not a verified live-site rule.
- The comparison table in this project marks unverified plan specifications for confirmation. Do not replace those markers with guessed CPU, memory, storage, network, backup, or support values.

## Payment methods and discrepancy

The accessible official footer showed Stripe, PayPal, JazzCash, Easypaisa, and bank account. The FAQ clarifies that Stripe card payments support Visa and Mastercard. That supports five payment channels, or six named options when Visa and Mastercard are counted separately: **Visa, Mastercard, PayPal, JazzCash, Easypaisa, and bank transfer**. The assessment brief refers to eight methods, but two additional methods could not be verified in the accessible official sources. No extra methods should be inferred.

The FAQ states that JazzCash and Easypaisa are for PKR invoices, PayPal is for USD/GBP/EUR invoices rather than PKR, and card payments support PKR, USD, GBP, EUR, AED, and SAR invoices. Bank transfer currency availability depends on invoice currency and may require contacting support.

## Limitations, assumptions, and remaining checks

- The root homepage request timed out during the initial audit. The findings above rely on accessible official pricing, VPS, footer, and FAQ content.
- Billing controls and live price changes were not interactively tested during research.
- Live pricing and product terms may change; verify them against the current official pages and checkout.
- The project's exchange rates are fixed assessment inputs (1 USD = 278.50 PKR; 1 GBP = 355.00 PKR), not live market rates.
- Manually verify annual calculations, all three currency displays, saved preferences after reload, keyboard operation, and no page-level horizontal overflow at 360px, 768px, and 1440px, including 200% zoom.
- Automated tests and Lighthouse have not been run. Browser rendering and assistive-technology behavior still need review.

## Assessment plan specification assumption

The four plan cards and comparison table use illustrative assessment assumptions for CPU, RAM, NVMe storage, monthly transfer, Root/SSH access, and IPv4 support. These values were supplied for the assessment and are not verified live PKHosting plan specifications. Do not present them as confirmed offerings without checking official plan details.
FAQ styling update: The existing native details/summary FAQ was styled to match the navy and blue page theme, with keyboard focus visibility and clear open/closed indicators. The accordion remains functional without JavaScript. Browser viewport testing has not yet been performed.
Footer design update: Footer presentation is styled to continue the navy/blue theme, improve text and link readability, show visible keyboard focus, and adapt spacing for small screens. Browser viewport checks are still required.
