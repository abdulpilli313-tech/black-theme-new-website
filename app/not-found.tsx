"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Particle = ({ delay }: { delay: number }) => {
  const angle = Math.random() * Math.PI * 2
  const distance = Math.random() * 200 + 100
  const x = Math.cos(angle) * distance
  const y = Math.sin(angle) * distance

  return (
    <motion.div
      className="absolute w-1 h-1 bg-blue-400 rounded-full"
      style={{
        left: "50%",
        top: "50%",
        marginLeft: "-2px",
        marginTop: "-2px",
      }}
      animate={{
        x: [0, x, 0],
        y: [0, y, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
    />
  )
}

const FloatingShape = ({ delay, color }: { delay: number; color: string }) => {
  const size = Math.random() * 60 + 30
  const angle = Math.random() * 360

  return (
    <motion.div
      className={`absolute rounded-full ${color}`}
      style={{
        width: size,
        height: size,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        rotate: [0, 360],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8 + Math.random() * 4,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "linear",
      }}
    />
  )
}

const NotFoundPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const rotationX = (clientY - centerY) / 20
      const rotationY = (clientX - centerX) / 20

      setRotation({ x: rotationX, y: rotationY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <Particle key={`particle-${i}`} delay={i * 0.1} />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <FloatingShape
            key={`shape-${i}`}
            delay={i * 0.2}
            color={i % 2 === 0 ? "bg-blue-500/10" : "bg-purple-500/10"}
          />
        ))}
      </div>

      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* 404 Hero Section */}
        <motion.div
          ref={containerRef}
          className="mb-8 perspective"
          style={{
            transformStyle: "preserve-3d",
          }}
          animate={{
            rotateX: rotation.x,
            rotateY: rotation.y,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        >
          <div className="relative">
            {/* Glow effect layers */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-lg blur-3xl opacity-20"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
              }}
            />

            {/* Glass panel with 404 */}
            <motion.div
              className="relative glass-strong px-12 py-8 rounded-2xl border border-blue-500/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              whileHover={{
                boxShadow: "0 0 40px rgba(59, 130, 246, 0.4), inset 0 0 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              <motion.div
                className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-center"
                animate={{
                  rotateZ: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              >
                404
              </motion.div>

              {/* Animated line under 404 */}
              <motion.div
                className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mt-4"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Playful messaging */}
        <motion.div
          className="text-center mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            Oops! The AI couldn't find this page…
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            But we found you here! 🎯
          </motion.p>

          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            This path is uncharted territory for our AI. Let us guide you back to greatness.
          </motion.p>
        </motion.div>

        {/* AI Assistant hint */}
        <motion.div
          className="mb-12 h-12 flex items-center justify-center"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <span className="text-sm text-blue-400 italic">The AI is recalibrating...</span>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link href="/">
            <Button
              size="lg"
              className="relative px-8 py-3 text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border border-blue-400/50 rounded-lg glass overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-white/10"
                animate={{
                  x: [-100, 100],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />
              <span className="relative flex items-center gap-2">← Go Home</span>
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg font-semibold border-2 border-purple-400/50 text-white hover:bg-purple-500/10 rounded-lg glass bg-transparent"
            >
              Talk to Our Team
            </Button>
          </Link>

          <Link href="/products">
            <Button
              size="lg"
              variant="ghost"
              className="px-8 py-3 text-lg font-semibold text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-lg"
            >
              Explore Products →
            </Button>
          </Link>
        </motion.div>

        {/* Easter egg - orbiting dots */}
        <motion.div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                left: "50%",
                top: "50%",
              }}
              animate={{
                x: Math.cos((i / 12) * Math.PI * 2) * 150,
                y: Math.sin((i / 12) * Math.PI * 2) * 150,
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default NotFoundPage
