import Link from "next/link"
import { Container } from "./container"
import { FooterCTA } from "@/components/cta/footer-cta"

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "AI Solutions", href: "/services/ai" },
      { label: "Software Development", href: "/services/development" },
      { label: "MS365 & Dynamics", href: "/services/microsoft" },
      { label: "Cloud Solutions", href: "/services/cloud" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Get in Touch", href: "/contact" },
      { label: "Support", href: "/support" },
      { label: "WhatsApp", href: "https://wa.me/" },
      { label: "hello@aihouse.com", href: "mailto:hello@aihouse.com" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <FooterCTA />

      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-xl gradient-blue-purple flex items-center justify-center font-bold text-white text-xl">
                  AI
                </div>
                <span className="text-lg font-bold gradient-text"> Permus Software House</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building intelligent software for the AI era. Premium solutions for modern businesses.
              </p>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Permus Software House. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
