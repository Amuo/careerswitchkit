import { PolarEmbedCheckout } from "@polar-sh/checkout/embed";

declare function gtag(...args: unknown[]): void;
declare function fbq(...args: unknown[]): void;

export const POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_yp2D8rcrj84BMejvasXb4zDwa36czvOw21K2q4XtbWG";

const PRICE = 37;
const ITEM = { item_id: "careerswitchkit", item_name: "CareerSwitchKit", price: PRICE, quantity: 1 };

// Fires the GA4 begin_checkout event only (no navigation). Shared by every buy
// button so checkout starts are reported no matter which CTA the user clicks.
export function fireBeginCheckout() {
  if (typeof gtag !== "undefined") {
    gtag("event", "begin_checkout", { currency: "USD", value: PRICE, items: [ITEM] });
  }
}

// Fires the purchase conversion to GA4 + the Meta Pixel. Called from /thank-you,
// where Polar redirects after a completed payment. Kept here so every analytics
// event shares one item definition and one gtag/fbq typing.
export function firePurchase(transactionId?: string) {
  if (typeof gtag !== "undefined") {
    gtag("event", "purchase", { currency: "USD", value: PRICE, transaction_id: transactionId, items: [ITEM] });
  }
  if (typeof fbq !== "undefined") {
    fbq("track", "Purchase", { currency: "USD", value: PRICE });
  }
}

// Fires begin_checkout, then opens Polar's checkout as a dark on-page overlay
// (no full-page redirect — the buyer never leaves careerswitchkit.org). Shared by
// every buy CTA (the <button>s call this directly; the <a> CheckoutLinks call it
// on click). If the embed can't load for any reason, it falls back to a normal
// redirect so checkout never breaks. On success Polar redirects the page to the
// checkout's success URL (/thank-you), so the purchase conversion still fires.
export async function handleCheckout() {
  fireBeginCheckout();
  try {
    await PolarEmbedCheckout.create(POLAR_CHECKOUT_URL, "dark");
  } catch {
    window.location.href = POLAR_CHECKOUT_URL;
  }
}
