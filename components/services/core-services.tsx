"use client"

import { motion } from "framer-motion"
import { useMousePosition } from "@/hooks/use-mouse-position"

const services = [
  {
    title: "AI Automation & Intelligent Workflows",
    description:
      "Design and deploy intelligent automations that reduce manual work, eliminate bottlenecks, and increase operational efficiency across the organization.",
    icon: "⚡",
  },
  {
    title: "Custom AI Agents",
    description:
      "Build advanced AI agents that handle tasks like support, sales, lead nurturing, operations, data retrieval, and more — fully autonomous and context-aware.",
    icon: "🤖",
  },
  {
    title: "Machine Learning & Predictive Models",
    description:
      "Develop ML models to forecast demand, detect anomalies, personalize experiences, and optimize business outcomes.",
    icon: "📊",
  },
  {
    title: "LLM Integrations & AI Extensions",
    description:
      "Integrate advanced language models into existing workflows, CRMs, apps, and internal processes with secure and scalable architectures.",
    icon: "🧠",
  },
  {
    title: "Software Development & Digital Platforms",
    description:
      "We build high-performance custom software — from internal tools to full enterprise platforms — with scalable architecture and modern tech stacks.",
    icon: "💻",
  },
  {
    title: "API Integrations & Cloud Architecture",
    description:
      "Seamlessly connect systems, ERPs, payment gateways, and 3rd-party services. Build robust cloud infrastructure optimized for security, performance, and growth.",
    icon: "☁️",
  },
]

export function CoreServices() {
  const mousePosition = useMousePosition()

  return (
    <section className="relative min-h-screen w-full bg-background px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Our <span className="gradient-text">Core Services</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">Premium AI solutions engineered for enterprise scale</p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="glow-border-blue glass rounded-xl p-6 transition-all duration-300 group-hover:glow-border-purple">
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-4 text-sm text-muted-foreground">{service.description}</p>

                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1) 0%, transparent 80%)`,
                    pointerEvents: "none",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
