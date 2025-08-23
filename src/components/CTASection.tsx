import { Button } from "@/components/ui/button";
import { Sparkles, Clock, Gift } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-background/80 backdrop-blur px-6 py-3 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-primary animate-pulse-slow" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wide">
              Oferta por tempo limitado
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Seja um dos primeiros a experimentar o{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              futuro da saúde digital
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Cadastre-se agora para ter acesso antecipado e gratuito à plataforma 
            que vai revolucionar como você cuida da sua saúde.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur px-4 py-2 rounded-xl">
              <Gift className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2 bg-background/60 backdrop-blur px-4 py-2 rounded-xl">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Acesso Imediato</span>
            </div>
          </div>
          
          {/* Main CTA */}
          <Button 
            variant="hero" 
            size="xl"
            className="min-w-[300px] text-lg animate-float"
          >
            CADASTRE-SE AGORA GRATUITAMENTE
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Não pedimos cartão de crédito • Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;