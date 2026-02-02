"use client"

interface ExternalLink {
  label: string
  href: string
  desc?: string
  ariaLabel: string
}

const links: ExternalLink[] = [
  {
    label: "Industry",
    href: "https://industry.slray.com",
    desc: "Professional profile",
    ariaLabel: "Open Industry site in a new tab",
  },
  {
    label: "Academic",
    href: "https://academic.slray.com",
    desc: "Research and publications",
    ariaLabel: "Open Academic site in a new tab",
  },
  {
    label: "Blog",
    href: "https://blog.slray.com",
    desc: "Thoughts and writings",
    ariaLabel: "Open Blog site in a new tab",
  },
]

export default function ExternalLinks() {
  return (
    <div className="flex flex-wrap gap-2 md:gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="
            inline-flex items-center gap-1.5
            h-[26px] md:h-[28px]
            px-3 md:px-3.5
            text-[11px] md:text-xs
            tracking-[0.06em]
            text-foreground/90
            bg-transparent
            border border-border
            rounded-full
            transition-all duration-[160ms] ease-out
            hover:bg-foreground/[0.04] hover:border-foreground/25 hover:-translate-y-px
            active:bg-foreground/[0.06]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 focus-visible:ring-offset-2
          "
        >
          <span>{link.label}</span>
          <span className="text-foreground/60">↗</span>
        </a>
      ))}
    </div>
  )
}
