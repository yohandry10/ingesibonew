import { motion } from 'framer-motion';

const logos = [
  { name: 'AISC', image: '/logos/aisc.png' },
  { name: 'API', image: '/logos/api.png' },
  { name: 'ARES', image: '/logos/ares.png' },
  { name: 'ASME', image: '/logos/asme.jpeg' },
  { name: 'AWS', image: '/logos/aws.png' },
  { name: 'BOMBAS3', image: '/logos/bombas3.png' },
  { name: 'DIGICORP', image: '/logos/digicorp.jpg' },
  { name: 'FITFLOW', image: '/logos/fitflow.png' },
  { name: 'ISO', image: '/logos/iso.jpg' },
  { name: 'LALLAVE', image: '/logos/lallave.png' },
  { name: 'NFPA', image: '/logos/nfpa.avif' },
  { name: 'PENTAS', image: '/logos/pentas.png' },
  { name: 'SSPC', image: '/logos/sspc.png' },
  { name: 'SYSTEM', image: '/logos/system.png' },
  { name: 'WDM', image: '/logos/wdm.png' },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Título y línea roja */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
            ¿Por qué{' '}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              elegirnos?
            </span>
          </h2>
          <div className="mx-auto inline-block w-24 h-1 bg-red-600 rounded-full" />
        </motion.div>

        {/* Párrafo descriptivo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gray-600 max-w-3xl mx-auto">
            Una de las razones para elegirnos es porque nuestro staff de técnicos e
            ingenieros están calificados y tienen el conocimiento de las normas a seguir,
            sobre el suministro, instalación y mantenimiento de los diferentes sistemas
            que tenemos.
          </p>
        </motion.div>

        {/* Logos grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex justify-center"
            >
              {/* Contenedor circular blanco con borde fino */}
              <div className="w-32 h-32 flex items-center justify-center p-2 bg-white border border-gray-200 rounded-full hover:shadow-lg transition-shadow duration-300">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
