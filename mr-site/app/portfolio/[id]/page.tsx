import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { samplePortfolio } from "@/lib/constants";
import { getPortfolioItemById } from "@/lib/data";

export async function generateStaticParams() {
  return samplePortfolio.map((item) => ({ id: item.id }));
}

type PortfolioDetailPageProps = {
  params: {
    id: string;
  };
};

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const item = await getPortfolioItemById(params.id);

  if (!item) {
    notFound();
  }

  const gallery = (item.gallery?.length ? item.gallery : [item.image]).slice(0, 4);

  return (
    <main>
      <Navbar />
      <section className="section-shell py-16 sm:py-24">
        <Link
          href="/#portfolio"
          className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs uppercase tracking-[0.28em] text-gold-soft transition hover:bg-gold/20"
        >
          Back To Portfolio
        </Link>

        <div className="mt-10 space-y-10">
          <div className="glass-panel rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.4em] text-gold-soft">
              {item.category}
            </p>
            <h1 className="mt-4 font-[var(--font-display)] text-4xl leading-tight text-white sm:text-5xl">
              {item.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72">
              {item.description}
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl px-2 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
              {gallery.map((image, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="glass-panel group mx-auto w-full max-w-[420px] overflow-hidden rounded-[1.5rem] p-2 sm:p-3"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.2rem] bg-white/5">
                    <Image
                      src={image}
                      alt={item.alt || `${item.title} gallery image ${index + 1}`}
                      fill
                      className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 420px"
                      priority={index < 2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
