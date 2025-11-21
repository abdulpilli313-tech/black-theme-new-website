"use client"

import { motion } from "framer-motion"

const industries = ["Automotive", "Retail", "Logistics", "Finance", "Hospitality", "Enterprise SaaS"]

export default function Industries() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Industries We <span className="gradient-text">Serve</span>
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="glass-strong px-8 py-4 rounded-full border border-white/10 backdrop-blur-xl hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <p className="font-semibold">{industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
