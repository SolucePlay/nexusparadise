import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { MarqueeSection } from "@/components/marquee-section"
import { UniversSection } from "@/components/univers-section"
import { ShopSection } from "@/components/shop-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <MarqueeSection />
      <UniversSection />
      <ShopSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
