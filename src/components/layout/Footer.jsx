import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 border-t-4 border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID 4 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* KOLOM 1: Brand & Sosmed */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-15 h-10 bg-red-600 rounded flex items-center justify-center text-white font-bold text-xl">SMR</div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Sampurna Rona Selaras</h2>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">Distributor dan produsen material konstruksi terdepan. Kami menjamin kualitas pondasi hingga atap bangunan Anda.</p>
            <div className="flex gap-4">
              {/* Social Icons */}
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* KOLOM 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Tautan Cepat
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 rounded"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  {" "}
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  {" "}
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  {" "}
                  Katalog Produk
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  {" "}
                  Hubungi Kami
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-red-500 transition-colors flex items-center gap-2">
                  {" "}
                  Karir
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: Produk Kami */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Produk
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-yellow-500 rounded"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/semen" className="hover:text-yellow-500 transition-colors">
                  Semen Portland
                </Link>
              </li>
              <li>
                <Link to="/products/semen" className="hover:text-yellow-500 transition-colors">
                  Mortar Instan
                </Link>
              </li>
              <li>
                <Link to="/products/non-semen" className="hover:text-yellow-500 transition-colors">
                  Bata Ringan (Hebel)
                </Link>
              </li>
              <li>
                <Link to="/products/non-semen" className="hover:text-yellow-500 transition-colors">
                  Chemical Construction
                </Link>
              </li>
              <li>
                <Link to="/products/non-semen" className="hover:text-yellow-500 transition-colors">
                  Beton Precast
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: Alamat & Kontak */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              Kantor Pusat
              <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-red-600 rounded"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-red-600 shrink-0 mt-1" size={20} />
                <span>
                  Jl. Industri Raya No. 88,
                  <br />
                  Kawasan Industri Cikarang,
                  <br />
                  Bekasi, Jawa Barat 17530
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-red-600 shrink-0" size={20} />
                <span>(021) 8899-7766</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-red-600 shrink-0" size={20} />
                <span>sales@Sampurna.co.id</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT BOTTOM */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} PT. Sampurna Rona Selaras. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
