"use client"

import { motion } from "framer-motion"

export function FinalCTASection() {
  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
  }

  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Animated blurred beam background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)",
            "linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, transparent 100%)",
            "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, transparent 100%)",
          ],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Orbiting dots around CTA card */}
          <motion.div className="absolute -inset-20 pointer-events-none" variants={orbitVariants} animate="animate">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-blue-500/50"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `rotate(${i * 120}deg) translateX(100px)`,
                }}
                animate={{
                  boxShadow: ["0 0 10px rgba(59, 130, 246, 0.5)", "0 0 20px rgba(59, 130, 246, 0.2)"],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            ))}
          </motion.div>

          {/* Main CTA card */}
          <motion.div
            className="glass-strong rounded-3xl p-16 border-2 border-blue-500/20 hover:border-blue-500/50 transition-all relative overflow-hidden"
            whileHover={{
              boxShadow: "0 0 80px rgba(59, 130, 246, 0.4)",
            }}
          >
            {/* Neon ring effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              animate={{
                boxShadow: [
                  "inset 0 0 40px rgba(59, 130, 246, 0.1)",
                  "inset 0 0 80px rgba(59, 130, 246, 0.2)",
                  "inset 0 0 40px rgba(59, 130, 246, 0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            />

            <div className="text-center relative z-10">
              <motion.h2
                className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Transform Your Business Today
              </motion.h2>

              <motion.p
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Ready to harness the power of AI-driven solutions? Let's build something extraordinary together.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <motion.button
                  className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-bold text-lg hover:opacity-90 transition-opacity glow-blue"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.button>
                <motion.button
                  className="px-12 py-4 glass text-white rounded-lg font-bold text-lg glow-border-blue hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Demo
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
