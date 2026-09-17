import Image from "next/image";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/ssr";
import { company } from "@/lib/content";

const trades = [
  "Roofing",
  "Slating",
  "Extensions",
  "Loft conversions",
  "New builds",
  "Timber frame",
  "Joinery",
  "Windows",
  "Project management",
];

const years = new Date().getFullYear() - company.established;

const specs = [
  { k: "Established", v: "1989" },
  { k: "Years", v: String(years) },
  { k: "Ownership", v: "Family run" },
  { k: "Base", v: "Morecambe" },
];

export function Hero() {
  return (
    <section className="bg-paper">
      {/* Type block in daylight, photograph beneath it. */}
      <div className="mx-auto max-w-[1500px] px-5 pt-24 pb-8 md:px-8 md:pt-36 md:pb-14">
        <div className="grid grid-cols-1 gap-7 sm:gap-10 lg:grid-cols-12 lg:items-start lg:gap-12">
          <div className="lg:col-span-8">
            <p
              className="rise label flex items-center gap-3 text-brand"
              style={{ "--rise-delay": "60ms" } as React.CSSProperties}
            >
              <span aria-hidden className="h-px w-8 bg-brand" />
              Morecambe · Lancaster · Heysham
            </p>

            <h1
              className="rise display-wide mt-6 text-[clamp(2.8rem,8.8vw,7.6rem)]"
              style={{ "--rise-delay": "120ms" } as React.CSSProperties}
            >
              Roofers,
              <br />
              builders,
              <br />
              slaters
              <span className="text-brand">.</span>
            </h1>
          </div>

          <div className="lg:col-span-4">
            {/* Hidden on phones: the credential band directly below the hero
                repeats 1989 and Family run, and dropping it here is what
                lifts the photograph above the fold on a 844px screen. */}
            <dl
              className="rise mb-9 hidden grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-7 sm:grid"
              style={{ "--rise-delay": "170ms" } as React.CSSProperties}
            >
              {specs.map((spec) => (
                <div key={spec.k}>
                  <dt className="label text-mute">{spec.k}</dt>
                  <dd className="display-wide mt-2 text-[clamp(1rem,1.7vw,1.5rem)] leading-tight font-extrabold uppercase">
                    {spec.v}
                  </dd>
                </div>
              ))}
            </dl>

            <p
              className="rise measure text-[1.05rem] leading-relaxed text-mute md:text-[1.1875rem]"
              style={{ "--rise-delay": "200ms" } as React.CSSProperties}
            >
              A family run firm building across Morecambe, Lancaster and Heysham
              since 1989. Extensions, new builds, loft conversions, timber frame
              and roofing, domestic and commercial.
            </p>

            <div
              className="rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
              style={{ "--rise-delay": "280ms" } as React.CSSProperties}
            >
              <a
                href={company.mobileHref}
                className="inline-flex items-center justify-center gap-3 bg-brand px-7 py-4 text-paper transition-transform duration-[--duration-fast] ease-[--ease-out-soft] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                <Phone size={18} weight="fill" />
                <span className="font-mono text-[0.9375rem] font-semibold tracking-tight">
                  {company.mobile}
                </span>
              </a>

              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2.5 border border-line-strong px-7 py-4 text-ink transition-colors duration-[--duration-fast] hover:border-ink hover:bg-stone active:scale-[0.98]"
              >
                <span className="label">See the work</span>
                <ArrowUpRight
                  size={16}
                  weight="bold"
                  className="text-brand transition-transform duration-[--duration-base] ease-[--ease-out-soft] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-bleed photograph, no heavy scrim over it.
          On phones the band takes the photograph's own 16:9 so the frame is
          shown whole rather than cropped to a band of sky, and the whole thing
          clears the fold. Taller viewport-relative bands from md up. */}
      <div className="relative aspect-video w-full overflow-hidden md:aspect-auto md:h-[64vh] lg:h-[74vh]">
        <Image
          src="/work/hero-frame.jpg"
          alt="Timber frame walls standing on a completed floor deck at Mossgate Park, under open sky"
          fill
          priority
          sizes="100vw"
          className="settle object-cover object-center"
        />
      </div>

      {/* Trades ticker */}
      <div className="drift-host border-b border-line bg-stone">
        <div className="flex overflow-hidden py-3.5">
          <ul className="drift-track flex shrink-0 items-center gap-8 pr-8">
            {[...trades, ...trades].map((trade, i) => (
              <li
                key={`${trade}-${i}`}
                aria-hidden={i >= trades.length ? true : undefined}
                className="label flex shrink-0 items-center gap-8 whitespace-nowrap text-mute"
              >
                {trade}
                <span aria-hidden className="size-1 bg-brand" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
