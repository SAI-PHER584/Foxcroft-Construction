import Image from "next/image";
import { processSteps } from "@/lib/content";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";

export function Process() {
  return (
    <section id="process" className="bg-paper py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <SectionHead
          index="03"
          eyebrow="How it runs"
          title={
            <>
              Never chase
              <br />
              your own builder
            </>
          }
          lede="Foxcroft runs jobs on modern project management, which in practice means one person owns your programme and you hear from them as it moves."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <ol className="lg:col-span-7">
            {processSteps.map((step, i) => (
              <Reveal
                as="li"
                key={step.n}
                delay={i * 70}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-line py-8 first:border-t-0 first:pt-0 md:gap-10"
              >
                <span aria-hidden className="label pt-1.5 text-brand">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-[clamp(1.35rem,2.4vw,1.95rem)]">{step.title}</h3>
                  <p className="measure mt-3 text-[1rem] leading-relaxed text-mute">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={110} className="lg:col-span-5">
            <div className="relative h-full min-h-[400px] overflow-hidden bg-ink lg:min-h-[540px]">
              <Image
                src="/work/nursery-mossgate.jpg"
                alt="The finished nursery entrance at Mossgate Park, with red doors under a deep timber eaves"
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="object-cover"
              />
              {/* Dark enough at the foot to carry the quote, clear of the
                  building above it. */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 via-32% to-transparent to-72%"
              />
              <blockquote className="relative flex h-full flex-col justify-end p-7 md:p-9">
                <p className="display-wide text-[clamp(1.45rem,2.6vw,2rem)] font-extrabold uppercase text-paper">
                  &ldquo;We pride ourselves
                  <br />
                  on deliverability.&rdquo;
                </p>
                <footer className="label mt-5 text-brand-bright">Foxcroft Construction</footer>
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
