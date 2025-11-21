"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const studies = [
  {
    title: "Enterprise Automation",
    metric: "+300%",
    label: "Lead Generation Increase",
    desc: "Streamlined sales pipeline with AI-powered automation",
    company: "Fortune 500 Tech",
  },
  {
    title: "AI Customer Service",
    metric: "+50%",
    label: "Support Efficiency",
    desc: "Reduced response time and improved satisfaction",
    company: "Global Fintech",
  },
  {
    title: "Cloud Migration",
    metric: "+80%",
    label: "Performance Gain",
    desc: "Complete infrastructure modernization and optimization",
    company: "Enterprise Retail",
  },
]

export function CaseStudiesSection() {
  const [current, setCurrent] = useState(0)

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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance">Success Stories</h2>
        </motion.div>

        {/* Masonry-style carousel */}
        <div className="relative h-96 flex items-center justify-center perspective">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {studies.map((study, i) => (
              <motion.div
                key={i}
                className="absolute glass-strong rounded-3xl p-12 w-full max-w-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all"
                initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                animate={{
                  opacity: i === current ? 1 : 0,
                  scale: i === current ? 1 : 0.8,
                  rotateY: i === current ? 0 : -90,
                  zIndex: i === current ? 10 : 0,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: i === current ? 1 : 0, y: i === current ? 0 : 20 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-sm font-semibold text-blue-400 mb-4">{study.company}</p>
                  <h3 className="text-3xl font-bold text-white mb-6">{study.title}</h3>

                  {/* Large metric with animation */}
                  <motion.div
                    className="mb-6"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <p className="text-6xl md:text-7xl font-bold gradient-text text-balance">{study.metric}</p>
                    <p className="text-sm text-gray-400 mt-2">{study.label}</p>
                  </motion.div>

                  <p className="text-gray-300 mb-8">{study.desc}</p>

                  {/* Animated shine effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                    }}
                    animate={{ x: ["−100%", "100%"] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {studies.map((_, i) => (
            <motion.button
              key={i}
              className={`transition-all duration-300 ${
                i === current
                  ? "w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600"
                  : "w-8 h-8 rounded-lg bg-gray-700/50 hover:bg-gray-600"
              }`}
              onClick={() => setCurrent(i)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {i === current && (
                <motion.div
                  className="w-full h-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
