"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function ServicesCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight * 0.5

    let angle = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw orbiting dots
      for (let i = 0; i < 3; i++) {
        const radius = 100 + i * 60
        const x = canvas.width / 2 + Math.cos(angle + (i * Math.PI) / 1.5) * radius
        const y = canvas.height / 2 + Math.sin(angle + (i * Math.PI) / 1.5) * radius

        ctx.fillStyle = i % 2 === 0 ? "rgba(59, 130, 246, 0.6)" : "rgba(168, 85, 247, 0.6)"
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fill()
      }

      angle += 0.01

      requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background px-4 py-20">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glow-border-purple glass-strong text-center max-w-2xl rounded-2xl p-12"
        >
          <motion.h2
            className="text-5xl font-bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="gradient-text">Let's Build Your AI-Powered Future</span>
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Tell us what you want to achieve — we'll engineer the system that makes it real.
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-8">
            <button className="glow-border-blue rounded-lg border px-8 py-4 font-semibold text-blue-400 transition-all duration-300 hover:glow-blue">
              Contact Us
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
