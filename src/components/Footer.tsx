import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-primary" />
            <span className="text-lg font-semibold bg-gradient-text bg-clip-text text-transparent">
              Health ID
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-6 max-w-md">
            Transformando a maneira como você cuida da sua saúde. 
            Autonomia, segurança e tecnologia ao seu alcance.
          </p>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contato
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border w-full max-w-xs">
            <p className="text-xs text-muted-foreground">
              © 2024 Health ID. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;