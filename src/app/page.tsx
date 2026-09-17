import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { CredentialBand } from "@/components/CredentialBand";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Work } from "@/components/Work";
import { company } from "@/lib/content";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: company.name,
  description:
    "Family run roofers, builders, slaters and joiners covering Morecambe, Lancaster, Heysham, Lancashire and Cumbria since 1989.",
  foundingDate: String(company.established),
  telephone: company.mobile,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.unit,
    addressLocality: company.town,
    postalCode: company.postcode,
    addressCountry: "GB",
  },
  areaServed: company.areas.map((area) => ({ "@type": "Place", name: area })),
  sameAs: [company.facebook],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <SiteHeader />
      <main id="main">
        <Hero />
        <CredentialBand />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
