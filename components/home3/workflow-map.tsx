"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function WorkflowMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const nodes = [
      { x: canvas.width * 0.2, y: canvas.height * 0.3, label: "Agents" },
      { x: canvas.width * 0.5, y: canvas.height * 0.1, label: "Automation" },
      { x: canvas.width * 0.8, y: canvas.height * 0.3, label: "Analytics" },
      { x: canvas.width * 0.65, y: canvas.height * 0.7, label: "Integrations" },
    ]

    let time = 0
    const animate = () => {
      time += 0.01

      ctx.fillStyle = "rgba(13, 13, 13, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections with animation
      ctx.strokeStyle = "rgba(59, 130, 246, 0.2)"
      ctx.lineWidth = 1
      for (let i = 0; i < nodes.length; i++) {
        const nextI = (i + 1) % nodes.length
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[nextI].x, nodes[nextI].y)
        ctx.stroke()
      }

      // Draw nodes
      nodes.forEach((node) => {
        const glow = Math.sin(time + (node.x + node.y) * 0.001) * 0.5 + 0.5
        ctx.fillStyle = `rgba(168, 85, 247, ${0.3 + glow * 0.4})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, 12 + glow * 4, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = `rgba(59, 130, 246, ${0.6 + glow * 0.4})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

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
          AI Workflow <span className="gradient-text">Architecture</span>
        </motion.h2>

        <div className="glass-strong rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden">
          <canvas ref={canvasRef} className="w-full h-96" />
        </div>
      </div>
    </section>
  )
}
