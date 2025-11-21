"use client"

import { useState } from "react"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { ScrollTriggeredCTA } from "@/components/cta/scroll-triggered-cta"
import { ProductsHero } from "@/components/products/hero"
import { ProductsShowcase } from "@/components/products/showcase"
import { ProductDetail } from "@/components/products/product-detail"
import { AiProductSuite } from "@/components/products/ai-product-suite"
import { WhyStandOut } from "@/components/products/why-stand-out"
import { Roadmap } from "@/components/products/roadmap"
import { ProductsCta } from "@/components/products/cta"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <ScrollTriggeredCTA
        triggerPoint={800}
        title="Explore Our Full Suite"
        description="Discover all our AI-powered products and solutions."
        cta={{ text: "Request Demo", href: "/contact" }}
      />
      <ProductsHero />
      <ProductsShowcase onSelectProduct={setSelectedProduct} />
      <ProductDetail productId={selectedProduct} onClose={() => setSelectedProduct(null)} />
      <AiProductSuite />
      <WhyStandOut />
      <Roadmap />
      <ProductsCta />
      <Footer />
    </div>
  )
}
