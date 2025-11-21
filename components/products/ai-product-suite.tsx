"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const suiteItems = [
  "Automation Engine",
  "AI Agent Framework",
  "Intelligent Data Layer",
  "Integration Core",
  "Workflow Builder",
  "Predictive Insights",
  "Voice + Chat Interface",
  "Cloud Infrastructure",
  "Analytics Hub",
  "Enterprise AI Toolkit",
]

export function AiProductSuite() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scroll = scrollRef.current
    if (!scroll) return

    let scrollPos = 0
    const animate = () => {
      scrollPos += 0.5
      if (scrollPos >= scroll.scrollWidth / 2) scrollPos = 0
      scroll.scrollLeft = scrollPos
      requestAnimationFrame(animate)
    }

    const id = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          AI Product Suite
        </motion.h2>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden scrollbar-hide pb-4"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Duplicate items for seamless loop */}
          {[...suiteItems, ...suiteItems].map((item, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.05, y: -5 }} className="flex-shrink-0">
              <div className="px-6 py-3 rounded-full glass border border-blue-500/50 glow-blue hover:border-blue-400 hover:glow-blue transition-all duration-300 cursor-pointer whitespace-nowrap">
                <p className="text-sm font-semibold text-white">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
