"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { runWhenIdle } from "@/lib/runWhenIdle";

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
    return runWhenIdle(() => Clarity.init(projectId), { idleTimeout: 4000, fallbackDelay: 2500 });
  }, [projectId]);

  return null;
}
