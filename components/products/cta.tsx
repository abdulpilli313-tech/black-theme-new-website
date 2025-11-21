"use client"

import { motion } from "framer-motion"

export function ProductsCta() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Explore the Future of
            <br />
            <span className="gradient-text">Our AI Products?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's build an intelligent infrastructure for your entire business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4"
        >
          {/* Animated orbiting dots background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-blue-500 rounded-full"
                animate={{
                  x: Math.cos((i / 6) * Math.PI * 2 + Date.now() / 1000) * 100,
                  y: Math.sin((i / 6) * Math.PI * 2 + Date.now() / 1000) * 100,
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-10 py-4 bg-background border-2 border-blue-500 rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="relative">Contact Us</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white font-bold text-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
          >
            Schedule Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
