"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

const values = [
  {
    title: "Innovation First",
    description: "We push boundaries through experimentation, research, and next-gen tech adoption.",
    color: "from-blue-500/30 to-blue-600/10",
  },
  {
    title: "Engineering Excellence",
    description: "Every product is built with precision, scalability, and enterprise reliability.",
    color: "from-purple-500/30 to-purple-600/10",
  },
  {
    title: "Transparency & Trust",
    description: "We operate with clarity, honesty, and long-term partnerships.",
    color: "from-cyan-500/30 to-cyan-600/10",
  },
  {
    title: "Impact Over Activity",
    description: "We measure success by the outcomes we create, not the features we build.",
    color: "from-pink-500/30 to-pink-600/10",
  },
  {
    title: "Human-Centered AI",
    description: "Technology should empower people — not replace them.",
    color: "from-green-500/30 to-green-600/10",
  },
]

export function MissionValues() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const pillarVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <Container>
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Mission & Core Values</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building intelligent tools that dramatically reduce operational waste and deliver enterprise-level solutions
            with startup-level speed.
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="glass-strong rounded-2xl p-8 mb-16 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
          <ul className="space-y-3 text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 mt-1">•</span>
              <span>Build intelligent tools that dramatically reduce operational waste</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 mt-1">•</span>
              <span>Deliver enterprise-level solutions with startup-level speed</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-cyan-400 mt-1">•</span>
              <span>Enable businesses to adopt AI without technical complexity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-pink-400 mt-1">•</span>
              <span>Transform traditional processes using automation, agents, and machine intelligence</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">•</span>
              <span>Shape the future of work through scalable AI ecosystems</span>
            </li>
          </ul>
        </motion.div>

        {/* Values Pillars */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {values.map((value, i) => (
            <motion.div key={value.title} variants={pillarVariants} className="group relative" whileHover={{ y: -10 }}>
              {/* Pillar Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-b ${value.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Glass Pillar */}
              <div className="relative glass-strong rounded-2xl p-6 h-full flex flex-col border border-white/10 group-hover:border-white/20 transition-colors duration-300">
                {/* Glow on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId={`glow-${i}`}
                />

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>

              {/* Neon Base Glow */}
              <motion.div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-400 rounded-full blur-md opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
