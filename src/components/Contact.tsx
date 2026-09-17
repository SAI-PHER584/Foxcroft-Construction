import { FacebookLogo, MapPin, Phone } from "@phosphor-icons/react/ssr";
import { company } from "@/lib/content";
import { ContactForm } from "./ContactSection";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-20 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8">
        <Reveal className="flex items-center gap-4 border-t border-line pt-4">
          <span className="label text-mute">05</span>
          <span aria-hidden className="h-px flex-1 bg-line" />
          <span className="label text-brand">Get in touch</span>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="display-wide text-[clamp(2.15rem,5.4vw,4.35rem)]">
                Got a building
                <br />
                project
                <span className="text-brand">?</span>
              </h2>
              <p className="measure mt-6 text-[1.0625rem] leading-relaxed text-mute">
                Ring the mobile and talk it through, or leave the details and we
                will call you back.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-10 border-t border-line">
                <a
                  href={company.mobileHref}
                  className="group flex items-center gap-5 border-b border-line py-5 transition-colors duration-[--duration-fast] hover:bg-stone"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center bg-brand text-paper">
                    <Phone size={19} weight="fill" />
                  </span>
                  <span>
                    <span className="label block text-mute">Mobile</span>
                    <span className="display-wide mt-1.5 block text-[1.4rem] leading-none font-extrabold uppercase text-ink">
                      {company.mobile}
                    </span>
                  </span>
                </a>

                <a
                  href={company.officeHref}
                  className="group flex items-center gap-5 border-b border-line py-5 transition-colors duration-[--duration-fast] hover:bg-stone"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center border border-line-strong text-mute">
                    <Phone size={19} weight="regular" />
                  </span>
                  <span>
                    <span className="label block text-mute">Office</span>
                    <span className="display-wide mt-1.5 block text-[1.4rem] leading-none font-extrabold uppercase text-ink">
                      {company.office}
                    </span>
                  </span>
                </a>

                <div className="flex items-start gap-5 border-b border-line py-5">
                  <span className="flex size-12 shrink-0 items-center justify-center border border-line-strong text-mute">
                    <MapPin size={19} weight="regular" />
                  </span>
                  <span>
                    <span className="label block text-mute">Yard &amp; office</span>
                    <address className="mt-1.5 font-mono text-[0.875rem] leading-relaxed tracking-tight text-ink not-italic">
                      {company.unit}
                      <br />
                      {company.town}, {company.postcode}
                    </address>
                  </span>
                </div>

                <a
                  href={company.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex items-center gap-5 border-b border-line py-5 transition-colors duration-[--duration-fast] hover:bg-stone"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center border border-line-strong text-mute">
                    <FacebookLogo size={19} weight="regular" />
                  </span>
                  <span>
                    <span className="label block text-mute">Recent jobs</span>
                    <span className="mt-1.5 block text-[0.9375rem] font-medium text-ink">
                      Foxcroft Roofing on Facebook
                    </span>
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={70} className="lg:col-span-7">
            <div className="border border-line bg-stone/55 p-6 md:p-9">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
