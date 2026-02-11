import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section header */}
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Estou sempre aberta a novas oportunidades e conexões profissionais
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href="mailto:febaccarini@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-card border-glow card-shadow hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="text-foreground font-medium">febaccarini@gmail.com</p>
              </div>
            </a>

            <a
              href="tel:+5511997895078"
              className="flex items-center gap-4 p-6 rounded-2xl bg-gradient-card border-glow card-shadow hover:border-primary/40 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Telefone</p>
                <p className="text-foreground font-medium">(11) 99789-5078</p>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="w-4 h-4" />
            <span>Assunção - São Bernardo do Campo, SP</span>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Fernanda Baccarini. Feito com 💚 e muito código.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
