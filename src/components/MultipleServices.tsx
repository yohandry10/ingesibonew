import { motion } from 'framer-motion';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// SVG con efecto de partículas flotantes (se conserva tal cual)
const FloatingParticles = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="absolute top-0 left-0 w-full h-64 z-0 opacity-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
  >
    {/* Partículas flotantes con animación individual */}
    <motion.circle
      cx="100"
      cy="50"
      r="8"
      fill="#f87171"
      initial={{ y: -10 }}
      animate={{ y: 10 }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
    <motion.circle
      cx="300"
      cy="150"
      r="12"
      fill="#f87171"
      initial={{ y: 20 }}
      animate={{ y: -20 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay: 0.5,
      }}
    />
    <motion.path
      fill="#f87171"
      fillOpacity="0.1"
      d="M0,256L80,240C160,224,320,192,480,176C640,160,800,160,960,138.7C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
    />
    {/* Líneas dinámicas con efecto de ola suave */}
    <motion.path
      fill="#f87171"
      fillOpacity="0.05"
      d="M0,128L60,138.7C120,149,240,171,360,160C480,149,600,107,720,106.7C840,107,960,149,1080,149.3C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
      initial={{ scaleY: 0.8 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
    />
  </motion.svg>
);

// Lista de servicios
const services = [
  {
    title: 'Servicio Principal',
    description:
      'Somos una empresa que brinda múltiples servicios, con personal altamente calificado.',
    image: '/team3.jpg',
  },
  {
    title: 'Puertas Cortafuego',
    description:
      'Suministro e instalación de puertas cortafuego 90/180 minutos, con certificación UL en marcos "U" reversible y "Z" de 01 o más hojas.',
    image: '/puerta-cortafuegos-blanca.jpg',
  },
  {
    title: 'Enchape de PCF',
    description:
      'Brindamos el servicio de enchape a tus puertas cortafuego, enchape en madera veta lineal o corona, modelo y color según ruteado de cliente. (Se enchapan las caras).',
    image: '/puerta-cortafuegos.jpg',
  },
];

// Tarjeta de servicio
const ServiceCard = ({ title, description, image, index }) => {
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

  // Se mantiene el tamaño original:
  // - Servicio principal (index 0): h-80
  // - Puertas (index 1 y 2): h-48 con object-contain
  const imageContainerClasses =
    index === 0
      ? 'h-80 overflow-hidden'
      : 'h-48 flex items-center justify-center overflow-hidden';
  const imageClasses =
    index === 0
      ? 'w-full h-full object-cover cursor-pointer'
      : 'max-w-full max-h-full object-contain cursor-pointer';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      // Se eliminan los efectos de hover (sin scale ni sombra)
      className="relative group overflow-hidden"
    >
      <div className={imageContainerClasses}>
        <img
          src={image}
          alt={title}
          className={imageClasses}
          onClick={handleImageClick}
        />
        <div className="absolute inset-0 transition-all duration-500" />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900 transition-colors duration-500">
          {title}
        </h3>
        <p className="text-gray-600 transition-colors duration-500 mt-2">
          {description}
        </p>
      </div>

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

// Contenedor principal
const MultipleServices = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white relative overflow-hidden">
      <FloatingParticles />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Servicios <span className="text-red-600">Destacados</span>
          </h2>
          <div className="inline-block w-24 h-1 bg-red-600 rounded-full" />
        </motion.div>

        {/* Grid con 3 columnas en escritorio; se mantiene el tamaño original */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultipleServices;
