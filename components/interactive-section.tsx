"use client"

import { useState, useCallback } from "react"
import { Lock, LockOpen } from "lucide-react"

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
    <section className="relative bg-[#0A0A0B] text-[#FAFAFA] py-24 border-t border-[#27272A]">
      <div className="face-shell-container" style={{position: "relative", width: "100%", clipPath: "inset(0px)"}}>
        <div data-face-content-container="true" className="@container/content mx-auto px-4 relative z-10 w-full">
        
        {/* Unlocked state - full width card */}
        {isUnlocked ? (
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
            
            {/* Success card */}
            <div className="bg-[#18181B] border border-[#27272A] p-8 mt-8 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <LockOpen className="w-6 h-6 text-[#FAFAFA]" />
                <h3 className="text-xl font-bold">SYSTEM OPEN</h3>
              </div>
              
              <p className="font-mono text-[#A1A1AA] leading-relaxed mb-6">
                ACCESS GRANTED. The system yielded to consistent pressure. Pain is honest.
              </p>
              
              <button 
                onClick={handleReset}
                className="text-[#71717A] hover:text-[#FAFAFA] underline underline-offset-4 text-sm transition-colors"
              >
                Reset Lock
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 @4xl:grid-cols-2 gap-12 items-center">
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
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-mono text-[#FAFAFA]/50 mb-1">
                  <span>TENSION</span>
                  <span>{Math.round(tension)}%</span>
                </div>
                <div className="h-2 w-full bg-[#FAFAFA]/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#FAFAFA] transition-all duration-300 ease-out"
                    style={{ width: `${tension}%` }}
                  />
                </div>
                <p className="text-xs text-[#FAFAFA]/40 mt-2">
                  Tap repeatedly to apply tension
                </p>
              </div>
            </div>
            
            {/* Right side - Lock visualization */}
            <div className="flex justify-center items-center py-12 select-none">
              <button
                onClick={handleClick}
                className="relative w-64 h-64 cursor-pointer focus:outline-none"
                aria-label="Apply tension to lock"
              >
                {/* SVG Circle progress */}
                <svg viewBox="0 0 100 100" className="w-full h-full rotate-[-90deg]">
                  {/* Background circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="opacity-20"
                  />
                  {/* Progress circle */}
                  <circle 
                    cx="50" 
                    cy="50" 
                    r="45" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * tension / 100)}
                    className="text-[#FAFAFA] transition-all duration-300"
                  />
                </svg>
                
                {/* Lock icon centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Lock 
                    className="w-12 h-12 text-[#FAFAFA] transition-transform duration-300"
                    style={{
                      transform: `rotate(${tension * 0.15}deg)`,
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        )}
        
        </div>
      </div>
    </section>
  )
}
