import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Termos de Uso
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar a plataforma Health ID Autonomy, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Health ID Autonomy é uma plataforma digital que permite aos usuários:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Armazenar e gerenciar documentos médicos de forma segura</li>
                <li>Acessar seu histórico médico de qualquer lugar</li>
                <li>Compartilhar informações médicas com profissionais de saúde autorizados</li>
                <li>Receber lembretes e insights sobre sua saúde</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Cadastro e Conta do Usuário
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para usar nossos serviços, você deve:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer informações precisas e atualizadas durante o cadastro</li>
                <li>Manter a confidencialidade de suas credenciais de acesso</li>
                <li>Notificar-nos imediatamente sobre qualquer uso não autorizado de sua conta</li>
                <li>Ser responsável por todas as atividades que ocorrem em sua conta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Privacidade e Proteção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Levamos a privacidade de seus dados médicos muito a sério. Utilizamos tecnologia blockchain e criptografia avançada para proteger suas informações. Para mais detalhes, consulte nossa <Link to="/privacy" className="text-primary hover:underline">Política de Privacidade</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Uso Aceitável
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em não usar a plataforma para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Atividades ilegais ou não autorizadas</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Transmitir vírus ou códigos maliciosos</li>
                <li>Interferir no funcionamento da plataforma</li>
                <li>Acessar dados de outros usuários sem autorização</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos os direitos de propriedade intelectual da plataforma Health ID Autonomy, incluindo software, design, conteúdo e marcas registradas, são de propriedade exclusiva da empresa ou de seus licenciadores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Limitação de Responsabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A plataforma é fornecida "como está" e "conforme disponível". Não garantimos que o serviço será ininterrupto ou livre de erros. Nossa responsabilidade é limitada ao máximo permitido por lei.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Modificações dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação. O uso continuado da plataforma constitui aceitação dos termos modificados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Rescisão
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos suspender ou encerrar sua conta a qualquer momento, com ou sem aviso, por violação destes termos. Você também pode encerrar sua conta a qualquer momento através das configurações da plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Lei Aplicável
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco através da nossa <Link to="/contact" className="text-primary hover:underline">página de contato</Link>.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsPage;