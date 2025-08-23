import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-40" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Plataforma segura com blockchain
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="bg-gradient-text bg-clip-text text-transparent">
              Você já perdeu um exame importante
            </span>
            <br />
            <span className="text-foreground">
              bem na hora que mais precisava dele?
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chega de ser refém da bagunça do sistema de saúde. 
            Com o Health ID, VOCÊ assume o controle total da sua saúde.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="min-w-[250px]">
              Cadastre-se Gratuitamente
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg">
              Saiba mais
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">Acesso Antecipado</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-slow" />
              <span className="text-sm text-muted-foreground">Gratuito</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-background" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;