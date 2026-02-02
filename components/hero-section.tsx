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
      
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-8 lg:px-12 py-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="lg:col-span-7 space-y-8">
            {/* Role badge */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-foreground" />
              <span className="text-xs tracking-[0.2em] uppercase font-mono text-muted-foreground">
                INCOMING SDE @ TIKTOK
              </span>
            </div>
            
            {/* Name */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
              RAY<br />LI
            </h1>
            
            {/* Description */}
            <div className="max-w-md space-y-6">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                Math & Computer Science.<br />
                Research-trained. Startup-shaped.
              </p>
              
              {/* Quote */}
              <blockquote className="border-l-2 border-foreground pl-6 py-2">
                <p className="font-mono text-lg leading-relaxed text-foreground">
                  I like things that resist — proofs, markets,<br />
                  locks, muscle.
                </p>
              </blockquote>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs tracking-wider border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="lg:col-span-5">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  )
}
