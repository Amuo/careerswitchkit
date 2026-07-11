"use client";

import type { ComponentPropsWithoutRef } from "react";
import { POLAR_CHECKOUT_URL, fireBeginCheckout } from "@/lib/checkout";

// A real <a href> to Polar that also fires the GA4 begin_checkout event on click.
// Use this for buy CTAs that link out (hero, pricing card) so their checkout
// starts are tracked — matching the <button> CTAs that call handleCheckout().
export default function CheckoutLink({
  href = POLAR_CHECKOUT_URL,
  onClick,
  children,
  ...rest
}: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      onClick={(e) => {
        fireBeginCheckout();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
