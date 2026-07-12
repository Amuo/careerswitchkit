// Run a callback when the browser is idle, with a short-timeout fallback for
// browsers without requestIdleCallback (Safari). Returns a cleanup that cancels
// whichever one is still pending. Used to defer non-critical startup work (the
// background video, analytics) so it never competes with hydration / LCP.
export function runWhenIdle(
  cb: () => void,
  { idleTimeout, fallbackDelay }: { idleTimeout: number; fallbackDelay: number },
): () => void {
  const w = window as typeof window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
    cancelIdleCallback?: (id: number) => void;
  };
  let idleId = 0;
  let timeoutId = 0;
  if (w.requestIdleCallback) idleId = w.requestIdleCallback(cb, { timeout: idleTimeout });
  else timeoutId = window.setTimeout(cb, fallbackDelay);
  return () => {
    if (idleId && w.cancelIdleCallback) w.cancelIdleCallback(idleId);
    if (timeoutId) window.clearTimeout(timeoutId);
  };
}
