import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute('href')!.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const links = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#experiencia', label: 'Experiência' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#artigos', label: 'Artigos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'h-[56px] bg-[rgba(10,10,20,0.85)] backdrop-blur-xl border-b border-white/[0.06]'
          : 'h-[64px] bg-transparent'
      }`}
    >
      <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between px-6">
        <a href="#" className="text-white font-bold text-[18px] tracking-tight">
          <span className="glow-text">FB</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white text-[20px] leading-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(10,10,20,0.95)] backdrop-blur-xl border-t border-white/[0.06]"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-6 py-3.5 text-[14px] text-white/70 hover:text-white hover:bg-white/[0.03] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
