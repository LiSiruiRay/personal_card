import HeroSection from "@/components/hero-section"
import SelectedWorks from "@/components/selected-works"
import ResearchSection from "@/components/research-section"
import SystemsSection from "@/components/systems-section"
import InteractiveSection from "@/components/interactive-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SelectedWorks />
      <ResearchSection />
      <SystemsSection />
      <InteractiveSection />
    </main>
  )
}
