import { company, nav, services } from "@/lib/content";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <Logo tone="paper" />
            <p className="mt-6 max-w-[34ch] text-[0.9375rem] leading-relaxed text-mute-dark">
              Roofers, builders, slaters and joiners covering Morecambe,
              Lancaster, Heysham, Lancashire and Cumbria since 1989.
            </p>
            <address className="mt-6 font-mono text-[0.8125rem] leading-relaxed tracking-tight text-mute-dark not-italic">
              {company.unit}
              <br />
              {company.town}, {company.postcode}
            </address>
          </div>

          <nav aria-label="Footer services" className="md:col-span-4">
            <h2 className="label text-brand-bright">Services</h2>
            <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-1">
              {services.map((service) => (
                <li key={service.slug}>
                  <a
                    href="#services"
                    className="text-[0.9375rem] text-mute-dark transition-colors duration-[--duration-fast] hover:text-paper"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="label text-brand-bright">Go to</h2>
            <ul className="mt-5 grid gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[0.9375rem] text-mute-dark transition-colors duration-[--duration-fast] hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 grid gap-2">
              <a
                href={company.mobileHref}
                className="display-wide text-lg font-extrabold tracking-tight text-paper uppercase"
              >
                {company.mobile}
              </a>
              <a
                href={company.officeHref}
                className="font-mono text-[0.8125rem] tracking-tight text-mute-dark transition-colors hover:text-paper"
              >
                {company.office}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-2 pt-7 font-mono text-[0.75rem] tracking-tight text-mute-dark sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.name}. Established{" "}
            {company.established}.
          </p>
          <p>Concept redesign. Not the live Foxcroft site.</p>
        </div>
      </div>
    </footer>
  );
}
