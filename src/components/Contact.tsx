import { useEffect, useRef } from 'react';

const Contact = () => {
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

  return (
    <section id="contato" ref={ref} className="bg-[#f5f5f7] py-[80px] px-6">
      <div className="fade-section max-w-[640px] mx-auto text-center">
        <h2 className="text-[40px] font-semibold text-[#1d1d1f] leading-[1.1] mb-4">
          Contato
        </h2>
        <p className="text-[17px] text-[#7a7a7a] mb-10">
          Estou sempre aberta a novas oportunidades e conexões profissionais.
        </p>

        <div className="space-y-4 mb-10">
          <a
            href="mailto:febaccarini@gmail.com"
            className="block text-[17px] text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
          >
            febaccarini@gmail.com
          </a>
          <a
            href="tel:+5511997895078"
            className="block text-[17px] text-[#1d1d1f] hover:text-[#0066cc] transition-colors"
          >
            (11) 99789-5078
          </a>
          <p className="text-[17px] text-[#7a7a7a]">
            São Bernardo do Campo, SP
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/fernanda-matuda-baccarini-455b39171"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066cc] text-white text-[14px] font-semibold hover:bg-[#0055aa] transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Koutsumi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0066cc] text-white text-[14px] font-semibold hover:bg-[#0055aa] transition-colors"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
