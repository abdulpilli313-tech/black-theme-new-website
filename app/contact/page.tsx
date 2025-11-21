"use client"
import { ContactHero } from "@/components/contact/hero"
import { ContactOptionsGrid } from "@/components/contact/options-grid"
import { ContactForm } from "@/components/contact/form"
import { ContactInfo } from "@/components/contact/info"
import { ContactFAQ } from "@/components/contact/faq"
import { ContactCTA } from "@/components/contact/cta"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <ContactHero />
      <ContactOptionsGrid />
      <ContactForm />
      <ContactInfo />
      <ContactFAQ />
      <ContactCTA />
    </main>
  )
}
