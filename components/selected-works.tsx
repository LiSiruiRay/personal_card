import { Sparkles } from "lucide-react"

const projects = [
  {
    name: "CapybaraAI",
    role: "CO-FOUNDER & CTO",
    description: "An AI-powered productivity tool helping students summarize and organize research papers.",
    tags: ["AI", "NLP", "React", "Python"],
    metric: "10k+",
    metricLabel: "Active Users",
  },
  {
    name: "EQUO",
    role: "CO-FOUNDER",
    description: "Marketplace platform optimizing supply chain logistics for small businesses.",
    tags: ["Marketplace", "Logistics", "B2B"],
    metric: "YC",
    metricLabel: "Interviewed",
  },
]

export default function SelectedWorks() {
  return (
    <section className="relative py-24 border-t border-border">
      <div className="face-shell-container" style={{position: "relative", width: "100%", clipPath: "inset(0px)"}}>
        <div data-face-content-container="true" className="@container/content mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left side - Section header */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs tracking-[0.2em] uppercase font-mono">
                SELECTED WORKS
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Products people<br />actually use.
            </h2>
            
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              I co-founded products that scale. From AI assistants to developer tools.
            </p>
          </div>
          
          {/* Right side - Projects */}
          <div className="lg:col-span-7 space-y-0">
            {projects.map((project, index) => (
              <div 
                key={project.name}
                className={`py-8 ${index !== 0 ? "border-t border-border" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                    <p className="text-xs tracking-wider font-mono text-muted-foreground uppercase">
                      {project.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">{project.metric}</p>
                    <p className="text-xs text-muted-foreground">{project.metricLabel}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 min-w-[200px]">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs border border-border rounded-sm bg-secondary/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
