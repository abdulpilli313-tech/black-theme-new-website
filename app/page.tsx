import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ScrollTriggeredCTA } from "@/components/cta/scroll-triggered-cta"
import { HeroSection } from "@/components/home/hero"
import { WhatWeDoSection } from "@/components/home/what-we-do"
import { OurProductsSection } from "@/components/home/our-products"
import { WhyChooseUsSection } from "@/components/home/why-choose-us"
import { CaseStudiesSection } from "@/components/home/case-studies"
import { TechStripSection } from "@/components/home/tech-strip"
import { FinalCTASection } from "@/components/home/final-cta"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
     

      {/* <ScrollTriggeredCTA
        triggerPoint={600}
        title="Ready to Get Started?"
        description="Explore our AI solutions and transform your business today."
        cta={{ text: "View Solutions", href: "/services" }}
      /> */}

      {/* Hero Section */}
      <HeroSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Our Products Section */}
      <OurProductsSection />

      {/* Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* Case Studies Preview Section */}
      <CaseStudiesSection />

      {/* Technologies Section */}
      <TechStripSection />

      {/* Final CTA Section */}
      {/* <FinalCTASection /> */}

      <Footer />
    </div>
  )
}
