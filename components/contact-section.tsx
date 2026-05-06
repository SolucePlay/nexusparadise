"use client"

import { useState } from "react"
import { Instagram, Youtube, Send } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formState)
    alert("Merci pour ton message ! On te répond vite.")
    setFormState({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4 mb-6 tracking-tight">
              REJOINS LA<br />
              <span className="text-primary">FAMILLE</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Une question ? Une idée ? Tu veux rejoindre l&apos;aventure ?
              On est toujours à l&apos;écoute de la communauté.
            </p>

            {/* Social Links */}
            <div className="mb-10">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-4">
                Suivez-nous
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 bg-card border border-border rounded-lg">
              <h4 className="text-sm font-medium text-foreground uppercase tracking-wider mb-2">
                Newsletter
              </h4>
              <p className="text-sm text-muted-foreground mb-4">
                Sois le premier informé des nouveautés et événements.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="flex-1 px-4 py-2.5 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground text-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-colors"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">
              Envoie-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="Ton nom"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  placeholder="ton@email.com"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Dis-nous tout..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-colors uppercase tracking-wider"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
