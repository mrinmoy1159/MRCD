import type { PortfolioItem } from "@/types/portfolio";

export const navLinks = [
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Contact", href: "/#contact" }
];

export const services = [
  {
    title: "Product Catalog Design",
    count: "30+ Projects",
    description:
      "Luxury-led catalog systems that present products with clarity, elegance, and strong conversion-focused storytelling."
  },
  {
    title: "E-commerce Visual Design",
    count: "40+ Projects",
    description:
      "Polished storefront visuals, listing imagery, and layout assets built to make digital shopping feel refined and premium."
  },
  {
    title: "Advertising Creatives",
    count: "10+ Projects",
    description:
      "High-impact campaign creatives designed for product launches, promotions, and performance-driven brand visibility."
  },
  {
    title: "Brand Visual Identity",
    count: "10+ Projects",
    description:
      "Distinct visual direction that unifies typography, color, product presentation, and overall brand perception."
  }
];

export const samplePortfolio: PortfolioItem[] = [
  {
    id: "work1",
    title: "Work 01 Showcase",
    category: "Catalog Design",
    image: "/images/work1.png",
    alt: "Portfolio preview for Work 01 catalog design",
    description:
      "A premium product catalog layout focused on clean composition, rich imagery, and polished editorial hierarchy for luxury product presentation.",
    gallery: [
      "/images/work1/0.png",
      "/images/work1/1.png",
      "/images/work1/2.png",
      "/images/work1/3.png"
    ]
  },
  {
    id: "work2",
    title: "Work 02 Showcase",
    category: "Product Catalog Design",
    image: "/images/work2.png",
    alt: "Portfolio preview for Work 02 product catalog design",
    description:
      "A product catalog design project focused on premium composition, clear hierarchy, and polished product storytelling for stronger brand presentation.",
    gallery: [
      "/images/work2/1.png",
      "/images/work2/2.png",
      "/images/work2/3.png",
      "/images/work2/4.png"
    ]
  },
  {
    id: "work3",
    title: "Work 03 Showcase",
    category: "Product Catalog Design",
    image: "/images/work3.png",
    alt: "Portfolio preview for Work 03 product catalog design",
    description:
      "A product catalog design project built to present product collections with premium clarity, balanced hierarchy, and a refined visual storytelling approach.",
    gallery: [
      "/images/work3/1.png",
      "/images/work3/2.png",
      "/images/work3/3.png",
      "/images/work3/4.png"
    ]
  }
];
