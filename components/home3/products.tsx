"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const products = [
  {
    name: "AutomatePro",
    description: "Enterprise automation engine",
    icon: "⚙️",
    details: "Advanced workflow automation for enterprise-scale operations",
  },
  {
    name: "InsightAI",
    description: "Predictive analytics platform",
    icon: "📊",
    details: "Deep learning analytics for data-driven decisions",
  },
  {
    name: "VoiceAgentX",
    description: "AI voice assistant platform",
    icon: "🎤",
    details: "Natural language processing for customer engagement",
  },
  {
    name: "Nexus360",
    description: "Integration hub",
    icon: "🔗",
    details: "Seamless integration across all enterprise systems",
  },
]

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Our Holographic <span className="gradient-text">Product Suite</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Cutting-edge AI solutions designed for enterprise transformation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProduct(product)}
              className="group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                className="glass-strong p-8 rounded-2xl border border-white/10 h-full backdrop-blur-xl hover:border-purple-500/50 transition-all"
              >
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 gradient-blue-purple"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="glass-strong border-white/10 backdrop-blur-xl">
          <div className="text-center py-8">
            <div className="text-6xl mb-4">{selectedProduct?.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct?.name}</h2>
            <p className="text-foreground/70 mb-6">{selectedProduct?.details}</p>
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-32 h-32 mx-auto mb-6 glass-strong rounded-full"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
