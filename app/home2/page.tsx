"use client"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ScrollTriggeredCTA } from "@/components/cta/scroll-triggered-cta"
import { Home2Hero } from "@/components/home2/hero"
import { Home2Intro } from "@/components/home2/intro"
import { Home2Products } from "@/components/home2/products"
import { Home2Services } from "@/components/home2/services"
import { Home2CaseStudies } from "@/components/home2/case-studies"
import { Home2Capabilities } from "@/components/home2/capabilities"
import { Home2Testimonials } from "@/components/home2/testimonials"
import { Home2Industries } from "@/components/home2/industries"
import { Home2Blog } from "@/components/home2/blog"
import { Home2FinalCTA } from "@/components/home2/final-cta"

export default function Home2Page() {
  return (
    <div className="min-h-screen bg-background">
   
      <main className="pt-20">
        <ScrollTriggeredCTA
          triggerPoint={800}
          title="Enterprise Solutions"
          description="Need custom AI implementation? Let's discuss your project."
          cta={{ text: "Schedule Demo", href: "/contact" }}
        />

        <Home2Hero />
        <Home2Intro />
        <Home2Products />
        <Home2Services />
        <Home2CaseStudies />
        <Home2Capabilities />
        <Home2Testimonials />
        <Home2Industries />
        <Home2Blog />
        {/* <Home2FinalCTA /> */}
      </main>
      <Footer />
    </div>
  )
}
