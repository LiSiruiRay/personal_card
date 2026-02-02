"use client"

import React from "react"

import { useRef, useState } from "react"
import Image from "next/image"

export default function ProfileImage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY
    
    // Calculate rotation (subtle tilt effect)
    const rotateY = (mouseX / rect.width) * 15
    const rotateX = -(mouseY / rect.height) * 15
    
    // Calculate translation (move toward cursor)
    const translateX = (mouseX / rect.width) * 10
    const translateY = (mouseY / rect.height) * 10
    
    setTransform({ rotateX, rotateY, translateX, translateY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <div className="relative">
      {/* Grid background */}
      <div className="absolute -inset-8 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" className="text-border">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Main image container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative cursor-crosshair"
        style={{
          perspective: "1000px",
        }}
      >
        <div
          className="relative transition-all duration-300 ease-out"
          style={{
            transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) translateX(${transform.translateX}px) translateY(${transform.translateY}px)`,
            transformStyle: "preserve-3d",
          }}
        >
          <div className="relative w-64 h-64 md:w-72 md:h-72 overflow-hidden shadow-2xl">
            <Image
              src="/images/profile.jpeg"
              alt="Ray Li - Profile photo"
              fill
              className={`object-cover object-top transition-all duration-700 ease-in-out ${
                isHovered ? "grayscale-0" : "grayscale contrast-125"
              }`}
              priority
            />
          </div>
        </div>
        
        {/* Status badge */}
        <div 
          className="absolute -bottom-6 -right-6 bg-background p-4 shadow-lg border border-border"
          style={{
            transform: `translateX(${transform.translateX * 0.5}px) translateY(${transform.translateY * 0.5}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 mb-2 text-foreground"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M3.5 12h1m16 0h1M12 3.5v1m0 15v1M5.64 5.64l.7.7m11.32 11.32l.7.7m-11.32.7l-.7.7m12.02-12.72l-.7.7" />
            <path d="M12 8v8M8 12l4 3 4-3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="font-mono text-xs leading-tight">
            System resistance<br />
            testing in progress.
          </p>
        </div>
      </div>
    </div>
  )
}
