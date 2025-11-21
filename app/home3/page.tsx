"use client"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import { ScrollTriggeredCTA } from "@/components/cta/scroll-triggered-cta"
import Hero from "@/components/home3/hero"
import Intro from "@/components/home3/intro"
import Products from "@/components/home3/products"
import Services from "@/components/home3/services"
import CaseStudies from "@/components/home3/case-studies"
import WorkflowMap from "@/components/home3/workflow-map"
import Testimonials from "@/components/home3/testimonials"
import Industries from "@/components/home3/industries"
import Blog from "@/components/home3/blog"
import FinalCta from "@/components/home3/final-cta"

export default function Home3() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <ScrollTriggeredCTA
          triggerPoint={1000}
          title="Transform Your Business"
          description="Experience the future of AI-powered automation."
          cta={{ text: "Explore Now", href: "/products" }}
        />

        <Hero />
        <Intro />
        <Products />
        <Services />
        <CaseStudies />
        <WorkflowMap />
        <Testimonials />
        <Industries />
        <Blog />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
