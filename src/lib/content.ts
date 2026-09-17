/**
 * Every factual statement on this page is traceable to the live Foxcroft site
 * (foxcroft-construction.co.uk), captured 2026-09-16. Source notes live in
 * SOURCES.md at the repo root. Nothing here is invented: where a fact was
 * missing it was left out rather than filled in.
 */

export const company = {
  name: "Foxcroft Construction",
  strapline: "Builders & Roofers",
  established: 1989,
  unit: "Unit 2A, White Lund Avenue",
  town: "Morecambe",
  postcode: "LA3 3ED",
  mobile: "07983 407984",
  mobileHref: "tel:+447983407984",
  office: "01524 422393",
  officeHref: "tel:+441524422393",
  facebook: "https://www.facebook.com/FoxcroftRoofing",
  areas: ["Morecambe", "Lancaster", "Heysham", "Lancashire", "Cumbria"],
} as const;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "How it runs", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const credentials = [
  { value: "1989", label: "Building since" },
  { value: "Family run", label: "Ownership" },
  { value: "Domestic & commercial", label: "We work on" },
  { value: "Morecambe", label: "Based in" },
] as const;

export type Service = {
  slug: string;
  title: string;
  blurb: string;
  sector: "Domestic" | "Commercial" | "Domestic & commercial";
  image?: string;
  alt?: string;
};

export const services: Service[] = [
  {
    slug: "roofing",
    title: "Roofing & slating",
    blurb:
      "Roofs and slating on houses, schools and commercial buildings. The firm trades as Foxcroft Roofing too.",
    sector: "Domestic & commercial",
    image: "/work/frame-roofdeck.jpg",
    alt: "Roof trusses and decking going on over a new timber frame building",
  },
  {
    slug: "extensions",
    title: "Extensions",
    blurb:
      "Two storey extensions down to a summer conservatory, run from the first day on site to the last.",
    sector: "Domestic",
    image: "/work/windermere-kitchen-2.jpg",
    alt: "Finished kitchen extension with gloss units and a solid oak worktop",
  },
  {
    slug: "loft-conversions",
    title: "Loft conversions",
    blurb: "Stairs, plastering, rooflights and finish. Space you already own, made usable.",
    sector: "Domestic",
    image: "/work/loft-bare.jpg",
    alt: "Converted loft room with the original brick chimney breast left exposed",
  },
  {
    slug: "new-builds",
    title: "New builds",
    blurb: "Groundworks up to handover, for private clients and commercial sites.",
    sector: "Domestic & commercial",
  },
  {
    slug: "timber-frame",
    title: "Timber frame",
    blurb: "Timber frame work, erected on site by our own joiners.",
    sector: "Domestic & commercial",
  },
  {
    slug: "windows",
    title: "Windows",
    blurb: "Window work on homes, offices and school buildings.",
    sector: "Domestic & commercial",
  },
  {
    slug: "project-management",
    title: "Project management",
    blurb:
      "A named site manager on your job, with regular updates on where it stands and what it costs.",
    sector: "Domestic & commercial",
  },
];

export const commercialSectors = ["Offices", "Schools", "Roofing", "Timber frames", "Windows"];

export type Project = {
  title: string;
  place: string;
  tag: string;
  image: string;
  alt: string;
};

/** Titles and locations are exactly as listed on the current Projects page. */
export const projects: Project[] = [
  {
    title: "Nursery building",
    place: "Mossgate Park Primary School",
    tag: "Commercial · Timber frame",
    image: "/work/nursery-mossgate.jpg",
    alt: "Finished single storey nursery building with red doors, signed Mossgate After School Club",
  },
  {
    title: "Kitchen & house extension",
    place: "Windermere Park",
    tag: "Domestic · Extension",
    image: "/work/windermere-kitchen.jpg",
    alt: "Completed kitchen in a house extension, with under-cabinet lighting and an oak worktop",
  },
  {
    title: "Loft conversion",
    place: "Bare",
    tag: "Domestic · Loft",
    image: "/work/loft-stair.jpg",
    alt: "New staircase with a pine balustrade leading up into the converted loft",
  },
  {
    title: "Bathroom",
    place: "Bare",
    tag: "Domestic · Refit",
    image: "/work/bathroom-bare.jpg",
    alt: "Refitted bathroom with mosaic tiling, a bath with a shower screen and a vanity unit",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Call and talk it through",
    body: "Ring the mobile and tell us what you have in mind. It is a direct number to the firm doing the work.",
  },
  {
    n: "02",
    title: "One site manager, start to finish",
    body: "Your job is managed from beginning to end by one person, so there is always someone who knows the answer.",
  },
  {
    n: "03",
    title: "Regular updates, on time and to cost",
    body: "We use modern project management to keep the job running to programme and to budget, and you hear from your site manager as it goes.",
  },
];

/** Verbatim from the current About page. */
export const aboutQuote =
  "Established in 1989, Foxcroft Construction started life as a business with a reputation for friendly service and high standards.";
