import React from 'react';
import { motion } from 'framer-motion';

interface FloatingShapeProps {
  delay: number;
  duration: number;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ delay, duration, className, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.4, 0.8, 0.4],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'linear'
    }}
    className={`absolute rounded-full mix-blend-overlay filter blur-xl ${className || ''}`}
    style={style}
  />
);

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Fondo con parallax (imagen local) */}
      <motion.div
        className="absolute inset-0 bg-scroll"
        style={{
          backgroundImage: "url('/banner.1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        initial={{ scale: 1.1 }}
        animate={{
          scale: [1.1, 1],
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
      />

      {/* Formas animadas */}
      <FloatingShape 
        delay={0}
        duration={15}
        className="w-96 h-96 bg-purple-500/30"
        style={{ top: '-10%', left: '-10%' }}
      />
      <FloatingShape 
        delay={5}
        duration={20}
        className="w-[40rem] h-[40rem] bg-blue-500/20"
        style={{ bottom: '-20%', right: '-20%' }}
      />
      <FloatingShape 
        delay={2}
        duration={18}
        className="w-72 h-72 bg-red-500/30"
        style={{ top: '40%', left: '60%' }}
      />

      {/* Overlay negro (más claro para permitir ver el fondo) */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Líneas animadas */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-full h-full"
          style={{
            background: 'linear-gradient(transparent 0%, transparent 45%, rgba(255,255,255,0.1) 50%, transparent 55%, transparent 100%)',
            backgroundSize: '100% 500%'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '0% 100%']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      {/* Contenido del Hero */}
      <div className="relative z-20 h-full flex items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tu proyecto,
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="block text-red-600"
            >
              nuestro proyecto
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl opacity-90 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Como empresa con amplia experiencia en Proyectos de Inversión y pre inversión a nivel nacional, en el sector público y privado en los rubros de Edificaciones, Saneamiento e Industria.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(239, 68, 68, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:from-red-700 hover:to-red-800 shadow-lg"
          >
            Nuestros Proyectos
          </motion.button>
        </motion.div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;