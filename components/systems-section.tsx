import { Sigma, Lock, BarChart3, Dumbbell } from "lucide-react"

const interests = [
  {
    icon: Sigma,
    title: "Theorem Proving",
    description: "Automated verification of truth.",
    type: "FORMAL SYSTEM",
  },
  {
    icon: Lock,
    title: "Lock Picking",
    description: "A quiet refusal of authority.",
    type: "HAND SYSTEM",
  },
  {
    icon: BarChart3,
    title: "Quantitative Research",
    description: "Market structures and signals.",
    type: "FORMAL SYSTEM",
  },
  {
    icon: Dumbbell,
    title: "Weight Loading",
    description: "Loading until failure.",
    type: "HAND SYSTEM",
  },
]

export default function SystemsSection() {
  return (
    <section className="relative bg-[#0A0A0B] text-[#FAFAFA] py-24">
      <div className="face-shell-container" style={{position: "relative", width: "100%", clipPath: "inset(0px)"}}>
        <div data-face-content-container="true" className="@container/content mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          {/* Left side - Header */}
          <div className="lg:col-span-7">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
              Systems &<br />Resistance
            </h2>
            
            <div className="w-full max-w-md h-px bg-[#27272A] mb-6" />
            
            <p className="text-[#A1A1AA] leading-relaxed max-w-xl">
              No hobbies. Just interleaved systems. Some I study formally. Some I test with my hands.
            </p>
          </div>
          
          {/* Right side - Quote */}
          <div className="lg:col-span-5 flex items-start justify-end">
            <div className="bg-[#FAFAFA] text-[#0A0A0B] p-6 max-w-xs">
              <p className="font-mono text-sm leading-relaxed mb-4">
                I like the sour burn after a hard set. It feels like proof. Muscles don{"'"}t lie. They fail exactly where the structure is weak.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-px bg-[#0A0A0B]" />
                <span className="text-xs tracking-wider text-[#52525B]">RAY LI</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interest cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {interests.map((interest, index) => {
            const Icon = interest.icon
            // Alternate between lighter (#18181B) and darker (#0A0A0B) backgrounds
            const isLighter = index % 2 === 0
            const bgColor = isLighter ? "bg-[#18181B]" : "bg-[#0A0A0B]"
            
            return (
              <div 
                key={interest.title}
                className={`${bgColor} border border-[#27272A] p-6 transition-all duration-300 ease-out group hover:border-[#FAFAFA] hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.1)]`}
              >
                <div className="flex justify-between items-start mb-12">
                  <Icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors duration-300" />
                  <span className="text-[10px] tracking-wider text-[#71717A] font-mono">
                    {interest.type}
                  </span>
                </div>
                
                <h3 className="font-bold mb-2">{interest.title}</h3>
                <p className="text-sm text-[#71717A]">{interest.description}</p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
}
