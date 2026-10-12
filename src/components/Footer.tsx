const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-6">
      <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-white/30">
          © {new Date().getFullYear()} Fernanda Baccarini. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/fernanda-matuda-baccarini-455b39171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/30 hover:text-violet-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Koutsumi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-white/30 hover:text-violet-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:febaccarini@gmail.com"
            className="text-[12px] text-white/30 hover:text-violet-400 transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
