"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How soon do you respond?",
    answer: "We typically reply within 24 hours.",
  },
  {
    question: "Do you work with global clients?",
    answer: "Yes — we work with companies across UAE, GCC, Europe, Asia, and North America.",
  },
  {
    question: "Do you offer product demos?",
    answer: "Absolutely. Tell us which product you're interested in and we'll schedule a demo.",
  },
  {
    question: "What services do you provide?",
    answer:
      "AI automation, AI agents, custom software development, enterprise integrations, Dynamics 365, cloud solutions, and more.",
  },
  {
    question: "What is your project process?",
    answer: "Discovery → Architecture → Build → Integrate → Automate → Scale.",
  },
]

export function ContactFAQ() {
  return (
    <section className="relative py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-400">Find answers to common questions about our services</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-strong rounded-2xl p-6 md:p-8 glow-border-purple"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-left font-semibold text-white hover:text-blue-400 transition-colors duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
