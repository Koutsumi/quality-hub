import { BarChart3, Clock, Bug, Target, TrendingUp, Shield, ImageIcon } from "lucide-react";

const QualityDashboard = () => {
  const metrics = [
    {
      icon: Target,
      name: "Efficiency Rate",
      description: "Mede a eficiência do processo de identificação de defeitos pelo time",
    },
    {
      icon: Bug,
      name: "Internal Defect Rate",
      description: "Quantidade de defeitos detectados internamente antes da liberação",
    },
    {
      icon: Shield,
      name: "Customer Defect Rate",
      description: "Número de defeitos reportados pelos clientes em produção",
    },
    {
      icon: TrendingUp,
      name: "Defect Fix Ratio",
      description: "Percentual de defeitos corrigidos em relação ao total identificado",
    },
    {
      icon: Clock,
      name: "Mean Reaction Time",
      description: "Tempo médio de reação para iniciar a resolução de um defeito",
    },
    {
      icon: Clock,
      name: "Mean Time To Fix",
      description: "Tempo médio para corrigir defeitos identificados",
    },
  ];

  const performanceLevels = [
    { label: "Elite", color: "bg-purple-500", emoji: "🟣" },
    { label: "High", color: "bg-green-500", emoji: "🟢" },
    { label: "Medium", color: "bg-yellow-500", emoji: "🟡" },
    { label: "Low", color: "bg-red-500", emoji: "🔴" },
    { label: "Critical", color: "bg-red-700", emoji: "🚨" },
  ];

  const benchmarks = [
    { metric: "Efficiency Rate", elite: "≥ 95%", high: "85-94%", medium: "50-84%", low: "40-49%", critical: "< 40%" },
    { metric: "Defect Fix Ratio", elite: "≥ 95%", high: "85-94%", medium: "50-74%", low: "40-49%", critical: "< 40%" },
    { metric: "Mean Reaction Time", elite: "≤ 4h", high: "5-8h", medium: "9-16h", low: "17-24h", critical: "> 24h" },
    { metric: "Mean Time To Fix", elite: "≤ 8h", high: "9-24h", medium: "25-48h", low: "49-72h", critical: "> 72h" },
  ];

  return (
    <section id="quality-dashboard" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Quality & Defects Dashboard</h2>
              <p className="text-muted-foreground">Dashboard de monitoramento em Power BI</p>
            </div>
          </div>

          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Power BI Dashboard
            </span>
          </div>

          <p className="text-lg text-secondary-foreground leading-relaxed mb-12 max-w-3xl">
            Ferramenta de monitoramento de qualidade que fornece uma visão detalhada sobre a eficiência 
            do desenvolvimento, detecção e correção de defeitos em projetos de software. Permite acompanhar 
            métricas críticas para avaliar o desempenho da equipe e identificar áreas de melhoria.
          </p>

          {/* Filters info */}
          <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow mb-8">
            <h3 className="text-lg font-semibold font-display mb-4 text-primary">Filtros Dinâmicos</h3>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-lg bg-secondary/50">
                <span className="text-sm text-muted-foreground">Ano/Mês</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/50">
                <span className="text-sm text-muted-foreground">Projeto</span>
              </div>
              <div className="px-4 py-2 rounded-lg bg-secondary/50">
                <span className="text-sm text-muted-foreground">Comparação mês anterior</span>
              </div>
            </div>
          </div>

          {/* Metrics grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <div key={index} className="p-5 rounded-xl bg-gradient-card border-glow card-shadow hover:border-primary/40 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-display text-foreground text-sm">{metric.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional charts info */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl bg-gradient-card border-glow card-shadow">
              <h4 className="font-semibold font-display text-foreground mb-2">📊 Defect Detected by Severity</h4>
              <p className="text-sm text-muted-foreground">Distribuição de defeitos por severidade nos últimos 6 meses</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-card border-glow card-shadow">
              <h4 className="font-semibold font-display text-foreground mb-2">📈 Defect Distribution by Type</h4>
              <p className="text-sm text-muted-foreground">Proporção de tipos de defeitos (funcional, usabilidade, segurança, etc.)</p>
            </div>
          </div>

          {/* Benchmarks table */}
          <div className="p-6 rounded-2xl bg-gradient-card border-glow card-shadow mb-12">
            <h3 className="text-lg font-semibold font-display mb-6">Benchmarks de Mercado</h3>
            
            {/* Performance level legend */}
            <div className="flex flex-wrap gap-4 mb-6">
              {performanceLevels.map((level, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span>{level.emoji}</span>
                  <span className="text-sm text-muted-foreground">{level.label}</span>
                </div>
              ))}
            </div>

            {/* Benchmarks */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 text-muted-foreground font-medium">Indicador</th>
                    <th className="text-center py-3 px-2 text-muted-foreground font-medium">🟣 Elite</th>
                    <th className="text-center py-3 px-2 text-muted-foreground font-medium">🟢 High</th>
                    <th className="text-center py-3 px-2 text-muted-foreground font-medium">🟡 Medium</th>
                    <th className="text-center py-3 px-2 text-muted-foreground font-medium">🔴 Low</th>
                    <th className="text-center py-3 px-2 text-muted-foreground font-medium">🚨 Critical</th>
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.map((row, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-3 px-2 font-medium text-foreground">{row.metric}</td>
                      <td className="py-3 px-2 text-center text-secondary-foreground">{row.elite}</td>
                      <td className="py-3 px-2 text-center text-secondary-foreground">{row.high}</td>
                      <td className="py-3 px-2 text-center text-secondary-foreground">{row.medium}</td>
                      <td className="py-3 px-2 text-center text-secondary-foreground">{row.low}</td>
                      <td className="py-3 px-2 text-center text-secondary-foreground">{row.critical}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Screenshots section */}
          {/* <div>
            <h3 className="text-xl font-semibold font-display mb-6 text-center">Screenshots do Dashboard</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2].map((index) => (
                <div 
                  key={index}
                  className="aspect-video rounded-xl bg-gradient-card border-glow card-shadow flex items-center justify-center group hover:border-primary/40 transition-colors"
                >
                  <div className="text-center">
                    <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-2 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground">Screenshot {index}</span>
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default QualityDashboard;
