import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/ssr";
import { commercialSectors, services } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

function ImageTile({
  slug,
  className,
  delay,
  size = "md",
}: {
  slug: string;
  className: string;
  delay: number;
  size?: "lg" | "md";
}) {
  const service = bySlug[slug];

  return (
    <Reveal as="article" delay={delay} className={`group relative ${className}`}>
      <div className="relative h-full overflow-hidden bg-ink">
        <Image
          src={service.image!}
          alt={service.alt!}
          fill
          sizes="(max-width: 767px) 100vw, 55vw"
          className="object-cover transition-transform duration-[900ms] ease-[--ease-out-soft] group-hover:scale-[1.05]"
        />
        {/* These cards carry a title, sector and a line of copy, so the
            scrim runs a little higher than on the work grid. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 via-34% to-transparent to-76%"
        />
        <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
          {service.sector === "Domestic & commercial" ? null : (
            <p className="label text-brand-bright">{service.sector}</p>
          )}
          <h3
            className={`mt-3 text-paper ${
              size === "lg"
                ? "text-[clamp(1.8rem,3.2vw,2.75rem)] leading-[0.97]"
                : "text-[clamp(1.45rem,2.2vw,1.9rem)] leading-[0.97]"
            }`}
          >
            {service.title}
          </h3>
          <p className="mt-3 max-w-[40ch] text-[0.9375rem] leading-relaxed text-paper/80">
            {service.blurb}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function TradeRow({ slug }: { slug: string }) {
  const service = bySlug[slug];

  return (
    <div className="group border-t border-line py-6 first:border-t-0 first:pt-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-[clamp(1.25rem,1.8vw,1.55rem)] leading-[0.97]">
          {service.title}
        </h3>
        {service.sector === "Domestic & commercial" ? null : (
          <span className="label shrink-0 text-brand">{service.sector}</span>
        )}
      </div>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-mute">
        {service.blurb}
      </p>
    </div>
  );
}

export function Services() {
  const pm = bySlug["project-management"];

  return (
    <section id="services" className="bg-paper py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SectionHead
          index="01"
          eyebrow="What we do"
          title={
            <>
              One firm for
              <br />
              the whole job
            </>
          }
          lede="Foxcroft covers the same trades on domestic and commercial work, so nothing gets handed between contractors halfway through."
        />

        <div className="mt-14 grid grid-cols-1 gap-2.5 md:grid-cols-12 md:gap-3">
          <ImageTile
            slug="roofing"
            delay={0}
            size="lg"
            className="min-h-[360px] md:col-span-7 md:row-span-2 md:min-h-[560px]"
          />
          <ImageTile
            slug="extensions"
            delay={70}
            className="min-h-[280px] md:col-span-5 md:min-h-[272px]"
          />
          <ImageTile
            slug="loft-conversions"
            delay={140}
            className="min-h-[280px] md:col-span-5 md:min-h-[272px]"
          />

          <Reveal delay={0} className="border border-line bg-stone/55 p-6 md:col-span-4 md:p-8">
            <TradeRow slug="new-builds" />
            <TradeRow slug="timber-frame" />
            <TradeRow slug="windows" />
          </Reveal>

          <Reveal as="article" delay={70} className="md:col-span-8">
            <div className="flex h-full flex-col justify-between gap-8 bg-brand p-7 text-paper md:p-10">
              <div>
                <p className="label text-paper/70">On every job</p>
                <h3 className="mt-3 text-paper text-[clamp(1.7rem,3vw,2.5rem)]">{pm.title}</h3>
                <p className="mt-4 max-w-[48ch] text-[1.0625rem] leading-relaxed text-paper/85">
                  {pm.blurb}
                </p>
                <a
                  href="#process"
                  className="label group mt-5 inline-flex min-h-11 items-center gap-2 text-paper"
                >
                  How a Foxcroft job runs
                  <ArrowUpRight
                    size={15}
                    weight="bold"
                    className="transition-transform duration-[--duration-base] ease-[--ease-out-soft] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>

              <div>
                <p className="label text-paper/70">Commercial sectors</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {commercialSectors.map((sector) => (
                    <li
                      key={sector}
                      className="border border-paper/30 px-3.5 py-2 font-mono text-[0.75rem] font-medium tracking-tight text-paper"
                    >
                      {sector}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
