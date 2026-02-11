import { FileText, ExternalLink, Calendar } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Autenticação via API com Playwright",
      url: "https://4future.com.br/2024/09/21/autenticacao-via-api-com-playwright/",
      date: "Set 2024",
      tags: ["Playwright", "API", "Auth"],
    },
    {
      title: "Autenticação via API com Cypress",
      url: "https://4future.com.br/2024/10/23/autenticacao-via-api-com-cypress/",
      date: "Out 2024",
      tags: ["Cypress", "API", "Auth"],
    },
    {
      title: "O Gerador de Códigos do Playwright",
      url: "https://4future.com.br/2024/08/21/o-gerador-de-codigos-do-playwright/",
      date: "Ago 2024",
      tags: ["Playwright", "Codegen"],
    },
    {
      title: "Os 7 Princípios do Teste de Software",
      url: "https://4future.com.br/2024/09/22/os-7-principios-do-teste-de-software/",
      date: "Set 2024",
      tags: ["Teoria", "Fundamentos"],
    },
    {
      title: "Postman: Gerando Relatórios de Teste de API",
      url: "https://4future.com.br/2023/06/20/postman-gerando-relatorios-de-teste-de-api/",
      date: "Jun 2023",
      tags: ["Postman", "Relatórios"],
    },
    {
      title: "Variáveis Dinâmicas no Postman",
      url: "https://4future.com.br/2023/06/20/variaveis-dinamicas-no-postman/",
      date: "Jun 2023",
      tags: ["Postman", "Variáveis"],
    },
  ];

  return (
    <section id="articles" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">Artigos</h2>
              <p className="text-muted-foreground">Compartilhando conhecimento</p>
            </div>
          </div>

          {/* Articles grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-gradient-card border-glow card-shadow hover:border-primary/40 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" />
                  {article.date}
                </div>

                <h3 className="text-lg font-semibold font-display text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Ler artigo
                  <ExternalLink className="w-3 h-3" />
                </div>
              </a>
            ))}
          </div>

          {/* Publication info */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Publicado em{" "}
              <a
                href="https://4future.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                4Future
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
