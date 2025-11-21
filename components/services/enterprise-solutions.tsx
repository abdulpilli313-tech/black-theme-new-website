"use client"

import { motion } from "framer-motion"

const solutions = [
  {
    title: "Dynamics 365 & ERP Integrations",
    description:
      "Implement and customize Microsoft Dynamics 365 with seamless AI-powered automation and business intelligence.",
  },
  {
    title: "Custom CRM Systems",
    description:
      "Powerful CRM platforms tailored to your business — fully integrated with automation, analytics, and AI-driven insights.",
  },
  {
    title: "Data Infrastructure & Cloud Systems",
    description:
      "Set up secure, scalable cloud systems that enable real-time analytics, AI training, and uninterrupted enterprise workflows.",
  },
  {
    title: "Enterprise Process Automation",
    description:
      "Reinvent traditional processes with AI-powered solutions that reduce cost, improve accuracy, and scale effortlessly.",
  },
]

export function EnterpriseSolutions() {
  return (
    <section className="relative min-h-screen w-full bg-background px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Solutions for <span className="gradient-text">Enterprise</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-6xl space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-2"
            >
              {index % 2 === 0 ? (
                <>
                  <div className="glass-strong rounded-xl p-8">
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                    <p className="mt-4 text-muted-foreground">{solution.description}</p>
                  </div>
                  <div className="glow-border-purple glass h-64 rounded-xl" />
                </>
              ) : (
                <>
                  <div className="glow-border-blue glass h-64 rounded-xl" />
                  <div className="glass-strong rounded-xl p-8">
                    <h3 className="text-2xl font-semibold">{solution.title}</h3>
                    <p className="mt-4 text-muted-foreground">{solution.description}</p>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
