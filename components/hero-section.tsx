import ProfileImage from "./profile-image"

const tags = ["MATHEMATICS", "COMPUTER SCIENCE", "RESEARCH", "STARTUPS"]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="face-shell-container" style={{position: "relative", width: "100%", clipPath: "inset(0px)"}}>
        <div data-face-content-container="true" className="@container/content mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Role badge */}
            <div className="flex items-center gap-3 animate-float-up">
              <div className="w-8 h-px bg-foreground" />
              <span className="text-xs tracking-[0.2em] uppercase font-mono text-muted-foreground">
                INCOMING SDE @ TIKTOK
              </span>
            </div>
            
            {/* Name */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] animate-float-up animate-delay-100">
              RAY<br />LI
            </h1>
            
            {/* Description */}
            <div className="max-w-md space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground animate-float-up animate-delay-200">
                Math & Computer Science.<br />
                Research-trained. Startup-shaped.
              </p>
              
              {/* Quote */}
              <blockquote className="border-l-2 border-foreground pl-6 py-2 animate-float-up animate-delay-300">
                <p className="font-mono text-lg leading-relaxed text-foreground">
                  I like things that resist — proofs, markets,<br />
                  locks, muscle.
                </p>
              </blockquote>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag, index) => {
                const delayClasses = [
                  "animate-delay-500",
                  "animate-delay-600", 
                  "animate-delay-700",
                  "animate-delay-800"
                ]
                return (
                  <span
                    key={tag}
                    className={`px-3 py-1.5 text-xs tracking-wider border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default animate-float-up ${delayClasses[index] || ""}`}
                  >
                    {tag}
                  </span>
                )
              })}
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="lg:col-span-5 animate-float-up animate-delay-200">
            <ProfileImage />
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
