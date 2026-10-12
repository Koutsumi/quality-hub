import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  const education = [
    { title: 'Análise e Desenvolvimento de Sistemas', year: '2023' },
    { title: 'Formação QA Coders', year: '2023' },
    { title: 'Bacharel em Ciências Contábeis', year: '2017' },
  ];

  return (
    <section id="sobre" className="relative py-[100px] px-6">
      {/* Top gradient divider */}
      <div className="gradient-divider mb-20" />

      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-12 md:gap-20"
        >
          {/* Left: about text */}
          <div>
            <motion.span
              custom={0}
              variants={fadeUp}
              className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px] mb-4 block"
            >
              Sobre mim
            </motion.span>
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] mb-8"
            >
              Qualidade como
              <br />
              <span className="glow-text">cultura, não etapa.</span>
            </motion.h2>
            <motion.p custom={2} variants={fadeUp} className="text-[16px] text-white/60 leading-[1.7] mb-5">
              Analista de Qualidade Sênior com sólida trajetória no planejamento, estruturação e liderança da área de QA do zero.
              Especialista em garantir a resiliência de software por meio de testes mobile (Android), testes de estresse/performance
              em APIs com K6 e suítes de regressão automatizadas.
            </motion.p>
            <motion.p custom={3} variants={fadeUp} className="text-[16px] text-white/60 leading-[1.7] mb-5">
              Atuo na modernização da esteira de testes integrando IA Generativa, LLMs e agentes inteligentes, unindo automação
              (API, Web e Mobile) a estratégias de Shift-Left e pipelines de CI/CD para entregar software com alta cobertura e previsibilidade.
            </motion.p>
            <motion.p custom={4} variants={fadeUp} className="text-[16px] text-white/60 leading-[1.7]">
              Forte habilidade em integração contínua e resolução de problemas, com experiência em consultas avançadas em bancos de dados
              (SQL e MongoDB) e desenvolvimento de dashboards em Power BI para acompanhar KPIs estratégicos da área.
            </motion.p>
          </div>

          {/* Right: stats + education */}
          <div>
            <motion.div custom={2} variants={fadeUp} className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass rounded-2xl p-6 text-center">
                <p className="text-[40px] font-bold glow-text">4+</p>
                <p className="text-[13px] text-white/40 mt-1 uppercase tracking-wider">Anos em QA</p>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <p className="text-[40px] font-bold glow-text">6</p>
                <p className="text-[13px] text-white/40 mt-1 uppercase tracking-wider">Artigos Publicados</p>
              </div>
            </motion.div>

            <motion.div custom={3} variants={fadeUp}>
              <h3 className="text-[18px] font-semibold text-white mb-5">Formação Acadêmica</h3>
              <div className="space-y-3">
                {education.map((ed) => (
                  <div
                    key={ed.title}
                    className="flex justify-between items-baseline border-b border-white/[0.06] pb-3"
                  >
                    <p className="text-[15px] text-white/70 leading-[1.5]">{ed.title}</p>
                    <p className="text-[13px] text-violet-400/70 ml-4 shrink-0">{ed.year}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
