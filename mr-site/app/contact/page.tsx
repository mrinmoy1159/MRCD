import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ClientInquiryForm } from "@/components/client-inquiry-form";

export const metadata = {
  title: "Contact | MR Catalog Designer"
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <section className="section-shell py-16 sm:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.45em] text-gold-soft">Contact</p>
          <h1 className="mt-5 font-[var(--font-display)] text-5xl leading-tight text-white sm:text-6xl">
            Start Your Project
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            Tell me about your project and I&apos;ll get back to you.
          </p>
        </div>

        <div className="mt-12">
          <ClientInquiryForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}
