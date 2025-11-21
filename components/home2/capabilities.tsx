"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const capabilities = [
  { name: "Agents", description: "AI agents that understand and act autonomously", icon: "🤖" },
  { name: "Automation", description: "Smart workflow automation at scale", icon: "⚙️" },
  { name: "Analytics", description: "Predictive insights & real-time analytics", icon: "📊" },
  { name: "Integrations", description: "Seamless enterprise system integration", icon: "🔗" },
]

export function Home2Capabilities() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-4">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full border border-blue-500/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + i * 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20 relative z-10"
        >
          AI Capabilities Map
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow:
                    hoveredIndex === i
                      ? [
                          "0 0 20px rgba(59, 130, 246, 0.4)",
                          "0 0 40px rgba(168, 85, 247, 0.4)",
                          "0 0 20px rgba(59, 130, 246, 0.4)",
                        ]
                      : "0 0 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="glass rounded-2xl p-8 border border-white/10 text-center backdrop-blur-xl group-hover:border-cyan-500/50 transition-all relative z-10">
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  animate={{
                    scale: hoveredIndex === i ? 1.2 : 1,
                    rotate: hoveredIndex === i ? 360 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {cap.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 text-white">{cap.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{cap.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
