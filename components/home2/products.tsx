"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const products = [
  {
    name: "AutomatePro",
    description: "AI Workflow & Automation Engine",
    features: ["Drag-and-drop builder", "Autonomous task execution", "Real-time monitoring"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "InsightAI",
    description: "Predictive Analytics & Insights",
    features: ["Smart dashboards", "KPI automation", "Real-time forecasting"],
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "VoiceAgentX",
    description: "AI Voice & Chat Agent System",
    features: ["Voice + chat agents", "Lead qualification", "CRM integration"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Nexus360",
    description: "Enterprise Platform for Integrations",
    features: ["ERP/CRM integration", "AI operational insights", "Full scalability"],
    color: "from-pink-500 to-purple-500",
  },
]

export function Home2Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-4">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          Our Products
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group cursor-pointer h-full"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  boxShadow: hoveredIndex === i ? `0 0 30px rgba(59, 130, 246, 0.5)` : "0 0 0px rgba(0, 0, 0, 0)",
                }}
              />

              <div className="relative glass rounded-2xl p-8 border border-white/10 bg-gradient-to-br backdrop-blur-xl hover:border-white/30 transition-all duration-300 h-full flex flex-col">
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100`}
                  animate={{
                    boxShadow: hoveredIndex === i ? `0 0 30px rgba(59, 130, 246, 0.4)` : "0 0 0px rgba(0, 0, 0, 0)",
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className={`inline-block w-12 h-12 rounded-xl bg-gradient-to-r ${product.color} mb-4`}
                    animate={{
                      scale: hoveredIndex === i ? 1.1 : 1,
                    }}
                  />

                  <h3 className="text-2xl font-bold mb-2 text-white">{product.name}</h3>
                  <p className="text-foreground/70 mb-6">{product.description}</p>

                  <ul className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="text-sm text-foreground/60 flex items-center"
                      >
                        <motion.span
                          className={`w-2 h-2 bg-gradient-to-r ${product.color} rounded-full mr-3`}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ delay: idx * 0.2, repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
