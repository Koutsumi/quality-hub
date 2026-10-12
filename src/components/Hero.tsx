import { motion } from 'framer-motion';
import { Suspense, lazy, useState, useEffect } from 'react';

// Lazy load ShaderGradient to avoid blocking render
const ShaderGradientCanvas = lazy(() =>
  import('@shadergradient/react').then(m => ({ default: m.ShaderGradientCanvas }))
);
const ShaderGradient = lazy(() =>
  import('@shadergradient/react').then(m => ({ default: m.ShaderGradient }))
);

const CSSFallbackGradient = () => (
  <div className="absolute inset-0">
    <div
      className="absolute inset-0 animate-gradient-shift"
      style={{
        background: `
          radial-gradient(ellipse 80% 50% at 20% 40%, rgba(76, 29, 149, 0.5) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 70% 30%, rgba(14, 116, 144, 0.4) 0%, transparent 70%),
          radial-gradient(ellipse 50% 70% at 50% 80%, rgba(30, 27, 75, 0.6) 0%, transparent 70%),
          radial-gradient(ellipse 40% 40% at 80% 70%, rgba(139, 92, 246, 0.3) 0%, transparent 70%),
          hsl(220, 20%, 4%)
        `,
        backgroundSize: '200% 200%',
        animation: 'gradientMove 12s ease-in-out infinite alternate',
      }}
    />
    <style>{`
      @keyframes gradientMove {
        0% { background-position: 0% 0%; }
        25% { background-position: 50% 30%; }
        50% { background-position: 100% 50%; }
        75% { background-position: 50% 70%; }
        100% { background-position: 0% 100%; }
      }
    `}</style>
  </div>
);

const ShaderBg = () => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Detect WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) setHasError(true);
    } catch {
      setHasError(true);
    }
  }, []);

  if (hasError) return <CSSFallbackGradient />;

  return (
    <Suspense fallback={<CSSFallbackGradient />}>
      <ErrorBoundary fallback={<CSSFallbackGradient />}>
        <ShaderGradientCanvas
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          pointerEvents="none"
        >
          <ShaderGradient
            type="waterPlane"
            animate="on"
            uTime={0.2}
            uSpeed={0.3}
            uStrength={2.5}
            uDensity={1.5}
            uFrequency={5.5}
            uAmplitude={3}
            positionX={-0.5}
            positionY={0.1}
            positionZ={0}
            rotationX={0}
            rotationY={10}
            rotationZ={50}
            color1="#4c1d95"
            color2="#0e7490"
            color3="#1e1b4b"
            reflection={0.1}
            wireframe={false}
            shader="defaults"
            cAzimuthAngle={180}
            cPolarAngle={115}
            cDistance={3.6}
            cameraZoom={1}
            lightType="3d"
            brightness={1.2}
            envPreset="city"
            grain="on"
            grainBlending={0.5}
          />
        </ShaderGradientCanvas>
      </ErrorBoundary>
    </Suspense>
  );
};

// Simple error boundary
import { Component, type ReactNode } from 'react';

class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  state = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  render() { return this.state.hasError ? this.props.fallback : this.props.children; }
}

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <ShaderBg />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,20,0.3)] via-[rgba(10,10,20,0.1)] to-[rgba(10,10,20,0.95)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-violet-200 font-medium">Disponível para novos projetos</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[52px] md:text-[80px] lg:text-[96px] font-black leading-[0.95] tracking-[-2px] mb-6"
        >
          <span className="text-white">Fernanda</span>
          <br />
          <span className="glow-text">Baccarini</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-[18px] md:text-[22px] text-white/60 font-light mb-4 leading-relaxed"
        >
          Lead QA &amp; Analista de Qualidade Sênior
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-[15px] md:text-[17px] text-white/40 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Estruturação de áreas de QA do zero, automação inteligente com IA,
          testes de performance e pipelines CI/CD — entregando software com
          alta cobertura e previsibilidade.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projetos"
            className="px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white text-[15px] font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-7 py-3.5 border border-white/20 hover:border-white/40 text-white/80 hover:text-white text-[15px] font-semibold rounded-full transition-all duration-300 backdrop-blur-sm"
          >
            Contato
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
