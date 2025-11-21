"use client"

import { motion } from "framer-motion"

const metrics = [
  { label: "Leads Generated", value: "500K+", icon: "📈" },
  { label: "Automation Hours", value: "1.2M+", icon: "⏱️" },
  { label: "Uptime", value: "99.99%", icon: "✅" },
]

export default function CaseStudies() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Proven <span className="gradient-text">Impact & Results</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-8 rounded-2xl border border-white/10 backdrop-blur-xl text-center"
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-4xl font-bold gradient-text mb-2"
              >
                {metric.value}
              </motion.div>
              <p className="text-foreground/60">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
