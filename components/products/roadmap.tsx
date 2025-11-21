"use client"

import { motion } from "framer-motion"

const roadmapItems = [
  {
    quarter: "2025 Q1",
    title: "AI Data Personalization Engine",
    description: "Real-time predictive personalization for marketing and operations.",
    icon: "📊",
  },
  {
    quarter: "2025 Q2",
    title: "Autonomous Business Agent",
    description: "Full multi-step operational agent capable of running internal tasks.",
    icon: "🤖",
  },
  {
    quarter: "2025 Q3",
    title: "AI + ERP Dynamic Forecasting",
    description: "Predictive ERP integrations for inventory, sales, and operations.",
    icon: "📈",
  },
  {
    quarter: "2025 Q4",
    title: "Voice Orchestration Engine",
    description: "End-to-end voice AI workflows for enterprise call centers.",
    icon: "🎙️",
  },
]

export function Roadmap() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">2025 Product Roadmap</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Upcoming expansions to power your business</p>
        </motion.div>

        <div className="relative">
          {/* Horizontal line connector */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {roadmapItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Glowing node */}
                <div className="flex flex-col items-center mb-8">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-background border-2 border-blue-500 glow-blue flex items-center justify-center text-2xl mb-6 relative z-10"
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-lg border border-white/20 p-6 text-center w-full"
                  >
                    <p className="text-sm font-bold text-blue-400 mb-2">{item.quarter}</p>
                    <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
