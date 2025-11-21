"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

const industries = [
  "Automotive",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Finance & FinTech",
  "Hospitality & Travel",
  "Enterprise SaaS",
  "Healthcare",
  "Manufacturing",
]

export default function IndustryExpertise() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Industry Expertise</span>
          </h2>
          <p className="text-gray-400">Proven success across diverse sectors</p>
        </motion.div>

        {/* Horizontally scrolling section with glowing pills */}
        <div ref={scrollRef} className="flex gap-4 pb-4 overflow-x-auto scroll-smooth snap-x snap-mandatory">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="snap-center flex-shrink-0"
            >
              <motion.div
                className="glass-strong px-8 py-4 rounded-full border border-purple-500/20
                  hover:border-purple-500/50 transition-all duration-300
                  hover:glow-border-purple cursor-pointer
                  whitespace-nowrap"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.1)",
                    "0 0 30px rgba(168, 85, 247, 0.2)",
                    "0 0 20px rgba(168, 85, 247, 0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
              >
                <p className="font-semibold text-white">{industry}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">Scroll to explore our expertise</p>
      </div>
    </section>
  )
}
