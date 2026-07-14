import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Privacy from "@/components/Privacy";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Privacy />
        <Features />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
