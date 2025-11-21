"use client"

import { AnimatePresence, motion } from "framer-motion"

const productDetails = [
  {
    id: 0,
    title: "AutomatePro",
    fullDescription:
      "A powerful automation platform that connects apps, triggers workflows, processes data, and runs intelligent operations without human input.",
    capabilities: [
      "Drag-and-drop AI workflow builder",
      "Autonomous task execution",
      "AI decision branching",
      "API integrations",
      "Real-time monitoring",
    ],
  },
  {
    id: 1,
    title: "InsightAI",
    fullDescription:
      "Our AI analytics engine turns raw data into real-time predictions and insights. Designed for enterprises that need clarity, accuracy, and performance.",
    capabilities: ["Predictive models", "Smart dashboards", "Pattern detection", "KPI automation", "Data forecasting"],
  },
  {
    id: 2,
    title: "VoiceAgentX",
    fullDescription:
      "A next-gen communication system powered by LLMs for sales, support, bookings, and lead qualification — in voice or chat.",
    capabilities: [
      "Voice agents powered by ElevenLabs / LLMs",
      "Chat agents for support and sales",
      "Lead qualification",
      "Meeting booking automation",
      "CRM integration",
    ],
  },
  {
    id: 3,
    title: "Nexus360",
    fullDescription:
      "A centralized platform designed to unify your business systems — ERP, CRM, operations, analytics, and AI — into one intelligent hub.",
    capabilities: [
      "ERP/CRM integration (Dynamics 365, HubSpot, Zoho)",
      "Central data layer",
      "AI-powered operational insights",
      "Automation across departments",
      "Full enterprise scalability",
    ],
  },
]

interface ProductDetailProps {
  productId: number | null
  onClose: () => void
}

export function ProductDetail({ productId, onClose }: ProductDetailProps) {
  const product = productId !== null ? productDetails[productId] : null

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-12 z-50 flex items-center justify-center"
          >
            <motion.div className="glass rounded-2xl border border-white/20 max-w-3xl w-full max-h-[80vh] overflow-y-auto">
              <div className="relative">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                >
                  ✕
                </button>

                {/* Content */}
                <div className="p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
                    <p className="text-lg text-gray-300 mb-8">{product.fullDescription}</p>
                  </motion.div>

                  {/* Capabilities */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-xl font-semibold mb-6">Core Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.capabilities.map((cap, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.05 }}
                          className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                          <p className="text-gray-300">{cap}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Placeholder screenshots */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-12"
                  >
                    <h3 className="text-xl font-semibold mb-6">Product Interface</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2].map((_, idx) => (
                        <div
                          key={idx}
                          className="aspect-video rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center"
                        >
                          <p className="text-gray-500">Screenshot Preview</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
