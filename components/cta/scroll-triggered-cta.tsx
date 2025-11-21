"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollTriggeredCTAProps {
  triggerPoint?: number
  title: string
  description: string
  cta: { text: string; href?: string }
}

export function ScrollTriggeredCTA({ triggerPoint = 800, title, description, cta }: ScrollTriggeredCTAProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > triggerPoint)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [triggerPoint])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed top-20 right-6 z-30 w-80"
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="glass-strong rounded-xl p-6 glow-border-blue">
            <h4 className="font-semibold mb-2 text-blue-300">{title}</h4>
            <p className="text-sm text-gray-400 mb-4">{description}</p>
            <motion.a
              href={cta.href || "#"}
              className="glass px-4 py-2 rounded-lg text-sm font-semibold glow-border-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] block text-center"
              whileHover={{ scale: 1.05 }}
            >
              {cta.text}
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
