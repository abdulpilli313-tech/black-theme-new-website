"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Sarah Chen",
    company: "TechCorp",
    quote: "Transformed our operations with intelligent automation",
  },
  {
    name: "Michael Rodriguez",
    company: "Global Logistics",
    quote: "The AI insights have been game-changing for our business",
  },
  {
    name: "Emma Wilson",
    company: "FinanceHub",
    quote: "Enterprise-grade solution that actually works",
  },
]

export default function Testimonials() {
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
          Client <span className="gradient-text">Testimonials</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-8 rounded-2xl border border-white/10 backdrop-blur-xl"
            >
              <p className="text-foreground/80 italic mb-6">"{testimonial.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-foreground/60">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
