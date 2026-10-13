// Fixed pricing controls for the assessment page. No network requests are used.
(() => {
  "use strict";

  const billingInputs = document.querySelectorAll('input[name="billing-period"]');
  const currencySelect = document.getElementById("currency-select");
  const announcement = document.getElementById("pricing-announcement");
  const priceElements = document.querySelectorAll("[data-plan-price][data-monthly-pkr]");
  const comparisonPriceLabel = document.getElementById("comparison-price-label");
  const comparisonDescription = document.getElementById("comparison-description");

  if (!billingInputs.length || !currencySelect || !announcement || !priceElements.length) {
    return;
  }

  const STORAGE_KEYS = {
    billing: "pkhosting-vps-billing-period",
    currency: "pkhosting-vps-currency",
  };
  const CURRENCIES = {
    PKR: { rate: 1, prefix: "Rs ", decimals: 0 },
    USD: { rate: 278.5, prefix: "US$ ", decimals: 2 },
    GBP: { rate: 355, prefix: "£ ", decimals: 2 },
  };
  const FALLBACK_BILLING = "monthly";
  const FALLBACK_CURRENCY = "PKR";

  function readPreference(key, allowedValues, fallback) {
    try {
      const stored = window.localStorage.getItem(key);
      return allowedValues.includes(stored) ? stored : fallback;
    } catch (_error) {
      return fallback;
    }
  }

  function savePreference(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_error) {
      // Pricing remains usable when browser storage is disabled or unavailable.
    }
  }

  let billingPeriod = readPreference(STORAGE_KEYS.billing, ["monthly", "annual"], FALLBACK_BILLING);
  let currency = readPreference(STORAGE_KEYS.currency, Object.keys(CURRENCIES), FALLBACK_CURRENCY);
  currencySelect.value = currency;
  billingInputs.forEach((input) => {
    input.checked = input.value === billingPeriod;
  });

  function formatAmount(amountInPkr) {
    const details = CURRENCIES[currency];
    const converted = amountInPkr / details.rate;
    const rounded = currency === "PKR" ? Math.round(converted) : converted;
    const amountText = rounded.toLocaleString("en-US", {
      minimumFractionDigits: details.decimals,
      maximumFractionDigits: details.decimals,
    });
    return `${details.prefix}${amountText}`;
  }

  function updatePrices(shouldAnnounce = false) {
    const announcementParts = [];

    priceElements.forEach((priceElement) => {
      const plan = priceElement.dataset.planPrice;
      const monthlyPkr = Number(priceElement.dataset.monthlyPkr);
      if (!Number.isFinite(monthlyPkr) || monthlyPkr <= 0) {
        return;
      }

      const annualTotalPkr = monthlyPkr * 10;
      const effectiveMonthlyPkr = annualTotalPkr / 12;
      const savingsPkr = monthlyPkr * 12 - annualTotalPkr;
      const displayedMonthlyPkr = billingPeriod === "annual" ? effectiveMonthlyPkr : monthlyPkr;
      const formattedMonthly = formatAmount(displayedMonthlyPkr);
      priceElement.textContent = formattedMonthly;

      const card = priceElement.closest(".plan-card");
      const unit = card && card.querySelector(".price-unit");
      const annualDetails = card && card.querySelector(".annual-price-details");
      const annualTotal = card && card.querySelector(`[data-annual-total="${plan}"]`);
      const savingsBadge = card && card.querySelector(`[data-savings="${plan}"]`);
      if (unit) {
        unit.textContent = billingPeriod === "annual" ? "/ month effective" : "/ month";
      }
      if (annualDetails) {
        annualDetails.hidden = billingPeriod !== "annual";
      }
      if (annualTotal) {
        annualTotal.textContent = formatAmount(annualTotalPkr);
      }
      if (savingsBadge) {
        savingsBadge.textContent = `Save ${formatAmount(savingsPkr)} per year`;
      }

      const comparisonPrice = document.querySelector(`[data-comparison-price="${plan}"]`);
      if (comparisonPrice) {
        comparisonPrice.textContent = formatAmount(billingPeriod === "annual" ? annualTotalPkr : monthlyPkr);
      }

      const planName = card && card.querySelector("h3");
      if (planName) {
        if (billingPeriod === "annual") {
          announcementParts.push(`${planName.textContent}: ${formattedMonthly} effective monthly, ${formatAmount(annualTotalPkr)} billed annually, save ${formatAmount(savingsPkr)} per year`);
        } else {
          announcementParts.push(`${planName.textContent}: ${formattedMonthly} per month`);
        }
      }
    });

    if (comparisonPriceLabel) {
      comparisonPriceLabel.textContent = billingPeriod === "annual" ? "Annual total (10 months billed)" : "Monthly price";
    }
    if (comparisonDescription) {
      comparisonDescription.textContent = billingPeriod === "annual"
        ? "Compare annual pricing and totals. Resource specifications still need confirmation before publication."
        : "Compare monthly pricing and plan details. Resource specifications still need confirmation before publication.";
    }

    if (shouldAnnounce) {
      announcement.textContent = `Prices updated to ${billingPeriod} billing in ${currency}. ${announcementParts.join(". ")}.`;
    }
  }

  billingInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (!input.checked) return;
      billingPeriod = input.value === "annual" ? "annual" : "monthly";
      savePreference(STORAGE_KEYS.billing, billingPeriod);
      updatePrices(true);
    });
  });

  currencySelect.addEventListener("change", () => {
    currency = Object.prototype.hasOwnProperty.call(CURRENCIES, currencySelect.value)
      ? currencySelect.value
      : FALLBACK_CURRENCY;
    currencySelect.value = currency;
    savePreference(STORAGE_KEYS.currency, currency);
    updatePrices(true);
  });

  updatePrices();
})();
