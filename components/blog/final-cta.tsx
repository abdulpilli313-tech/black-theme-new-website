"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BlogFinalCTA() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number }[]>([])

  useEffect(() => {
    setParticles(
      Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: Math.cos((i / 12) * Math.PI * 2) * 80,
        y: Math.sin((i / 12) * Math.PI * 2) * 80,
      })),
    )
  }, [])

  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Orbiting dots background */}
        <div className="absolute inset-0 flex items-center justify-center">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              animate={{
                x: [particle.x, particle.x * -1, particle.x],
                y: [particle.y, particle.y * -1, particle.y],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-16 border border-purple-400/20 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">
            Have an <span className="gradient-text">AI Challenge?</span>
          </h2>
          <p className="mb-8 text-lg text-gray-300">Let's Build the Solution Together.</p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-4 rounded-full bg-gradient-blue-purple font-bold text-white glow-purple transition-all"
          >
            Contact Us
          </motion.a>

          {/* Animated neon ring */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-purple-400 opacity-0"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>
      </div>
    </section>
  )
}
