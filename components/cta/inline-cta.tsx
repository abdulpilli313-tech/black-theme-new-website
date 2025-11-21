"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface InlineCTAProps {
  text: string
  href?: string
  variant?: "blue" | "purple" | "cyan"
  icon?: ReactNode
}

export function InlineCTA({ text, href = "#", variant = "blue", icon }: InlineCTAProps) {
  const variantStyles = {
    blue: "glow-border-blue hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    purple: "glow-border-purple hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    cyan: "border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]",
  }

  return (
    <motion.a
      href={href}
      className={`glass px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-all ${variantStyles[variant]}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon && icon}
      {text}
    </motion.a>
  )
}
