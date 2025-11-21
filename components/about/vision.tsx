"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

export function CompanyVision() {
  const floatingShapes = [
    {
      size: "w-64 h-64",
      bg: "bg-purple-500/10",
      left: "10%",
      top: "20%",
      duration: 6,
    },
    {
      size: "w-96 h-96",
      bg: "bg-blue-500/10",
      left: "70%",
      top: "30%",
      duration: 8,
    },
    {
      size: "w-48 h-48",
      bg: "bg-cyan-500/10",
      left: "50%",
      top: "60%",
      duration: 7,
    },
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Floating Geometric Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} ${shape.bg} rounded-full blur-3xl pointer-events-none`}
          style={{ left: shape.left, top: shape.top }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      <Container>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Full-Width Glass Panel */}
          <div className="glass-strong rounded-3xl p-12 md:p-16 border border-white/10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl pointer-events-none"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">Our Vision</h2>

              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                To create a world where AI becomes the invisible engine behind every modern business — automating
                operations, enhancing decision-making, and enabling organizations to focus on what truly matters.
              </p>

              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                We design technology that feels intuitive, adaptive, and deeply human-centered.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
