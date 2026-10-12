const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex flex-col items-center justify-center pt-[44px] px-6 text-center">
      <p className="text-[17px] font-semibold text-[#0066cc] mb-3">
        QA Engineer
      </p>
      <h1 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] leading-[1.07] tracking-[-0.28px] max-w-3xl">
        Fernanda Baccarini
      </h1>
      <p className="text-[20px] md:text-[24px] font-light text-[#7a7a7a] mt-4 max-w-2xl leading-[1.5]">
        Qualidade de software, automação de testes e liderança técnica em equipes ágeis.
      </p>
      <a
        href="#sobre"
        className="mt-8 inline-flex items-center px-7 py-3 bg-[#0066cc] text-white text-[17px] font-semibold rounded-full hover:bg-[#0055aa] transition-colors"
      >
        Conhecer mais
      </a>
      <div className="mt-8 inline-flex items-center gap-2 text-[14px] text-[#7a7a7a]">
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        Disponível para novos projetos
      </div>
    </section>
  );
};

export default Hero;
