"use client"

import { motion } from "framer-motion"

const technologies = ["OpenAI", "Next.js", "Azure", "N8N", "Python", "React", "MS365", "OpenAI", "Next.js", "Azure"]

export function TechStripSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-gray-400 mb-8 text-sm">Powered by industry-leading technologies</p>

        {/* Auto-scrolling tech strip */}
        <motion.div
          className="flex gap-8 overflow-hidden"
          animate={{ x: -2000 }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              className="flex-shrink-0 px-6 py-3 glass rounded-lg text-gray-300 text-sm font-semibold whitespace-nowrap hover:glow-border-blue transition-all"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
