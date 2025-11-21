"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      onMouseMove={handleMouseMove}
    >
      {/* Animated gradient beam background */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-full pointer-events-none"
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
        }}
        transition={{ type: "tween", duration: 0.5 }}
      />

      {/* Floating glass panel - diagonal */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 glass rounded-3xl opacity-20"
        style={{ transform: "rotate(8deg)" }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text text-balance">
            Building Intelligent Software for the AI Era
          </h1>
        </motion.div>

        <motion.p
          className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Cutting-edge AI agents, enterprise automation, and intelligent software engineering. Transform your business
          with next-generation AI solutions.
        </motion.p>

        {/* Floating 3D icons */}
        <motion.div className="flex justify-center gap-12 mb-12">
          {["LLM", "Automation", "Data"].map((item, i) => (
            <motion.div
              key={item}
              className="text-sm font-semibold text-blue-400 px-4 py-2 glass rounded-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              }}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold glow-blue hover:bg-blue-600 transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Call
          </motion.button>
          <motion.button
            className="px-8 py-4 glass text-white rounded-lg font-semibold glow-border-blue hover:bg-white/10 transition"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Work
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
