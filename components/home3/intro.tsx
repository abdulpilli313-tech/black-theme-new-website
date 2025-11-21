"use client"

import { motion } from "framer-motion"

export default function Intro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <div className="glass-strong p-8 lg:p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl lg:text-3xl leading-relaxed"
          >
            We are a <span className="gradient-text font-bold">next-gen AI software house</span> delivering intelligent
            systems, automation workflows, and enterprise solutions built for the future.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
            {[
              { label: "AI Innovation", value: "100%" },
              { label: "Enterprise Ready", value: "99.99%" },
              { label: "24/7 Support", value: "Always" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="gradient-text text-3xl font-bold mb-2">{stat.value}</div>
                <p className="text-foreground/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
