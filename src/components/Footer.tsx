import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">INGESIBO</h3>
            <p className="text-gray-400">
              Comprometidos con la excelencia y la seguridad en cada proyecto.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Servicios</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">Oficina: Mza. F Lote. 1 Agv. Manuel Aquino Callao</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">+51995573469 & 961468965</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600" />
                <span className="text-gray-400">aa.torres@ingesibo-sac.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
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