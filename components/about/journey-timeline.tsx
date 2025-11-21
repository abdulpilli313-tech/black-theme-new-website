"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useRef, useState } from "react"

const milestones = [
  {
    year: "2023",
    title: "The Idea",
    description: "The idea was born: to build meaningful AI solutions for real business challenges.",
  },
  {
    year: "2024",
    title: "Enterprise AI",
    description: "First enterprise AI automation deployed.",
  },
  {
    year: "2024 Q2",
    title: "AI Suite Launch",
    description: "Launched our AI agents and automation suite.",
  },
  {
    year: "2024 Q4",
    title: "Product Ecosystem",
    description: "Introduced our internal product ecosystem.",
  },
  {
    year: "2025",
    title: "Global Expansion",
    description: "Expanded into enterprise 365 Dynamics integrations, AI products, and global client operations.",
  },
  {
    year: "Future",
    title: "Global AI Platform",
    description: "Powering businesses across industries.",
  },
]

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-32 relative overflow-hidden">
      <Container>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Milestones that shaped our vision</p>
        </motion.div>

        {/* Horizontal Timeline */}
        <div ref={containerRef} className="overflow-x-auto pb-8 no-scrollbar">
          <div className="flex gap-6 min-w-max px-4">
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Connector */}
                {i < milestones.length - 1 && (
                  <motion.div
                    className="absolute h-1 bg-gradient-to-r from-blue-400 to-purple-400 top-12 left-1/2 -translate-x-1/2"
                    style={{ width: "calc(100% + 24px)", marginLeft: "12px" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  />
                )}

                {/* Neon Dot */}
                <motion.div
                  className="relative z-10 mb-8"
                  animate={{
                    scale: hoveredIndex === i ? 1.3 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 glow-blue" />
                  <motion.div
                    className="absolute inset-0 w-6 h-6 rounded-full border-2 border-blue-400"
                    animate={{
                      scale: hoveredIndex === i ? 2 : 1,
                      opacity: hoveredIndex === i ? 0.3 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  className="glass-strong rounded-xl p-5 w-64 border border-white/10"
                  animate={{
                    y: hoveredIndex === i ? -10 : 0,
                    borderColor: hoveredIndex === i ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-sm font-bold text-blue-400 mb-2">{milestone.year}</div>
                  <h3 className="text-base font-bold text-foreground mb-2">{milestone.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{milestone.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
