"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const testimonials = [
  {
    name: "Luxury Car Rental CEO",
    quote: "The AI Voice Agent completely transformed our booking process — we've never seen such results!",
    role: "CEO",
    initial: "A",
  },
  {
    name: "Retail Operations Manager",
    quote:
      "InsightAI gave us the visibility and predictive insights we desperately needed. Revenue went up 3x in months.",
    role: "Operations Manager",
    initial: "B",
  },
]

export function Home2Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="relative py-32 px-4">
      <Container>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold gradient-text text-center mb-20"
        >
          What Clients Say
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                animate={{
                  boxShadow:
                    hoveredIndex === i
                      ? `0 0 40px rgba(${i === 0 ? "59, 130, 246" : "168, 85, 247"}, 0.6)`
                      : "0 0 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 0.3 }}
              />

              <div className="glass rounded-3xl p-8 border border-white/10 backdrop-blur-xl group-hover:border-white/30 transition-all relative z-10">
                <motion.div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${i === 0 ? "from-blue-500 to-cyan-500" : "from-purple-500 to-pink-500"} flex items-center justify-center text-white font-bold mb-6`}
                  animate={{
                    scale: hoveredIndex === i ? 1.1 : 1,
                  }}
                >
                  {testimonial.initial}
                </motion.div>
                <motion.p className="text-lg text-foreground/80 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </motion.p>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
