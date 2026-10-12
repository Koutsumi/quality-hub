import { useEffect, useRef } from 'react';

const Articles = () => {
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

  const articles = [
    {
      title: 'Autenticação via API com Playwright',
      url: 'https://4future.com.br/2024/09/21/autenticacao-via-api-com-playwright/',
      date: 'Set 2024',
      tags: ['Playwright', 'API', 'Auth'],
    },
    {
      title: 'Autenticação via API com Cypress',
      url: 'https://4future.com.br/2024/10/23/autenticacao-via-api-com-cypress/',
      date: 'Out 2024',
      tags: ['Cypress', 'API', 'Auth'],
    },
    {
      title: 'O Gerador de Códigos do Playwright',
      url: 'https://4future.com.br/2024/08/21/o-gerador-de-codigos-do-playwright/',
      date: 'Ago 2024',
      tags: ['Playwright', 'Codegen'],
    },
    {
      title: 'Os 7 Princípios do Teste de Software',
      url: 'https://4future.com.br/2024/09/22/os-7-principios-do-teste-de-software/',
      date: 'Set 2024',
      tags: ['Teoria', 'Fundamentos'],
    },
    {
      title: 'Postman: Gerando Relatórios de Teste de API',
      url: 'https://4future.com.br/2023/06/20/postman-gerando-relatorios-de-teste-de-api/',
      date: 'Jun 2023',
      tags: ['Postman', 'Relatórios'],
    },
    {
      title: 'Variáveis Dinâmicas no Postman',
      url: 'https://4future.com.br/2023/06/20/variaveis-dinamicas-no-postman/',
      date: 'Jun 2023',
      tags: ['Postman', 'Variáveis'],
    },
  ];

  return (
    <section id="artigos" ref={ref} className="bg-white py-[80px] px-6">
      <div className="max-w-[980px] mx-auto">
        <h2 className="fade-section text-[40px] font-semibold text-[#1d1d1f] leading-[1.1] mb-12">
          Artigos
        </h2>

        <div className="fade-section grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((article) => (
            <a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-[18px] bg-[#f5f5f7] hover:bg-[#ebebed] transition-colors"
            >
              <p className="text-[12px] text-[#7a7a7a] mb-3">{article.date}</p>
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 group-hover:text-[#0066cc] transition-colors leading-[1.29]">
                {article.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white text-[12px] text-[#7a7a7a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-[14px] text-[#0066cc] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Ler artigo ↗
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[14px] text-[#7a7a7a]">
            Publicado em{' '}
            <a
              href="https://4future.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0066cc] hover:underline"
            >
              4Future
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Articles;
