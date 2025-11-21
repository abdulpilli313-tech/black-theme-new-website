"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import Image from "next/image"

const leaders = [
  {
    name: "Abdul",
    title: "Founder & AI Architect",
    description:
      "Leads product strategy, innovation, and AI system design. Drives the vision of intelligent automation and enterprise transformation.",
    image: "/placeholder-user.jpg",
  },
]

export function Leadership() {
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Leadership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Visionaries driving the future of AI</p>
        </motion.div>

        {/* Floating Profile Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -20 }}
            >
              {/* Glass Card with Neon Border */}
              <div className="glass-strong rounded-2xl p-8 border border-white/10 group-hover:border-blue-400/50 transition-colors duration-300 relative overflow-hidden h-full">
                {/* Parallax Background Glow */}
                <motion.div
                  className="absolute -inset-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl opacity-0 group-hover:opacity-100 -z-10"
                  transition={{ duration: 0.3 }}
                />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Profile Image */}
                  <motion.div
                    className="relative w-32 h-32 rounded-full overflow-hidden mb-6 border-2 border-white/10 group-hover:border-blue-400/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">{leader.name}</h3>
                  <p className="text-sm font-semibold text-blue-400 mb-4">{leader.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.description}</p>
                </div>

                {/* Brightness Glow on Hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none rounded-2xl"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
