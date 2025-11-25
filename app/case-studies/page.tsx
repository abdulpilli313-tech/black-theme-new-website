"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import CaseStudiesHero from "@/components/case-studies/hero"
import CaseStudiesShowcase from "@/components/case-studies/showcase"
import MetricsSection from "@/components/case-studies/metrics"
import IndustryExpertise from "@/components/case-studies/industry-expertise"
import TestimonialsSection from "@/components/case-studies/testimonials"
import CaseStudiesCTA from "@/components/case-studies/cta"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
  
      <main>
        <CaseStudiesHero />
        <CaseStudiesShowcase />
        <MetricsSection />
        <IndustryExpertise />
        <TestimonialsSection />
        <CaseStudiesCTA />
      </main>
      <Footer />
    </div>
  )
}
