"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/container"
import { useState } from "react"

const blogPosts = [
  {
    title: "The Future of AI in Enterprise",
    snippet: "How AI is transforming modern business operations...",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
  },
  {
    title: "Automation ROI: What We've Learned",
    snippet: "Real case studies showing automation benefits...",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
  },
  {
    title: "Enterprise AI Adoption Trends 2024",
    snippet: "Latest trends in AI implementation across industries...",
    color: "from-cyan-500/20 to-blue-500/20",
    borderColor: "border-cyan-500/30",
  },
]

export function Home2Blog() {
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
          Latest Insights
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -12, scale: 1.02 }}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{
                  boxShadow:
                    hoveredIndex === i
                      ? [
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                          "0 0 40px rgba(168, 85, 247, 0.3)",
                          "0 0 20px rgba(59, 130, 246, 0.3)",
                        ]
                      : "0 0 0px rgba(0, 0, 0, 0)",
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />

              <div
                className={`glass rounded-2xl p-8 border ${post.borderColor} bg-gradient-to-br ${post.color} backdrop-blur-xl group-hover:border-opacity-100 transition-all relative z-10 h-full flex flex-col`}
              >
                <h3 className="text-lg font-bold mb-3 group-hover:gradient-text transition-all text-white flex-1">
                  {post.title}
                </h3>
                <p className="text-foreground/60 text-sm leading-relaxed">{post.snippet}</p>
                <motion.div
                  className="mt-4 inline-block text-sm font-semibold text-blue-400"
                  animate={{ x: hoveredIndex === i ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Read more →
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
