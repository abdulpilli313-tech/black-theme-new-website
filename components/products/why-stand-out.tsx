"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "AI-First Engineering",
    description: "Everything we build starts from an intelligence-first architecture.",
    icon: "⚡",
  },
  {
    title: "Enterprise Reliability",
    description: "High-performance, secure, and scalable by design.",
    icon: "🛡️",
  },
  {
    title: "Seamless Integration",
    description: "Connect deeply with CRMs, ERPs, clouds, and 3rd-party ecosystems.",
    icon: "🔗",
  },
  {
    title: "Beautiful UX",
    description: "Clean, modern, and built with precision.",
    icon: "✨",
  },
  {
    title: "Modular & Future-Ready",
    description: "Products expand and evolve as your business grows.",
    icon: "🚀",
  },
]

export function WhyStandOut() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">Why Our Products Stand Out</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Engineered for excellence, built for impact</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Glowing pillar */}
              <div className="relative h-96">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-purple-500/20 rounded-lg"
                  animate={{ backgroundPosition: ["0% 0%", "0% 100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />

                <div className="absolute inset-0 rounded-lg border border-blue-500/30 group-hover:border-blue-500/60 transition-all duration-300 glow-border-blue" />

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: idx * 0.2 }}
                    className="text-4xl"
                  >
                    {reason.icon}
                  </motion.div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
