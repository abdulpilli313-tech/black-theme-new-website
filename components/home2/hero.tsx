"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function Home2Hero() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{
              x: dimensions.width ? Math.random() * dimensions.width : 0,
              y: dimensions.height ? Math.random() * dimensions.height : 0,
              opacity: 0,
            }}
            animate={{
              y: [0, -150, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating glass panel background */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 glass rounded-3xl opacity-20 blur-3xl"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <Container>
        <div className="text-center space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl opacity-50" />
            <h1 className="text-5xl lg:text-7xl font-bold gradient-text relative">
              Redefining Intelligence for Modern Enterprises
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            We build AI-first products, custom enterprise solutions, and automation tools that transform how companies
            operate — smarter, faster, and future-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -5 }} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Button size="lg" className="gradient-blue-purple hover:opacity-90 relative">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -5 }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <Button
                size="lg"
                variant="outline"
                className="border-foreground/20 hover:bg-white/5 bg-transparent relative hover:border-cyan-500/50"
              >
                Book a Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
