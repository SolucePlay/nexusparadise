import Link from "next/link"
import { ArrowLeft, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

type Product = {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  badge?: string
  image: string
}

type CategoryData = {
  name: string
  description: string
  products: Product[]
}

const categoriesData: Record<string, CategoryData> = {
  "vetements": {
    name: "Vêtements",
    description: "Streetwear technique pour riders et mécaniciens. Des vêtements robustes, stylés et fonctionnels.",
    products: [
      {
        id: "v1",
        name: "Hoodie Nexus Classic",
        description: "Sweat à capuche 100% coton épais avec logo brodé",
        price: 79.99,
        rating: 4.8,
        reviews: 124,
        badge: "Bestseller",
        image: "/placeholder-hoodie.jpg",
      },
      {
        id: "v2",
        name: "T-shirt Redline Crew",
        description: "T-shirt technique respirant avec impression graphique",
        price: 34.99,
        rating: 4.6,
        reviews: 89,
        image: "/placeholder-tshirt.jpg",
      },
      {
        id: "v3",
        name: "Veste Atelier Pro",
        description: "Veste de travail renforcée avec poches multiples",
        price: 129.99,
        originalPrice: 159.99,
        rating: 4.9,
        reviews: 67,
        badge: "Promo",
        image: "/placeholder-jacket.jpg",
      },
      {
        id: "v4",
        name: "Pantalon Cargo Mécano",
        description: "Pantalon cargo résistant avec genoux renforcés",
        price: 89.99,
        rating: 4.7,
        reviews: 156,
        image: "/placeholder-pants.jpg",
      },
      {
        id: "v5",
        name: "Casquette Apex Lab",
        description: "Casquette snapback avec logo embossé",
        price: 29.99,
        rating: 4.5,
        reviews: 203,
        image: "/placeholder-cap.jpg",
      },
      {
        id: "v6",
        name: "Sweat Crewneck Garage",
        description: "Sweat col rond vintage wash",
        price: 69.99,
        rating: 4.8,
        reviews: 78,
        badge: "Nouveau",
        image: "/placeholder-sweat.jpg",
      },
    ],
  },
  "epi": {
    name: "EPI",
    description: "Équipements de protection individuelle certifiés. La sécurité sans compromis sur le style.",
    products: [
      {
        id: "e1",
        name: "Lunettes de protection HD",
        description: "Lunettes anti-rayures avec traitement anti-buée",
        price: 24.99,
        rating: 4.7,
        reviews: 312,
        badge: "Bestseller",
        image: "/placeholder-glasses.jpg",
      },
      {
        id: "e2",
        name: "Gants de mécanicien Pro",
        description: "Gants nitrile renforcés avec grip maximum",
        price: 19.99,
        rating: 4.8,
        reviews: 445,
        image: "/placeholder-gloves.jpg",
      },
      {
        id: "e3",
        name: "Chaussures de sécurité S3",
        description: "Chaussures montantes avec coque composite",
        price: 89.99,
        rating: 4.9,
        reviews: 234,
        badge: "Top ventes",
        image: "/placeholder-shoes.jpg",
      },
      {
        id: "e4",
        name: "Casque antibruit premium",
        description: "Protection auditive 32dB avec arceau réglable",
        price: 49.99,
        originalPrice: 69.99,
        rating: 4.6,
        reviews: 167,
        badge: "Promo",
        image: "/placeholder-earmuffs.jpg",
      },
      {
        id: "e5",
        name: "Tablier cuir atelier",
        description: "Tablier en cuir véritable avec poches outils",
        price: 79.99,
        rating: 4.8,
        reviews: 89,
        image: "/placeholder-apron.jpg",
      },
      {
        id: "e6",
        name: "Genouillères Pro Gel",
        description: "Genouillères ergonomiques avec coussin gel",
        price: 34.99,
        rating: 4.7,
        reviews: 123,
        badge: "Nouveau",
        image: "/placeholder-kneepad.jpg",
      },
    ],
  },
  "outils": {
    name: "Outils",
    description: "Outillage professionnel pour atelier et garage. Qualité pro à prix accessible.",
    products: [
      {
        id: "o1",
        name: "Coffret clés à cliquet 72 pcs",
        description: "Coffret complet clés et douilles chrome vanadium",
        price: 149.99,
        rating: 4.9,
        reviews: 567,
        badge: "Bestseller",
        image: "/placeholder-toolkit.jpg",
      },
      {
        id: "o2",
        name: "Clé dynamométrique 40-200 Nm",
        description: "Clé précision ±4% avec cliquet réversible",
        price: 89.99,
        rating: 4.8,
        reviews: 234,
        image: "/placeholder-torque.jpg",
      },
      {
        id: "o3",
        name: "Cric hydraulique 3T",
        description: "Cric rouleur professionnel course 135-500mm",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.7,
        reviews: 189,
        badge: "Promo",
        image: "/placeholder-jack.jpg",
      },
      {
        id: "o4",
        name: "Lampe baladeuse LED",
        description: "Lampe atelier rechargeable 1000 lumens",
        price: 44.99,
        rating: 4.6,
        reviews: 312,
        image: "/placeholder-lamp.jpg",
      },
      {
        id: "o5",
        name: "Servante atelier 7 tiroirs",
        description: "Servante roulante avec plateau inox",
        price: 349.99,
        rating: 4.9,
        reviews: 78,
        badge: "Premium",
        image: "/placeholder-toolcart.jpg",
      },
      {
        id: "o6",
        name: "Clé à chocs pneumatique",
        description: "Clé à chocs 1/2\" 1400Nm avec régulateur",
        price: 199.99,
        rating: 4.8,
        reviews: 145,
        badge: "Nouveau",
        image: "/placeholder-impact.jpg",
      },
    ],
  },
  "pieces": {
    name: "Pièces",
    description: "Pièces détachées et accessoires performance. Upgrade ta machine.",
    products: [
      {
        id: "p1",
        name: "Kit freins performance",
        description: "Disques rainurés + plaquettes sport",
        price: 289.99,
        rating: 4.9,
        reviews: 156,
        badge: "Performance",
        image: "/placeholder-brakes.jpg",
      },
      {
        id: "p2",
        name: "Filtre à air sport",
        description: "Filtre coton huilé haute performance",
        price: 79.99,
        rating: 4.7,
        reviews: 234,
        image: "/placeholder-filter.jpg",
      },
      {
        id: "p3",
        name: "Ligne échappement inox",
        description: "Ligne complète inox 304 avec silencieux",
        price: 449.99,
        originalPrice: 549.99,
        rating: 4.8,
        reviews: 89,
        badge: "Promo",
        image: "/placeholder-exhaust.jpg",
      },
      {
        id: "p4",
        name: "Amortisseurs réglables",
        description: "Kit combinés filetés 16 positions",
        price: 699.99,
        rating: 4.9,
        reviews: 67,
        badge: "Premium",
        image: "/placeholder-coilovers.jpg",
      },
      {
        id: "p5",
        name: "Volant sport cuir",
        description: "Volant plat 350mm cuir perforé + moyeu",
        price: 189.99,
        rating: 4.6,
        reviews: 123,
        image: "/placeholder-wheel.jpg",
      },
      {
        id: "p6",
        name: "Kit admission directe",
        description: "Boîte à air carbone avec filtre sport",
        price: 249.99,
        rating: 4.8,
        reviews: 178,
        badge: "Nouveau",
        image: "/placeholder-intake.jpg",
      },
    ],
  },
  "equipements": {
    name: "Équipements",
    description: "Établis, rangements et aménagement atelier. Organise ton espace de travail.",
    products: [
      {
        id: "eq1",
        name: "Établi professionnel 2m",
        description: "Établi acier avec plateau bois 40mm",
        price: 449.99,
        rating: 4.9,
        reviews: 89,
        badge: "Bestseller",
        image: "/placeholder-workbench.jpg",
      },
      {
        id: "eq2",
        name: "Armoire murale outils",
        description: "Armoire perforée 120x80cm avec crochets",
        price: 129.99,
        rating: 4.7,
        reviews: 156,
        image: "/placeholder-cabinet.jpg",
      },
      {
        id: "eq3",
        name: "Pont élévateur 2 colonnes",
        description: "Pont 4T avec bras asymétriques",
        price: 2499.99,
        originalPrice: 2999.99,
        rating: 4.9,
        reviews: 34,
        badge: "Promo",
        image: "/placeholder-lift.jpg",
      },
      {
        id: "eq4",
        name: "Compresseur 200L vertical",
        description: "Compresseur bi-cylindre 3CV 10 bars",
        price: 549.99,
        rating: 4.8,
        reviews: 67,
        image: "/placeholder-compressor.jpg",
      },
      {
        id: "eq5",
        name: "Bac de rétention 200L",
        description: "Bac polyéthylène avec caillebotis acier",
        price: 189.99,
        rating: 4.6,
        reviews: 45,
        image: "/placeholder-retention.jpg",
      },
      {
        id: "eq6",
        name: "Station de soudage MIG",
        description: "Poste MIG 200A synergique + accessoires",
        price: 699.99,
        rating: 4.8,
        reviews: 78,
        badge: "Nouveau",
        image: "/placeholder-welder.jpg",
      },
    ],
  },
  "accessoires": {
    name: "Accessoires",
    description: "Casques, gants, protections sports extrêmes. Équipe-toi pour l'action.",
    products: [
      {
        id: "a1",
        name: "Casque intégral racing",
        description: "Casque homologué FIA avec visière claire/fumée",
        price: 349.99,
        rating: 4.9,
        reviews: 123,
        badge: "Performance",
        image: "/placeholder-helmet.jpg",
      },
      {
        id: "a2",
        name: "Gants pilote Nomex",
        description: "Gants FIA Nomex avec grip silicone",
        price: 89.99,
        rating: 4.8,
        reviews: 189,
        image: "/placeholder-racing-gloves.jpg",
      },
      {
        id: "a3",
        name: "Hans device Pro",
        description: "Système de retenue cervicale FIA",
        price: 449.99,
        originalPrice: 549.99,
        rating: 4.9,
        reviews: 56,
        badge: "Promo",
        image: "/placeholder-hans.jpg",
      },
      {
        id: "a4",
        name: "Combinaison karting",
        description: "Combi CIK-FIA niveau 2 avec broderie",
        price: 249.99,
        rating: 4.7,
        reviews: 98,
        image: "/placeholder-suit.jpg",
      },
      {
        id: "a5",
        name: "Bottines pilote",
        description: "Bottines FIA cuir souple semelle fine",
        price: 179.99,
        rating: 4.8,
        reviews: 145,
        badge: "Bestseller",
        image: "/placeholder-boots.jpg",
      },
      {
        id: "a6",
        name: "Cagoule ignifugée",
        description: "Cagoule Nomex FIA une ouverture",
        price: 39.99,
        rating: 4.6,
        reviews: 234,
        badge: "Nouveau",
        image: "/placeholder-balaclava.jpg",
      },
    ],
  },
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-secondary">
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          <div className="text-center">
            <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-20" />
            <span className="text-xs">Image produit</span>
          </div>
        </div>
        {product.badge && (
          <span className="absolute top-3 left-3 px-2 py-1 text-xs font-bold bg-primary text-primary-foreground rounded">
            {product.badge}
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        
        {/* Rating */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            <span className="text-sm font-medium text-foreground">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviews} avis)</span>
        </div>
        
        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xl font-black text-primary">{product.price.toFixed(2)} €</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {product.originalPrice.toFixed(2)} €
            </span>
          )}
        </div>
        
        {/* CTA */}
        <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
          <ShoppingCart className="mr-2 h-4 w-4" />
          Ajouter au panier
        </Button>
      </div>
    </div>
  )
}

export default async function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryData = categoriesData[category]

  if (!categoryData) {
    notFound()
  }

  const allCategories = Object.entries(categoriesData).map(([slug, data]) => ({
    slug,
    name: data.name,
  }))

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/#shop" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Catalogue</span>
            </Link>
            <Link href="/" className="font-black text-lg tracking-tight">
              <span className="text-primary">NEXUS</span>
              <span className="text-foreground">PARADISE</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Shop
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-foreground">
            {categoryData.name}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {categoryData.description}
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-6 border-b border-border sticky top-16 bg-background/80 backdrop-blur-md z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {allCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop/${cat.slug}`}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors ${
                  cat.slug === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{categoryData.products.length}</span> produits
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-foreground">
            Reste informé des nouveautés
          </h2>
          <p className="mt-2 text-muted-foreground">
            Inscris-toi pour recevoir les alertes stock et les promos exclusives.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à l&apos;accueil
              </Link>
            </Button>
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/#contact">
                S&apos;inscrire à la newsletter
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
