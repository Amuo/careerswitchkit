declare function gtag(...args: unknown[]): void;

export const POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_yp2D8rcrj84BMejvasXb4zDwa36czvOw21K2q4XtbWG";

// Fires the GA4 begin_checkout event only (no navigation). Shared by every buy
// button so checkout starts are reported no matter which CTA the user clicks.
export function fireBeginCheckout() {
  if (typeof gtag !== "undefined") {
    gtag("event", "begin_checkout", {
      currency: "USD",
      value: 37,
      items: [
        {
          item_id: "careerswitchkit",
          item_name: "CareerSwitchKit",
          price: 37,
          quantity: 1,
        },
      ],
    });
  }
}

// Fire the event, then redirect. Used by <button> CTAs (navbar, FinalCTA) that
// have no href of their own.
export function handleCheckout() {
  fireBeginCheckout();
  window.location.href = POLAR_CHECKOUT_URL;
}
