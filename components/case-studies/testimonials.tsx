"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    client: "Luxury Car Rental CEO",
    role: "Executive",
    quote: "The AI Voice Agent completely transformed our booking process — we've never seen such results!",
    metrics: "+320% Leads",
  },
  {
    id: 2,
    client: "Retail Operations Manager",
    role: "Operations",
    quote: "InsightAI gave us the visibility and predictive insights we desperately needed. Revenue went up in months.",
    metrics: "+15% Sales",
  },
  {
    id: 3,
    client: "Logistics Director",
    role: "Fleet Management",
    quote: "The automation saved us thousands monthly. Best investment we made this year.",
    metrics: "40hrs Saved",
  },
]

export default function TestimonialsSection() {
  const [activeId, setActiveId] = useState(1)

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-gray-400">Testimonials from industry leaders</p>
        </motion.div>

        {/* Floating glass testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setActiveId(testimonial.id)}
              className="group cursor-pointer"
            >
              <motion.div
                className={`relative glass-strong p-8 rounded-2xl border transition-all duration-300
                  ${activeId === testimonial.id ? "border-purple-500/50 glow-border-purple" : "border-white/10"}`}
                animate={{
                  y: activeId === testimonial.id ? -5 : 0,
                }}
              >
                <div className="space-y-4">
                  {/* Neon outline highlight when active */}
                  {activeId === testimonial.id && (
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-blue-500/5"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                    />
                  )}

                  <div className="relative z-10">
                    <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <p className="font-semibold text-white">{testimonial.client}</p>
                        <p className="text-xs text-purple-400">{testimonial.role}</p>
                      </div>
                      <p className="text-lg font-bold gradient-text">{testimonial.metrics}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
