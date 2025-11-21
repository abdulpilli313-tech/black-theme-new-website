"use client"
import { motion } from "framer-motion"

interface SectionCTAPanelProps {
  title: string
  description?: string
  primaryCTA: { text: string; href?: string }
  secondaryCTA?: { text: string; href?: string }
}

export function SectionCTAPanel({ title, description, primaryCTA, secondaryCTA }: SectionCTAPanelProps) {
  return (
    <div className="w-full px-4 py-20">
      <motion.div
        className="glass-strong rounded-2xl border border-blue-500/30 p-8 md:p-12 text-center max-w-2xl mx-auto glow-border-blue"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
                y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              }}
              transition={{ duration: 5 + Math.random() * 5, repeat: Number.POSITIVE_INFINITY }}
              style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">{title}</h3>
          {description && <p className="text-gray-300 mb-8 text-lg">{description}</p>}

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={primaryCTA.href || "#"}
              className="glass px-8 py-3 rounded-lg font-semibold glow-border-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {primaryCTA.text}
            </motion.a>
            {secondaryCTA && (
              <motion.a
                href={secondaryCTA.href || "#"}
                className="glass px-8 py-3 rounded-lg font-semibold glow-border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {secondaryCTA.text}
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
