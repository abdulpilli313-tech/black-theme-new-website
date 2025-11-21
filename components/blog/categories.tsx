"use client"
import { motion } from "framer-motion"

const categories = [
  "All",
  "AI",
  "Automation",
  "Enterprise Software",
  "Products",
  "Case Studies",
  "Tutorials",
  "Industry Trends",
]

interface CategoriesProps {
  activeCategory: string
  setActiveCategory: (category: string) => void
}

export default function BlogCategories({ activeCategory, setActiveCategory }: CategoriesProps) {
  return (
    <section className="relative py-12 px-6 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="flex overflow-x-auto gap-3 pb-4">
          {categories.map((category) => {
            const isActive = activeCategory === category.toLowerCase()
            return (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full whitespace-nowrap font-semibold transition-all ${
                  isActive ? "glass-strong glow-border-blue" : "glass hover:glass-strong"
                }`}
              >
                {category}
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
