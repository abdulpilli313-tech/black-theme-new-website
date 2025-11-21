"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const services = [
  { name: "AI Automation", icon: "⚙️" },
  { name: "Custom AI Agents", icon: "🤖" },
  { name: "Predictive Analytics", icon: "📊" },
  { name: "Integrations & ERP/365", icon: "🔗" },
  { name: "Cloud Architecture", icon: "☁️" },
]

export function Home2Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <motion.line
          x1="10%"
          y1="50%"
          x2="90%"
          y2="50%"
          stroke="url(#gradient)"
          strokeWidth="2"
          opacity="0.2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(59, 130, 246)" />
            <stop offset="50%" stopColor="rgb(168, 85, 247)" />
            <stop offset="100%" stopColor="rgb(6, 182, 212)" />
          </linearGradient>
        </defs>
      </svg>

      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20 relative z-10"
        >
          Core Services
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-6 relative z-10">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.08, y: -8 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0"
                animate={{
                  boxShadow: hoveredIndex === i ? "0 0 30px rgba(59, 130, 246, 0.5)" : "0 0 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="glass rounded-2xl px-8 py-6 border border-white/10 backdrop-blur-xl group-hover:border-blue-500/50 transition-all duration-300 relative z-10">
                <motion.div
                  className="text-4xl mb-3"
                  animate={{
                    scale: hoveredIndex === i ? 1.2 : 1,
                    rotate: hoveredIndex === i ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <p className="text-foreground/80 font-semibold text-center whitespace-nowrap">{service.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
