// src/components/AboutUs.tsx
import { motion } from 'framer-motion';

const FloatingCircles = () => (
  <motion.svg
    className="absolute top-0 right-0 w-80 h-80 opacity-25"
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  >
    <motion.circle
      cx="50"
      cy="50"
      r="30"
      fill="#F87171"
      initial={{ scale: 0 }}
      animate={{ scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.circle
      cx="150"
      cy="150"
      r="20"
      fill="#DC2626"
      initial={{ scale: 0 }}
      animate={{ scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 0.5,
      }}
    />
    <motion.circle
      cx="100"
      cy="100"
      r="25"
      fill="#F87171"
      initial={{ scale: 0 }}
      animate={{ scale: [0.8, 1.2, 0.8] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: 1,
      }}
    />
  </motion.svg>
);

const AboutUs = () => {
  return (
    // id="sobre-nosotros"
    <section
      id="sobre-nosotros"
      className="relative py-20 bg-gradient-to-b from-red-50 to-white overflow-hidden"
    >
      <FloatingCircles />
      <div className="container mx-auto px-4 relative z-10 max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto e info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
                Sobre{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  Nosotros
                </span>
              </h2>
              <div className="mx-auto inline-block w-24 h-1 bg-red-600 rounded-full" />
            </div>

            <p className="text-gray-600 mb-6">
              Como empresa con amplia experiencia en Proyectos de Inversión y pre
              inversión a nivel nacional, en el sector público y privado en los
              rubros de Edificaciones, Saneamiento e Industria, nos comprometemos
              a brindar servicios de excelente calidad acorde a las necesidades de
              nuestros clientes.
            </p>
            <p className="text-gray-600 mb-10">
              Nuestro equipo está formado por profesionales altamente calificados,
              dedicados a ofrecer soluciones innovadoras y eficientes en cada
              proyecto que emprendemos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  number: '01',
                  title: 'NUESTRO OBJETIVO',
                  description:
                    'Contamos con personal 100% calificado para brindar la mejor solución a nuestros distinguidos clientes.',
                },
                {
                  number: '02',
                  title: 'MISIÓN',
                  description:
                    'Nuestro compromiso es apoyar a conseguir y mejorar la calidad de vida de los ciudadanos en todo el Perú.',
                },
                {
                  number: '03',
                  title: 'VISIÓN',
                  description:
                    'Construir aplicando las mejores técnicas, sumadas al talento y experiencia de nuestro staff técnico profesional.',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative p-6 bg-white overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="text-red-600 text-2xl font-bold mb-2">
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Imagen con efecto de zoom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="relative cursor-pointer"
          >
            <img
              src="/female.jpg"
              alt="Equipo de trabajo"
              className="rounded-lg shadow-2xl"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
