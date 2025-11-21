"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CaseStudiesCTA() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 0.05,
    radius: 100 + Math.random() * 50,
  }))

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Orbiting dots animation */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            animate={{
              x: Math.cos((particle.id / 20) * Math.PI * 2) * particle.radius,
              y: Math.sin((particle.id / 20) * Math.PI * 2) * particle.radius,
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: particle.delay,
            }}
            style={{
              left: "50%",
              top: "50%",
              marginLeft: "-2px",
              marginTop: "-2px",
            }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative glass-strong p-12 md:p-16 rounded-3xl border border-purple-500/20
            hover:border-purple-500/40 transition-all duration-300"
        >
          {/* Breathing neon ring border */}
          <motion.div
            className="absolute inset-0 rounded-3xl border border-purple-500/20 pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 40px rgba(168, 85, 247, 0.2)",
                "0 0 80px rgba(168, 85, 247, 0.4)",
                "0 0 40px rgba(168, 85, 247, 0.2)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text">Let&apos;s Build the Next</span>
              <br />
              <span className="gradient-text">AI Success Story Together</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Partner with us to automate, predict, and innovate with AI-powered systems that drive real business value.
            </p>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
                    text-white font-semibold px-8 py-6 rounded-xl
                    hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
                >
                  Contact Us Today
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
