"use client"

import { motion } from "framer-motion"

const blogPosts = [
  {
    title: "The Future of Enterprise AI",
    excerpt: "Exploring the next generation of intelligent automation",
    date: "Jan 15, 2024",
  },
  {
    title: "Automation ROI: Real Numbers",
    excerpt: "How companies are achieving 300% ROI with AI automation",
    date: "Jan 12, 2024",
  },
  {
    title: "AI Security Best Practices",
    excerpt: "Implementing enterprise-grade security for AI systems",
    date: "Jan 10, 2024",
  },
]

export default function Blog() {
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
          Latest <span className="gradient-text">Insights</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="glass-strong p-8 rounded-2xl border border-white/10 backdrop-blur-xl cursor-pointer"
            >
              <h3 className="text-lg font-bold mb-3">{post.title}</h3>
              <p className="text-foreground/60 text-sm mb-4">{post.excerpt}</p>
              <p className="text-xs text-foreground/40">{post.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
