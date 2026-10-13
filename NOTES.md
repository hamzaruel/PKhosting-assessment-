# PKHosting VPS Assessment Notes

## 1. Live-Site Observations

These observations summarize the official PKHosting pricing, VPS, and FAQ content accessible during research. The original page URLs and screenshots were not preserved, so the observations cannot be independently rechecked from this repository. Prices and terms may change.

1. **Billing term choices:** The VPS pricing area listed monthly, annual, two-year, and three-year billing terms, with savings labels for longer commitments. This helps customers compare commitment options, but the billing controls could not be tested interactively, so dynamic price updates were not confirmed.

2. **Prices in Pakistani rupees:** The accessible VPS pricing content displayed prices in PKR. This helps local customers estimate costs without first converting foreign-currency prices. A live currency selector was not confirmed in the researched content.

3. **Plan cards and labels:** Cloud VPS plans ranged from Starter to Ultra, with labels such as Best Value, Most Popular, and High Memory on selected plans. These labels make plans easier to scan, but customers still need to compare the technical specifications before choosing.

4. **Technical details on cards:** Plan information included details such as vCPU, RAM, storage, port speed, transfer terms, and root/SSH access. This helps technical buyers compare plans, although terms such as fair use may require further explanation.

5. **Different VPS locations:** The researched content separated Cloud VPS in Germany from Premium VPS in Virginia, United States. Displaying server locations helps customers consider geography and potential latency for their users.

6. **Add-on prices shown separately:** Windows licensing and backup charges appeared separately from base VPS prices. This makes additional costs visible, but customers must add the relevant extras to the base price to estimate the total cost.

## 2. Assessment Requirements vs. Observed Live Behaviour

- The assessment requires PKR, USD, and GBP currency options with fixed exchange rates. This is an assessment requirement; research did not confirm that the live PKHosting page provides the same selector.
- The researched page listed several billing terms, but interactive switching and resulting price changes could not be verified.
- The project's annual billing calculation charges the equivalent of ten monthly payments for twelve months. This is an assessment requirement, not a confirmed PKHosting billing rule.
- The project uses illustrative plan prices and specifications where live information could not be verified. Unconfirmed specifications should not be presented as official provider offerings.

## 3. Payment Methods and Research Limitations

The accessible official footer showed Stripe, PayPal, JazzCash, Easypaisa, and bank account. The FAQ stated that Stripe card payments support Visa and Mastercard. This gives six named payment options when Visa and Mastercard are counted separately: Visa, Mastercard, PayPal, JazzCash, Easypaisa, and bank transfer.

The original assessment brief and the names of its other two expected payment methods were not preserved in the project files or available Git history. The research did not verify additional methods, so they have not been invented or described as unsupported.

The available FAQ information indicated that JazzCash and Easypaisa are for PKR invoices, PayPal supports USD, GBP, and EUR invoices rather than PKR, and card payments support PKR, USD, GBP, EUR, AED, and SAR invoices. Bank-transfer currency availability may depend on the invoice currency and may require contacting support.

## 4. Implementation Decisions and Trade-offs

- **Currency selector:** The project provides PKR, USD, and GBP using the assessment's fixed exchange rates. Fixed rates avoid external API requests but do not reflect changing market rates.
- **Annual billing:** Annual prices are calculated from ten monthly payments spread across twelve months. This follows the assessment requirement but should not be interpreted as a verified live provider offer.
- **Preference persistence:** The selected billing period and currency are saved using browser `localStorage` when available. This makes the user's choices persist after reload, but preferences remain local to that browser profile and do not sync across devices. If storage is unavailable, the page falls back to its default settings.
- **Plan specifications:** The comparison table includes ten specification rows. Values that could not be confirmed are marked as unconfirmed rather than guessed.
- **Payment methods:** The footer includes a limited set of named payment methods supported by the available research. This avoids inventing provider details, but the full list required by the assessment still needs verification against the original brief or official sources.
- **Responsive comparison table:** The table can scroll within its own container on narrow screens. This keeps the page itself from requiring horizontal scrolling, although users may need to scroll horizontally to read every comparison column.

## 5. Testing and Verification

The page was manually checked in Google Chrome.

Checks performed:

- Layout at 360px, 768px, and 1440px.
- Monthly and annual pricing calculations and savings display.
- Switching between PKR, USD, and GBP.
- Preference persistence after reloading the page.
- Keyboard navigation, visible focus, and FAQ expand/collapse.
- Visibility of monthly PKR prices and the comparison table with JavaScript disabled.
- Layout at 200% browser zoom.
- Direct opening of `index.html` using a local `file:///` URL.

Technical checks completed:

- `node --check script.js` passed.
- `git diff --check` passed.
- A Lighthouse audit was run in Chrome, and a screenshot of its results is saved in the `Screenshot/` folder. The exported HTML report is not included.

### Offline Test Note

Opening `index.html` directly from the local file system displayed the page correctly. However, reloading the page through the local Live Server URL while Chrome DevTools was set to Offline did not work. This does not, by itself, prove that the page requires an internet connection, because the local server may be unreachable in Offline mode. A separate comprehensive offline test has not been completed.

### Remaining Verification

- Firefox testing has not been performed.
- Automated browser tests have not been run.
- A complete independent accessibility contrast audit and screen-reader test have not been completed.
- The original payment-method list and unverified provider specifications need further research.
- The exported Lighthouse HTML report is not included.

## 6. Design Updates

**FAQ:** The native HTML `details` and `summary` elements are styled to match the page's navy and blue theme. The FAQ supports keyboard interaction and remains functional without JavaScript.

**Footer:** The footer follows the page's navy and blue visual theme, with readable links, visible keyboard focus, and responsive spacing.

**Responsive layout:** The page was manually checked at mobile, tablet, and desktop widths. The comparison table scrolls within its own container on smaller screens to avoid page-level horizontal overflow.

## 7. Assessment Plan Specification Assumption

The four plan cards and comparison table use illustrative assessment data for CPU, RAM, NVMe storage, monthly transfer, root/SSH access, and IPv4 support. These details are not verified live PKHosting specifications. They should not be represented as confirmed provider offerings without checking current official plan details.