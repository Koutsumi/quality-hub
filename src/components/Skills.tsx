import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Skills = () => {
  const categories = [
    {
      title: 'AI-Driven Testing',
      color: 'from-violet-500 to-purple-600',
      skills: ['Engenharia de Prompts para QA', 'Agentes de IA / LLMs', 'Automação de processos com IA', 'Custom Skills'],
    },
    {
      title: 'Automação & Testes',
      color: 'from-cyan-400 to-blue-500',
      skills: ['Robot Framework (Android/Web)', 'Cypress', 'Playwright', 'Postman', 'Testes E2E', 'Testes de API'],
    },
    {
      title: 'Performance & Estresse',
      color: 'from-emerald-400 to-teal-500',
      skills: ['K6', 'Testes de Carga', 'Concorrência', 'Volumetria', 'Testes de Estresse'],
    },
    {
      title: 'CI/CD & Gestão',
      color: 'from-amber-400 to-orange-500',
      skills: ['Azure DevOps', 'Pipelines CI/CD', 'Regressão Contínua', 'Estruturação de QA', 'Shift-Left'],
    },
    {
      title: 'Linguagens & Dados',
      color: 'from-pink-400 to-rose-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Métricas & Análise',
      color: 'from-indigo-400 to-violet-500',
      skills: ['Power BI', 'Análise de Causa Raiz', 'KPIs de Qualidade', 'Dashboards'],
    },
  ];

  return (
    <section id="habilidades" className="relative py-[100px] px-6 bg-[rgba(139,92,246,0.02)]">
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
            Stack
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] mb-14"
          >
            Habilidades <span className="glow-text">Técnicas</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.title}
                custom={index + 2}
                variants={fadeUp}
                className="glass rounded-2xl p-6 group hover:border-violet-500/20 transition-all duration-500"
              >
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${cat.color} mb-4`}>
                  <h3 className="text-[13px] font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
