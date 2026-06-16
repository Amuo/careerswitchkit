declare function gtag(...args: unknown[]): void;

// TODO: Replace console.log with Polar hosted checkout link or embedded overlay
export function handleCheckout() {
  // Fire GA4 conversion event so we can measure CTA click rate
  if (typeof gtag !== "undefined") {
    gtag("event", "begin_checkout", {
      currency: "USD",
      value: 19,
      items: [
        {
          item_id: "careerswitchkit",
          item_name: "CareerSwitchKit",
          price: 19,
          quantity: 1,
        },
      ],
    });
  }

  console.log(
    "[Checkout] Polar checkout not yet wired — replace this stub with the Polar product URL"
  );
}
