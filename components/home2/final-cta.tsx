"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"

export function Home2FinalCTA() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            animate={{
              rotate: 360,
              x: Math.cos((i * Math.PI * 2) / 8) * 150,
              y: Math.sin((i * Math.PI * 2) / 8) * 150,
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}

        <motion.div
          className="absolute w-80 h-80 rounded-full border border-cyan-500/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-3xl p-12 lg:p-20 border border-white/10 text-center max-w-3xl mx-auto backdrop-blur-xl glow-border-blue"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 30px rgba(59, 130, 246, 0.2)",
                "0 0 60px rgba(59, 130, 246, 0.4)",
                "0 0 30px rgba(59, 130, 246, 0.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 rounded-3xl pointer-events-none"
          />

          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">Let's Build Your AI-Powered Future</h2>
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed">
              Partner with us to automate, predict, and innovate with cutting-edge AI-powered systems that transform
              your business.
            </p>

            <motion.div whileHover={{ scale: 1.05, y: -3 }} className="group relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Button
                size="lg"
                className="gradient-blue-purple hover:opacity-90 relative group-hover:scale-105 transition-transform"
              >
                Contact Us Today
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
