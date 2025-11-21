"use client"

import { motion } from "framer-motion"

const stages = [
  {
    title: "Discover",
    description: "We dive deep into your challenges, goals, and business structure.",
  },
  {
    title: "Architect",
    description: "We design the perfect system — scalable, secure, and AI-first.",
  },
  {
    title: "Build",
    description: "We develop fast, test rigorously, and ensure enterprise reliability.",
  },
  {
    title: "Integrate",
    description: "We connect systems, APIs, CRMs, ERPs, and data sources seamlessly.",
  },
  {
    title: "Automate",
    description: "We deploy AI workflows and intelligent agents to maximize efficiency.",
  },
  {
    title: "Scale",
    description: "We optimize performance and expand your AI ecosystem as you grow.",
  },
]

export function ProcessTimeline() {
  return (
    <section className="relative min-h-screen w-full bg-background px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h2 className="text-4xl font-bold md:text-5xl">
          Our <span className="gradient-text">Process</span>
        </h2>
      </motion.div>

      <div className="mx-auto max-w-7xl">
        <div className="space-y-8">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="glow-border-blue glass mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-semibold text-blue-400"
              >
                {index + 1}
              </motion.div>

              <div className="glass rounded-xl p-6 flex-1">
                <h3 className="text-xl font-semibold">{stage.title}</h3>
                <p className="mt-2 text-muted-foreground">{stage.description}</p>
              </div>

              {index < stages.length - 1 && (
                <div className="absolute left-8 top-full h-8 w-0.5 bg-gradient-to-b from-blue-500 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
