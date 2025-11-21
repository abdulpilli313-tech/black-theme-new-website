"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const caseStudies = [
  {
    id: 1,
    client: "Luxury Car Rental",
    industry: "Automotive",
    problem: "Manual bookings, inconsistent follow-ups, and lost leads.",
    solution: "AI Voice Agent + Automated Workflow System.",
    metrics: [
      { label: "Qualified Leads", value: "+320%", color: "text-blue-400" },
      { label: "Manual Work Reduced", value: "60%", color: "text-cyan-400" },
      { label: "Booking Operations", value: "24/7", color: "text-purple-400" },
    ],
  },
  {
    id: 2,
    client: "Retail Chain",
    industry: "Retail",
    problem: "Stockouts and poor demand forecasting affecting sales.",
    solution: "InsightAI predictive layer with real-time data dashboards.",
    metrics: [
      { label: "Inventory Turnover", value: "+25%", color: "text-blue-400" },
      { label: "Sales Increase", value: "+15%", color: "text-cyan-400" },
      { label: "KPI Monitoring", value: "Real-time", color: "text-purple-400" },
    ],
  },
  {
    id: 3,
    client: "Delivery Service",
    industry: "Logistics",
    problem: "Inefficient route planning, delays, and high operational costs.",
    solution: "AI-powered route optimization and workflow automation.",
    metrics: [
      { label: "Time Saved", value: "40hrs/week", color: "text-blue-400" },
      { label: "Fuel Reduction", value: "20%", color: "text-cyan-400" },
      { label: "Delivery Tracking", value: "Real-time", color: "text-purple-400" },
    ],
  },
  {
    id: 4,
    client: "Finance Operations",
    industry: "Finance",
    problem: "Manual reconciliation, error-prone reporting, slow month-end close.",
    solution: "AI automation engine integrated with ERP + Dynamics 365.",
    metrics: [
      { label: "Report Accuracy", value: "99.9%", color: "text-blue-400" },
      { label: "Processing Speed", value: "3x Faster", color: "text-cyan-400" },
      { label: "Anomaly Detection", value: "AI-Powered", color: "text-purple-400" },
    ],
  },
]

export default function CaseStudiesShowcase() {
  const [expandedId, setExpandedId] = useState<number | null>(null)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Case Studies Showcase</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real-world transformations across industries</p>
        </motion.div>

        {/* Horizontal masonry/asymmetrical grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-max">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setExpandedId(study.id)}
              onHoverEnd={() => setExpandedId(null)}
              className={`group ${index % 3 === 2 ? "lg:col-span-2" : ""}`}
            >
              <motion.div
                className="relative glass-strong p-8 rounded-2xl border border-blue-500/20 cursor-pointer
                  hover:border-purple-500/40 transition-all duration-300
                  hover:shadow-lg hover:shadow-purple-500/10"
                animate={{
                  rotateX: expandedId === study.id ? 5 : 0,
                  rotateY: expandedId === study.id ? -5 : 0,
                }}
                style={{ perspective: 1000 }}
              >
                {/* Light reflection */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute -inset-full bg-gradient-to-br from-white/0 via-white/5 to-transparent transform group-hover:translate-x-32 group-hover:translate-y-32 transition-transform duration-500" />
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{study.client}</h3>
                      <p className="text-sm text-purple-400">{study.industry}</p>
                    </div>
                    <div className="text-2xl font-bold gradient-text">📊</div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Problem</p>
                      <p className="text-sm text-gray-300">{study.problem}</p>
                    </div>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: expandedId === study.id ? "auto" : 0,
                        opacity: expandedId === study.id ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-3 pt-2 border-t border-white/10">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">Solution</p>
                          <p className="text-sm text-gray-300">{study.solution}</p>
                        </div>

                        {/* Neon-highlighted metrics */}
                        <div className="grid grid-cols-3 gap-2 pt-2">
                          {study.metrics.map((metric, i) => (
                            <div key={i} className="glass px-3 py-2 rounded-lg border border-white/10">
                              <p className={`text-sm font-bold ${metric.color}`}>{metric.value}</p>
                              <p className="text-xs text-gray-500">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {expandedId !== study.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-3 gap-2 pt-2"
                      >
                        {study.metrics.map((metric, i) => (
                          <div key={i} className="glass px-3 py-2 rounded-lg border border-white/10">
                            <p className={`text-sm font-bold ${metric.color}`}>{metric.value}</p>
                            <p className="text-xs text-gray-500">{metric.label}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
