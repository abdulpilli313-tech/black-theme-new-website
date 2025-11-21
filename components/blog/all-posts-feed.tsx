"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const allPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Operations",
    date: "Nov 2025",
    excerpt: "How intelligent automation is reshaping workflows across industries.",
    category: "AI",
  },
  {
    id: 2,
    title: "Voice AI Agents: Case Study",
    date: "Oct 2025",
    excerpt: "Real-world example of AI-powered voice agents increasing sales efficiency.",
    category: "Case Studies",
  },
  {
    id: 3,
    title: "Predictive Analytics for Logistics",
    date: "Sep 2025",
    excerpt: "Using AI to forecast inventory needs and optimize supply chains.",
    category: "Tutorials",
  },
  {
    id: 4,
    title: "Integrating AI into SaaS Products",
    date: "Aug 2025",
    excerpt: "How startups and enterprises can embed AI seamlessly into their applications.",
    category: "Enterprise Software",
  },
  {
    id: 5,
    title: "Building Scalable AI Infrastructures",
    date: "Jul 2025",
    excerpt: "Best practices for deploying AI systems at scale across cloud platforms.",
    category: "Industry Trends",
  },
  {
    id: 6,
    title: "AI-Powered Customer Service Automation",
    date: "Jun 2025",
    excerpt: "Transforming support teams with intelligent chatbots and AI agents.",
    category: "Automation",
  },
]

interface AllPostsFeedProps {
  category: string
}

export default function AllPostsFeed({ category }: AllPostsFeedProps) {
  const [visibleCount, setVisibleCount] = useState(4)

  const filteredPosts =
    category === "all" ? allPosts : allPosts.filter((post) => post.category.toLowerCase() === category)

  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-3xl font-bold"
        >
          All <span className="gradient-text">Posts</span>
        </motion.h2>

        <div className="space-y-4">
          {filteredPosts.slice(0, visibleCount).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ x: 8 }}
              className="group glass rounded-xl p-6 cursor-pointer border border-white/5 hover:border-blue-400/30 transition-all"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="mb-2 text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="text-xs font-semibold text-gray-500">{post.date}</span>
                  <motion.button whileHover={{ x: 4 }} className="text-blue-400 hover:text-blue-300">
                    →
                  </motion.button>
                </div>
              </div>

              {/* Animated bottom border */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                className="mt-4 h-0.5 bg-gradient-blue-purple origin-left"
              />
            </motion.div>
          ))}
        </div>

        {visibleCount < filteredPosts.length && (
          <motion.button
            onClick={() => setVisibleCount(visibleCount + 3)}
            whileHover={{ scale: 1.05 }}
            className="mt-12 mx-auto block px-8 py-3 rounded-full glass glow-border-blue font-semibold"
          >
            Load More Articles
          </motion.button>
        )}
      </div>
    </section>
  )
}
