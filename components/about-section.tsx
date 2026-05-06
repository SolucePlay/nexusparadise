import { Users, Flame, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="communaute" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Notre histoire</span>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mt-4 mb-6 tracking-tight">
              CRÉÉ PAR DES<br />
              <span className="text-primary">PASSIONNÉS</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nexus Paradise est né d&apos;une frustration simple : pourquoi les passionnés de mécanique 
              et de sports extrêmes n&apos;ont-ils pas leur marque à eux en France ? Comme Ken Block 
              a co-fondé DC Shoes pour les skaters, on a voulu créer quelque chose pour nous.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Une marque qui comprend ce qu&apos;on vit. Qui sait que nos vêtements doivent résister 
              à l&apos;huile et à la poussière. Qui sait qu&apos;on a besoin d&apos;outils de qualité sans se ruiner. 
              Et surtout, qui nous rassemble.
            </p>

            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Flame className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Passion</h4>
                  <p className="text-sm text-muted-foreground">Avant tout le reste</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Communauté</h4>
                  <p className="text-sm text-muted-foreground">Une vraie famille</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Qualité</h4>
                  <p className="text-sm text-muted-foreground">Sans compromis</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square rounded-2xl bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-[180px] font-black text-primary/10 select-none">NP</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider -mt-8">Depuis 2024</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 blur-3xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-accent/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
