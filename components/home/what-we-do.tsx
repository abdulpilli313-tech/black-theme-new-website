"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const services = [
  {
    title: "Custom Software Development",
    desc: "Bespoke applications tailored to your unique business needs",
    icon: "⚙️",
  },
  {
    title: "AI Automation",
    desc: "Intelligent workflow automation powered by cutting-edge AI",
    icon: "🤖",
  },
  {
    title: "AI Agents",
    desc: "Autonomous AI agents that handle complex tasks 24/7",
    icon: "🧠",
  },
  {
    title: "ERP / MS Dynamics 365",
    desc: "Enterprise resource planning and Dynamics implementations",
    icon: "📊",
  },
  {
    title: "Digital Transformation",
    desc: "Strategic guidance for complete business modernization",
    icon: "🚀",
  },
  {
    title: "Cloud + Integrations",
    desc: "Seamless cloud migration and API integrations",
    icon: "☁️",
  },
]

export function WhatWeDoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [canScroll, setCanScroll] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      setCanScroll(container.scrollWidth > container.clientWidth)
    }
  }, [])

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Background animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.svg
          className="absolute w-full h-full opacity-5"
          viewBox="0 0 1000 1000"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
        >
          <motion.line
            x1="0"
            y1="500"
            x2="1000"
            y2="500"
            stroke="url(#gradient)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance">AI Services & Solutions</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Complete suite of AI-first services designed as an interconnected system
          </p>
        </motion.div>

        {/* Horizontal scroll with glass layers */}
        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {services.map((service, i) => (
              <motion.div
                key={i}
                className="flex-shrink-0 group relative"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Animated line connector */}
                {i < services.length - 1 && (
                  <motion.div
                    className="absolute left-full top-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-500 to-transparent transform -translate-y-1/2 pointer-events-none"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                  />
                )}

                <motion.div
                  className="glass-strong rounded-2xl p-8 min-w-[280px] border border-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ y: -12, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated icon container */}
                  <motion.div
                    className="text-5xl mb-4 w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>

                  {/* Animated bottom border */}
                  <motion.div
                    className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll hint */}
          {canScroll && (
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 text-sm flex items-center gap-2 pointer-events-none"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Scroll →
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
