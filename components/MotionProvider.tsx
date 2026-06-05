"use client";

import { MotionConfig } from "framer-motion";

/**
 * Wraps the app so all Framer Motion animations honor the user's
 * "reduce motion" OS setting — animations become instant for those users.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
