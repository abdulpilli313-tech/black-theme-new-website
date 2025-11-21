"use client"

import { motion } from "framer-motion"

const industries = [
  "Real Estate",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Finance & FinTech",
  "Car Rental & Automotive",
  "Hospitality",
  "Enterprise SaaS",
  "Government & Public Sector",
]

export function IndustryExpertise() {
  return (
    <section className="relative min-h-screen w-full bg-background px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-purple-500/5 to-background" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Industries We <span className="gradient-text">Serve</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {industries.map((industry, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="glow-border-blue glass rounded-full px-6 py-3 font-semibold transition-all duration-300 hover:glow-border-purple"
              >
                {industry}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
