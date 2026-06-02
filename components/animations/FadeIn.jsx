'use client'

import { motion, useReducedMotion } from 'framer-motion'

export default function FadeIn({
  children,
  delay = 0,
  y = 16,
}) {
    const shouldReduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={
  shouldReduceMotion
    ? false
    : {
        opacity: 0,
        y,
      }
}
    whileInView={
  shouldReduceMotion
    ? {}
    : {
        opacity: 1,
        y: 0,
      }
}
      transition={{
        duration: 0.4,
        delay,
        ease: 'easeOut',
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  )
}