import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import { company } from "@/lib/content";
import "./globals.css";

// Archivo carries a width axis, so headlines can run genuinely expanded
// without a second family. Industrial grotesque, in the Franklin Gothic
// lineage that reads correctly for a building firm.
const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.foxcroft-construction.co.uk"),
  title: {
    default: `${company.name} | Builders & Roofers in Morecambe, Lancaster & Heysham`,
    template: `%s | ${company.name}`,
  },
  description:
    "Family run builders, roofers, slaters and joiners covering Morecambe, Lancaster, Heysham and the surrounding area since 1989. Extensions, new builds, loft conversions, timber frame, windows and roofing for domestic and commercial clients.",
  keywords: [
    "builders Morecambe",
    "roofers Lancaster",
    "loft conversions Heysham",
    "house extensions Morecambe",
    "timber frame Lancashire",
    "slaters Morecambe",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: company.name,
    title: `${company.name} | Builders & Roofers in Morecambe`,
    description:
      "Roofers, builders, slaters and joiners covering Morecambe, Lancaster and Heysham since 1989.",
    images: ["/work/nursery-mossgate.jpg"],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f6f4ef",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${archivo.variable} ${plexMono.variable}`}>
      <head>
        {/* Gates the scroll-reveal hidden state. Without scripting the page
            renders fully visible rather than blank. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-js','')`,
          }}
        />
      </head>
      <body className="bg-paper text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-paper focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
