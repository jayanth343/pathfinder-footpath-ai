
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import Impact from "@/components/Impact";
import DataSection from "@/components/DataSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Platform />
      <Impact />
      <DataSection />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
