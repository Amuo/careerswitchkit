"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

/**
 * Microsoft Clarity, loaded via the official @microsoft/clarity package.
 * Clarity.init() injects the same clarity.ms tag the old inline snippet did,
 * but through Microsoft's maintained loader. Client-only: it runs once after
 * mount. projectId is passed from the (server) layout so the id stays
 * env-driven with a baked-in default.
 */
export default function ClarityAnalytics({ projectId }: { projectId: string }) {
  useEffect(() => {
    if (!projectId) return;
    // Defer Clarity to browser idle so its loader never competes with hydration
    // or the first interaction (better INP). Falls back to a short timeout.
    const w = window as typeof window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const start = () => Clarity.init(projectId);
    let idleId = 0;
    let timeoutId = 0;
    if (w.requestIdleCallback) idleId = w.requestIdleCallback(start, { timeout: 4000 });
    else timeoutId = window.setTimeout(start, 2500);
    return () => {
      if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [projectId]);

  return null;
}
