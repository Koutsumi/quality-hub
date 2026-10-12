import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Projects = () => {
  return (
    <section id="projetos">
      {/* ─── Central QA ─── */}
      <div className="relative py-[100px] px-6">
        <div className="gradient-divider mb-20" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[1100px] mx-auto"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-3">
            <span className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px]">Projeto</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-[12px] text-emerald-400 font-medium border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Em Produção
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[36px] md:text-[48px] font-bold text-white leading-[1.07] mb-5"
          >
            Central QA
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-[16px] text-white/55 leading-[1.7] max-w-3xl mb-10">
            Ferramenta interna que automatiza a criação de casos de teste a partir de tarefas do Azure DevOps Boards.
            Utiliza Gemini AI para gerar casos de teste automaticamente, reduzindo significativamente o tempo de documentação
            e garantindo consistência nos cenários de teste.
          </motion.p>

          {/* Feature cards */}
          <motion.div custom={3} variants={fadeUp} className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { title: 'Geração com IA', desc: 'Casos de teste gerados automaticamente com Gemini AI a partir de tarefas do Azure DevOps' },
              { title: 'Dashboard Analítico', desc: 'Cobertura de testes, bugs encontrados e saúde do projeto em tempo real' },
              { title: 'Gamificação', desc: 'Ranking de QAs: Executor (mais testes) e Caçador de Bugs (mais bugs encontrados)' },
            ].map((f) => (
              <div key={f.title} className="glass rounded-2xl p-6 hover:border-violet-500/20 transition-all duration-500">
                <h4 className="text-[16px] font-semibold text-white mb-2">{f.title}</h4>
                <p className="text-[14px] text-white/45 leading-[1.5]">{f.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Screenshots */}
          <motion.div custom={4} variants={fadeUp}>
            <h3 className="text-[16px] font-semibold text-white/70 mb-5">Screenshots do Sistema</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="screenshot-frame group">
                  <img
                    src={`/images/screenshot-${i}.png`}
                    alt={`Central QA - Screenshot ${i}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Quality Dashboard ─── */}
      <div className="relative py-[100px] px-6 bg-[rgba(139,92,246,0.02)]">
        <div className="gradient-divider mb-20" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[1100px] mx-auto"
        >
          <motion.span custom={0} variants={fadeUp} className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px] block mb-3">
            Projeto
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[36px] md:text-[48px] font-bold text-white leading-[1.07] mb-5"
          >
            Quality &amp; Defects <span className="glow-text">Dashboard</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-[16px] text-white/55 leading-[1.7] max-w-3xl mb-10">
            Dashboard de monitoramento em Power BI com visão detalhada sobre eficiência do desenvolvimento,
            detecção e correção de defeitos. KPIs estratégicos para tomada de decisão baseada em dados.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              'Efficiency Rate',
              'Internal Defect Rate',
              'Customer Defect Rate',
              'Defect Fix Ratio',
              'Mean Reaction Time',
              'Mean Time To Fix',
            ].map((m) => (
              <div key={m} className="glass rounded-xl p-5 group hover:border-cyan-400/20 transition-all duration-500">
                <p className="text-[15px] font-semibold text-white group-hover:text-cyan-300 transition-colors">{m}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* ─── Hermes Agent Ecosystem ─── */}
      <div className="relative py-[120px] px-6">
        <div className="gradient-divider mb-20" />
        {/* Ambient glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-500/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.03] blur-[120px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="max-w-[1100px] mx-auto relative z-10"
        >
          <motion.div custom={0} variants={fadeUp} className="flex items-center gap-3 mb-3">
            <span className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px]">Projeto</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 text-[12px] text-violet-400 font-medium border border-violet-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Ativo e em evolução
            </span>
          </motion.div>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[40px] md:text-[56px] lg:text-[64px] font-black text-white leading-[1.02] tracking-[-1px] mb-5"
          >
            Hermes Agent
            <br />
            <span className="glow-text">Ecossistema de IA Autônoma</span>
          </motion.h2>
          <motion.p custom={2} variants={fadeUp} className="text-[17px] text-white/50 leading-[1.7] max-w-3xl mb-14">
            Ecossistema completo de inteligência artificial autônoma construído sobre o framework open-source
            Hermes Agent (Nous Research). Opera em servidor Linux dedicado, acessível por múltiplos canais,
            funcionando como um agente operacional pessoal capaz de executar tarefas complexas de forma independente.
          </motion.p>

          {/* Dashboard screenshots */}
          <motion.div custom={3} variants={fadeUp} className="mb-14">
            <h3 className="text-[16px] font-semibold text-white/70 mb-5">Central de Operações — Dashboard</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="screenshot-frame group">
                <img
                  src="/images/central-ops-1.png"
                  alt="Central de Operações - Dashboard principal"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="screenshot-frame group">
                <img
                  src="/images/central-ops-2.png"
                  alt="Central de Operações - Publicações e módulos"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          {/* Infrastructure */}
          <motion.div custom={4} variants={fadeUp}>
            <h3 className="text-[18px] font-semibold text-white mb-6">Infraestrutura</h3>
            <div className="grid sm:grid-cols-2 gap-3 mb-14">
              {[
                'VPS Linux Ubuntu 24.04 com IP dedicado na rede Tailscale',
                'Hermes Agent com modelo Claude Opus 4 (Anthropic)',
                'Acesso via SSH/CLI, Orca Desktop, Orca Mobile e mensageiros',
                'Rede privada Tailscale para acesso seguro de qualquer dispositivo',
                'Nginx como reverse proxy com autenticação',
                'GitHub CLI autenticado para gestão de repositórios',
                'Composio CLI para integrações com serviços externos',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 p-4 glass rounded-xl">
                  <span className="text-violet-400 text-[15px] mt-0.5 shrink-0">→</span>
                  <p className="text-[14px] text-white/60 leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div custom={5} variants={fadeUp}>
            <h3 className="text-[18px] font-semibold text-white mb-6">Capacidades</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-14">
              {[
                {
                  title: 'Central de Operações',
                  desc: 'Dashboard web com observabilidade total — tarefas, rotinas, conteúdos, cron jobs e incidentes indexados em tempo real',
                  gradient: 'from-violet-500 to-purple-600',
                },
                {
                  title: 'Segundo Cérebro',
                  desc: 'Base de contexto versionada em Markdown com domínios organizados, sincronizada via GitHub',
                  gradient: 'from-cyan-400 to-blue-500',
                },
                {
                  title: 'Produção de Conteúdo',
                  desc: 'Pipeline de criação para Instagram e LinkedIn com prompt editorial AntIA para escrita natural',
                  gradient: 'from-pink-400 to-rose-500',
                },
                {
                  title: 'Automações e Cron Jobs',
                  desc: 'Rotinas automatizadas com publicação de cada execução na Central de Operações',
                  gradient: 'from-emerald-400 to-teal-500',
                },
                {
                  title: 'Integração com Ferramentas',
                  desc: 'Google Workspace, LinkedIn, ClickUp e outras via Composio — leitura e ação em serviços externos',
                  gradient: 'from-amber-400 to-orange-500',
                },
                {
                  title: 'Browser Autônomo',
                  desc: 'Navegação web, pesquisa, extração de dados e interação com páginas de forma independente',
                  gradient: 'from-indigo-400 to-violet-500',
                },
                {
                  title: 'Briefings e Resumos',
                  desc: 'Digestão de notícias, emails, grupos e canais com entrega organizada e periódica',
                  gradient: 'from-sky-400 to-cyan-500',
                },
                {
                  title: 'Execução de Código',
                  desc: 'Terminal, Python, Node.js, scripts e deploys executados diretamente pelo agente',
                  gradient: 'from-fuchsia-400 to-pink-500',
                },
              ].map((cap) => (
                <div key={cap.title} className="p-6 glass rounded-2xl group hover:border-violet-500/20 transition-all duration-500">
                  <div className={`inline-block w-8 h-1 rounded-full bg-gradient-to-r ${cap.gradient} mb-4`} />
                  <h4 className="text-[16px] font-semibold text-white mb-2">{cap.title}</h4>
                  <p className="text-[14px] text-white/45 leading-[1.5]">{cap.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech stack + repos */}
          <motion.div custom={6} variants={fadeUp} className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[18px] font-semibold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Hermes Agent (Nous Research)',
                  'Claude Opus 4',
                  'Linux',
                  'Nginx',
                  'Git',
                  'Tailscale',
                  'Composio',
                  'GitHub CLI',
                  'HTML/CSS/JS',
                  'Python',
                  'Bash',
                ].map((t) => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[18px] font-semibold text-white mb-4">Repositórios</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Koutsumi/central_operacoes_hermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <span className="text-white/30">↗</span>
                  Central de Operações
                  <span className="text-[12px] text-white/25">(privado)</span>
                </a>
                <a
                  href="https://github.com/Koutsumi/segundo-cerebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <span className="text-white/30">↗</span>
                  Segundo Cérebro
                  <span className="text-[12px] text-white/25">(privado)</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
