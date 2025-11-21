"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Enterprise-Grade Quality",
    desc: "Production-ready solutions built to scale with your business",
    icon: "🏆",
  },
  {
    title: "Full-Stack Expertise",
    desc: "Complete product experience from design to deployment",
    icon: "🔧",
  },
  {
    title: "AI-First Engineering",
    desc: "Every solution optimized with cutting-edge AI capabilities",
    icon: "⚡",
  },
  {
    title: "Scalable Architecture",
    desc: "Built for growth without compromise on performance",
    icon: "📈",
  },
]

export function WhyChooseUsSection() {
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
          <h2 className="text-5xl md:text-6xl font-bold mb-6 gradient-text text-balance">Why Choose Us</h2>
        </motion.div>

        {/* Premium gradient pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Vertical glowing pillar effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, transparent 50%, rgba(168, 85, 247, 0.2) 100%)`,
                }}
              />

              {/* Liquid gradient border animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl p-[1px] overflow-hidden pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <motion.div
                  className="w-full h-full rounded-2xl"
                  style={{
                    background: `linear-gradient(45deg, #3b82f6, #a855f7, #3b82f6)`,
                    backgroundSize: "200% 200%",
                  }}
                  animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>

              <motion.div
                className="relative glass-strong rounded-2xl p-8 border border-transparent group-hover:border-blue-500/30 transition-all duration-300 h-full"
                whileHover={{
                  boxShadow: "0 0 60px rgba(59, 130, 246, 0.2)",
                  y: -8,
                }}
              >
                <motion.div
                  className="text-4xl mb-4 w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {reason.icon}
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.desc}</p>

                {/* Motion-based reveal shimmer */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                  }}
                  animate={{ x: ["−100%", "100%"] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
