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
    <section className="bg-[#0A0A0B] text-[#FAFAFA] px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-7xl mx-auto">
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
          {interests.map((interest) => {
            const Icon = interest.icon
            return (
              <div 
                key={interest.title}
                className="bg-[#18181B] border border-[#27272A] p-6 hover:border-[#3F3F46] transition-colors duration-300 group"
              >
                <div className="flex justify-between items-start mb-12">
                  <Icon className="w-5 h-5 text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors" />
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
    </section>
  )
}
