"use client"

import { useEffect, useRef } from "react"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()

    // Racing lines animation
    const lines: { x: number; y: number; speed: number; length: number; opacity: number }[] = []
    
    for (let i = 0; i < 25; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 3 + Math.random() * 8,
        length: 80 + Math.random() * 200,
        opacity: 0.05 + Math.random() * 0.15,
      })
    }

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lines.forEach((line) => {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(239, 68, 68, ${line.opacity})`
        ctx.lineWidth = 2
        ctx.moveTo(line.x, line.y)
        ctx.lineTo(line.x - line.length, line.y)
        ctx.stroke()

        line.x += line.speed
        if (line.x > canvas.width + line.length) {
          line.x = -line.length
          line.y = Math.random() * canvas.height
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-8 border border-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Par des passionnés, pour des passionnés</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6">
            NEXUS
            <br />
            <span className="text-primary">PARADISE</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            La marque française pour les riders, les mécaniciens et tous ceux qui vivent leur passion à fond. 
            Équipements, vêtements, outils et une vraie communauté.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#univers"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all uppercase tracking-wider"
            >
              Découvrir la marque
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-bold hover:bg-secondary transition-colors uppercase tracking-wider"
            >
              <Play className="w-5 h-5" />
              Voir le manifeste
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "6", label: "Pôles" },
              { value: "100%", label: "Passion" },
              { value: "FR", label: "Made in France" },
              { value: "∞", label: "Possibilités" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  )
}
