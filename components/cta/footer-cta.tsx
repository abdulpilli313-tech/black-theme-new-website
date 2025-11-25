"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function FooterCTA() {
  const [dots, setDots] = useState<
    { left: number; top: number; x: number; y: number; duration: number }[]
  >([])

  useEffect(() => {
    // Generate dots ONLY ON CLIENT
    const generated = [...Array(6)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      x: Math.random() * 50 - 25,
      y: Math.random() * 50 - 25,
      duration: 4 + Math.random() * 2,
    }))

    setDots(generated)
  }, [])

  return (
    <div className="w-full px-4 py-16 border-t border-white/10">
      <motion.div
        className="glass-strong rounded-2xl border border-blue-500/30 p-8 md:p-12 text-center max-w-3xl mx-auto glow-border-blue relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Animated particles – GENERATED ON CLIENT ONLY */}
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{ left: `${dot.left}%`, top: `${dot.top}%` }}
            animate={{
              x: [0, dot.x, 0],
              y: [0, dot.y, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Main Content */}
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
            Let's Discuss Your AI Project
          </h3>
          <p className="text-gray-300 mb-8 text-lg">
            Ready to transform your business with AI? Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="glass px-8 py-3 rounded-lg font-semibold glow-border-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>

            <motion.a
              href="mailto:hello@example.com"
              className="glass px-8 py-3 rounded-lg font-semibold glow-border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Call
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
