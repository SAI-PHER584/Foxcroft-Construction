import { Reveal } from "./Reveal";

const facts = [
  {
    v: "1989",
    k: "Building since",
    note: "Started with a reputation for friendly service and high standards.",
  },
  {
    v: "Family run",
    k: "Ownership",
    note: "Grown over the years, still the personal service of a small firm.",
  },
  {
    v: "4 trades",
    k: "Under one roof",
    note: "Roofers, builders, slaters and joiners, on domestic and commercial work.",
  },
  {
    v: "LA3 3ED",
    k: "Morecambe base",
    note: "Yard and office on White Lund Avenue.",
  },
];

export function CredentialBand() {
  return (
    <section id="facts" aria-label="Company facts" className="border-t border-line bg-paper">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal
              key={fact.k}
              delay={i * 60}
              className={`border-line py-9 lg:py-12 ${
                i > 0 ? "border-t sm:border-t-0 lg:border-l lg:pl-8" : ""
              } ${i === 1 ? "sm:border-l sm:pl-8" : ""} ${
                i === 2 ? "sm:border-t lg:border-t-0" : ""
              } ${i === 3 ? "sm:border-t sm:border-l sm:pl-8 lg:border-t-0" : ""} ${
                i < 3 ? "lg:pr-8" : ""
              }`}
            >
              <dd className="display-wide text-[clamp(1.7rem,2.6vw,2.1rem)] leading-none font-extrabold uppercase text-brand">
                {fact.v}
              </dd>
              <dt className="label mt-4 text-ink">{fact.k}</dt>
              <p className="mt-3 max-w-[30ch] text-[0.9375rem] leading-relaxed text-mute">
                {fact.note}
              </p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
