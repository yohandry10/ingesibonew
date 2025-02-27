import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1',
    image: 'constructora1.webp'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2',
    image: '/equipo2.jpg'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3',
    image: '/equipo.jpg'
  }
];

const Projects = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            Nuestros{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              Proyectos
            </span>
          </h2>
          <div className="mx-auto inline-block w-24 h-1 bg-red-600 rounded-full" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Descubre nuestros proyectos más destacados y cómo estamos contribuyendo al desarrollo del Perú.
          </p>
        </motion.div>

        {/* Tarjetas de proyecto con contenedor de altura fija */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg shadow-md"
            >
              {/* Imagen con contenedor de altura fija */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              {/* Overlay con información */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-200">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Botón de ver todos */}
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Ver Todos los Proyectos
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
