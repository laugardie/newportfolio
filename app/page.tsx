"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/content/projects";
import { explorations } from "@/content/explorations";
import LogoLau from "@/components/LogoLau";

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 60_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

type ExperienceEntry = {
  name: string;
  logo: string;
  isLogomark?: boolean;
  url: string | null;
  active?: boolean;
  date: string;
};

const EXPERIENCE: ExperienceEntry[] = [
  {
    name: "Freelancing",
    logo: "",
    isLogomark: true,
    url: null,
    active: true,
    date: "Present",
  },
  {
    name: "Gumroad, Antiwork",
    logo: "/assets/Gumroad-logo.svg",
    url: "https://gumroad.com/",
    date: "jul 2021 – mar 2026",
  },
  {
    name: "Beezy",
    logo: "/assets/Beezy-logo.svg",
    url: "https://www.beezy.net",
    date: "jun 2020 – oct 2022",
  },
  {
    name: "Liferay",
    logo: "/assets/Liferay-logo.svg",
    url: "https://liferay.design/lexicon/",
    date: "oct 2019 – jun 2020",
  },
];

const SMALL_BETS = [
  {
    name: "Habits",
    company: "tryhabits.app",
    year: "2026",
    thumbnail: "/assets/habits-preview.svg",
    url: "https://tryhabits.app",
  },
];

const EXPLORATIONS = explorations.map((e) => ({
  name: e.name,
  company: e.company,
  year: e.year,
  thumbnail: e.thumbnail,
  url: `/explorations/${e.slug}`,
}));

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay, ease: [0.25, 0.1, 0.25, 1] as const },
  };
}

const SectionHeading = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink/50 mb-5 leading-[25px]">
    {children}
  </p>
);

function ExpLogo({ src, name }: { src: string; name: string }) {
  return (
    <Image
      src={src}
      alt={name}
      width={32}
      height={32}
      className="w-8 h-8 flex-shrink-0 object-contain"
    />
  );
}

function LogomarkIcon({ color }: { color: string }) {
  return (
    <div className="relative w-8 h-8 flex-shrink-0">
      <div
        className="absolute top-0 left-0"
        style={{ width: 3.5, height: 3.5, backgroundColor: color }}
      />
      <div
        className="absolute top-0 right-0"
        style={{ width: 3.5, height: 3.5, backgroundColor: color }}
      />
      <div
        className="absolute bottom-0 left-0"
        style={{ width: 3.5, height: 3.5, backgroundColor: color }}
      />
      <div
        className="absolute bottom-0 right-0"
        style={{ width: 3.5, height: 3.5, backgroundColor: color }}
      />
      <div
        className="absolute inset-[1px]"
        style={{ border: `1px dashed ${color}` }}
      />
      <span
        className="absolute inset-0 flex items-center justify-center font-medium leading-none select-none"
        style={{ color, fontSize: 19 }}
      >
        L
      </span>
    </div>
  );
}

const rowTransition = { duration: 0.15, ease: "easeOut" as const };
const slideVariants = { rest: { x: 0 }, hover: { x: 4 } };
const slideTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
};
const fadeVariants = { rest: { opacity: 0.5 }, hover: { opacity: 0.8 } };
const fadeTransition = { duration: 0.2, ease: "easeOut" as const };

function WorkRow({ project }: { project: Project }) {
  return (
    <motion.a
      href={`/work/${project.slug}`}
      className="row-item flex items-center py-3 sm:py-2.5 border-b border-divider -mx-2 px-2 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="flex items-center gap-3 sm:gap-4 w-full"
        variants={slideVariants}
        transition={slideTransition}
      >
        <div className="relative flex-shrink-0 rounded-[4px] overflow-hidden w-14 h-10 sm:w-[72px] sm:h-12">
          <Image src={project.thumbnail} alt="" fill className="object-cover" />
        </div>
        {/* Mobile: stacked name + company · year */}
        <div className="sm:hidden flex-1 min-w-0">
          <div className="text-base text-ink truncate">{project.title}</div>
          <div className="text-xs text-ink/50">
            {project.company} · {project.year}
          </div>
        </div>
        {/* Desktop: single line */}
        <div className="hidden sm:flex items-baseline justify-between flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 min-w-0 mr-4">
            <span className="text-base text-ink">{project.title}</span>
            <span className="text-base text-ink/50 whitespace-nowrap flex-shrink-0">
              · {project.company}
            </span>
          </div>
          <motion.span
            className="text-xs text-ink tabular-nums flex-shrink-0"
            variants={fadeVariants}
            transition={fadeTransition}
          >
            {project.year}
          </motion.span>
        </div>
      </motion.div>
    </motion.a>
  );
}

type ListItem = {
  name: string;
  company: string;
  year: string;
  thumbnail: string;
  url?: string;
};

function ListRow({ item }: { item: ListItem }) {
  const Tag = item.url ? motion.a : motion.div;
  const isExternal = item.url && !item.url.startsWith("/");
  const linkProps = item.url
    ? {
        href: item.url,
        ...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {}),
      }
    : {};
  return (
    <Tag
      {...linkProps}
      className="row-item flex items-center py-3 sm:py-2.5 border-b border-divider -mx-2 px-2"
      style={{ textDecoration: "none" }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="flex items-center gap-3 sm:gap-4 w-full"
        variants={slideVariants}
        transition={slideTransition}
      >
        <div className="relative flex-shrink-0 rounded-[4px] overflow-hidden w-14 h-10 sm:w-[72px] sm:h-12">
          <Image src={item.thumbnail} alt="" fill className="object-cover" />
        </div>
        {/* Mobile: stacked name + company · year */}
        <div className="sm:hidden flex-1 min-w-0">
          <div className="text-base text-ink truncate">{item.name}</div>
          <div className="text-xs text-ink/50">
            {item.company} · {item.year}
          </div>
        </div>
        {/* Desktop: single line */}
        <div className="hidden sm:flex items-baseline justify-between flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5 min-w-0 mr-4">
            <span className="text-base text-ink">{item.name}</span>
            <span className="text-base text-ink/50 whitespace-nowrap flex-shrink-0">
              · {item.company}
            </span>
          </div>
          <motion.span
            className="text-xs text-ink tabular-nums flex-shrink-0"
            variants={fadeVariants}
            transition={fadeTransition}
          >
            {item.year}
          </motion.span>
        </div>
      </motion.div>
    </Tag>
  );
}

function Logomark() {
  // TL → TR → BR → BL, each 0.08s apart
  const corners: { style: React.CSSProperties; delay: number }[] = [
    { style: { top: 0, left: 0 }, delay: 0 },
    { style: { top: 0, right: 0 }, delay: 0.08 },
    { style: { bottom: 0, right: 0 }, delay: 0.16 },
    { style: { bottom: 0, left: 0 }, delay: 0.24 },
  ];

  return (
    <div className="relative w-12 h-12">
      {/* Corner squares */}
      {corners.map(({ style, delay }, i) => (
        <motion.div
          key={i}
          className="absolute w-[5px] h-[5px] bg-accent"
          style={style}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.15, ease: "easeOut" }}
        />
      ))}

      {/* Dashed border — 0.05s after last corner starts */}
      <motion.div
        className="absolute inset-[2px] border border-dashed border-accent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.29, duration: 0.2, ease: "easeOut" }}
      />

      {/* L — 0.05s after border starts */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-3xl font-medium text-accent leading-none select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.34, duration: 0.2, ease: "easeOut" }}
      >
        L
      </motion.span>
    </div>
  );
}

export default function Home() {
  const time = useClock();

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-[560px] mx-auto px-6 sm:px-8 md:px-0 pt-20 pb-36">
        {/* ── 1. Logomark ─────────────────────────────────────── */}
        <div className="mb-16">
          <LogoLau />
        </div>

        {/* ── 2. Bio ───────────────────────────────────────────── */}
        <motion.section {...fadeUp(0.06)} className="mb-16">
          <p className="text-base leading-[1.67] text-ink">
            I&apos;m Laura, a Product Designer based in Lagos, Portugal.
            Obsessed with details, and happiest when my work goes completely
            unnoticed.
            <br />
            <br />
            I started out as a primary school teacher, for 4 years. In 2019 I
            decided to make the jump into design and never looked back. I also
            write code, not enough to call myself an engineer, but enough to
            know what I&apos;m asking for and get myself into trouble. AI covers
            the rest.
            <br />
            <br />
            I&apos;ve lived in Sevilla, Dublin, New York, and Madrid. Now Lagos,
            Portugal, where I&apos;m learning to surf and perfecting homemade
            pizza. Mum to Diego, 3. Keeps me awake at night and grounded in what
            actually matters.
            <br />
            <br />
            Food is my first language. I run, do crossfit, and somehow also have
            a yoga teaching certificate.
            <br />
            <br />
            Currently freelancing with my husband, throwing small bets, seeing
            what sticks. O-1B visa holder.
            <br />
            <br />
            Previously at{" "}
            <a
              href="https://gumroad.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150"
            >
              Gumroad
            </a>
            , Antiwork.
          </p>
        </motion.section>

        {/* ── 3. Experience ────────────────────────────────────── */}
        <motion.section {...fadeUp(0.12)} className="mb-16">
          <SectionHeading>Experience</SectionHeading>
          <div>
            {EXPERIENCE.map((exp, i) => (
              <motion.a
                key={i}
                {...(exp.url
                  ? {
                      href: exp.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`row-item flex items-center justify-between py-2.5 border-b border-divider -mx-2 px-2${exp.url ? " cursor-pointer" : ""}`}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <motion.div
                  className="flex items-center justify-between w-full"
                  variants={slideVariants}
                  transition={slideTransition}
                >
                  <div className="flex items-center gap-3">
                    <div>
                      {exp.isLogomark ? (
                        <LogoLau size={32} />
                      ) : (
                        <ExpLogo src={exp.logo} name={exp.name} />
                      )}
                    </div>
                    <span className="text-base text-ink">{exp.name}</span>
                  </div>
                  <motion.div
                    className="flex items-center gap-2 flex-shrink-0"
                    variants={{
                      rest: { opacity: 0.5 },
                      hover: { opacity: 0.8 },
                    }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {exp.active && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#4A7A4A] flex-shrink-0" />
                    )}
                    <span className="text-xs text-ink">{exp.date}</span>
                  </motion.div>
                </motion.div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* ── 4. Work ──────────────────────────────────────────── */}
        <motion.section {...fadeUp(0.18)} id="work" className="mb-16">
          <SectionHeading>Work</SectionHeading>
          <div>
            {projects.map((project) => (
              <WorkRow key={project.slug} project={project} />
            ))}
          </div>
        </motion.section>

        {/* ── 5. Small bets ────────────────────────────────────── */}
        <motion.section {...fadeUp(0.22)} className="mb-16">
          <SectionHeading>Small bets</SectionHeading>
          <div>
            {SMALL_BETS.map((item) => (
              <ListRow key={item.name} item={item} />
            ))}
          </div>
        </motion.section>

        {/* ── 6. Explorations ──────────────────────────────────── */}
        <motion.section {...fadeUp(0.25)} className="mb-16">
          <SectionHeading>Explorations</SectionHeading>
          <div>
            {EXPLORATIONS.map((item) => (
              <ListRow key={item.name} item={item} />
            ))}
          </div>
        </motion.section>

        {/* ── 7. You can find me here ───────────────────────────── */}
        <motion.section {...fadeUp(0.28)} className="mb-16">
          <SectionHeading>You can find me here</SectionHeading>
          <div className="space-y-1">
            <a
              href="mailto:hi@laugardie.com"
              className="group flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
            >
              <span className="text-base text-ink/50 w-4 text-center flex-shrink-0">
                @
              </span>
              <span className="text-base text-accent underline decoration-accent underline-offset-[3px] [text-decoration-thickness:0.08em] group-hover:text-accent-hover group-hover:decoration-accent-hover transition-colors duration-150">
                hi@laugardie.com
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/laugardie/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
            >
              <span className="text-base text-ink/50 w-4 text-center flex-shrink-0">
                ↗
              </span>
              <span className="text-base text-accent underline decoration-accent underline-offset-[3px] [text-decoration-thickness:0.08em] group-hover:text-accent-hover group-hover:decoration-accent-hover transition-colors duration-150">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/laugardie"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
            >
              <span className="text-base text-ink/50 w-4 text-center flex-shrink-0">
                ↗
              </span>
              <span className="text-base text-accent underline decoration-accent underline-offset-[3px] [text-decoration-thickness:0.08em] group-hover:text-accent-hover group-hover:decoration-accent-hover transition-colors duration-150">
                GitHub
              </span>
            </a>
            <a
              href="/cv - laura garcia.pdf"
              className="group flex items-center gap-2.5"
              style={{ textDecoration: "none" }}
            >
              <span className="text-base text-ink/50 w-4 text-center flex-shrink-0">
                ↓
              </span>
              <span className="text-base text-accent underline decoration-accent underline-offset-[3px] [text-decoration-thickness:0.08em] group-hover:text-accent-hover group-hover:decoration-accent-hover transition-colors duration-150">
                Resume
              </span>
            </a>
          </div>
        </motion.section>

        {/* ── 8. Footer ────────────────────────────────────────── */}
        <motion.footer {...fadeUp(0.31)}>
          {time && (
            <p className="text-base text-ink/50 leading-[25px]">
              {time}, Lagos, Portugal
            </p>
          )}
          <p className="text-base text-ink/50 leading-[25px]">
            Laura García Diéguez © 2026
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
