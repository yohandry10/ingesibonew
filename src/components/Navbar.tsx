import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom'; // Solo si necesitas React Router para alguno de los enlaces

/**
 * Tip:
 * - navItems: si la propiedad "isRoute" es true => <Link to="...">
 *             si es false => <a href="...">
 * - Ajusta "href" según sea #ancla interno o /ruta con React Router
 */

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Ejemplo de items. Ajusta isRoute para "/all-projects"
  const navItems = [
    { name: 'Inicio', href: '#inicio', isRoute: false },
    { name: 'Servicios', href: '#servicios', isRoute: false },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros', isRoute: false },
    // Por ejemplo, si quieres "/all-projects" con React Router:
    { name: 'Nuestros Proyectos', href: '/all-projects', isRoute: true },
    { name: 'Contacto', href: '#contacto', isRoute: false },
  ];

  // Detecta scroll para ocultar logo o cambiar estilo
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Evita hacer scroll en la página cuando el menú móvil está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // Renderiza cada item: <Link> si isRoute === true, <a> si false
  const renderNavItem = (item: { name: string; href: string; isRoute: boolean }, index: number) => {
    // Con framer-motion para animar un poquito cada link
    const linkVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    };

    if (item.isRoute) {
      return (
        <motion.div
          key={index}
          variants={linkVariants}
          transition={{ delay: 0.05 * index }}
          className="my-2 text-center"
        >
          <Link
            to={item.href}
            className="text-2xl text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        </motion.div>
      );
    } else {
      // Ancla normal (#servicios, etc.)
      return (
        <motion.div
          key={index}
          variants={linkVariants}
          transition={{ delay: 0.05 * index }}
          className="my-2 text-center"
        >
          <a
            href={item.href}
            className="text-2xl text-white hover:text-red-500 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </a>
        </motion.div>
      );
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* LOGO */}
        <motion.a
          href="#inicio"
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Ocultamos o mostramos según scroll */}
          {!isScrolled && (
            <img
              src="/logo.jpeg"
              alt="INGESIBO Logo"
              className="w-28 h-28 object-cover rounded-full"
            />
          )}
        </motion.a>

        {/* Nav de escritorio */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, idx) => {
            if (item.isRoute) {
              // React Router Link
              return (
                <Link
                  key={idx}
                  to={item.href}
                  className="text-lg text-white hover:text-red-500 transition-colors"
                >
                  {item.name}
                </Link>
              );
            } else {
              // <a href="#...">
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="text-lg text-white hover:text-red-500 transition-colors"
                >
                  {item.name}
                </a>
              );
            }
          })}
        </div>

        {/* Botón de menú móvil */}
        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </div>

      {/* Overlay / Menú Móvil */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-center"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
            >
              {/*
                Lista de items con animación
                Estilo a tu gusto
              */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                    },
                  },
                }}
                className="flex flex-col space-y-4"
              >
                {navItems.map((item, index) => renderNavItem(item, index))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

