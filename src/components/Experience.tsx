import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "BNP Soluções em TI",
      role: "Analista de Testes Pleno",
      period: "08/2022 - Atualmente",
      current: true,
      highlights: [
        "Definição de estratégias, planejamento e execução de cenários de testes em ambientes ágeis (Scrum/Kanban)",
        "Automação de testes de API com Postman e K6, e testes E2E com Cypress e Playwright",
        "Configuração de pipelines de CI/CD no Azure DevOps",
        "Gerenciamento do time de QA, incluindo coordenação de atividades e liderança da equipe",
        "Criação de métricas de qualidade em Power BI",
        "Automação de testes em aplicativos mobile com Robot Framework",
        "Uso de JavaScript, TypeScript e Python em scripts de automação",
      ],
    },
    {
      company: "BNP Soluções em TI",
      role: "Auxiliar Técnico de Informática",
      period: "11/2021 – 07/2022",
      current: false,
      highlights: [
        "Atendimento ao cliente e suporte técnico de software",
        "Assistência técnica para clientes internos e externos",
        "Análise e melhoria de processos de TI",
      ],
    },
    {
      company: "Dellossi Comunicação e Marketing",
      role: "Estagiária de Desenvolvimento",
      period: "07/2021 – 11/2021",
      current: false,
      highlights: [
        "Desenvolvimento e manutenção de aplicações web e mobile com HTML e CSS",
        "Personalização de sites no WordPress",
        "Melhorias de usabilidade e qualidade",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Experiência</h2>
              <p className="text-muted-foreground">Minha trajetória profissional</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className={`absolute left-0 md:left-8 -translate-x-1/2 w-4 h-4 rounded-full border-2 ${
                    exp.current 
                      ? 'bg-primary border-primary glow' 
                      : 'bg-background border-muted-foreground'
                  }`} />

                  {/* Content card */}
                  <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow hover:border-primary/40 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold font-display text-foreground">{exp.role}</h3>
                        <p className="text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
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

export default Experience;
