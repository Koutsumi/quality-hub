import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Experience = () => {
  const experiences = [
    {
      company: 'BNP Soluções em TI',
      role: 'Analista de Testes Sênior / Lead QA',
      period: '11/2021 – Atualmente',
      current: true,
      highlights: [
        'Estruturou o processo de qualidade da empresa do zero, definindo padrões de governança e implementando IA generativa, LLMs e agentes de IA para automação de requisitos e geração de cenários de teste',
        'Planejou e executou estratégia de testes funcionais e de regressão em aplicações Android com Robot Framework',
        'Modelou testes de carga, volumetria e estresse em APIs e microsserviços via K6 e Postman',
        'Montou suíte de regressão automatizada integrada a pipelines no Azure DevOps, reduzindo drasticamente validação manual por release',
        'Consultas avançadas em SQL e MongoDB, dashboards em Power BI para KPIs estratégicos (densidade de defeitos, tempo de resolução)',
        'Liderança e coordenação do time de QA',
      ],
    },
    {
      company: 'Dellossi Comunicação e Marketing',
      role: 'Estagiária de Desenvolvimento',
      period: '07/2021 – 11/2021',
      current: false,
      highlights: [
        'Desenvolvimento e validação de interfaces web e mobile responsivas (HTML/CSS)',
        'Foco em usabilidade e experiência do usuário',
      ],
    },
  ];

  return (
    <section id="experiencia" className="relative py-[100px] px-6">
      <div className="gradient-divider mb-20" />

      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <motion.span
            custom={0}
            variants={fadeUp}
            className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px] mb-4 block"
          >
            Trajetória
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] mb-14"
          >
            Experiência <span className="glow-text">Profissional</span>
          </motion.h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-cyan-400/20 to-transparent" />

            <div className="space-y-14">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  custom={index + 2}
                  variants={fadeUp}
                  className="relative pl-10"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                      exp.current
                        ? 'bg-violet-500 border-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]'
                        : 'bg-transparent border-white/20'
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-[20px] font-semibold text-white">{exp.role}</h3>
                      <p className="text-[16px] text-violet-400">{exp.company}</p>
                    </div>
                    <span className="text-[13px] text-white/40 font-mono">{exp.period}</span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-3 text-[15px] text-white/55 leading-[1.6]">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 mt-[9px] shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
