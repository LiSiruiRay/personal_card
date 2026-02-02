import { GraduationCap, Award } from "lucide-react"

const research = [
  {
    institution: "Peking University",
    role: "AI RESEARCH FELLOW",
    year: "2023",
    description: "Conducted research on large language model optimization and alignment strategies.",
    badge: "$22.2K Funding (Top 0.1%)",
    logo: "PKU",
  },
  {
    institution: "NYU Abu Dhabi",
    role: "TRANSFORMER MODELS",
    year: "2022",
    description: "Funded research investigating attention mechanisms in vision transformers.",
    badge: "International Research Scholar",
    logo: "NYU",
  },
]

export default function ResearchSection() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-2 text-muted-foreground mb-6">
            <GraduationCap className="w-4 h-4" />
            <span className="text-xs tracking-[0.2em] uppercase font-mono">
              RESEARCH & ACADEMIA
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Selected for national<br />research programs in<br />AI & Math.
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Exploring the boundaries of transformer models and formal systems.
          </p>
        </div>
        
        {/* Research cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item) => (
            <div 
              key={item.institution}
              className="border border-border p-6 hover:border-foreground/30 transition-colors duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                {/* Logo placeholder */}
                <div className="w-12 h-12 border border-border flex items-center justify-center">
                  <span className="text-xs font-mono text-muted-foreground">{item.logo}</span>
                </div>
                <span className="text-sm text-muted-foreground">{item.year}</span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.institution}</h3>
              <p className="text-xs tracking-wider font-mono text-muted-foreground uppercase mb-4">
                {item.role}
              </p>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {item.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-muted-foreground" />
                <span>{item.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
