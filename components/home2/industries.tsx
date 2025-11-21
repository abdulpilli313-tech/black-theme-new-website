"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const industries = [
  "Automotive",
  "Retail & E-commerce",
  "Logistics & Supply Chain",
  "Finance & FinTech",
  "Hospitality & Travel",
  "Enterprise SaaS",
]

export function Home2Industries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          Industries We Serve
        </motion.h2>

        <div className="flex flex-wrap justify-center gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={industry}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.1, y: -4 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: hoveredIndex === i ? "0 0 25px rgba(59, 130, 246, 0.5)" : "0 0 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="glass rounded-full px-6 py-3 border border-white/10 backdrop-blur-xl group-hover:border-cyan-500/50 transition-all relative z-10">
                <p className="text-foreground/80 font-medium whitespace-nowrap">{industry}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
