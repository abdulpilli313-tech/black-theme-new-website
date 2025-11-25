"use client"

import { useState } from "react"
import Navbar from "@/components/shared/navbar"
import Footer from "@/components/shared/footer"
import BlogHero from "@/components/blog/hero"
import FeaturedPosts from "@/components/blog/featured-posts"
import BlogCategories from "@/components/blog/categories"
import AllPostsFeed from "@/components/blog/all-posts-feed"
import NewsletterCTA from "@/components/blog/newsletter-cta"
import BlogFinalCTA from "@/components/blog/final-cta"

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="min-h-screen bg-background">
    
      <BlogHero />
      <FeaturedPosts />
      <BlogCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <AllPostsFeed category={activeCategory} />
      <NewsletterCTA />
      <BlogFinalCTA />
      <Footer />
    </div>
  )
}
