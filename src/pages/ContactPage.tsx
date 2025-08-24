import { useState } from "react";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validação básica
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulação de envio
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao enviar mensagem. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Estamos aqui para ajudar. Entre em contato conosco e nossa equipe responderá o mais breve possível.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Informações de Contato
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@healthid.com.br</p>
                      <p className="text-muted-foreground">suporte@healthid.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(11) 9999-9999</p>
                      <p className="text-muted-foreground">0800 123 4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Av. Paulista, 1000<br />
                        São Paulo, SP - 01310-100<br />
                        Brasil
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground mb-1">Horário de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Segunda a Sexta: 8h às 18h<br />
                        Sábado: 9h às 14h<br />
                        Domingo: Fechado
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-card p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Perguntas Frequentes
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Como funciona a segurança dos dados?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Utilizamos tecnologia blockchain e criptografia avançada para proteger seus dados médicos.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Posso acessar meus dados de qualquer lugar?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Sim, você pode acessar seus dados de qualquer dispositivo com internet, de forma segura.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Como compartilho dados com médicos?
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Você tem controle total e pode autorizar o acesso de forma específica e temporária.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Envie uma Mensagem
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Assunto *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="suporte">Suporte Técnico</option>
                      <option value="duvidas">Dúvidas sobre o Produto</option>
                      <option value="privacidade">Questões de Privacidade</option>
                      <option value="parceria">Parcerias</option>
                      <option value="feedback">Feedback</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                      placeholder="Descreva sua dúvida ou mensagem..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Ao enviar esta mensagem, você concorda com nossos{" "}
                  <Link to="/terms" className="text-primary hover:underline">
                    Termos de Uso
                  </Link>{" "}
                  e{" "}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Política de Privacidade
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;