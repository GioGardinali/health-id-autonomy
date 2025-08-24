import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, Eye, Database } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
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
              Política de Privacidade
            </h1>
            <p className="text-muted-foreground">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Blockchain Seguro</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
              <Lock className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Criptografia Avançada</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-card rounded-lg">
              <Eye className="w-6 h-6 text-primary" />
              <span className="text-sm font-medium">Transparência Total</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Compromisso com sua Privacidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                No Health ID Autonomy, sua privacidade é nossa prioridade máxima. Esta política explica como coletamos, usamos, protegemos e compartilhamos suas informações pessoais e de saúde. Estamos comprometidos com a transparência total sobre nossas práticas de dados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Informações que Coletamos
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Dados Pessoais</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Nome completo</li>
                    <li>Data de nascimento</li>
                    <li>Endereço de e-mail</li>
                    <li>Número de telefone</li>
                    <li>Endereço residencial</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Dados de Saúde</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Histórico médico</li>
                    <li>Resultados de exames</li>
                    <li>Prescrições médicas</li>
                    <li>Relatórios de consultas</li>
                    <li>Informações de medicamentos</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">Dados Técnicos</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Endereço IP</li>
                    <li>Tipo de navegador</li>
                    <li>Dados de uso da plataforma</li>
                    <li>Logs de acesso</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos suas informações exclusivamente para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Fornecer e melhorar nossos serviços de saúde digital</li>
                <li>Organizar e apresentar seu histórico médico</li>
                <li>Facilitar o compartilhamento seguro com profissionais de saúde</li>
                <li>Enviar lembretes e notificações importantes sobre sua saúde</li>
                <li>Garantir a segurança e integridade da plataforma</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. Tecnologia Blockchain e Segurança
              </h2>
              <div className="bg-card p-6 rounded-lg mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-6 h-6 text-primary" />
                  <h3 className="text-lg font-medium text-foreground">Proteção Avançada</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Seus dados são protegidos por tecnologia blockchain, garantindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4 mt-2">
                  <li>Criptografia end-to-end de todos os dados</li>
                  <li>Imutabilidade dos registros médicos</li>
                  <li>Controle total sobre quem acessa suas informações</li>
                  <li>Auditoria completa de todos os acessos</li>
                  <li>Armazenamento descentralizado e seguro</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Compartilhamento de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Você tem controle total</strong> sobre o compartilhamento de seus dados. Compartilhamos informações apenas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Com sua autorização expressa e específica</li>
                <li>Com profissionais de saúde que você autorizar</li>
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Para proteger direitos, propriedade ou segurança</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>Nunca vendemos</strong> seus dados para terceiros ou para fins comerciais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                6. Seus Direitos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Acesso:</strong> Saber quais dados temos sobre você</li>
                <li><strong>Correção:</strong> Corrigir dados incompletos ou incorretos</li>
                <li><strong>Exclusão:</strong> Solicitar a remoção de seus dados</li>
                <li><strong>Portabilidade:</strong> Transferir seus dados para outra plataforma</li>
                <li><strong>Oposição:</strong> Se opor ao processamento de seus dados</li>
                <li><strong>Limitação:</strong> Limitar o uso de seus dados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                7. Retenção de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pelo tempo necessário para fornecer nossos serviços e cumprir obrigações legais. Dados médicos podem ser mantidos por períodos mais longos conforme exigido por regulamentações de saúde. Você pode solicitar a exclusão de seus dados a qualquer momento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                8. Cookies e Tecnologias Similares
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies essenciais para o funcionamento da plataforma e cookies analíticos para melhorar nossos serviços. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                9. Transferências Internacionais
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Seus dados são processados e armazenados no Brasil. Caso seja necessário transferir dados para outros países, garantiremos que tenham nível adequado de proteção conforme a LGPD.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                10. Menores de Idade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nossos serviços são destinados a pessoas maiores de 18 anos. Para menores, é necessário consentimento dos pais ou responsáveis legais. Tomamos medidas especiais para proteger dados de menores.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                11. Atualizações desta Política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas por e-mail ou através da plataforma. Recomendamos revisar esta política regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                12. Contato e Encarregado de Dados
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
              </p>
              <div className="bg-card p-4 rounded-lg">
                <p className="text-muted-foreground">
                  <strong>Encarregado de Proteção de Dados (DPO)</strong><br />
                  E-mail: privacidade@healthid.com.br<br />
                  Telefone: (11) 9999-9999<br />
                  Ou através da nossa <Link to="/contact" className="text-primary hover:underline">página de contato</Link>
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage;