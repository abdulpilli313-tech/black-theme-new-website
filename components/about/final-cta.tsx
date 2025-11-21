"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"

export function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Blurred Beam Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Orbiting Animated Dots */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              x: Math.cos((i / 8) * Math.PI * 2) * 200,
              y: Math.sin((i / 8) * Math.PI * 2) * 200,
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <Container>
        <motion.div
          className="relative z-10 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Neon Ring CTA Panel */}
          <div className="relative">
            {/* Rotating Border Ring */}
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 rounded-3xl"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ zIndex: -1 }}
            />

            {/* Glowing Outline */}
            <motion.div
              className="absolute -inset-px bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-3xl blur-lg"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{ zIndex: -1 }}
            />

            {/* Content */}
            <div className="glass-strong rounded-3xl p-12 md:p-16 border border-white/10 relative z-10">
              <motion.h2
                className="text-4xl md:text-5xl font-bold gradient-text mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Let's Build the Future Together
              </motion.h2>

              <motion.p
                className="text-lg text-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Whether you need a custom AI solution, automation pipeline, or enterprise integration — we build systems
                that last.
              </motion.p>

              {/* Magnetic Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Button className="gradient-blue-purple hover:opacity-90 transition-opacity px-8 py-6 text-lg group relative overflow-hidden">
                  <motion.span className="relative z-10" whileHover={{ scale: 1.05 }}>
                    Contact Us
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
