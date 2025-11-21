"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useMousePosition } from "@/hooks/use-mouse-position"

export function Home2Intro() {
  const mouse = useMousePosition()

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: (mouse.x - window.innerWidth / 2) * 0.05,
            y: (mouse.y - window.innerHeight / 2) * 0.05,
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: (mouse.x - window.innerWidth / 2) * -0.03,
            y: (mouse.y - window.innerHeight / 2) * -0.03,
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-12 lg:p-20 border border-white/10 max-w-3xl mx-auto backdrop-blur-xl glow-border-blue"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.1)",
                "0 0 40px rgba(59, 130, 246, 0.2)",
                "0 0 20px rgba(59, 130, 246, 0.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="rounded-3xl"
          >
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Our Vision</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              We are a next-generation AI software house, building intelligent systems, automation engines, and
              enterprise-grade platforms that redefine what's possible.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Our mission is simple: help businesses operate{" "}
              <span className="gradient-text font-bold">10x smarter</span> through AI-first technology.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
