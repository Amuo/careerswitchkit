"use client";

import { MotionConfig } from "motion/react";

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  // IMPORTANT: "never", not "user".
  //
  // Most animations in this codebase guard their *transform* against reduced
  // motion (e.g. `scale: reduce ? 1 : 0.85`) but NOT their *opacity*, which
  // starts at 0. Under `reducedMotion="user"`, a device with "Reduce Motion"
  // enabled (common on phones — iOS Low Power Mode / accessibility) would leave
  // those elements frozen at opacity:0 forever: the navbar, thank-you page and
  // dashboard would render completely invisible. "never" runs the (gentle) fades
  // regardless of the OS setting, so content is always revealed. For reduced-
  // motion users this is strictly better than invisible content.
  return <MotionConfig reducedMotion="never">{children}</MotionConfig>;
}
