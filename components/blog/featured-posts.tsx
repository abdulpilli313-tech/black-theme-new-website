"use client"
import { motion } from "framer-motion"

const featuredPosts = [
  {
    id: 1,
    title: "Automating Enterprise Workflows with AI",
    excerpt:
      "Discover how AI-driven automation is transforming business processes and increasing operational efficiency.",
    category: "AI",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Building Intelligent Agents for Customer Engagement",
    excerpt: "A deep dive into AI agent design and implementation strategies that deliver real ROI.",
    category: "Automation",
    image: "bg-gradient-to-br from-purple-500 to-blue-500",
  },
  {
    id: 3,
    title: "Predictive Analytics: Turning Data into Insights",
    excerpt: "Learn how predictive models and AI analytics can drive smarter business decisions.",
    category: "Enterprise Software",
    image: "bg-gradient-to-br from-pink-500 to-purple-500",
  },
  {
    id: 4,
    title: "Integrating AI with Microsoft Dynamics 365",
    excerpt: "Explore best practices for integrating AI systems into enterprise ERP and CRM solutions.",
    category: "Products",
    image: "bg-gradient-to-br from-cyan-500 to-green-500",
  },
]

export default function FeaturedPosts() {
  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center text-4xl font-bold"
        >
          Featured <span className="gradient-text">Posts</span>
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, rotateZ: -2 }}
              className="group glass rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image gradient background */}
              <div className={`h-40 ${post.image}`} />

              <div className="p-6">
                <div className="mb-3 inline-block">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30">
                    {post.category}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-bold leading-tight">{post.title}</h3>
                <p className="mb-4 text-sm text-gray-400">{post.excerpt}</p>

                <motion.button
                  whileHover={{ x: 4 }}
                  className="text-sm font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-2"
                >
                  Read More
                  <span>→</span>
                </motion.button>
              </div>

              {/* Hover glow border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity glow-border-blue" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
