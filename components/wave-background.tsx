"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Stick parameters
    const stickLength = 10 // Length of each stick
    const spacing = 20 // Space between sticks
    const baseRotationSpeed = Math.PI * 2 / 8 // 1Hz = 2π radians per second

    // Calculate number of sticks based on canvas size and spacing
    const getStickPositions = () => {
      const positions = []
      const cols = Math.floor(canvas.width / spacing) + 2
      const rows = Math.floor(canvas.height / spacing) + 2

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          positions.push({
            x: i * spacing,
            y: j * spacing,
            // Offset every other row for a more natural look
            offsetX: j % 2 === 0 ? 0 : spacing / 2,
          })
        }
      }
      return positions
    }

    // Draw function for sticks - defined BEFORE it's used in resizeCanvas
    const drawSticks = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const stickPositions = getStickPositions()

      stickPositions.forEach(({ x, y, offsetX }) => {
        const posX = x + offsetX
        const posY = y

        // Skip if outside visible area (with some margin)
        if (posX < -spacing || posX > canvas.width + spacing || posY < -spacing || posY > canvas.height + spacing) {
          return
        }

        // Vary rotation speed based on y-position
        // Sticks at the top rotate faster, sticks at the bottom rotate slower
        // const speedVariation = 0.5 + (posY / canvas.height) * 1.0
        const speedVariation = 0.5 + (posY / 500) * 1.0
        const rotationSpeed = baseRotationSpeed * speedVariation

        // Vary phase based on x-position
        // const phaseVariation = (posX / canvas.width) * Math.PI * 2
        const phaseVariation = (posX / 500) * Math.PI * 2

        // Calculate current rotation angle
        const angle = (time * rotationSpeed + phaseVariation) % (Math.PI * 2)

        // Draw the stick
        ctx.save()
        ctx.translate(posX, posY)
        ctx.rotate(angle)

        // Draw the stick
        ctx.beginPath()
        ctx.moveTo(-stickLength / 2, 0)
        ctx.lineTo(stickLength / 2, 0)

        // Color and opacity based on position for visual interest
        const opacity = 0.25 + Math.sin(time + posX * 0.01 + posY * 0.01) * 0.03
        // const opacity = 0.25
        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.restore()
      })
    }

    // Set canvas dimensions - now drawSticks is already defined
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      drawSticks() // This is now safe to call
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation loop
    const animate = () => {
      time += 0.016 // Approximately 60fps
      drawSticks()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" style={{ pointerEvents: "none" }} />
  )
}
