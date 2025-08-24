import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDismissed) {
        const scrolled = window.scrollY > 500;
        setIsVisible(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div className="bg-background/95 backdrop-blur-lg shadow-lg rounded-2xl p-4 border border-border max-w-sm">
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2 right-2 p-1 rounded-lg hover:bg-accent transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
        
        <div className="pr-6">
          <p className="text-sm font-semibold text-foreground mb-2">
            🎯 Acesso Antecipado Gratuito
          </p>
          <p className="text-xs text-muted-foreground mb-3">
            Vagas limitadas para os primeiros usuários
          </p>
          <Link to="/form" className="w-full">
            <Button variant="hero" size="sm" className="w-full" onClick={() => (window.location.href = "/form")}>
              Garantir minha vaga
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;