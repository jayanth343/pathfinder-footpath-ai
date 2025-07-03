import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Platform from "@/components/Platform";
import Impact from "@/components/Impact";
import DataSection from "@/components/DataSection";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, 0.1]
  );
  
  return (
    <motion.div 
      ref={ref} 
      className="min-h-screen relative"
    >
      {/* Background gradient that appears on scroll */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-primary/10 to-transparent -z-10"
        style={{ opacity: backgroundOpacity }}
      />
      
      {/* Main content */}
      <TopNav />
      
      <main className="pt-20">
        <section className="min-h-screen" id="hero">
          <Hero />
        </section>
        
        <section id="problem">
          <Problem />
        </section>
        
        <section id="how-it-works">
          <Platform />
        </section>
        
        <section id="impact">
          <Impact />
        </section>
        
        <section id="data">
          <DataSection />
        </section>
        

        
        <section id="cta">
          <CTA />
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
