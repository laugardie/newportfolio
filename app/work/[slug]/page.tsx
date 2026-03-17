import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/content/projects";
import TwitterEmbed from "@/components/TwitterEmbed";

function renderTextContent(content: string) {
  const html = content.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline decoration-accent text-accent underline-offset-[3px] hover:text-accent-hover hover:decoration-accent-hover transition-colors duration-150">$1</a>',
  );

  return { __html: html };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

type Props = {
  params: { slug: string };
};

export default function WorkPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <main className="min-h-screen bg-bg">
      <div className="max-w-[560px] mx-auto px-6 sm:px-8 md:px-0 pt-20 pb-36">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink transition-colors mb-12 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          <span>work</span>
        </Link>

        {/* Title */}
        <h1 className="text-2xl font-medium leading-tight tracking-tight text-ink mb-2">
          {project.title}
        </h1>

        {/* Meta */}
        <p className="text-sm text-muted mb-10">
          {project.company} · {project.year}
        </p>

        {/* Description */}
        <p
          className="text-base leading-[1.75] text-ink mb-16"
          dangerouslySetInnerHTML={renderTextContent(project.description)}
        />

        {/* Sections */}
        <div className="space-y-14">
          {project.sections.map((section, i) => {
            if (section.type === "image") {
              return (
                <figure key={i} className="md:-mx-16">
                  <div className="rounded-2xl overflow-hidden bg-surface">
                    <img
                      src={section.content}
                      alt={section.caption ?? ""}
                      className="w-full object-cover"
                    />
                  </div>
                  {section.caption && (
                    <figcaption className="text-center text-xs text-muted mt-3">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (section.type === "embed") {
              return (
                <div key={i}>
                  <TwitterEmbed url={section.content} />
                </div>
              );
            }

            if (section.type === "video") {
              return (
                <figure key={i} className="md:-mx-16">
                  <div className="rounded-2xl overflow-hidden bg-surface">
                    <video
                      src={section.content}
                      className="w-full h-auto"
                      controls
                      playsInline
                    />
                  </div>
                  {section.caption && (
                    <figcaption className="text-center text-sm text-muted mt-3">
                      {section.caption}
                    </figcaption>
                  )}
                </figure>
              );
            }

            return (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-base font-semibold text-ink mb-3">
                    {section.heading}
                  </h2>
                )}
                <div
                  className="text-base leading-[1.75] text-ink"
                  dangerouslySetInnerHTML={renderTextContent(section.content)}
                />
              </div>
            );
          })}
        </div>

        {/* More work */}
        {others.length > 0 && (
          <div className="mt-20 pt-16 border-t border-divider">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted mb-5">
              More work
            </p>
            <div>
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/work/${p.slug}`}
                  prefetch={false}
                  style={{ textDecoration: "none" }}
                >
                  <div className="row-item group flex items-baseline justify-between py-2.5 -mx-2 px-2 border-b border-divider">
                    <div className="flex items-baseline justify-between w-full transition-transform duration-200 ease-out group-hover:translate-x-1">
                      <div className="flex items-baseline gap-1.5 min-w-0 mr-4">
                        <span className="text-base text-ink">{p.title}</span>
                        <span className="text-base text-ink/50 flex-shrink-0">
                          · {p.company}
                        </span>
                      </div>
                      <span className="text-xs text-ink/50 group-hover:text-ink/80 transition-colors duration-200 tabular-nums flex-shrink-0">
                        {p.year}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
