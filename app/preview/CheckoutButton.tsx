"use client";

import { handleCheckout } from "@/lib/checkout";

export default function CheckoutButton() {
  return (
    <button
      onClick={handleCheckout}
      className="bg-accent hover:bg-accent-hover text-white font-bold px-10 py-4 rounded-xl text-base active:scale-[0.98]"
      style={{
        transition: "background-color 0.2s ease, box-shadow 0.25s ease",
        boxShadow: "0 0 30px rgba(55,146,232,0.40)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 50px rgba(55,146,232,0.60)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow =
          "0 0 30px rgba(55,146,232,0.40)";
      }}
      aria-label="Get CareerSwitchKit for $19"
    >
      Get the System for $19
    </button>
  );
}
