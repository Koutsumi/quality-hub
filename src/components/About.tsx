import { useEffect, useRef } from 'react';

const About = () => {
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

  const education = [
    { title: 'Análise e Desenvolvimento de Sistemas', year: '2023' },
    { title: 'QA Coders', year: '2023' },
    { title: 'Bacharel em Ciências Contábeis', year: '2017' },
  ];

  return (
    <section id="sobre" ref={ref} className="bg-[#f5f5f7] py-[80px] px-6">
      <div className="max-w-[980px] mx-auto">
        <div className="fade-section grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Left: about text */}
          <div>
            <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.1] mb-6">
              Sobre
            </h2>
            <p className="text-[17px] text-[#333333] leading-[1.47] tracking-[-0.374px] mb-5">
              Analista de Testes Pleno com expertise em definir estratégias de testes, planejar e executar cenários em equipes ágeis, focando na qualidade do software e na melhoria da experiência do usuário.
            </p>
            <p className="text-[17px] text-[#333333] leading-[1.47] tracking-[-0.374px] mb-5">
              Experiência em automação de testes de API e E2E com ferramentas como Cypress, Playwright, Robot Framework, Postman e K6. Proficiente em metodologias ágeis (Scrum/Kanban), análise de impactos, proposição de melhorias e relatórios de qualidade.
            </p>
            <p className="text-[17px] text-[#333333] leading-[1.47] tracking-[-0.374px]">
              Forte habilidade em integração contínua e resolução de problemas para garantir confiabilidade e satisfação do usuário. Atualmente liderando equipe de QA e desenvolvendo ferramentas internas com IA.
            </p>
          </div>

          {/* Right: stats + education */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-white rounded-[11px] p-6 text-center">
                <p className="text-[34px] font-semibold text-[#0066cc]">3+</p>
                <p className="text-[14px] text-[#7a7a7a] mt-1">Anos em QA</p>
              </div>
              <div className="bg-white rounded-[11px] p-6 text-center">
                <p className="text-[34px] font-semibold text-[#0066cc]">6</p>
                <p className="text-[14px] text-[#7a7a7a] mt-1">Artigos Publicados</p>
              </div>
            </div>

            <h3 className="text-[21px] font-semibold text-[#1d1d1f] mb-4">Formação</h3>
            <div className="space-y-3">
              {education.map((ed) => (
                <div key={ed.title} className="flex justify-between items-baseline border-b border-[#e0e0e0] pb-3">
                  <p className="text-[17px] text-[#333333] leading-[1.47]">{ed.title}</p>
                  <p className="text-[14px] text-[#7a7a7a] ml-4 shrink-0">{ed.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
