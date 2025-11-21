"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FloatingCTAButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.button
        className="glass px-6 py-4 rounded-full flex items-center gap-3 glow-border-purple hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] group"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        whileHover={{ scale: 1.1 }}
      >
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-semibold group-hover:text-purple-400 transition">Talk to AI Expert</span>
      </motion.button>

      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border border-purple-500/20"
          animate={{ scale: [1, 1.5, 2], opacity: [1, 0] }}
          transition={{ duration: 2, delay: i * 0.3, repeat: Number.POSITIVE_INFINITY }}
        />
      ))}
    </motion.div>
  )
}
