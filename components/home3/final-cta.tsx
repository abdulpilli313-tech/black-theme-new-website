"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function FinalCta() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto w-full"
      >
        <div className="glass-strong p-12 lg:p-16 rounded-3xl border border-white/10 backdrop-blur-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Build Your <span className="gradient-text">AI-Powered Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-foreground/70 text-lg mb-8 max-w-xl mx-auto"
          >
            Join leading enterprises transforming their operations with our AI solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="gradient-blue-purple hover:opacity-90 transition-opacity px-8 py-6 text-lg h-auto">
              Start Your Journey
            </Button>
            <Button
              variant="outline"
              className="glass hover:bg-white/10 px-8 py-6 text-lg h-auto border-white/20 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </motion.div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="mt-12 w-32 h-32 mx-auto"
          >
            <div className="w-full h-full rounded-full border-2 border-transparent border-t-blue-500 border-r-purple-500" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
