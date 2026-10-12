const Footer = () => {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#e0e0e0] py-6 px-6">
      <div className="max-w-[980px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[12px] text-[#7a7a7a]">
          © {new Date().getFullYear()} Fernanda Baccarini. Todos os direitos reservados.
        </p>
        <div className="flex gap-5">
          <a
            href="https://www.linkedin.com/in/fernanda-matuda-baccarini-455b39171"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#7a7a7a] hover:text-[#0066cc] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Koutsumi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] text-[#7a7a7a] hover:text-[#0066cc] transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:febaccarini@gmail.com"
            className="text-[12px] text-[#7a7a7a] hover:text-[#0066cc] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
