"use client";

import { handleCheckout } from "@/lib/checkout";

interface CheckoutButtonProps {
  label: string;
  className?: string;
}

export default function CheckoutButton({ label, className }: CheckoutButtonProps) {
  return (
    <button onClick={handleCheckout} className={className}>
      {label}
    </button>
  );
}
