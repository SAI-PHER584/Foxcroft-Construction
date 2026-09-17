import { ArrowUpRight, Phone } from "@phosphor-icons/react/ssr";
import { company } from "@/lib/content";
import { HeroMedia } from "./HeroMedia";

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

export function Hero() {
  return (
    <section className="bg-ink">
      {/* Footage behind, type over it. svh rather than vh so the mobile
          browser chrome does not push the CTAs off the screen. */}
      <div className="relative min-h-[86svh] w-full overflow-hidden md:min-h-[92svh]">
        <HeroMedia />

        {/* Two scrims: one from the foot to seat the type, one from the left
            so the headline holds up over the bright sky on wide screens.
            Kept off the top right so the footage still reads as footage. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/55 via-30% to-ink/15"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden bg-gradient-to-r from-ink/80 via-ink/30 via-42% to-transparent md:block"
        />
        {/* The header sits on open sky, which can be near white. This keeps
            the logo and nav off it. */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/55 to-transparent md:h-36"
        />

        <div className="relative mx-auto flex min-h-[86svh] max-w-[1500px] flex-col justify-end px-5 pt-32 pb-10 md:min-h-[92svh] md:px-8 md:pb-14">
          <p
            className="rise label flex items-center gap-3 text-brand-bright"
            style={{ "--rise-delay": "60ms" } as React.CSSProperties}
          >
            <span aria-hidden className="h-px w-8 bg-brand-bright" />
            Morecambe · Lancaster · Heysham
          </p>

          <h1
            className="rise display-wide mt-5 max-w-[16ch] text-paper text-[clamp(2.8rem,8.4vw,7.2rem)]"
            style={{ "--rise-delay": "120ms" } as React.CSSProperties}
          >
            Roofers,
            <br />
            builders,
            <br />
            slaters
            <span className="text-brand-bright">.</span>
          </h1>

          <p
            className="rise measure mt-7 text-[1.05rem] leading-relaxed text-paper/80 md:text-[1.1875rem]"
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
              className="group inline-flex items-center justify-center gap-2.5 border border-paper/35 px-7 py-4 text-paper backdrop-blur-[2px] transition-colors duration-[--duration-fast] hover:border-paper hover:bg-paper/10 active:scale-[0.98]"
            >
              <span className="label">See the work</span>
              <ArrowUpRight
                size={16}
                weight="bold"
                className="text-brand-bright transition-transform duration-[--duration-base] ease-[--ease-out-soft] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
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
