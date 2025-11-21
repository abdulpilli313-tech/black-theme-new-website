"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface GlassButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary"
}

export function GlassButton({ children, onClick, className = "", variant = "primary" }: GlassButtonProps) {
  const variantStyles = {
    primary: "glow-border-blue hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    secondary: "glow-border-purple hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]",
  }

  return (
    <motion.button
      onClick={onClick}
      className={`glass px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-300 ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  )
}
