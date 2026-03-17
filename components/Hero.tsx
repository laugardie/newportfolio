export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <div className="space-y-7 max-w-4xl">
        {/* Main headline */}
        <h1
          className="font-fraunces font-black text-ink leading-[1.02] tracking-tight"
          style={{ fontSize: "clamp(3.2rem, 9vw, 7rem)" }}
        >
          product designer
        </h1>

        {/* Poetic sub-line */}
        <p
          className="font-fraunces font-light italic text-secondary leading-snug"
          style={{ fontSize: "clamp(1.15rem, 2.8vw, 1.9rem)" }}
        >
          the best ideas arrive uninvited
        </p>

        {/* Meta line */}
        <p className="font-dm-sans text-sm text-secondary/80 tracking-wide pt-2">
          currently freelancing&nbsp;&nbsp;·&nbsp;&nbsp;previously{" "}
          <a
            href="https://gumroad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-accent"
          >
            gumroad
          </a>
        </p>
      </div>
    </section>
  );
}
