"use client";

import { motion } from "framer-motion";

export function FrameMotionLateral({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
    >
      { children }
    </motion.div>
  )
}
