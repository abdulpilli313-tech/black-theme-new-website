"use client"

import { motion } from "framer-motion"

const metrics = [
  { value: "+320%", label: "Leads Generated", icon: "📈", color: "from-blue-500 to-cyan-500" },
  { value: "40hrs", label: "Saved Weekly", icon: "⏱️", color: "from-purple-500 to-pink-500" },
  { value: "99.9%", label: "System Uptime", icon: "✓", color: "from-emerald-500 to-teal-500" },
  { value: "+15%", label: "Sales Increase", icon: "💰", color: "from-orange-500 to-red-500" },
]

export default function MetricsSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Impact Across Industries</span>
          </h2>
          <p className="text-gray-400">Measurable results that speak volumes</p>
        </motion.div>

        {/* Animated floating glass bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <motion.div
                className={`relative glass-strong p-8 rounded-2xl border border-white/10 
                  hover:border-blue-500/40 transition-all duration-300
                  bg-gradient-to-br ${metric.color}/5
                  hover:shadow-lg hover:shadow-blue-500/10`}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                    "0 0 40px rgba(59, 130, 246, 0.2)",
                    "0 0 20px rgba(59, 130, 246, 0.1)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.3,
                }}
              >
                <div className="text-center space-y-4">
                  <motion.div
                    className="text-4xl"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    {metric.icon}
                  </motion.div>

                  <div>
                    <p className="text-3xl font-bold gradient-text">{metric.value}</p>
                    <p className="text-sm text-gray-400 mt-2">{metric.label}</p>
                  </div>

                  {/* Glow animation on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{
                      boxShadow: [
                        `0 0 30px rgba(59, 130, 246, 0.3)`,
                        `0 0 50px rgba(59, 130, 246, 0.5)`,
                        `0 0 30px rgba(59, 130, 246, 0.3)`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
