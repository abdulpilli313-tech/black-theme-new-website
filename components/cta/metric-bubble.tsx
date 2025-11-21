"use client"

import { motion } from "framer-motion"

interface MetricBubbleProps {
  number: string | number
  label: string
  cta?: { text: string; href?: string }
}

export function MetricBubble({ number, label, cta }: MetricBubbleProps) {
  return (
    <motion.div
      className="glass rounded-full p-8 w-32 h-32 flex flex-col items-center justify-center text-center group glow-border-blue cursor-pointer relative overflow-hidden"
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 rounded-full border border-blue-500/0 group-hover:border-blue-500/50"
        animate={{
          boxShadow: [
            "0 0 20px rgba(59,130,246,0.3)",
            "0 0 40px rgba(59,130,246,0.6)",
            "0 0 20px rgba(59,130,246,0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />

      <div className="relative z-10">
        <div className="text-3xl font-bold gradient-text">{number}</div>
        <div className="text-xs text-gray-400 mt-2">{label}</div>

        {cta && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-blue-500/10 backdrop-blur"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">{cta.text}</button>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
