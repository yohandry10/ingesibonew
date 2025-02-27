import { motion } from 'framer-motion';

const clients = [
  { name: 'Odima', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1VOle-YRweixLwvczcYPVvXcPX84Hp9Kbw&s' },
  { name: 'Inverplus', logo: 'https://media.licdn.com/dms/image/v2/C561BAQFxGMEDHnSKHg/company-background_10000/company-background_10000/0/1583896061417?e=2147483647&v=beta&t=7AmpyEMTlu6yI7TvBmENY4vmlFxgRD8lvZoOie4Eeng' },
  { name: 'Bravor', logo: '/logos/bravor.jpg' },
  { name: 'Betania', logo: 'https://safety-construction.com/wp-content/uploads/2022/10/BETANIA.png' },
  { name: 'Inurban', logo: '/logos/inurban.jpeg' },
  { name: '3F', logo: 'https://3fconstructora.com.pe/wp-content/uploads/2022/09/3f.jpg' },
  { name: 'Synohydro', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ39IMMys_2sinloHaVNNbdNrLiaN6kVE4OEg&s' },
  { name: 'G & F', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEG8hs5IKn3qGcf17hbYFB9HJoOkj4A0gq1g&s' },
  { name: 'Terrazul', logo: '/logos/terrazul.jpeg' },
];

const Clients: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Nuestros <span className="text-red-600">Clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-[120px] h-auto transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
