"use client"

import { motion } from "framer-motion"

const services = ["AI Automation", "AI Agents", "Predictive Analytics", "Integrations", "ERP/365", "Cloud Solutions"]

export default function Services() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl lg:text-5xl font-bold text-center mb-16"
        >
          Core <span className="gradient-text">Services & Capabilities</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="glass-strong p-8 rounded-2xl border border-white/10 backdrop-blur-xl text-center hover:border-blue-500/50 transition-all h-full flex items-center justify-center min-h-[200px]">
                <div>
                  <h3 className="text-xl font-bold gradient-text mb-2">{service}</h3>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="h-0.5 gradient-blue-purple mx-auto w-12 origin-left"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
