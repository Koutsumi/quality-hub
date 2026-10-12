import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Articles = () => {
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
    <section id="artigos" className="relative py-[100px] px-6">
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
            Publicações
          </motion.span>
          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] mb-14"
          >
            Artigos <span className="glow-text">Técnicos</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, index) => (
              <motion.a
                key={article.title}
                custom={index + 2}
                variants={fadeUp}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 glass rounded-2xl hover:border-violet-500/20 transition-all duration-500"
              >
                <p className="text-[12px] text-white/30 mb-3 font-mono">{article.date}</p>
                <h3 className="text-[16px] font-semibold text-white mb-4 group-hover:text-violet-300 transition-colors leading-[1.35]">
                  {article.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag-pill text-[11px] px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[13px] text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                  Ler artigo ↗
                </span>
              </motion.a>
            ))}
          </div>

          <motion.div custom={8} variants={fadeUp} className="mt-10 text-center">
            <p className="text-[13px] text-white/30">
              Publicado em{' '}
              <a
                href="https://4future.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                4Future
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;
