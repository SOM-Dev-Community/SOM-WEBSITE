"use client";

import { MotionConfig } from "framer-motion";

// Respects the visitor's OS "reduce motion" setting; no effect for everyone else.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
