import { Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Automação de Testes",
      skills: ["Cypress", "Playwright", "Robot Framework", "Postman", "K6"],
    },
    {
      title: "Linguagens",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      title: "Ferramentas & CI/CD",
      skills: ["Azure DevOps", "Git", "Power BI", "MongoDB"],
    },
  ];

  const methodologies = [
    "Scrum",
    "Kanban",
    "Testes de API",
    "Testes E2E",
    "Testes de Performance",
    "Testes Mobile",
    "CI/CD",
    "Análise de Impacto",
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Wrench className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Habilidades</h2>
              <p className="text-muted-foreground">Tecnologias e ferramentas que domino</p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow">
                <h3 className="text-lg font-semibold font-display mb-6 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Methodologies */}
          <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow">
            <h3 className="text-lg font-semibold font-display mb-6 text-center">Metodologias & Práticas</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {methodologies.map((method, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 rounded-full bg-secondary text-sm text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
