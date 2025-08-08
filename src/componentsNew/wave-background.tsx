'use client'

import { useEffect, useRef } from 'react'

interface WaveBackgroundProps {
  fade?: 'horizontal' | 'vertical' | 'radial' | 'none' 
}

export function WaveBackground({ fade = 'none' } : WaveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Stick parameters
    const stickLength = 10 // Length of each stick
    const spacing = 20 // Space between sticks
    const baseRotationSpeed = (Math.PI * 2) / 8 // 1Hz = 2π radians per second

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
        if (
          posX < -spacing ||
          posX > canvas.width + spacing ||
          posY < -spacing ||
          posY > canvas.height + spacing
        ) {
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

        let opacity = 0.25
        // Color and opacity based on position for visual interest
          // const opacity = 0.25 + Math.sin(time + posX * 0.01 + posY * 0.01) * 0.03
        if (fade === 'vertical') {
          opacity = ((canvas.height - posY) / canvas.height) * 0.25 // Opacity based on vertical position
        } else if (fade === 'horizontal') {
          opacity = ((canvas.width - posX) / canvas.width) * 0.25 // Opacity based on horizontal position
        } else if (fade === 'radial') {
          const centerX = canvas.width / 2
          const centerY = 0
          const distance = Math.sqrt(
            Math.pow(posX - centerX, 2) + Math.pow(posY - centerY, 2)
          )
          const maxDistance = Math.sqrt(
            Math.pow(centerX, 2) + Math.pow(centerY, 2)
          )
          opacity = ((maxDistance - distance) / maxDistance) * 0.25 // Opacity based on radial distance
        }
        if (fade === 'none') {
          opacity = 0.25 // No fade effect
        }

        ctx.strokeStyle = `rgba(129, 140, 248, ${opacity})`
        ctx.lineWidth = 1
        ctx.stroke()

        ctx.restore()
      })
    }

    // Set canvas dimensions - now drawSticks is already defined
    const resizeCanvas = () => {
      // canvas width and height should be that of the parent container
      const parent = canvas.parentElement
      if (parent) {
        console.log('Resizing canvas to parent dimensions:', parent.clientWidth, parent.clientHeight)
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      } else {
      // canvas.width = window.innerWidth
      // canvas.height = window.innerHeight
        canvas.width = 500 // Fallback width
        canvas.height = 500 // Fallback height
      }
      drawSticks() // This is now safe to call
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    const animate = () => {
      time += 0.016 // Approximately 60fps
      drawSticks()
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [fade])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 z-0 h-full w-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}
