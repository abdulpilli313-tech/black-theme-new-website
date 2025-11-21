"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const products = [
  {
    title: "AI Voice Agent",
    value: "Advanced LLM Integration",
    description:
      "Enterprise-grade conversational AI powered by latest language models. Seamlessly integrate natural language understanding into your workflows.",
    features: ["Multi-language support", "Real-time sentiment analysis", "Custom training datasets"],
  },
  {
    title: "Automation Studio",
    value: "Workflow Automation",
    description:
      "Visual workflow automation for complex enterprise processes. No-code automation builder for citizen developers and technical teams.",
    features: ["1000+ pre-built integrations", "Custom logic builder", "Error handling & rollback"],
  },
  {
    title: "Analytics Dashboard",
    value: "Real-time Insights",
    description:
      "Beautiful, interactive data visualization and real-time insights. Transform raw data into actionable intelligence.",
    features: ["Custom dashboards", "Predictive analytics", "Export to multiple formats"],
  },
  {
    title: "Enterprise Suite",
    value: "Full-Stack Solution",
    description:
      "Complete enterprise platform combining AI, automation, and analytics. Unified solution for digital transformation.",
    features: ["Scalable infrastructure", "Enterprise SSO", "24/7 support"],
  },
]

export function OurProductsSection() {
  const [expanded, setExpanded] = useState<number | null>(0)

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance">Our Products Showroom</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium AI and automation solutions designed for enterprise performance
          </p>
        </motion.div>

        {/* Dynamic expanding card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              {/* 3D tilt effect container */}
              <motion.div
                className="relative h-full glass-strong rounded-3xl p-8 border border-blue-500/20 overflow-hidden group-hover:border-blue-500/50 transition-all duration-300"
                whileHover={{
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  y: -8,
                }}
              >
                {/* Animated glowing border effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="flex items-start justify-between mb-4"
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : "auto" }}
                  >
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{product.title}</h3>
                      <p className="text-blue-400 font-semibold text-sm">{product.value}</p>
                    </div>
                    <motion.div animate={{ rotate: expanded === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  </motion.div>

                  <p className="text-gray-300 mb-6">{product.description}</p>

                  {/* Expandable features */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expanded === i ? "auto" : 0,
                      opacity: expanded === i ? 1 : 0,
                      marginTop: expanded === i ? 16 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-white/10 space-y-3">
                      {product.features.map((feature, j) => (
                        <motion.div
                          key={j}
                          className="flex items-center gap-3 text-sm text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: j * 0.1 }}
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-400" />
                          {feature}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Animated icon dots */}
                  <motion.div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <div className="w-8 h-8 rounded-full border border-blue-400/50" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
