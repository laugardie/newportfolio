import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const CLIENTS = [
  'Gumroad',
  'Antiwork',
  'BuidlGuidl',
  'Liferay',
  'Beezy',
  'Flexile',
]

export default function About() {
  return (
    <>
      <Nav />

      <main className="pt-20">
        <div className="max-w-2xl mx-auto px-6 md:px-10 pt-16 md:pt-32 pb-4">

          {/* ── Headline ──────────────────────────────────────── */}
          <h1
            className="font-fraunces font-black text-ink leading-[1.03] tracking-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)' }}
          >
            about
          </h1>

          {/* ── Bio ───────────────────────────────────────────── */}
          <div
            className="mt-12 space-y-6 font-fraunces font-light text-ink/80 leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.4rem)' }}
          >
            <p>
              I&apos;m a product designer who believes that good design is mostly
              invisible &mdash; it&apos;s what remains when all the unnecessary parts have
              been removed.
            </p>
            <p>
              I&apos;ve spent the last six years working on products used by millions
              of people, most recently at Gumroad where I led design for the
              core creator experience.
            </p>
            <p>
              I&apos;m currently freelancing, taking on work where design can make a
              real difference in how people experience something &mdash; not just how
              it looks.
            </p>
          </div>

          {/* ── Process ───────────────────────────────────────── */}
          <div className="mt-16 pt-12 border-t border-divider">
            <p className="font-dm-sans text-xs text-secondary/60 tracking-[0.15em] uppercase mb-8">
              process
            </p>
            <div className="space-y-5 font-dm-sans text-[0.95rem] text-ink/70 leading-[1.8]">
              <p>
                I start with the problem, not the solution. Discovery work &mdash;
                research, synthesis, framing &mdash; often takes longer than the
                design itself, and that&apos;s exactly right.
              </p>
              <p>
                I write a lot. Articulating a design in words before pushing
                pixels forces clarity of intent. If you can&apos;t describe it, you
                don&apos;t understand it yet.
              </p>
              <p>
                I work closely with engineers. The best design decisions happen
                in conversation, not in handoff documents.
              </p>
            </div>
          </div>

          {/* ── Clients ───────────────────────────────────────── */}
          <div className="mt-16 pt-12 border-t border-divider">
            <p className="font-dm-sans text-xs text-secondary/60 tracking-[0.15em] uppercase mb-8">
              clients &amp; companies
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6">
              {CLIENTS.map((name) => (
                <span key={name} className="font-dm-sans text-sm text-ink/65">
                  {name}
                </span>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  )
}
