export default function Footer() {
  return (
    <footer className="py-20 md:py-28 text-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 font-dm-sans text-sm text-secondary">
        <a
          href="mailto:hello@lauragarcia.design"
          className="hover:text-ink transition-colors"
        >
          hello@lauragarcia.design
        </a>
        <span className="hidden md:block text-ink/20" aria-hidden>·</span>
        <a
          href="https://linkedin.com/in/lauragarcia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-ink transition-colors"
        >
          linkedin
        </a>
        <span className="hidden md:block text-ink/20" aria-hidden>·</span>
        <a href="/resume.pdf" className="hover:text-ink transition-colors">
          resume
        </a>
      </div>

      <p className="mt-10 font-dm-sans text-xs text-secondary/40">
        © 2025 laura garcia
      </p>
    </footer>
  )
}
