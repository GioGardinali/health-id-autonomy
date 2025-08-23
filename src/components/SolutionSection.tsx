import { Check } from "lucide-react";

const features = [
  {
    title: "Todo seu histórico médico em um só lugar",
    description: "Exames, receitas, consultas, tudo organizado e acessível",
  },
  {
    title: "Acesso instantâneo de qualquer lugar",
    description: "No celular, no computador, quando precisar",
  },
  {
    title: "Segurança máxima com blockchain",
    description: "Seus dados protegidos com a mesma tecnologia dos bancos",
  },
  {
    title: "Inteligência artificial que te ajuda",
    description: "Lembretes, insights e organização automática",
  },
];

const SolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-secondary rounded-full mb-6">
              <span className="text-sm font-medium text-secondary-foreground">
                A solução definitiva
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
              Sua saúde, suas regras,{" "}
              <span className="bg-gradient-text bg-clip-text text-transparent">
                seus dados
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O Health ID coloca você no comando. Autonomia total sobre seu histórico médico 
              com tecnologia de ponta.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-background hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Check className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;