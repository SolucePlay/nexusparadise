import Link from "next/link"
import { ArrowLeft, ExternalLink, Users, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const universData: Record<string, {
  name: string
  tagline: string
  color: string
  bgGradient: string
  description: string
  longDescription: string
  features: { title: string; description: string }[]
  stats: { label: string; value: string }[]
  cta: { label: string; href: string }
}> = {
  "nexus-paradise": {
    name: "Nexus Paradise",
    tagline: "La marque des passionnés",
    color: "text-red-500",
    bgGradient: "from-red-500/20 to-transparent",
    description: "Comme DC Shoes a été créé par des skaters pour des skaters, Nexus Paradise c'est la marque française des passionnés de sports extrêmes et de mécanique.",
    longDescription: "Nexus Paradise est née d'une vision simple : créer une marque par des passionnés, pour des passionnés. Inspirés par l'histoire de DC Shoes et Ken Block, nous avons voulu apporter cette même authenticité au monde de la mécanique et des sports extrêmes en France. Chaque produit est pensé, testé et approuvé par notre communauté. Du streetwear technique aux outils pro, en passant par les EPI et les équipements d'atelier, tout est conçu pour répondre aux vrais besoins des riders et mécaniciens.",
    features: [
      { title: "Vêtements techniques", description: "Streetwear robuste et stylé pour l'atelier et la rue" },
      { title: "Outillage professionnel", description: "Des outils de qualité pro pour tous les budgets" },
      { title: "EPI certifiés", description: "Protection maximale sans compromis sur le style" },
      { title: "Équipements atelier", description: "Établis, rangements et aménagements" },
    ],
    stats: [
      { label: "Produits", value: "200+" },
      { label: "Catégories", value: "6" },
      { label: "Partenaires", value: "50+" },
    ],
    cta: { label: "Découvrir le shop", href: "/shop/vetements" },
  },
  "nexus-famille": {
    name: "Nexus Famille",
    tagline: "La communauté",
    color: "text-orange-500",
    bgGradient: "from-orange-500/20 to-transparent",
    description: "Une grande famille qui regroupe tous les passionnés : riders, mécaniciens, pilotes, gearheads...",
    longDescription: "Nexus Famille, c'est bien plus qu'un club ou une association. C'est une vraie communauté de passionnés qui partagent les mêmes valeurs : l'amour de la mécanique, l'adrénaline des sports extrêmes, et le respect mutuel. Que tu sois pilote amateur, mécanicien du dimanche ou professionnel confirmé, tu as ta place dans la Famille. On organise des événements, des rencontres, des sessions sur circuit et des rassemblements partout en France.",
    features: [
      { title: "Événements réguliers", description: "Rassemblements, meets et sessions sur circuit" },
      { title: "Entraide communautaire", description: "Forum, Discord et groupes locaux actifs" },
      { title: "Avantages membres", description: "Réductions exclusives et accès prioritaires" },
      { title: "Réseau national", description: "Des membres dans toute la France" },
    ],
    stats: [
      { label: "Membres", value: "5K+" },
      { label: "Événements/an", value: "24" },
      { label: "Villes", value: "35" },
    ],
    cta: { label: "Rejoindre la Famille", href: "#contact" },
  },
  "redline": {
    name: "Redline",
    tagline: "Le crew",
    color: "text-red-600",
    bgGradient: "from-red-600/20 to-transparent",
    description: "Le Hoonigan version française. On crée des voitures de folie pour faire des drifts, des sauts, des cascades en tout genre.",
    longDescription: "Redline, c'est notre réponse française à Hoonigan. Un crew de passionnés qui pousse les machines dans leurs derniers retranchements. On build des voitures de drift, des monsters pour le gymkhana, des motos de stunt. On filme, on partage, on inspire. Chaque projet est une aventure, chaque vidéo est une célébration de la passion automobile. Des burnouts aux sauts impossibles, Redline repousse les limites de ce qui est faisable avec 4 roues (ou 2).",
    features: [
      { title: "Builds extrêmes", description: "Véhicules préparés pour la performance et le show" },
      { title: "Contenu vidéo", description: "YouTube, Instagram, TikTok - du contenu régulier" },
      { title: "Événements live", description: "Démos, shows et rencontres avec le crew" },
      { title: "Collaborations", description: "Projets avec pilotes et créateurs" },
    ],
    stats: [
      { label: "Builds", value: "12" },
      { label: "Vidéos", value: "150+" },
      { label: "Abonnés", value: "250K" },
    ],
    cta: { label: "Voir nos builds", href: "#" },
  },
  "apex-lab": {
    name: "Apex Lab",
    tagline: "Le labo R&D",
    color: "text-blue-500",
    bgGradient: "from-blue-500/20 to-transparent",
    description: "Le laboratoire de création de Nexus Paradise. C'est ici qu'on développe nos outils, nos vêtements, nos équipements.",
    longDescription: "Apex Lab est le cœur battant de l'innovation chez Nexus Paradise. Notre équipe de designers, ingénieurs et passionnés travaille chaque jour pour créer les produits de demain. Du premier croquis au produit fini, tout est fait en interne. On développe nos propres textiles techniques, on usine nos outils, on prototype nos équipements. On peut même créer des pièces custom pour véhicules grâce à notre atelier équipé CNC, imprimantes 3D métal et composite.",
    features: [
      { title: "Design produit", description: "De l'idée au prototype en quelques semaines" },
      { title: "Fabrication CNC", description: "Usinage précis pour pièces sur mesure" },
      { title: "Impression 3D", description: "Prototypage rapide et pièces fonctionnelles" },
      { title: "Textile technique", description: "Développement de tissus haute performance" },
    ],
    stats: [
      { label: "Prototypes/an", value: "500+" },
      { label: "Brevets", value: "8" },
      { label: "Ingénieurs", value: "15" },
    ],
    cta: { label: "Découvrir nos innovations", href: "#" },
  },
  "lance-mecanique": {
    name: "Lance Mécanique",
    tagline: "L'association",
    color: "text-green-500",
    bgGradient: "from-green-500/20 to-transparent",
    description: "Une association pour lutter contre le tout électrique et maximiser les recherches pour un carburant biodégradable.",
    longDescription: "Lance Mécanique est notre engagement pour l'avenir du moteur thermique. Face à la transition forcée vers le tout électrique, nous croyons qu'il existe une alternative : les carburants synthétiques et biodégradables. Comme Porsche avec ses e-fuels, nous soutenons et finançons la recherche pour développer des carburants neutres en carbone. Préserver le plaisir de conduite, le bruit des moteurs, les sensations uniques du thermique - mais de manière responsable et durable.",
    features: [
      { title: "Recherche & développement", description: "Financement de projets de carburants bio" },
      { title: "Lobbying positif", description: "Dialogue avec les institutions européennes" },
      { title: "Sensibilisation", description: "Conférences, articles et documentaires" },
      { title: "Partenariats", description: "Collaboration avec constructeurs et labos" },
    ],
    stats: [
      { label: "Investis en R&D", value: "2M€" },
      { label: "Partenaires", value: "25" },
      { label: "Adhérents", value: "12K" },
    ],
    cta: { label: "Soutenir la cause", href: "#contact" },
  },
  "hommell": {
    name: "Hommell",
    tagline: "Le rêve",
    color: "text-amber-500",
    bgGradient: "from-amber-500/20 to-transparent",
    description: "Projet long terme : relancer Hommell, cette marque automobile française de voitures sportives prestigieuses du début des années 2000.",
    longDescription: "Hommell, c'est notre rêve ultime. Cette marque automobile française, créée par Michel Hommell (fondateur de l'Automobile Magazine), a produit la Berlinette dans les années 90-2000 : une GT française pure, légère, performante. La marque a malheureusement fermé, mais nous voulons la faire renaître. Des voitures de sport françaises, du luxe accessible, de la performance sans compromis. Un projet ambitieux qui demande du temps, des moyens, et beaucoup de passion. Mais c'est exactement ce qui nous anime.",
    features: [
      { title: "Héritage préservé", description: "Respect de l'ADN Hommell original" },
      { title: "Design français", description: "Lignes modernes, âme française" },
      { title: "Performance", description: "Légèreté et plaisir de conduite" },
      { title: "Exclusivité", description: "Production limitée et personnalisation" },
    ],
    stats: [
      { label: "Objectif", value: "2030" },
      { label: "Modèles prévus", value: "3" },
      { label: "Exemplaires/an", value: "100" },
    ],
    cta: { label: "Suivre le projet", href: "#contact" },
  },
}

export default async function UniversPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const univers = universData[slug]

  if (!univers) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Retour</span>
            </Link>
            <Link href="/" className="font-black text-lg tracking-tight">
              <span className="text-primary">NEXUS</span>
              <span className="text-foreground">PARADISE</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`pt-32 pb-20 bg-gradient-to-b ${univers.bgGradient}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className={`text-sm font-medium uppercase tracking-wider ${univers.color}`}>
            {univers.tagline}
          </span>
          <h1 className="mt-4 text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-foreground">
            {univers.name}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl">
            {univers.description}
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {univers.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className={`text-3xl sm:text-4xl font-black ${univers.color}`}>
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Notre vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                {univers.longDescription}
              </p>
              <div className="mt-8">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href={univers.cta.href}>
                    {univers.cta.label}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Ce qu&apos;on propose</h2>
              <div className="grid gap-4">
                {univers.features.map((feature) => (
                  <div
                    key={feature.title}
                    className="p-4 bg-card border border-border rounded-lg"
                  >
                    <h3 className="font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-foreground">
            Rejoins l&apos;aventure {univers.name}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Inscris-toi à notre newsletter pour suivre l&apos;actualité et être informé en avant-première.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l&apos;accueil
              </Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
