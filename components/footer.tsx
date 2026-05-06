"use client"

import { useState } from "react"
import Link from "next/link"

const footerLinks = {
  univers: [
    { label: "Nexus Paradise", href: "/univers/nexus-paradise" },
    { label: "Nexus Famille", href: "/univers/nexus-famille" },
    { label: "Redline", href: "/univers/redline" },
    { label: "Apex Lab", href: "/univers/apex-lab" },
    { label: "Lance Mécanique", href: "/univers/lance-mecanique" },
    { label: "Hommell", href: "/univers/hommell" },
  ],
  shop: [
    { label: "Vêtements", href: "/shop/vetements" },
    { label: "EPI", href: "/shop/epi" },
    { label: "Outils", href: "/shop/outils" },
    { label: "Pièces", href: "/shop/pieces" },
    { label: "Équipements", href: "/shop/equipements" },
    { label: "Accessoires", href: "/shop/accessoires" },
  ],
  legal: [
    { label: "Mentions légales", href: "#" },
    { label: "CGV", href: "#" },
    { label: "Confidentialité", href: "#" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    alert("Merci pour ton inscription !")
    setEmail("")
  }

  return (
    <footer className="py-16 md:py-24 border-t border-border bg-card">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-6">
              <span className="text-xl font-black tracking-tighter text-foreground">NEXUS</span>
              <span className="text-xl font-black tracking-tighter text-primary">PARADISE</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Par des passionnés, pour des passionnés.
              La marque française pour les riders et les mécaniciens.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="ton@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
              >
                OK
              </button>
            </form>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Univers</h4>
            <ul className="space-y-3">
              {footerLinks.univers.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Légal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative pt-16">
          <div className="text-[80px] md:text-[120px] lg:text-[180px] font-black text-border/30 leading-none text-center select-none tracking-tighter">
            NP
          </div>
          <div className="absolute inset-x-0 bottom-0 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground pt-8 border-t border-border bg-card">
            <p>© {new Date().getFullYear()} Nexus Paradise. Tous droits réservés.</p>
            <p className="flex items-center gap-2">
              Crée par <span className="text-primary">Duncan Langrume</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
