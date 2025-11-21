"use client"

import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Email */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
            className="glass rounded-2xl p-8 group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl">
                ✉️
              </div>
              <h3 className="text-lg font-bold">Email</h3>
            </div>
            <p className="text-gray-300 font-semibold group-hover:text-blue-400 transition-colors duration-300">
              info@yourdomain.com
            </p>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-blue-500 to-transparent mt-4"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Location */}
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
            }}
            className="glass rounded-2xl p-8 group cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl glow-purple">
                📍
              </div>
              <h3 className="text-lg font-bold">Location</h3>
            </div>
            <p className="text-gray-300 font-semibold group-hover:text-purple-400 transition-colors duration-300">
              Dubai, United Arab Emirates
            </p>
            <motion.div
              className="h-0.5 bg-gradient-to-r from-purple-500 to-transparent mt-4"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
