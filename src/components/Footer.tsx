// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const socialMedia = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100093712663192',
    icon: (
      <Facebook className="relative text-gray-300 group-hover:text-red-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ingesiboperusac/',
    icon: (
      <Instagram className="relative text-gray-300 group-hover:text-red-500 transition-colors duration-500 ease-out w-8 h-8" />
    ),
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/51955773463',
    icon: (
      <img
        src="/ws1.png"
        alt="WhatsApp"
        // Aumentamos a w-10 h-10 y añadimos object-contain
        className="
          relative
          w-10 h-10
          filter invert
          object-contain
          group-hover:scale-110
          transition-transform
          duration-300
        "
      />
    ),
  },
];

const Footer = () => {
  return (
    <footer id="contacto" className="bg-black text-white">
      {/* Parte superior con fondo degradado y onda roja */}
      <div className="relative overflow-hidden" style={{ height: '400px' }}>
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #000 0%, #000 80%, #8B0000 80%, #8B0000 100%)',
            backgroundSize: '200% 200%',
          }}
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <path
            d="M0,80 C360,0 1080,160 1440,80 L1440,120 L0,120 Z"
            fill="#8B0000"
          />
        </motion.svg>

        {/* Contenido superior */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Columna 1: Logo + descripción */}
            <div className="flex flex-col items-center md:items-start">
              <motion.img
                src="/logo.jpeg"
                alt="Logo INGESIBO"
                className="w-40 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              />
              <motion.p
                className="text-gray-300 text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Comprometidos con la excelencia y la seguridad en cada proyecto.
              </motion.p>
            </div>

            {/* Columna 2: Iconos de redes sociales */}
            <div className="flex space-x-6">
              {socialMedia.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="relative group overflow-hidden"
                >
                  <div className="flex items-center justify-center w-16 h-16 border-2 border-red-700 rounded-full transition duration-500 ease-out relative overflow-hidden group-hover:bg-red-700">
                    {/* Efecto de llenado rojo->negro */}
                    <span className="absolute inset-0 bg-gradient-to-t from-red-700 to-black rounded-full transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-out" />
                    {item.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <hr className="border-t-2 border-red-700" />

      {/* Parte inferior con enlaces y contacto */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INGESIBO</h3>
            <p className="text-gray-400">
              Comprometidos con la excelencia y la seguridad en cada proyecto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#sobre-nosotros"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#proyectos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">
                  Oficina: Mza. F Lote. 1 Agv. Manuel Aquino Callao
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">+51995573469 &amp; 961468965</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">aa.torres@ingesibo-sac.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2025 INGESIBO. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
