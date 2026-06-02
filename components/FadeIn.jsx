'use client'

import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  delay = 0,
  y = 40,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
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