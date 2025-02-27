// src/AllProjects.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectGallery from './components/ProjectGallery';

function AllProjects() {
  const proyectos = [
    {
      id: 1,
      nombre: 'Proyecto Stay',
      descripcion:
        'Descubre nuestros proyectos más destacados y cómo estamos contribuyendo al desarrollo del Perú.',
      fotos: [
        '/Proyecto-Stay/bomba1.jpeg',
        '/Proyecto-Stay/bomba2.jpeg',
        '/Proyecto-Stay/bomba3.jpeg',
        '/Proyecto-Stay/bomba4.jpeg',
        '/Proyecto-Stay/bomba5.jpeg',
        '/Proyecto-Stay/bomba6.jpeg',
        '/Proyecto-Stay/bomba7.jpeg',
        '/Proyecto-Stay/8.jpeg',
        '/Proyecto-Stay/9.jpeg',
      ],
    },
    {
      id: 4,
      nombre: 'Proyecto en Ejecución Porto Fino',
      descripcion: 'Descripción del Proyecto en Ejecución Porto Fino',
      fotos: [
        '/Porto-Fino/porto1.jpeg',
        '/Porto-Fino/porto2.jpeg',
        '/Porto-Fino/porto3.jpeg',
        '/Porto-Fino/porto4.jpeg',
        '/Porto-Fino/porto5.jpeg',
        '/Porto-Fino/porto6.jpeg',
        '/Porto-Fino/porto7.jpeg',
        '/Porto-Fino/porto8.jpeg',
        '/Porto-Fino/porto9.jpeg',
        '/Porto-Fino/porto10.jpeg',
      ],
    },
    {
      id: 2,
      nombre: 'Proyecto Residencia Las Hermanitas',
      descripcion: 'Descripción del Proyecto Residencia Las Hermanitas',
      fotos: [
        '/Hermanitas/herrma1.jpeg',
        '/Hermanitas/herma2.jpeg',
        '/Hermanitas/herma3.jpeg',
      ],
    },
    {
      id: 3,
      nombre: 'Proyecto Verdi',
      descripcion: 'Descripción del Proyecto Verdi',
      fotos: ['/Verdi/verdi1.jpeg', '/Verdi/verdi2.jpeg'],
    },
  ];

  const [showGallery, setShowGallery] = useState<boolean[]>(
    Array(proyectos.length).fill(false)
  );

  const toggleGallery = (index: number) => {
    setShowGallery((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Encabezado centrado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Todos los <span className="text-red-600">Proyectos</span>
          </h2>
          <div className="mx-auto w-24 h-1 bg-red-600 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Aquí va la vista detallada de todos tus proyectos, con más
            información.
          </p>
        </motion.div>

        {/* Lista de proyectos */}
        <div className="space-y-12">
          {proyectos.map((proy, index) => (
            <motion.div
              key={proy.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.01 }}
              className="p-4"
            >
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                {proy.nombre}
              </h3>
              <div className="mx-auto w-16 h-1 bg-red-600 mb-4" />
              <p className="text-center text-gray-700 mb-4">
                {proy.descripcion}
              </p>

              {/* Botón para mostrar/ocultar la galería */}
              <div className="text-center mb-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  onClick={() => toggleGallery(index)}
                >
                  {showGallery[index] ? 'Ocultar Galería' : 'Ver Galería'}
                </motion.button>
              </div>

              <AnimatePresence>
                {showGallery[index] && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="max-w-md mx-auto">
                      <ProjectGallery photos={proy.fotos} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Botón para volver al inicio */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            <Link to="/">Volver al Inicio</Link>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

export default AllProjects;
