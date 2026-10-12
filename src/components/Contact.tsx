import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Contact = () => {
  return (
    <section id="contato" className="relative py-[100px] px-6">
      <div className="gradient-divider mb-20" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-[640px] mx-auto text-center"
      >
        <motion.span
          custom={0}
          variants={fadeUp}
          className="text-[13px] font-semibold text-violet-400 uppercase tracking-[3px] mb-4 block"
        >
          Contato
        </motion.span>
        <motion.h2
          custom={1}
          variants={fadeUp}
          className="text-[36px] md:text-[44px] font-bold text-white leading-[1.1] mb-4"
        >
          Vamos <span className="glow-text">conversar?</span>
        </motion.h2>
        <motion.p custom={2} variants={fadeUp} className="text-[16px] text-white/45 mb-10">
          Sempre aberta a novas oportunidades e conexões profissionais.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} className="space-y-4 mb-10">
          <a
            href="mailto:febaccarini@gmail.com"
            className="block text-[17px] text-white/80 hover:text-violet-300 transition-colors"
          >
            febaccarini@gmail.com
          </a>
          <a
            href="tel:+5511997895078"
            className="block text-[17px] text-white/80 hover:text-violet-300 transition-colors"
          >
            (11) 99789-5078
          </a>
          <p className="text-[17px] text-white/40">
            São Bernardo do Campo, SP
          </p>
        </motion.div>

        <motion.div custom={4} variants={fadeUp} className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/fernanda-matuda-baccarini-455b39171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[14px] font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Koutsumi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-[14px] font-semibold transition-all duration-300"
          >
            GitHub ↗
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
