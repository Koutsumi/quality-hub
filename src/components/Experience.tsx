import { useEffect, useRef } from 'react';

const Experience = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    );
    const sections = ref.current?.querySelectorAll('.fade-section');
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'BNP Soluções em TI',
      role: 'Analista de Testes Pleno',
      period: '08/2022 – Atualmente',
      current: true,
      highlights: [
        'Definição de estratégias, planejamento e execução de cenários de testes em ambientes ágeis',
        'Automação de testes de API com Postman e K6, e testes E2E com Cypress e Playwright',
        'Configuração de pipelines de CI/CD no Azure DevOps',
        'Gerenciamento do time de QA, coordenação de atividades e liderança',
        'Criação de métricas de qualidade em Power BI',
        'Automação de testes mobile com Robot Framework',
        'JavaScript, TypeScript e Python em scripts de automação',
      ],
    },
    {
      company: 'BNP Soluções em TI',
      role: 'Auxiliar Técnico de Informática',
      period: '11/2021 – 07/2022',
      current: false,
      highlights: [
        'Atendimento ao cliente e suporte técnico de software',
        'Análise e melhoria de processos de TI',
      ],
    },
    {
      company: 'Dellossi Comunicação e Marketing',
      role: 'Estagiária de Desenvolvimento',
      period: '07/2021 – 11/2021',
      current: false,
      highlights: [
        'Desenvolvimento e manutenção de aplicações web e mobile',
        'Personalização de sites no WordPress',
      ],
    },
  ];

  return (
    <section id="experiencia" ref={ref} className="bg-white py-[80px] px-6">
      <div className="max-w-[980px] mx-auto">
        <h2 className="fade-section text-[40px] font-semibold text-[#1d1d1f] leading-[1.1] mb-12">
          Experiência
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#e0e0e0]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="fade-section relative pl-10">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                    exp.current
                      ? 'bg-[#0066cc] border-[#0066cc]'
                      : 'bg-white border-[#e0e0e0]'
                  }`}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-[21px] font-semibold text-[#1d1d1f]">{exp.role}</h3>
                    <p className="text-[17px] text-[#0066cc]">{exp.company}</p>
                  </div>
                  <span className="text-[14px] text-[#7a7a7a]">{exp.period}</span>
                </div>

                <ul className="space-y-2">
                  {exp.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-3 text-[17px] text-[#333333] leading-[1.47]">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#0066cc] mt-[10px] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
