"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type ParticlesProps = {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

/**
 * Particles Component
 * Creates animated particles in the background
 */
export function Particles({
  className,
  quantity = 50,
  staticity = 50,
  ease = 50,
  refresh = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
    }> = []

    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    const createParticles = () => {
      particles = []
      for (let i = 0; i < quantity; i++) {
        particles.push({
          x: Math.random() * (canvas?.width || 0),
          y: Math.random() * (canvas?.height || 0),
          size: Math.random() * 2 + 0.5,
          speedX: (Math.random() - 0.5) * (ease / 100),
          speedY: (Math.random() - 0.5) * (ease / 100),
          opacity: Math.random() * 0.5 + 0.2,
        })
      }
    }

    const drawParticles = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`
        ctx.fill()

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))
      })

      animationFrameId = requestAnimationFrame(drawParticles)
    }

    resizeCanvas()
    createParticles()
    drawParticles()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [quantity, staticity, ease, refresh])

  return (
    <canvas
      ref={canvasRef}
      className={cn("pointer-events-none fixed inset-0", className)}
      style={{ zIndex: 0 }}
    />
  )
}

