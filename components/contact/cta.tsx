"use client"

import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="relative py-20 px-4 md:px-8 overflow-hidden">
      {/* Orbiting dots background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full"
            style={{
              left: "50%",
              top: "50%",
            }}
            animate={{
              x: Math.cos((i / 6) * Math.PI * 2) * 150,
              y: Math.sin((i / 6) * Math.PI * 2) * 150,
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="glass-strong rounded-3xl p-12 md:p-16 text-center glow-border-blue"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold gradient-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Have a Project in Mind? Let's Talk.
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We'll help you design, build, and scale intelligent systems for your business.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-xl transition-shadow duration-300"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
