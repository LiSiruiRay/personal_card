"use client"

import { useState, useCallback } from "react"
import { Lock } from "lucide-react"

export default function InteractiveSection() {
  const [tension, setTension] = useState(0)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const handleClick = useCallback(() => {
    if (isUnlocked) return
    
    const newClickCount = clickCount + 1
    setClickCount(newClickCount)
    
    // Each click adds some tension
    const newTension = Math.min(100, tension + Math.random() * 15 + 5)
    setTension(newTension)
    
    // Unlock at 100% or after enough clicks
    if (newTension >= 100 || newClickCount >= 10) {
      setIsUnlocked(true)
      setTension(100)
    }
  }, [tension, clickCount, isUnlocked])

  const handleReset = () => {
    setTension(0)
    setIsUnlocked(false)
    setClickCount(0)
  }

  return (
    <section className="bg-[#0A0A0B] text-[#FAFAFA] px-6 md:px-12 lg:px-24 py-24 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <span className="text-xs tracking-[0.2em] uppercase font-mono text-[#71717A]">
              INTERACTIVE SYSTEM
            </span>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Test the Assumption
            </h2>
            
            <p className="text-[#A1A1AA] leading-relaxed max-w-md">
              Locks remind me that systems are not sacred. They are designed by people, and people make mistakes. Apply tension to open.
            </p>
            
            {/* Tension meter */}
            <div className="space-y-2 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-wider font-mono text-[#71717A]">TENSION</span>
                <span className="text-xs font-mono text-[#71717A]">{Math.round(tension)}%</span>
              </div>
              <div className="h-2 bg-[#27272A] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#FAFAFA] transition-all duration-300 ease-out"
                  style={{ width: `${tension}%` }}
                />
              </div>
              <p className="text-xs text-[#52525B] pt-2">
                {isUnlocked ? "Lock opened. Click to reset." : "Tap repeatedly to apply tension"}
              </p>
            </div>
          </div>
          
          {/* Right side - Lock visualization */}
          <div className="flex justify-center lg:justify-end">
            <button
              onClick={isUnlocked ? handleReset : handleClick}
              className="relative w-48 h-48 rounded-full border-2 border-[#3F3F46] flex items-center justify-center cursor-pointer hover:border-[#52525B] transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-[#52525B] focus:ring-offset-2 focus:ring-offset-[#0A0A0B]"
              aria-label={isUnlocked ? "Reset lock" : "Apply tension to lock"}
            >
              {/* Animated ring */}
              <div 
                className="absolute inset-0 rounded-full border-2 border-[#FAFAFA] transition-all duration-500"
                style={{
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin(tension * 0.0314159)}% ${50 - 50 * Math.cos(tension * 0.0314159)}%, 50% 50%)`,
                  opacity: tension > 0 ? 1 : 0,
                  transform: `rotate(${tension * 3.6}deg)`,
                }}
              />
              
              {/* Lock icon */}
              <Lock 
                className={`w-12 h-12 transition-all duration-500 ${
                  isUnlocked 
                    ? "text-[#22C55E] scale-110" 
                    : "text-[#FAFAFA] group-hover:scale-105"
                }`}
                style={{
                  transform: isUnlocked ? "rotate(15deg)" : `rotate(${tension * 0.15}deg)`,
                }}
              />
              
              {/* Pulse effect on click */}
              <div 
                className="absolute inset-0 rounded-full bg-[#FAFAFA] animate-ping pointer-events-none"
                style={{
                  opacity: 0,
                  animation: tension > 0 ? "ping 0.3s ease-out" : "none",
                }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
