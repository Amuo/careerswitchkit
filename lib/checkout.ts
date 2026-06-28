declare function gtag(...args: unknown[]): void;

const POLAR_CHECKOUT_URL =
  "https://buy.polar.sh/polar_cl_yp2D8rcrj84BMejvasXb4zDwa36czvOw21K2q4XtbWG";

export function handleCheckout() {
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

  window.location.href = POLAR_CHECKOUT_URL;
}
