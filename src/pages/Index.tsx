
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import DataSection from "@/components/DataSection";
import Sustainability from "@/components/Sustainability";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <HowItWorks />
      <Impact />
      <DataSection />
      <Sustainability />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
