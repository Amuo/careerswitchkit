"use client";

import type { ComponentPropsWithoutRef } from "react";
import { POLAR_CHECKOUT_URL, handleCheckout } from "@/lib/checkout";

// A buy CTA rendered as a real <a href> to Polar (so it still degrades to a normal
// link for crawlers or if JS is off), but on click it opens the Polar checkout as
// a dark on-page overlay and fires begin_checkout — identical behaviour to the
// <button> CTAs. Used by the hero + pricing-card CTAs.
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
        e.preventDefault();
        handleCheckout();
        onClick?.(e);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
