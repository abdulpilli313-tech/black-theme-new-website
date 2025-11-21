"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

const regions = [
  { name: "UAE", x: "45%", y: "35%" },
  { name: "GCC", x: "40%", y: "38%" },
  { name: "Europe", x: "35%", y: "25%" },
  { name: "Asia", x: "65%", y: "40%" },
]

export function GlobalPresence() {
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Global Presence & Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Operating across multiple continents, delivering high-performance AI systems at enterprise scale
          </p>
        </motion.div>

        {/* Map Visualization */}
        <div className="relative">
          {/* Glass Overlay Container */}
          <motion.div
            className="glass-strong rounded-3xl p-12 border border-white/10 aspect-video flex items-center justify-center overflow-hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Globe Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-transparent opacity-50" />

            {/* Pulsing Nodes */}
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                className="absolute"
                style={{ left: region.x, top: region.y }}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Outer Pulse Ring */}
                <motion.div
                  className="absolute inset-0 w-16 h-16 rounded-full border-2 border-blue-400/50"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  style={{ transform: "translate(-50%, -50%)" }}
                />

                {/* Center Node */}
                <motion.div
                  className="relative w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full glow-blue"
                  style={{ transform: "translate(-50%, -50%)" }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                {/* Label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-semibold text-blue-400 whitespace-nowrap">
                  {region.name}
                </div>
              </motion.div>
            ))}

            {/* Content */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-foreground text-lg max-w-md leading-relaxed">
                Delivering enterprise-grade AI systems with local expertise and global capabilities
              </p>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
