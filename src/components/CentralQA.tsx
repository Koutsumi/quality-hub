import { Sparkles, CheckCircle, BarChart3, Trophy, ImageIcon } from "lucide-react";

const CentralQA = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Geração com IA",
      description: "Casos de teste gerados automaticamente com Gemini AI a partir de tarefas do Azure DevOps",
    },
    {
      icon: BarChart3,
      title: "Dashboard Analítico",
      description: "Visualize cobertura de testes, bugs encontrados e saúde do projeto em tempo real",
    },
    {
      icon: Trophy,
      title: "Gamificação",
      description: "Ranking de QAs: Executor (mais testes) e Caçador de Bugs (mais bugs encontrados)",
    },
  ];

  const workflow = [
    "Configurar PAT do Azure e API Key do Gemini",
    "Cadastrar contexto do projeto",
    "Selecionar projeto e buscar tarefa",
    "Gerar casos de teste com IA",
    "Revisar, ajustar e enviar ao Azure DevOps",
  ];

  return (
    <section id="central-qa" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Central QA</h2>
              <p className="text-muted-foreground">Meu projeto de destaque</p>
            </div>
          </div>

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Ferramenta em Produção
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left content */}
            <div className="space-y-6">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                O <span className="text-primary font-semibold">Central QA</span> é uma ferramenta interna 
                que desenvolvi para apoiar o time de Quality Assurance, automatizando a criação 
                de casos de teste a partir de tarefas do Azure DevOps Boards.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                A ferramenta utiliza inteligência artificial (Gemini) para gerar casos de teste 
                automaticamente, reduzindo significativamente o tempo de documentação e garantindo 
                consistência nos cenários de teste.
              </p>

              {/* Features */}
              <div className="space-y-4 pt-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold font-display text-foreground">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - Workflow */}
            <div className="p-8 rounded-2xl bg-gradient-card border-glow card-shadow">
              <h3 className="text-xl font-semibold font-display mb-6">Fluxo de Uso</h3>
              
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-secondary-foreground">{step}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dashboard highlights */}
              <div className="mt-8 pt-6 border-t border-border">
                <h4 className="text-sm font-semibold text-muted-foreground mb-4">MÉTRICAS DO DASHBOARD</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-lg bg-secondary/50 text-center">
                    <div className="text-xs text-muted-foreground">Testes Executados</div>
                    <div className="text-primary font-semibold">📊</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50 text-center">
                    <div className="text-xs text-muted-foreground">Cobertura PBI</div>
                    <div className="text-primary font-semibold">📈</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50 text-center">
                    <div className="text-xs text-muted-foreground">Bugs Abertos</div>
                    <div className="text-primary font-semibold">🐛</div>
                  </div>
                  <div className="p-3 rounded-lg bg-secondary/50 text-center">
                    <div className="text-xs text-muted-foreground">Saúde do Projeto</div>
                    <div className="text-primary font-semibold">💚</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Screenshots section */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold font-display mb-6 text-center">Screenshots do Sistema</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((index) => (
                <div 
                  key={index}
                  className="aspect-video rounded-xl bg-gradient-card border-glow card-shadow flex items-center justify-center group hover:border-primary/40 transition-colors"
                >
                  <div className="text-center">
                    <img src={`/images/screenshot-${index}.png`} alt={`Screenshot ${index}`} className="w-full h-full object-cover rounded-xl" />
                    {/* <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground">Screenshot {index}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CentralQA;
