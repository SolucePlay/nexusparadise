import { Wrench, Shirt, Shield, Cog, Gauge, HardHat } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    icon: Shirt,
    title: "Vêtements",
    slug: "vetements",
    description: "Streetwear technique pour riders et mécaniciens",
  },
  {
    icon: HardHat,
    title: "EPI",
    slug: "epi",
    description: "Équipements de protection individuelle certifiés",
  },
  {
    icon: Wrench,
    title: "Outils",
    slug: "outils",
    description: "Outillage pro pour atelier et garage",
  },
  {
    icon: Cog,
    title: "Pièces",
    slug: "pieces",
    description: "Pièces détachées et accessoires performance",
  },
  {
    icon: Gauge,
    title: "Équipements",
    slug: "equipements",
    description: "Établis, rangements et aménagement atelier",
  },
  {
    icon: Shield,
    title: "Accessoires",
    slug: "accessoires",
    description: "Casques, gants, protections sports extrêmes",
  },
]

export function ShopSection() {
  return (
    <section id="shop" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Notre catalogue
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            GEAR UP
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Tout ce qu&apos;il faut pour vivre ta passion. Qualité pro, style street.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={`/shop/${category.slug}`}
              className="group relative p-8 bg-background border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                &rarr;
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <span className="text-sm text-muted-foreground">
            Shop bientôt disponible — inscris-toi pour être notifié
          </span>
        </div>
      </div>
    </section>
  )
}
