import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ScrollTriggeredCTA } from "@/components/cta/scroll-triggered-cta"
import { AboutHero } from "@/components/about/hero"
import { CompanyVision } from "@/components/about/vision"
import { MissionValues } from "@/components/about/mission-values"
import { JourneyTimeline } from "@/components/about/journey-timeline"
import { Leadership } from "@/components/about/leadership"
import { WhatsUnique } from "@/components/about/whats-unique"
import { GlobalPresence } from "@/components/about/global-presence"
import { FinalCTA } from "@/components/about/final-cta"

export const metadata = {
  title: "About Us | AI Software House",
  description: "Learn about our mission to redefine intelligence through AI innovation and enterprise solutions.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ScrollTriggeredCTA
        triggerPoint={600}
        title="Learn Our Story"
        description="Discover how we're leading AI innovation."
        cta={{ text: "Get Started", href: "/services" }}
      />
      <AboutHero />
      <CompanyVision />
      <MissionValues />
      <JourneyTimeline />
      <Leadership />
      <WhatsUnique />
      <GlobalPresence />
      <FinalCTA />
      <Footer />
    </main>
  )
}
