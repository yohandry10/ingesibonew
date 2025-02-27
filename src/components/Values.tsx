import { motion } from 'framer-motion';
import { Clock, Award, Users } from 'lucide-react';

const values = [
  {
    icon: Clock,
    title: 'PUNTUALIDAD',
    description: 'Entregamos los trabajos en las fechas programadas por el cliente.'
  },
  {
    icon: Award,
    title: 'CALIDAD',
    description: 'Todos nuestros equipos y materiales están preparados de la mejor calidad para tu proyecto.'
  },
  {
    icon: Users,
    title: 'TRABAJO EN EQUIPO',
    description: 'Contamos con múltiples profesionales para ejercer cualquier actividad.'
  }
];

// Fondo animado con formas en movimiento
const FloatingShapes = () => (
  <motion.svg
    className="absolute -top-10 -left-10 w-64 h-64 opacity-20"
    initial={{ rotate: 0 }}
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="80" stroke="#F87171" strokeWidth="10" />
  </motion.svg>
);

const Values = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-red-50 to-white overflow-hidden">
      <FloatingShapes />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
            Nuestros <span className="text-red-600">Valores</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-red-600 rounded-full mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="relative p-8 rounded-2xl bg-white shadow-xl cursor-pointer overflow-hidden"
              >
                {/* Fondo dinámico al pasar el mouse */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-red-100 opacity-0"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="flex flex-col items-center relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <Icon className="w-8 h-8 text-red-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{value.title}</h3>
                  <p className="text-gray-600 text-center">{value.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
