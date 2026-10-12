import { useEffect, useRef } from 'react';

const Projects = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.08 }
    );
    const sections = ref.current?.querySelectorAll('.fade-section');
    sections?.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projetos" ref={ref}>
      {/* ── Project 1: Central QA ── parchment tile */}
      <div className="bg-[#f5f5f7] py-[80px] px-6">
        <div className="fade-section max-w-[980px] mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] text-[#0066cc] font-semibold uppercase tracking-wide">Projeto</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[12px] text-[#0066cc] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]" />
              Em Produção
            </span>
          </div>
          <h2 className="text-[34px] md:text-[40px] font-semibold text-[#1d1d1f] leading-[1.1] mb-4">
            Central QA
          </h2>
          <p className="text-[17px] text-[#333333] leading-[1.47] max-w-3xl mb-10">
            Ferramenta interna que automatiza a criação de casos de teste a partir de tarefas do Azure DevOps Boards. Utiliza Gemini AI para gerar casos de teste automaticamente.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { title: 'Geração com IA', desc: 'Casos de teste gerados automaticamente com Gemini AI a partir de tarefas do Azure DevOps' },
              { title: 'Dashboard Analítico', desc: 'Cobertura de testes, bugs encontrados e saúde do projeto em tempo real' },
              { title: 'Gamificação', desc: 'Ranking de QAs: Executor (mais testes) e Caçador de Bugs (mais bugs encontrados)' },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-[11px] p-6">
                <h4 className="text-[17px] font-semibold text-[#1d1d1f] mb-2">{f.title}</h4>
                <p className="text-[14px] text-[#7a7a7a] leading-[1.43]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project 2: Quality Dashboard ── dark tile */}
      <div className="bg-[#272729] py-[80px] px-6">
        <div className="fade-section max-w-[980px] mx-auto">
          <span className="text-[14px] text-[#2997ff] font-semibold uppercase tracking-wide">Projeto</span>
          <h2 className="text-[34px] md:text-[40px] font-semibold text-white leading-[1.1] mt-2 mb-4">
            Quality &amp; Defects Dashboard
          </h2>
          <p className="text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.47] max-w-3xl mb-10">
            Dashboard de monitoramento em Power BI. Visão detalhada sobre eficiência do desenvolvimento, detecção e correção de defeitos.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'Efficiency Rate',
              'Internal Defect Rate',
              'Customer Defect Rate',
              'Defect Fix Ratio',
              'Mean Reaction Time',
              'Mean Time To Fix',
            ].map((m) => (
              <div key={m} className="rounded-[11px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.08)] p-5">
                <p className="text-[17px] font-semibold text-white">{m}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project 3: Hermes Agent Ecosystem ── dark tile (largest) */}
      <div className="bg-[#1d1d1f] py-[100px] px-6">
        <div className="fade-section max-w-[980px] mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[14px] text-[#2997ff] font-semibold uppercase tracking-wide">Projeto</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2997ff]/10 text-[12px] text-[#2997ff] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2997ff] animate-pulse" />
              Ativo e em evolução
            </span>
          </div>
          <h2 className="text-[40px] md:text-[56px] font-semibold text-white leading-[1.07] tracking-[-0.28px] mb-4">
            Hermes Agent — Ecossistema de IA Autônoma
          </h2>
          <p className="text-[20px] md:text-[24px] font-light text-[rgba(255,255,255,0.6)] leading-[1.5] max-w-3xl mb-12">
            Ecossistema completo de inteligência artificial autônoma construído sobre o framework open-source Hermes Agent (Nous Research). O sistema opera em um servidor Linux dedicado, acessível por múltiplos canais, e funciona como um agente operacional pessoal capaz de executar tarefas complexas de forma independente.
          </p>

          {/* Infrastructure */}
          <h3 className="text-[21px] font-semibold text-white mb-6">Infraestrutura</h3>
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
              <div key={item} className="flex items-start gap-3 p-4 rounded-[11px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)]">
                <span className="text-[#2997ff] text-[16px] mt-0.5">→</span>
                <p className="text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.43]">{item}</p>
              </div>
            ))}
          </div>

          {/* Capabilities */}
          <h3 className="text-[21px] font-semibold text-white mb-6">Capacidades</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {[
              {
                title: 'Central de Operações',
                desc: 'Dashboard web com observabilidade total de tudo que o agente executa — tarefas, rotinas, conteúdos, cron jobs e incidentes, tudo indexado em tempo real',
              },
              {
                title: 'Segundo Cérebro',
                desc: 'Base de contexto versionada em Markdown com domínios organizados (perfil, projetos, conteúdo, operações, conhecimento, governança), sincronizada via GitHub',
              },
              {
                title: 'Produção de Conteúdo',
                desc: 'Pipeline de criação para Instagram e LinkedIn com prompt editorial AntIA que garante escrita natural e sem vícios de IA',
              },
              {
                title: 'Automações e Cron Jobs',
                desc: 'Rotinas automatizadas com publicação de cada execução na Central de Operações',
              },
              {
                title: 'Integração com Ferramentas',
                desc: 'Google Workspace, LinkedIn, ClickUp e outras via Composio — leitura e ação em serviços externos',
              },
              {
                title: 'Browser Autônomo',
                desc: 'Navegação web, pesquisa, extração de dados e interação com páginas',
              },
              {
                title: 'Briefings e Resumos',
                desc: 'Digestão de notícias, emails, grupos e canais com entrega organizada',
              },
              {
                title: 'Execução de Código',
                desc: 'Terminal, Python, Node.js, scripts e deploys diretamente do agente',
              },
            ].map((cap) => (
              <div key={cap.title} className="p-6 rounded-[18px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.06)] hover:bg-[rgba(41,151,255,0.06)] hover:border-[rgba(41,151,255,0.15)] transition-colors">
                <h4 className="text-[17px] font-semibold text-[#2997ff] mb-2">{cap.title}</h4>
                <p className="text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.43]">{cap.desc}</p>
              </div>
            ))}
          </div>

          {/* Tech stack + repos */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-[21px] font-semibold text-white mb-4">Tech Stack</h3>
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
                  <span
                    key={t}
                    className="px-4 py-[7px] rounded-full bg-[rgba(255,255,255,0.08)] text-[14px] text-[rgba(255,255,255,0.85)] border border-[rgba(255,255,255,0.1)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-[21px] font-semibold text-white mb-4">Repositórios</h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/Koutsumi/central_operacoes_hermes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-[#2997ff] hover:underline"
                >
                  <span className="text-[rgba(255,255,255,0.4)]">↗</span>
                  Central de Operações
                  <span className="text-[12px] text-[rgba(255,255,255,0.3)]">(privado)</span>
                </a>
                <a
                  href="https://github.com/Koutsumi/segundo-cerebro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[14px] text-[#2997ff] hover:underline"
                >
                  <span className="text-[rgba(255,255,255,0.4)]">↗</span>
                  Segundo Cérebro
                  <span className="text-[12px] text-[rgba(255,255,255,0.3)]">(privado)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
