// src/components/Services.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

// SVG flotante con color rojo claro
const FloatingSVG = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute top-0 left-0 w-full h-64 z-0 opacity-30"
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'easeInOut',
    }}
  >
    <path
      fill="#f87171"
      fillOpacity="0.5"
      d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,170.7C672,160,768,128,864,128C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </motion.svg>
);

const services = [
  {
    title: 'SISTEMA DE AGUA CONTRA INCENDIO',
    description:
      'Instalación, montaje y mantenimiento del cto. máquinas, red de rociadores, montante y sistema de gabinetes de agua contra incendio.',
    image: '/contra-incendio.jpg',
    icon: '💧',
  },
  {
    title: 'SISTEMA DE DETECCIÓN Y ALARMA CONTRA INCENDIO',
    description:
      'Instalación y mantenimiento de equipos de detección y alarmas contra incendio, con sistemas convencionales e inteligentes direccionables.',
    image: '/alarma.jpg',
    icon: '🔥',
  },
  {
    title: 'SISTEMAS GENERALES DE BOMBEO',
    description:
      'Instalación, montaje y mantenimiento del cto. máquinas, sistema de presión constante, tanque elevado, bombas sumergibles y tableros controladores.',
    image: '/banner-bombeo.jpg',
    icon: '🚰',
  },
  {
    title: 'SISTEMA DE VENTILACIÓN MECÁNICA',
    description:
      'Instalación, montaje, mantenimiento y fabricación de ductería de ventilación mecánica, equipos centrífugos, axiales, helicocentrífugos, eólicos, etc.',
    image: '/ventilacion-banner.jpg',
    icon: '🌬️',
  },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  image: string;
  icon: string;
  index: number;
}> = ({ title, description, image, icon, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [isImageOpen, setIsImageOpen] = useState(false);

  const handleImageClick = () => {
    setIsImageOpen(true);
  };

  const handleCloseImage = () => {
    setIsImageOpen(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="overflow-hidden transform hover:scale-105 transition-transform duration-500 relative group"
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover cursor-pointer"
          onClick={handleImageClick}
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500"></div>
        <motion.div
          className="absolute top-4 right-4 text-4xl"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.2 + 0.4,
            type: 'spring',
            stiffness: 260,
            damping: 20,
          }}
        >
          {icon}
        </motion.div>
      </div>
      <div className="p-4 bg-white">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-500 mt-2">
          {description}
        </p>
      </div>

      {/* Modal de imagen en pantalla completa */}
      {isImageOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={handleCloseImage}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt={title}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={handleCloseImage}
              className="absolute top-4 right-4 text-white text-2xl bg-red-600 rounded-full p-2 hover:bg-red-700 transition-colors duration-300"
              aria-label="Cerrar"
            >
              X
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

/** Sección con id="servicios" para el ancla #servicios */
const Services: React.FC = () => {
  return (
    <section
      id="servicios"
      className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden"
    >
      <FloatingSVG />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900">
            Nuestros Servicios
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Como empresa con amplia experiencia en Proyectos de Inversión y pre
            inversión a nivel nacional, en el sector público y privado en los
            rubros de Edificaciones, Saneamiento e Industria ofrece lo siguiente:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
