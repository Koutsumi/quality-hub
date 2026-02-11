import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const About = () => {
  const education = [
    { title: "Análise e Desenvolvimento de Sistemas", year: "2023" },
    { title: "QA Coders", year: "2023" },
    { title: "Bacharel em Ciências Contábeis", year: "2017" },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Sobre Mim</h2>
              <p className="text-muted-foreground">Quem sou e o que faço</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-secondary-foreground leading-relaxed">
                Analista de Testes Pleno com expertise em definir estratégias de testes, planejar e 
                executar cenários em equipes ágeis, focando na <span className="text-primary font-medium">qualidade do software</span> e 
                na melhoria da <span className="text-primary font-medium">experiência do usuário</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Experiência em automação de testes de API e E2E com ferramentas como Cypress, Playwright, 
                Robot Framework, Postman e K6. Proficiente em metodologias ágeis (Scrum/Kanban), 
                análise de impactos, proposição de melhorias e relatórios de qualidade.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Forte habilidade em integração contínua e resolução de problemas para garantir 
                confiabilidade e satisfação do usuário. Atualmente liderando equipe de QA e 
                desenvolvendo ferramentas internas com IA.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center p-4 rounded-xl bg-secondary/50 border-glow">
                  <div className="text-3xl font-bold text-primary font-display">3+</div>
                  <div className="text-sm text-muted-foreground">Anos em QA</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/50 border-glow">
                  <div className="text-3xl font-bold text-primary font-display">6</div>
                  <div className="text-sm text-muted-foreground">Artigos Publicados</div>
                </div>
                {/* <div className="text-center p-4 rounded-xl bg-secondary/50 border-glow">
                  <div className="text-3xl font-bold text-primary font-display">1</div>
                  <div className="text-sm text-muted-foreground">Ferramenta Criada</div>
                </div> */}
              </div>
            </div>

            {/* Education sidebar */}
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold font-display">Formação</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-foreground">{edu.title}</p>
                        <p className="text-xs text-muted-foreground">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Briefcase className="w-5 h-5 text-primary" />
                  <h3 className="text-lg font-semibold font-display">Atual</h3>
                </div>
                <p className="text-sm text-foreground">BNP Soluções em TI</p>
                <p className="text-xs text-muted-foreground">Analista de Testes Pleno</p>
                <p className="text-xs text-primary mt-2">Desde 08/2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
