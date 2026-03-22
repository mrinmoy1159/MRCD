import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PortfolioGrid } from "@/components/portfolio-grid";
import { ServicesSection } from "@/components/services-section";
import { samplePortfolio } from "@/lib/constants";
import { getPortfolioItems } from "@/lib/data";

export default async function HomePage() {
  const portfolioItems = await getPortfolioItems();

  return (
    <main>
      <Navbar />
      <Hero />
      <PortfolioGrid items={portfolioItems.length ? portfolioItems : samplePortfolio} />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}


