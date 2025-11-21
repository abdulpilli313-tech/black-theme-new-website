"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"

const uniquePoints = [
  {
    title: "AI-first Engineering Mindset",
    description: "Approach every challenge with AI capabilities at the core, not as an afterthought.",
  },
  {
    title: "Deep Product Experience",
    description: "We're product builders first—not just agency work. Real-world impact drives every decision.",
  },
  {
    title: "End-to-End Expertise",
    description: "AI, automation, enterprise systems, 365 Dynamics, cloud infrastructure—complete solutions.",
  },
  {
    title: "Focus on ROI",
    description: "Every solution is measured by outcomes and business impact, not complexity.",
  },
  {
    title: "Speed + Quality",
    description: "Enterprise-grade reliability with startup velocity in every delivery.",
  },
  {
    title: "In-House Innovation",
    description: "Our own AI products built on real challenges we've solved for clients.",
  },
]

export function WhatsUnique() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container>
        <motion.div
          className="mb-16 text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">What Makes Us Different</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A unique blend of technical excellence, business acumen, and innovation focus
          </p>
        </motion.div>

        {/* Motion Showcase Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {uniquePoints.map((point, i) => (
            <motion.div key={i} variants={itemVariants} className="group">
              {/* Card with Animated Gradient Lines */}
              <div className="relative glass-strong rounded-2xl p-8 border border-white/10 h-full overflow-hidden group-hover:border-blue-400/50 transition-colors duration-300">
                {/* Rotating Ring Background */}
                <motion.div
                  className="absolute -inset-20 border-2 border-transparent bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ opacity: 0.3 }}
                />

                {/* Animated Gradient Wave */}
                <motion.div
                  className="absolute -top-1/2 left-0 w-full h-full bg-gradient-to-b from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: [0, 100, 200],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10">
                  {/* Glowing Lines */}
                  <motion.div
                    className="absolute top-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ width: ["0%", "100%", "0%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />

                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>

                  {/* Bottom Glowing Line */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
