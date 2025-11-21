"use client"

import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ServicesHero } from "@/components/services/hero"
import { CoreServices } from "@/components/services/core-services"
import { AICapabilitiesMap } from "@/components/services/ai-capabilities-map"
import { EnterpriseSolutions } from "@/components/services/enterprise-solutions"
import { ProcessTimeline } from "@/components/services/process-timeline"
import { IndustryExpertise } from "@/components/services/industry-expertise"
import { ServicesCTA } from "@/components/services/cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ServicesHero />
      <CoreServices />
      <AICapabilitiesMap />
      <EnterpriseSolutions />
      <ProcessTimeline />
      <IndustryExpertise />
      <ServicesCTA />
      <Footer />
    </main>
  )
}
