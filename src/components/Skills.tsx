import { useEffect, useRef } from 'react';

const Skills = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.15 }
    );
    const sections = ref.current?.querySelectorAll('.fade-section');
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      title: 'Automação de Testes',
      skills: ['Cypress', 'Playwright', 'Robot Framework', 'Postman', 'K6'],
    },
    {
      title: 'Linguagens',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    },
    {
      title: 'Ferramentas & CI/CD',
      skills: ['Azure DevOps', 'Git', 'Power BI', 'MongoDB'],
    },
    {
      title: 'Metodologias & Práticas',
      skills: ['Scrum', 'Kanban', 'Testes de API', 'Testes E2E', 'Testes de Performance', 'Testes Mobile', 'CI/CD', 'Análise de Impacto'],
    },
  ];

  return (
    <section id="habilidades" ref={ref} className="bg-[#272729] py-[80px] px-6">
      <div className="max-w-[980px] mx-auto">
        <h2 className="fade-section text-[40px] font-semibold text-white leading-[1.1] mb-12">
          Habilidades
        </h2>

        <div className="fade-section grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title}>
              <h3 className="text-[21px] font-semibold text-[#2997ff] mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-[7px] rounded-full bg-[rgba(255,255,255,0.08)] text-[14px] text-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(41,151,255,0.15)] hover:text-[#2997ff] hover:border-[#2997ff]/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
