import { FileQuestion, RefreshCw, UserX } from "lucide-react";

const problems = [
  {
    icon: FileQuestion,
    title: "Perda de documentos",
    description: "Imagina chegar no médico e ele perguntar sobre aquele exame que você fez há 6 meses... e você não lembra onde guardou.",
  },
  {
    icon: RefreshCw,
    title: "Repetição infinita",
    description: "Repetir a mesma história médica pela décima vez porque 'o sistema não conversa com o outro sistema'.",
  },
  {
    icon: UserX,
    title: "Sem controle",
    description: "Seus dados espalhados em dezenas de lugares diferentes, sem você ter acesso quando precisa.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-foreground">
            O sistema de saúde atual está{" "}
            <span className="bg-gradient-text bg-clip-text text-transparent">
              quebrado
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Os pacientes são reféns de um sistema que espalha suas informações 
            em dezenas de lugares diferentes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card hover:bg-card-hover border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;