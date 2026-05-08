"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Trail, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import * as THREE from "three"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

// Animated wheel/tire component
function Wheel({ position }: { position: [number, number, number] }) {
  const wheelRef = useRef<THREE.Group>(null)
  const rimRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (wheelRef.current) {
      wheelRef.current.rotation.x += 0.08
    }
    if (rimRef.current) {
      rimRef.current.rotation.z = state.clock.elapsedTime * 2
    }
  })

  return (
    <group ref={wheelRef} position={position} rotation={[0, Math.PI / 2, 0]}>
      {/* Tire */}
      <mesh>
        <torusGeometry args={[1.2, 0.4, 16, 32]} />
        <meshStandardMaterial color="#333333" roughness={0.8} emissive="#111111" emissiveIntensity={0.1} />
      </mesh>
      {/* Rim */}
      <mesh ref={rimRef}>
        <cylinderGeometry args={[0.9, 0.9, 0.35, 6]} />
        <meshStandardMaterial color="#ef4444" metalness={0.9} roughness={0.1} emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>
      {/* Rim center */}
      <mesh>
        <cylinderGeometry args={[0.3, 0.3, 0.4, 16]} />
        <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} emissive="#fbbf24" emissiveIntensity={0.4} />
      </mesh>
    </group>
  )
}

// Speed lines component
function SpeedLines() {
  const linesRef = useRef<THREE.Group>(null)
  
  const lines = useMemo(() => {
    const temp = []
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10 - 5
        ] as [number, number, number],
        length: 0.5 + Math.random() * 2,
        speed: 0.1 + Math.random() * 0.3,
      })
    }
    return temp
  }, [])

  useFrame(() => {
    if (linesRef.current) {
      linesRef.current.children.forEach((line, i) => {
        line.position.x += lines[i].speed
        if (line.position.x > 12) {
          line.position.x = -12
        }
      })
    }
  })

  return (
    <group ref={linesRef}>
      {lines.map((line, i) => (
        <mesh key={i} position={line.position} rotation={[0, 0, 0]}>
          <boxGeometry args={[line.length, 0.02, 0.02]} />
          <meshBasicMaterial color="#ef4444" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

// Floating wrench
function FloatingWrench({ position }: { position: [number, number, number] }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3
      ref.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <group ref={ref} position={position} scale={1}>
        {/* Handle */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 2.5, 0.15]} />
          <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.1} />
        </mesh>
        {/* Head */}
        <mesh position={[0, 1.4, 0]}>
          <boxGeometry args={[0.7, 0.4, 0.15]} />
          <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.1} />
        </mesh>
        {/* Opening */}
        <mesh position={[0.2, 1.4, 0]}>
          <boxGeometry args={[0.2, 0.2, 0.17]} />
          <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  )
}

// Floating gear
function FloatingGear({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.5
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <group ref={ref} position={position} scale={scale}>
        {/* Main gear body */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
          <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} emissive="#ef4444" emissiveIntensity={0.4} />
        </mesh>
        {/* Center hole */}
        <mesh>
          <cylinderGeometry args={[0.2, 0.2, 0.2, 16]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} emissive="#fbbf24" emissiveIntensity={0.3} />
        </mesh>
        {/* Teeth */}
        {[...Array(8)].map((_, i) => (
          <mesh key={i} position={[Math.cos((i / 8) * Math.PI * 2) * 0.7, 0, Math.sin((i / 8) * Math.PI * 2) * 0.7]} rotation={[Math.PI / 2, 0, (i / 8) * Math.PI * 2]}>
            <boxGeometry args={[0.2, 0.15, 0.25]} />
            <meshStandardMaterial color="#ef4444" metalness={0.8} roughness={0.2} emissive="#ef4444" emissiveIntensity={0.4} />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Piston component
function Piston({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  const pistonRef = useRef<THREE.Mesh>(null)
  const rodRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const offset = Math.sin(state.clock.elapsedTime * 3) * 0.4
    if (pistonRef.current) {
      pistonRef.current.position.y = offset
    }
    if (rodRef.current) {
      rodRef.current.position.y = -0.6 + offset * 0.5
      rodRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.15
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <group ref={groupRef} position={position} scale={1.2}>
        {/* Cylinder block */}
        <mesh position={[0, 0.3, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 0.2, 16]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.15} />
        </mesh>
        {/* Piston head */}
        <mesh ref={pistonRef}>
          <cylinderGeometry args={[0.35, 0.35, 0.5, 16]} />
          <meshStandardMaterial color="#e0e0e0" metalness={1} roughness={0.05} emissive="#ffffff" emissiveIntensity={0.2} />
        </mesh>
        {/* Piston rings */}
        <mesh position={[0, 0.15, 0]}>
          <torusGeometry args={[0.36, 0.03, 8, 32]} />
          <meshStandardMaterial color="#fbbf24" metalness={0.9} roughness={0.1} emissive="#fbbf24" emissiveIntensity={0.5} />
        </mesh>
        {/* Connecting rod */}
        <mesh ref={rodRef} position={[0, -0.6, 0]}>
          <boxGeometry args={[0.12, 1, 0.12]} />
          <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.1} emissive="#ffffff" emissiveIntensity={0.1} />
        </mesh>
      </group>
    </Float>
  )
}

// Spark particles
function Sparks() {
  return (
    <>
      <Sparkles
        count={100}
        scale={15}
        size={2}
        speed={0.5}
        color="#ef4444"
        opacity={0.6}
      />
      <Sparkles
        count={50}
        scale={12}
        size={3}
        speed={0.3}
        color="#fbbf24"
        opacity={0.4}
      />
    </>
  )
}

// Energy orb
function EnergyOrb() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.8) * 1.5
      ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.6) * 1
      ref.current.rotation.x = state.clock.elapsedTime * 0.5
      ref.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Trail
      width={3}
      length={10}
      color="#ef4444"
      attenuation={(t) => t * t}
    >
      <mesh ref={ref} position={[0, 0, 0]}>
        <icosahedronGeometry args={[0.4, 2]} />
        <MeshDistortMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.8}
          distort={0.4}
          speed={4}
          roughness={0}
        />
      </mesh>
    </Trail>
  )
}

// Main 3D scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={1.5} color="#ef4444" />
      <pointLight position={[0, 5, 5]} intensity={1} color="#fbbf24" />
      <spotLight
        position={[0, 10, 5]}
        angle={0.5}
        penumbra={1}
        intensity={2}
        color="#ef4444"
        castShadow
      />

      {/* Main elements - positioned on the sides */}
      {/* Left side */}
      {/* <Wheel position={[-5, 0, -1]} /> */}
      <FloatingGear position={[-4.5, 2.5, -1]} scale={1.5} />
      <FloatingGear position={[-6, -2, -2]} scale={1.2} />
      <Piston position={[-3.5, -2.5, 0]} />
      
      {/* Right side */}
      {/* <Wheel position={[5, -0.5, -1]} /> */}
      <FloatingWrench position={[4.5, 2, 0]} />
      <FloatingGear position={[6, -1, -2]} scale={1.3} />
      <Piston position={[3.5, 2.5, 0]} />

      {/* Speed lines */}
      <SpeedLines />

      {/* Sparkles and particles - spread across */}
      <Sparks />

      {/* Energy orbs on the sides 
      <group position={[-4, 1, 1]}>
        <EnergyOrb />
      </group>
      <group position={[4, -1, 1]}>
        <EnergyOrb />
      </group> */}
    </>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={["#0a0a0a"]} />
          <fog attach="fog" args={["#0a0a0a", 5, 25]} />
          <Scene />
        </Canvas>
      </div>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm text-muted-foreground text-sm font-medium mb-8 border border-border">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="uppercase tracking-wider">Par des passionnés, pour des passionnés</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-foreground mb-6 drop-shadow-2xl">
            NEXUS
            <br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(239,68,68,0.5)]">PARADISE</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            La marque française pour les riders, les mécaniciens et tous ceux qui vivent leur passion à fond. 
            Équipements, vêtements, outils et une vraie communauté.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#univers"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 transition-all uppercase tracking-wider shadow-lg shadow-primary/25"
            >
              Découvrir la marque
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-lg font-bold hover:bg-secondary/80 backdrop-blur-sm transition-colors uppercase tracking-wider"
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
              <div key={stat.label} className="text-center backdrop-blur-sm bg-background/30 rounded-lg p-4 border border-border/50">
                <div className="text-3xl sm:text-4xl font-black text-primary drop-shadow-[0_0_10px_rgba(239,68,68,0.3)]">{stat.value}</div>
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
