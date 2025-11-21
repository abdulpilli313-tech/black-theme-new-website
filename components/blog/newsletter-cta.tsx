"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function NewsletterCTA() {
  const [email, setEmail] = useState("")

  return (
    <section className="relative py-20 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Background glow effects */}
        <div className="absolute inset-0 rounded-3xl opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative glass-strong rounded-3xl p-12 border border-blue-400/20"
        >
          <h2 className="mb-4 text-center text-3xl font-bold">
            Stay <span className="gradient-text">Ahead in AI</span>
          </h2>
          <p className="mb-8 text-center text-gray-300">Subscribe for Insights.</p>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              setEmail("")
            }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full bg-white/5 px-6 py-4 text-white placeholder-gray-500 border border-white/10 focus:border-blue-400/50 focus:outline-none transition-all"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-blue-purple font-bold text-white glow-blue transition-all"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
