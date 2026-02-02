import ProfileImage from "./profile-image"

const tags = ["MATHEMATICS", "COMPUTER SCIENCE", "RESEARCH", "STARTUPS"]

export default function HeroSection() {
  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 py-24" style={{ padding: "16px" }}>
      <div data-face-content-container="true" className="@container/content mx-auto px-4 relative z-10 w-full">
        <div className="grid grid-cols-1 @4xl:grid-cols-12 gap-12 items-center">
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
              <p className="text-xl md:text-2xl leading-relaxed text-foreground">
                Math & Computer Science.<br />
                Research-trained. Startup-shaped.
              </p>
              
              {/* Quote */}
              <blockquote className="border-l-2 border-foreground pl-6 py-2">
                <p className="font-mono text-sm leading-relaxed text-muted-foreground">
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
          <div className="lg:col-span-5 flex justify-center lg:justify-end lg:pt-16">
            <ProfileImage />
          </div>
        </div>
      </div>
    </section>
  )
}
