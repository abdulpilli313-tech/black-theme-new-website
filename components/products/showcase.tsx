"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/use-mouse-position"

const products = [
  {
    id: 0,
    title: "AutomatePro",
    subtitle: "AI Workflow & Automation Engine",
    description: "Turn hours of manual work into seconds of smart automation.",
    features: ["Drag-and-drop AI workflow builder", "Autonomous task execution", "AI decision branching"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 1,
    title: "InsightAI",
    subtitle: "Predictive & Analytics Intelligence",
    description: "Real-time predictions and insights for enterprise clarity.",
    features: ["Predictive models", "Smart dashboards", "Pattern detection"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 2,
    title: "VoiceAgentX",
    subtitle: "AI Voice & Chat Agent System",
    description: "Next-gen communication powered by LLMs for every business function.",
    features: ["Voice agents powered by ElevenLabs", "Chat agents for support", "Lead qualification"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    id: 3,
    title: "Nexus360",
    subtitle: "Enterprise Integration Platform",
    description: "Unify your business systems into one intelligent hub.",
    features: ["ERP/CRM integration", "Central data layer", "AI-powered insights"],
    gradient: "from-pink-500 to-purple-500",
  },
]

interface ProductsShowcaseProps {
  onSelectProduct: (id: number) => void
}

export function ProductsShowcase({ onSelectProduct }: ProductsShowcaseProps) {
  const mousePosition = useMousePosition()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Holographic Product Tiles</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Premium tech cockpit widgets with 3D depth, neon glow, and parallax effects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => onSelectProduct(product.id)}
              className="group cursor-pointer"
            >
              <div className="relative h-96">
                {/* Parallax background glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${product.gradient} rounded-2xl blur-2xl opacity-20`}
                  animate={{
                    x: hoveredId === product.id ? mousePosition.x / 50 : 0,
                    y: hoveredId === product.id ? mousePosition.y / 50 : 0,
                  }}
                  transition={{ type: "spring", damping: 10 }}
                />

                {/* Glass card */}
                <motion.div
                  className="absolute inset-0 glass rounded-2xl border border-white/20 overflow-hidden"
                  animate={{
                    rotateX: hoveredId === product.id ? 5 : 0,
                    rotateY: hoveredId === product.id ? -5 : 0,
                    scale: hoveredId === product.id ? 1.02 : 1,
                  }}
                  transition={{ type: "spring", damping: 20 }}
                  style={{ transformPerspective: "1000px" }}
                >
                  {/* Light reflection */}
                  <motion.div
                    className="absolute -inset-full bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100"
                    animate={{
                      x: hoveredId === product.id ? (mousePosition.x - 300) / 10 : 0,
                      y: hoveredId === product.id ? (mousePosition.y - 200) / 10 : 0,
                    }}
                    transition={{ type: "spring", damping: 15 }}
                  />

                  {/* Neon border glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-30 rounded-2xl blur-sm`}
                    animate={{ opacity: hoveredId === product.id ? 0.3 : 0 }}
                  />

                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                    <div>
                      <motion.h3 className="text-2xl font-bold mb-2">{product.title}</motion.h3>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent mb-4`}
                      >
                        {product.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm mb-6">{product.description}</p>

                      <div className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-center gap-2 text-xs text-gray-400"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient}`} />
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Learn More button */}
                    <motion.button
                      className={`mt-6 px-4 py-2 border rounded-lg text-sm font-semibold text-white hover:shadow-lg transition-all duration-300 bg-gradient-to-r ${product.gradient} bg-clip-text text-transparent border-current`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More →
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
