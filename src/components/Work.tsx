import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const spans = [
  "md:col-span-7 md:min-h-[580px]",
  "md:col-span-5 md:min-h-[480px]",
  "md:col-span-5 md:min-h-[500px]",
  "md:col-span-7 md:min-h-[430px]",
];

const sequence = [
  {
    src: "/work/groundworks.jpg",
    alt: "Brick foundations and floor beams laid out at the start of the nursery build",
    step: "Groundworks",
  },
  {
    src: "/work/frame-wide.jpg",
    alt: "Timber frame walls standing on the completed floor deck",
    step: "Frame up",
  },
  {
    src: "/work/frame-roofdeck.jpg",
    alt: "Roof trusses and decking being fitted over the timber frame",
    step: "Roof on",
  },
  {
    src: "/work/nursery-deck.jpg",
    alt: "The finished nursery exterior with a timber deck and red doors",
    step: "Handover",
  },
];

export function Work() {
  return (
    <section id="work" className="border-y border-line bg-stone py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SectionHead
          index="02"
          eyebrow="Completed projects"
          title={
            <>
              Jobs you can
              <br />
              go and look at
            </>
          }
          lede="The four completed projects listed on the current Foxcroft site, from a school nursery building in timber frame to a loft and a bathroom in Bare."
        />
      </div>

      {/* Full bleed: the photography carries this section, not the grid */}
      <ul className="mt-14 grid grid-cols-1 gap-[3px] md:grid-cols-12">
        {projects.map((project, i) => (
          <Reveal
            as="li"
            key={`${project.title}-${project.place}`}
            delay={(i % 2) * 70}
            className={`group relative min-h-[340px] ${spans[i]}`}
          >
            <article className="relative h-full overflow-hidden bg-ink">
              <Image
                src={project.image}
                alt={project.alt}
                fill
                sizes="(max-width: 767px) 100vw, 58vw"
                className="object-cover transition-transform duration-[1000ms] ease-[--ease-out-soft] group-hover:scale-[1.05]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 via-38% to-transparent"
              />

              <div className="relative flex h-full flex-col justify-end p-6 md:p-9">
                <p className="label flex items-center gap-3 text-brand-bright">
                  <span aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                  <span aria-hidden className="h-3 w-px bg-brand-bright/45" />
                  {project.tag}
                </p>
                <h3 className="mt-3 text-paper text-[clamp(1.6rem,3vw,2.6rem)] leading-[0.97]">
                  {project.title}
                </h3>
                <p className="mt-2.5 font-mono text-[0.8125rem] tracking-tight text-paper/75">
                  {project.place}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>

      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <Reveal
          delay={90}
          className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-end"
        >
          <div>
            <p className="label text-brand">Mossgate Park, start to finish</p>
            <p className="mt-3 max-w-[46ch] text-[0.9375rem] leading-relaxed text-mute">
              The nursery was built in timber frame, from groundworks through to
              the handover shown below.
            </p>
          </div>
          <a
            href="#contact"
            className="group inline-flex shrink-0 items-center gap-2.5 border border-line-strong px-6 py-3.5 transition-colors duration-[--duration-fast] hover:border-brand hover:bg-brand-wash active:scale-[0.98]"
          >
            <span className="label">Talk about your project</span>
            <ArrowUpRight
              size={15}
              weight="bold"
              className="text-brand transition-transform duration-[--duration-base] ease-[--ease-out-soft] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <ul className="mt-5 grid grid-cols-2 gap-2.5 md:grid-cols-4 md:gap-3">
          {sequence.map((shot, i) => (
            <Reveal as="figure" key={shot.step} delay={i * 60} className="group">
              <div className="relative aspect-4/3 overflow-hidden bg-ink">
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 767px) 50vw, 24vw"
                  className="object-cover transition-transform duration-[900ms] ease-[--ease-out-soft] group-hover:scale-[1.06]"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline gap-3">
                <span aria-hidden className="label text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="label text-ink">{shot.step}</span>
              </figcaption>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
