"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function BlogHero() {
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; size: number }[]>([])

  useEffect(() => {
    const generateParticles = () => {
      return Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
      }))
    }
    setParticles(generateParticles())
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Animated particle field background */}
      <div className="absolute inset-0 opacity-40">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-cyan-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Neon gradient edges */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-t from-purple-500/20 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-5xl font-bold gradient-text sm:text-6xl"
        >
          Insights & Innovations in AI & Software
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mb-8 max-w-3xl text-lg text-gray-300"
        >
          Stay ahead with thought leadership from our team. Explore articles on AI trends, automation breakthroughs, and
          enterprise software best practices.
        </motion.p>

        {/* Glass panel backdrop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-2xl rounded-3xl glass-strong p-8"
        >
          <p className="text-sm text-gray-400">Latest insights from our expert team</p>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="h-1 bg-gradient-blue-purple rounded-full"
                style={{ width: `${30 + i * 10}px` }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
