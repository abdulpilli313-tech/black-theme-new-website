"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ProductsHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = 600

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
    }> = []

    const createParticle = () => {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        life: 1,
      })
    }

    for (let i = 0; i < 50; i++) createParticle()

    const animate = () => {
      ctx.fillStyle = "rgba(13, 13, 13, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.005

        if (p.life <= 0) particles.splice(i, 1)

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 8)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${p.life * 0.6})`)
        gradient.addColorStop(1, `rgba(59, 130, 246, 0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(p.x - 8, p.y - 8, 16, 16)
      })

      if (particles.length < 50) createParticle()
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Holographic shapes background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-10 right-20 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Discover Our AI-Powered</span>
            <br />
            <span className="text-white">Product Ecosystem</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our products are engineered for performance, automation, and intelligence — built to help businesses operate
            faster, smarter, and with zero friction. From AI agents to automation engines, our ecosystem supports
            end-to-end digital transformation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-xl opacity-30" />
            <button className="relative px-8 py-3 bg-background border border-blue-500/50 rounded-lg text-white font-semibold hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
              Explore Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
