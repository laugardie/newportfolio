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
    name: "Gumroad (Antiwork)",
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
    name: "Meal planner",
    company: "Currently building",
    year: "now",
    thumbnail: "/assets/mealio-preview.svg",
    thumbnailScale: 0.63,
  },
  {
    name: "Tatai",
    company: "Coloring books",
    year: "2026",
    thumbnail: "/assets/tatai-books.svg",
    thumbnailScale: 0.75,
    url: "https://www.amazon.es/stores/author/B0H7SPB314?ingress=0&visitId=abe2539c-bbe6-4c53-88a0-a4d3e46984f2",
  },
  {
    name: "Habits",
    company: "tryhabits.app",
    year: "2026",
    thumbnail: "/assets/habits-preview.svg",
    thumbnailScale: 0.63,
    url: "https://tryhabits.app",
  },
];

const EXPLORATIONS = explorations.map((e) => ({
  name: e.name,
  company: e.company,
  year: e.year,
  thumbnail: e.thumbnail,
  thumbnailScale: e.thumbnailScale,
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
  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted mb-6 leading-none">
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
      className="row-item flex items-center py-4 border-b border-divider -mx-3 px-3 cursor-pointer"
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="flex items-center gap-4 w-full"
        variants={slideVariants}
        transition={slideTransition}
      >
        <div className="relative flex-shrink-0 overflow-hidden w-16 h-11 sm:w-20 sm:h-14">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-contain"
            style={{ transform: `scale(${project.thumbnailScale ?? 1})` }}
          />
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
  thumbnailScale?: number;
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
      className="row-item flex items-center py-4 border-b border-divider -mx-3 px-3"
      style={{ textDecoration: "none" }}
      initial="rest"
      whileHover="hover"
      animate="rest"
    >
      <motion.div
        className="flex items-center gap-4 w-full"
        variants={slideVariants}
        transition={slideTransition}
      >
        <div className="relative flex-shrink-0 overflow-hidden w-16 h-11 sm:w-20 sm:h-14">
          <Image
            src={item.thumbnail}
            alt=""
            fill
            className="object-contain"
            style={{ transform: `scale(${item.thumbnailScale ?? 1})` }}
          />
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
    <main className="min-h-screen bg-transparent overflow-hidden">
      <div className="max-w-[600px] mx-auto px-6 sm:px-8 md:px-0 pt-12 sm:pt-16 pb-28 sm:pb-36">
        {/* ── 1. Logomark ─────────────────────────────────────── */}
        <div className="mb-20 sm:mb-24">
          <LogoLau />
        </div>

        {/* ── 2. Bio ───────────────────────────────────────────── */}
        <motion.section {...fadeUp(0.06)} className="mb-24 sm:mb-28">
          <h1 className="font-cormorant text-[3.5rem] sm:text-[4.5rem] font-medium tracking-[-0.035em] leading-[0.9] text-ink mb-9">
            I&apos;m Laura.
          </h1>
          <p className="text-[17px] leading-[1.72] text-ink/80">
            A
            <span className=" text-accent"> Senior Product Designer </span>
            based in Lagos, Portugal, working at the intersection of design and
            code. I specialize in crafting intuitive, high-quality digital
            experiences and work directly in the codebase with{" "}
            <span className=" text-accent">React</span> and{" "}
            <span className=" text-accent">Tailwind</span>.
            <br />
            <br />I started out as a primary school teacher before transitioning
            into
            <span className=" text-accent"> product</span>,{" "}
            <span className=" text-accent">UX</span>, and{" "}
            <span className=" text-accent">front-end development</span>
            .
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
            , part of{" "}
            <a
              href="https://antiwork.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-accent text-accent underline-offset-[3px] [text-decoration-thickness:0.08em] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150"
            >
              Antiwork
            </a>
            . <span className=" text-accent"> US O-1B visa holder</span>
            .
            <br />
            <br />
            Outside of work, I&apos;m into running, CrossFit, nutrition, and
            yoga, and I&apos;m also mum to Diego, 3.
          </p>
        </motion.section>

        {/* ── 3. Experience ────────────────────────────────────── */}
        <motion.section {...fadeUp(0.12)} className="mb-24">
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
                className={`row-item flex items-center justify-between py-3.5 border-b border-divider -mx-3 px-3${exp.url ? " cursor-pointer" : ""}`}
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
        <motion.section {...fadeUp(0.18)} id="work" className="mb-24">
          <SectionHeading>Work</SectionHeading>
          <div>
            {projects.map((project) => (
              <WorkRow key={project.slug} project={project} />
            ))}
          </div>
        </motion.section>

        {/* ── 5. Small bets ────────────────────────────────────── */}
        <motion.section {...fadeUp(0.22)} className="mb-24">
          <SectionHeading>Small bets</SectionHeading>
          <div>
            {SMALL_BETS.map((item) => (
              <ListRow key={item.name} item={item} />
            ))}
          </div>
        </motion.section>

        {/* ── 6. Explorations ──────────────────────────────────── */}
        <motion.section {...fadeUp(0.25)} className="mb-24">
          <SectionHeading>Explorations</SectionHeading>
          <div>
            {EXPLORATIONS.map((item) => (
              <ListRow key={item.name} item={item} />
            ))}
          </div>
        </motion.section>

        {/* ── 7. You can find me here ───────────────────────────── */}
        <motion.section {...fadeUp(0.28)} className="mb-24">
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
        <motion.footer {...fadeUp(0.31)} className="pt-8 border-t border-divider">
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
