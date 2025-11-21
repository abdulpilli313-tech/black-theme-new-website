"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-3">Send Us a Message</h2>
          <p className="text-gray-400">Share some details and our team will get in touch shortly.</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="glass-strong rounded-3xl p-8 md:p-12 glow-border-blue"
        >
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="What should we call you?"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-transparent border-blue-500/30 rounded-full focus:border-blue-500 focus:glow-border-blue transition-all duration-300"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 font-semibold">Name</label>
            </div>
            <div className="relative">
              <Input
                type="email"
                placeholder="Where can we reach you?"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-transparent border-blue-500/30 rounded-full focus:border-blue-500 focus:glow-border-blue transition-all duration-300"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 font-semibold">Email</label>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative">
              <Input
                type="text"
                placeholder="Your organization or brand"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-transparent border-blue-500/30 rounded-full focus:border-blue-500 focus:glow-border-blue transition-all duration-300"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 font-semibold">Company</label>
            </div>
            <div className="relative">
              <Input
                type="tel"
                placeholder="For quicker communication"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-transparent border-blue-500/30 rounded-full focus:border-blue-500 focus:glow-border-blue transition-all duration-300"
              />
              <label className="absolute left-4 top-2 text-xs text-gray-500 font-semibold">Phone (optional)</label>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <Select
              value={formData.projectType}
              onValueChange={(value) => setFormData({ ...formData, projectType: value })}
            >
              <SelectTrigger className="bg-transparent border-blue-500/30 rounded-full focus:border-blue-500 focus:glow-border-blue">
                <SelectValue placeholder="Choose your interest" />
              </SelectTrigger>
              <SelectContent className="bg-slate-950 border-slate-800">
                <SelectItem value="ai-services">AI Services</SelectItem>
                <SelectItem value="product-demo">Product Demo</SelectItem>
                <SelectItem value="enterprise-solutions">Enterprise Solutions</SelectItem>
                <SelectItem value="integration">Integration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            <label className="text-xs text-gray-500 font-semibold">Project Type</label>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Textarea
              placeholder="Tell us about your project or requirements"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-transparent border-blue-500/30 rounded-2xl focus:border-blue-500 focus:glow-border-blue transition-all duration-300 resize-none"
              rows={5}
            />
            <label className="text-xs text-gray-500 font-semibold">Message</label>
          </motion.div>

          <motion.button
            type="submit"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold hover:shadow-lg transition-shadow duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
}
