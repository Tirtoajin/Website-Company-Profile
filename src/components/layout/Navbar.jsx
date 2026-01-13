import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight, MapPin } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed w-full z-50 top-0 left-0 transition-all duration-300 bg-pattern-dots shadow-md">
      {/* UTILITY BAR (Tetap sama) */}
      <div className="bg-gray-900 text-white text-xs py-2 hidden lg:block border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2 hover:text-red-500 transition cursor-pointer">
              <Phone size={14} className="text-red-600" /> (021) 8899-7766
            </span>
            <span className="flex items-center gap-2 hover:text-red-500 transition cursor-pointer">
              <Mail size={14} className="text-red-600" /> sales@sampurna.co.id
            </span>
          </div>
          <div className="flex gap-4 ">
            <span className="flex items-center gap-2 bg-text-gray-400">
              <MapPin size={14} /> Cikarang, Indonesia
            </span>
            <div className="w-px h-4 bg-gray-700"></div>
            {/* <Link to="/contact" className="bg-accent text-dark px-6 py-3 font-bold text-sm tracking-widest uppercase hover:bg-accent-light transition shadow-md">
              Hubungi Kami
            </Link> */}
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <nav className={`bg-white border-b border-gray-200 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            {/* LOGO (Tetap sama) */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 flex items-center justify-center text-white font-black text-xl rounded-sm shadow-md transform -skew-x-6">SM</div>
              <Link to="/" className="flex flex-col justify-center">
                <span className="text-2xl font-black text-red-600 tracking-tighter leading-none">SAMPURNA</span>
                <span className="text-xs font-bold text-yellow-600 tracking-[0.3em] uppercase">Rona Selaras</span>
                {/**buat rona merah selaras kuning **/}
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex items-stretch">
              <div className="flex items-center px-6 border-l border-transparent hover:bg-gray-50 transition relative group h-full">
                <Link to="/" className="text-sm font-bold text-gray-900 tracking-widest uppercase group-hover:text-red-600 transition">
                  Beranda
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
              </div>

              {/* === MENU PRODUK === */}
              <div className="flex items-center px-6 border-l border-gray-100 hover:bg-gray-50 transition relative group h-full cursor-pointer">
                <button className="flex items-center gap-1 text-sm font-bold text-gray-900 tracking-widest uppercase group-hover:text-red-600 transition outline-none">
                  Produk <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition duration-300"></div>

                {/* DROPDOWN CONTENT */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[600px] bg-white shadow-2xl border-t-4 border-red-600 invisible opacity-0 translate-y-4 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 p-0 grid grid-cols-2">
                  {/* Kolom 1: Material Semen */}
                  <div className="p-6 bg-white">
                    <h4 className="text-red-600 font-bold text-xs uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Material Semen</h4>
                    <ul className="space-y-3">
                      {/* Link ke ID 1 (Semen Portland) */}
                      <li>
                        <Link to="/product/1" className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-transform text-sm font-medium">
                          Semen Portland Tipe 1
                        </Link>
                      </li>
                      {/* Link ke ID 2 (Mortar) */}
                      <li>
                        <Link to="/product/2" className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-transform text-sm font-medium">
                          Mortar Instan (Plester/Acian)
                        </Link>
                      </li>
                      {/* Link ke ID 2 lagi (atau produk lain jika ada) */}
                      <li>
                        <Link to="/product/2" className="block text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-transform text-sm font-medium">
                          Tile Adhesive (Perekat Keramik)
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Kolom 2: Non-Semen */}
                  <div className="p-6 bg-gray-50">
                    <h4 className="text-gray-900 font-bold text-xs uppercase tracking-wider mb-4 border-b border-gray-200 pb-2">Material Konstruksi Lain</h4>
                    <ul className="space-y-3">
                      {/* Link ke ID 3 (Hebel) */}
                      <li>
                        <Link to="/product/3" className="block text-gray-600 hover:text-red-600 hover:translate-x-1 transition-transform text-sm font-medium">
                          Bata Ringan (Hebel)
                        </Link>
                      </li>
                      {/* Link ke ID 4 (Pasir) atau ID 5 (Waterproofing) */}
                      <li>
                        <Link to="/product/5" className="block text-gray-600 hover:text-red-600 hover:translate-x-1 transition-transform text-sm font-medium">
                          Chemical Construction
                        </Link>
                      </li>
                      <li>
                        <Link to="/product/4" className="block text-gray-600 hover:text-red-600 hover:translate-x-1 transition-transform text-sm font-medium">
                          Pasir Bangka
                        </Link>
                      </li>
                    </ul>
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <Link to="/products" className="flex items-center gap-2 text-xs font-bold text-red-600 hover:underline">
                        Lihat Semua Katalog <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* === END MENU PRODUK === */}

              <div className="flex items-center px-6 border-l border-gray-100 hover:bg-gray-50 transition relative group h-full">
                <Link to="/about" className="text-sm font-bold text-gray-900 tracking-widest uppercase group-hover:text-red-600 transition">
                  Tentang Kami
                </Link>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition duration-300"></div>
              </div>

              <div className="flex items-center pl-6 border-l border-gray-100">
                <Link to="/contact" className="bg-red-600 text-white px-6 py-3 font-bold text-sm tracking-widest uppercase hover:bg-gray-900 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Hubungi Kami
                </Link>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="flex lg:hidden items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 hover:text-red-600 transition p-2">
                {isOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU (Versi Mobile juga diperbaiki) */}
        <div className={`lg:hidden bg-white border-t border-gray-100 absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="px-4 pt-4 pb-8 space-y-2 shadow-xl h-screen overflow-y-auto">
            <Link to="/" className="block px-4 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50 border-b border-gray-100">
              BERANDA
            </Link>

            <div className="px-4 py-4 border-b border-gray-100">
              <span className="block text-sm font-bold text-red-600 mb-4 uppercase tracking-wider">Produk Semen</span>
              <Link to="/product/1" className="block py-2 text-gray-600 font-medium pl-4 border-l-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition">
                Semen Portland
              </Link>
              <Link to="/product/2" className="block py-2 text-gray-600 font-medium pl-4 border-l-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition">
                Mortar Instan
              </Link>

              <span className="block text-sm font-bold text-red-600 mt-4 mb-4 uppercase tracking-wider">Produk Lain</span>
              <Link to="/product/3" className="block py-2 text-gray-600 font-medium pl-4 border-l-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition">
                Bata Ringan
              </Link>
              <Link to="/product/5" className="block py-2 text-gray-600 font-medium pl-4 border-l-2 border-gray-200 hover:border-red-600 hover:text-red-600 transition">
                Waterproofing
              </Link>
            </div>

            <Link to="/about" className="block px-4 py-4 text-lg font-bold text-gray-900 hover:bg-gray-50 border-b border-gray-100">
              TENTANG KAMI
            </Link>
            <Link to="/contact" className="block px-4 py-4 text-lg font-bold text-red-600 hover:bg-red-50">
              HUBUNGI KAMI
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
