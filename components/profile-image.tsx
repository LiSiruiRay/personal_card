"use client"

import React, { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface MousePosition {
  x: number
  y: number
}

export default function ProfileImage() {
  const cardAreaRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [smoothPosition, setSmoothPosition] = useState<MousePosition>({ x: 0, y: 0 })

  // Global mouse move handler - tracks cursor relative to card center
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!cardAreaRef.current) return

    const rect = cardAreaRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate relative position from card center, normalized to -1 to 1 range
    // Using a larger divisor for global tracking to make the effect more subtle at distance
    const x = (e.clientX - centerX) / (window.innerWidth / 2)
    const y = (e.clientY - centerY) / (window.innerHeight / 2)

    setMousePosition({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) })
  }, [])

  // Check if mouse is over the card area for grayscale effect
  const handleCardMouseEnter = useCallback(() => {
    setIsHovering(true)
  }, [])

  const handleCardMouseLeave = useCallback(() => {
    setIsHovering(false)
  }, [])

  // Smooth animation loop
  useEffect(() => {
    let animationFrameId: number

    const animate = () => {
      setSmoothPosition(prev => ({
        x: prev.x + (mousePosition.x - prev.x) * 0.08,
        y: prev.y + (mousePosition.y - prev.y) * 0.08,
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePosition])

  // Global mouse tracking on window
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  const mainCardTransform = {
    translateX: smoothPosition.x * 15,
    translateY: smoothPosition.y * -20,
  }

  const statusCardTransform = {
    translateX: smoothPosition.x * 30,
    translateY: smoothPosition.y * -40,
  }

  const borderCard1Transform = {
    translateX: smoothPosition.x * -8,
    translateY: smoothPosition.y * 10,
  }

  const borderCard2Transform = {
    translateX: smoothPosition.x * -15,
    translateY: smoothPosition.y * 20,
  }

  return (
    <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center lg:justify-start">
      {/* Card wrapper */}
      <div 
        ref={cardAreaRef} 
        className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]"
        onMouseEnter={handleCardMouseEnter}
        onMouseLeave={handleCardMouseLeave}
      >
        {/* Border Card 1 - top right offset */}
        <div
          className="absolute w-full h-full border border-border transition-transform duration-100 ease-out -top-4 -right-4 md:-top-4 md:-right-4 z-0"
          style={{
            transform: `translateX(${borderCard1Transform.translateX}px) translateY(${borderCard1Transform.translateY}px)`,
          }}
        />
        
        {/* Border Card 2 - bottom left offset */}
        <div
          className="absolute w-full h-full border border-border transition-transform duration-100 ease-out -bottom-4 -left-4 md:-bottom-4 md:-left-4 z-0"
          style={{
            transform: `translateX(${borderCard2Transform.translateX}px) translateY(${borderCard2Transform.translateY}px)`,
          }}
        />

        {/* Main Photo Card */}
        <div
          className={`absolute inset-0 z-10 overflow-hidden rounded-sm transition-all duration-100 ease-out ${
            isHovering ? 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]' : ''
          }`}
          style={{
            transform: `translateX(${mainCardTransform.translateX}px) translateY(${mainCardTransform.translateY}px)`,
          }}
        >
          <Image
            src="/images/profile.jpeg"
            alt="Ray Li - Profile photo"
            fill
            className={`object-cover transition-all duration-500 ease-out ${
              isHovering ? 'grayscale-0' : 'grayscale'
            }`}
            priority
          />
        </div>

        {/* Status Card */}
        <div
          className={`absolute -bottom-8 -right-12 w-[160px] md:w-[200px] p-4 md:p-6 bg-background border border-border z-20 transition-all duration-100 ease-out ${
            isHovering ? 'shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)]' : 'shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)]'
          }`}
          style={{
            transform: `translateX(${statusCardTransform.translateX}px) translateY(${statusCardTransform.translateY}px)`,
          }}
        >
          <svg
            className="w-8 h-8 mb-3 text-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
          <p className="font-mono text-xs leading-relaxed text-foreground">
            System resistance<br />
            testing in progress.
          </p>
        </div>
      </div>
    </div>
  )
}
