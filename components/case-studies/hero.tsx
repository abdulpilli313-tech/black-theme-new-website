"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function CaseStudiesHero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Ambient particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Floating geometric panels */}
        <motion.div
          className="absolute -left-32 -top-32 w-64 h-64 glass rounded-3xl opacity-20"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-32 -bottom-32 w-72 h-72 glass rounded-3xl opacity-20"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="gradient-text">Transforming Businesses</span>
            <br />
            Through AI & Automation
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our AI products and custom software solutions have helped businesses across industries streamline
            operations, increase revenue, and automate repetitive tasks. Every case study showcases measurable results,
            enterprise impact, and our unique AI-first approach.
          </p>

          {/* Holographic metrics preview */}
          <motion.div
            className="inline-flex gap-8 mt-12 glass-strong px-8 py-6 rounded-2xl border border-blue-500/20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-blue-400">+320%</p>
              <p className="text-sm text-gray-400">Leads Generated</p>
            </div>
            <div className="w-px bg-gradient-to-b from-transparent via-purple-500/30 to-transparent" />
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-400">40hrs</p>
              <p className="text-sm text-gray-400">Saved Weekly</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
