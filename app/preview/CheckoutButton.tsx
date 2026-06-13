"use client";

import { handleCheckout } from "@/lib/checkout";

export default function CheckoutButton() {
  return (
    <button
      onClick={handleCheckout}
      className="bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-xl text-base transition-all duration-200 active:scale-[0.98] shadow-[0_0_30px_rgba(55,146,232,0.4)] hover:shadow-[0_0_50px_rgba(55,146,232,0.6)]"
      aria-label="Get the CareerSwitchKit for $49"
    >
      Get the Kit — $49
    </button>
  );
}
