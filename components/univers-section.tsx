"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const poles = [
  {
    id: "nexus-paradise",
    name: "Nexus Paradise",
    tagline: "La marque",
    description: "Comme DC Shoes a été créé par des skaters pour des skaters, Nexus Paradise c'est la marque française des passionnés de sports extrêmes et de mécanique. Vêtements techniques, chaussures, outils, pièces, établis, EPI... tout ce dont tu as besoin pour vivre ta passion.",
    color: "bg-primary",
  },
  {
    id: "nexus-famille",
    name: "Nexus Famille",
    tagline: "La communauté",
    description: "Une grande famille qui regroupe tous les passionnés : riders, mécaniciens, pilotes, gearheads... Le côté sport extrême et le côté mécanique réunis. Des événements, des rencontres, une vraie communauté de passionnés auto, sport auto et mécanique.",
    color: "bg-orange-500",
  },
  {
    id: "redline",
    name: "Redline",
    tagline: "Le crew",
    description: "Le Hoonigan version française. On crée des voitures de folie pour faire des drifts, des sauts, des cascades en tout genre. Pas que des voitures : motos, quads, tout ce qui roule et fait monter l'adrénaline. Du contenu, des builds, de la pure passion.",
    color: "bg-red-600",
  },
  {
    id: "apex-lab",
    name: "Apex Lab",
    tagline: "Le labo R&D",
    description: "Le laboratoire de création de Nexus Paradise. C'est ici qu'on développe nos outils, nos vêtements, nos équipements. On peut même créer des pièces custom pour véhicules. Innovation, prototypage, production : de l'idée à la réalité.",
    color: "bg-blue-500",
  },
  {
    id: "lance-mecanique",
    name: "Lance Mécanique",
    tagline: "L'association",
    description: "Une association pour lutter contre le tout électrique et maximiser les recherches pour un carburant biodégradable, comme ce que Porsche développe. Préserver le plaisir de la mécanique tout en étant responsable. Le bruit, les sensations, mais propre.",
    color: "bg-green-500",
  },
  {
    id: "hommell",
    name: "Hommell",
    tagline: "Le rêve",
    description: "Projet long terme : relancer Hommell, cette marque automobile française de voitures sportives prestigieuses du début des années 2000. Des GT françaises, du luxe, de la performance. Un rêve de passionné qui demande du temps et des moyens, mais qui vaut le coup.",
    color: "bg-amber-500",
  },
]

export function UniversSection() {
  const [activePole, setActivePole] = useState(poles[0])

  return (
    <section id="univers" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nos univers
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            6 PÔLES, 1 VISION
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nexus Paradise c&apos;est bien plus qu&apos;une marque. C&apos;est un écosystème complet pour les passionnés.
          </p>
        </div>

        {/* Interactive Poles Display */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Poles List */}
          <div className="space-y-2">
            {poles.map((pole) => (
              <button
                key={pole.id}
                onClick={() => setActivePole(pole)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                  activePole.id === pole.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-border/80 bg-card"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${pole.color}`} />
                    <div>
                      <h3 className={`font-bold ${activePole.id === pole.id ? "text-primary" : "text-foreground"}`}>
                        {pole.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">{pole.tagline}</span>
                    </div>
                  </div>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activePole.id === pole.id ? "text-primary rotate-90" : "text-muted-foreground"}`} />
                </div>
              </button>
            ))}
          </div>

          {/* Active Pole Detail */}
          <div className="lg:sticky lg:top-24">
            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-4 h-4 rounded-full ${activePole.color}`} />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {activePole.tagline}
                </span>
              </div>
              <h3 className="text-3xl font-black text-foreground mb-4">
                {activePole.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {activePole.description}
              </p>
              <div className="mt-8 pt-6 border-t border-border">
                <Link 
                  href={`/univers/${activePole.id}`}
                  className="text-sm text-primary font-medium hover:underline"
                >
                  En savoir plus &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
