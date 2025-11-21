"use client"

import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/use-mouse-position"
import { useState } from "react"

const options = [
  {
    title: "Work With Us",
    description: "Have a custom AI or software project? Let's discuss how we can help you build it.",
    buttonText: "Start a Project",
    icon: "✨",
  },
  {
    title: "Product Demo",
    description: "Want to see our AI products in action? Book a personalized demo.",
    buttonText: "Request Demo",
    icon: "🚀",
  },
  {
    title: "Partnership / Collaboration",
    description: "We collaborate with agencies, enterprises, and technology partners worldwide.",
    buttonText: "Partner With Us",
    icon: "🤝",
  },
]

function OptionCard({ option, index }: { option: (typeof options)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)
  const { x, y } = useMousePosition()

  const rotateX = isHovered ? (y - 50) * 0.5 : 0
  const rotateY = isHovered ? (x - 50) * -0.5 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="h-full"
      >
        <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between relative overflow-hidden group-hover:glow-border-blue transition-all duration-300">
          {/* Glow overlay on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
            }}
          />

          <div className="relative z-10">
            <motion.div
              className="text-4xl mb-4"
              animate={isHovered ? { scale: 1.2 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {option.icon}
            </motion.div>
            <h3 className="text-2xl font-bold mb-3 gradient-text">{option.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{option.description}</p>
          </div>

          <motion.button
            className="mt-8 px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/50 transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {option.buttonText}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ContactOptionsGrid() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-4">How Can We Help?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Choose the option that best fits your needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((option, index) => (
            <OptionCard key={index} option={option} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
