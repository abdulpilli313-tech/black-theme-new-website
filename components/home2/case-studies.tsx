"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState, useEffect } from "react"

const metrics = [
  { value: 320, label: "leads generated", icon: "📈", suffix: "%" },
  { value: 40, label: "saved weekly", icon: "⏱️", suffix: "h" },
  { value: 999, label: "uptime", icon: "🛡️", suffix: "%" },
]

const clients = [
  { name: "Luxury Car Rental", metric: "+320% leads" },
  { name: "Retail Chain", metric: "40h saved" },
  { name: "Logistics Company", metric: "99.9% uptime" },
  { name: "FinTech", metric: "3x efficiency" },
]

export function Home2CaseStudies() {
  const [counts, setCounts] = useState([0, 0, 0])

  useEffect(() => {
    const intervals = metrics.map((metric, idx) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev]
          newCounts[idx] = Math.min(prev[idx] + metric.value / 20, metric.value)
          return newCounts
        })
      }, 50),
    )

    return () => intervals.forEach((interval) => clearInterval(interval))
  }, [])

  return (
    <section className="relative py-32 px-4">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          Results That Speak
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(59, 130, 246, 0.2)",
                    "0 0 60px rgba(59, 130, 246, 0.4)",
                    "0 0 30px rgba(59, 130, 246, 0.2)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              <div className="glass rounded-2xl p-8 border border-white/10 text-center backdrop-blur-xl group-hover:border-blue-500/50 transition-all relative z-10">
                <motion.div className="text-5xl mb-4">{metric.icon}</motion.div>
                <motion.p className="text-5xl font-bold gradient-text mb-2">
                  {metric.suffix === "%" && "+"}
                  {Math.round(counts[i])}
                  {metric.suffix}
                </motion.p>
                <p className="text-foreground/70">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass rounded-xl p-6 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all cursor-pointer"
            >
              <p className="font-semibold text-foreground mb-2">{client.name}</p>
              <motion.p
                className="text-sm text-blue-400 font-bold"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                {client.metric}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
