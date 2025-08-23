import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import CTASection from "@/components/CTASection";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // SEO Meta tags
    document.title = "Health ID - Sua Saúde, Suas Regras | Histórico Médico Unificado";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Health ID: Plataforma de histórico médico unificado. Controle total dos seus dados de saúde com segurança blockchain. Acesso antecipado gratuito.');
    }
    
    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', 'Health ID - Autonomia Digital de Saúde');
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', 'Revolucione como você cuida da sua saúde. Todo seu histórico médico unificado e seguro.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CTASection />
      <FloatingCTA />
      <Footer />
    </div>
  );
};

export default Index;
