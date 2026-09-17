import Image from "next/image";
import { aboutQuote, company } from "@/lib/content";
import { Reveal } from "./Reveal";

const areaNotes = [
  { place: "Morecambe", note: "Yard and office on White Lund" },
  { place: "Lancaster & Heysham", note: "Domestic and commercial work" },
  { place: "South Cumbria & north Lakes", note: "Years of experience in the district" },
];

export function About() {
  return (
    <section
      id="about"
      className="border-y border-line bg-stone py-20 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <Reveal className="flex items-center gap-4 border-t border-line pt-4">
          <span className="label text-mute">04</span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <span className="label text-brand">About the firm</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {/* h-full lets the grid row height, set by the copy, drive these
                two frames so the column bottoms line up. */}
            <div className="flex h-full min-h-[520px] flex-col gap-3">
              {/* Both frames show work that appears nowhere else on the page,
                  so the section earns its own photography. */}
              <Reveal className="relative flex-[3] overflow-hidden bg-ink">
                <Image
                  src="/work/frame-joiners.jpg"
                  alt="Two Foxcroft joiners working inside the timber frame with the roof trusses already up"
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className="object-cover"
                />
              </Reveal>

              <Reveal delay={110} className="relative flex-[2] overflow-hidden bg-ink">
                <Image
                  src="/work/loft-stair.jpg"
                  alt="A new pine staircase and balustrade fitted in a loft conversion in Bare"
                  fill
                  sizes="(max-width: 1023px) 100vw, 38vw"
                  className="object-cover"
                />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <blockquote>
                <p className="text-[clamp(1.45rem,2.7vw,2.15rem)] leading-[1.14] font-semibold tracking-[-0.02em] normal-case">
                  &ldquo;{aboutQuote}&rdquo;
                </p>
              </blockquote>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-8 space-y-5 text-[1.0625rem] leading-relaxed text-mute">
                <p className="measure">
                  The company has grown since then, and it is still the friendly,
                  personal service you get from a small family run firm. One
                  outfit, working across Morecambe, Lancaster, Lancashire and
                  Cumbria as roofers, builders, slaters and joiners.
                </p>
                <p className="measure">
                  With experience in the south Cumbria and north Lakes districts,
                  we have the knowledge to manage your job from beginning to end,
                  whether that is a two storey extension or a summer conservatory.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <dl className="mt-10 border-t border-line">
                {areaNotes.map((item) => (
                  <div
                    key={item.place}
                    className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[minmax(0,17rem)_1fr] sm:gap-6"
                  >
                    <dt className="label text-ink">{item.place}</dt>
                    <dd className="text-[0.9375rem] text-mute">{item.note}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={210}>
              <p className="mt-8 font-mono text-[0.8125rem] tracking-tight text-mute">
                {company.unit}, {company.town}, {company.postcode}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
