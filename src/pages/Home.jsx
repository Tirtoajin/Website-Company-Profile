import { Link } from "react-router-dom";
import { products } from "../data/products";
import { solutions, projects } from "../data/content";
import { Building2, ArrowUpRight, MessageSquare, MousePointer2, Phone, HardHat } from "lucide-react";
import ProductCard from "../components/cards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white font-sans selection:bg-[#EE3539] selection:text-white">
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
        {/* Background Miring Abu-abu */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100 skew-x-12 transform origin-top translate-x-20 z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1 pt-10 lg:pt-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-[#EE3539]"></div> {/* FIX WARNA MERAH */}
              <span className="text-[#EE3539] font-bold tracking-widest uppercase text-sm">Industrial Grade Quality</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-8">
              PONDASI <br />
              <span className="text-[#EE3539]">MASA DEPAN.</span> {/* FIX WARNA MERAH */}
            </h1>

            <p className="text-xl text-gray-500 mb-10 max-w-lg leading-relaxed border-l-4 border-[#FAA954] pl-6">Distributor resmi material konstruksi premium. Presisi dalam takaran, tepat dalam pengiriman.</p>

            <div className="flex flex-wrap gap-5">
              <a href="#products" className="group bg-[#EE3539] text-white px-8 py-4 rounded-none font-bold hover:bg-[#111827] transition-all flex items-center gap-3 shadow-lg">
                Katalog Produk <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </a>
              <Link to="/contact" className="group px-8 py-4 border border-gray-300 text-gray-900 font-bold hover:border-[#EE3539] hover:text-[#EE3539] transition-all">
                Hubungi Sales
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px]">
            <div className="absolute top-10 right-10 w-full h-full border-2 border-[#EE3539] z-0 hidden lg:block"></div>
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1000"
              alt="Construction"
              className="w-full h-full object-cover relative z-10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
              style={{ clipPath: "polygon(10% 0, 100% 0, 100% 90%, 0% 100%)" }}
            />

            <div className="absolute bottom-20 -left-10 z-20 bg-white p-6 shadow-xl max-w-xs hidden lg:block border-l-4 border-[#FAA954]">
              <p className="font-bold text-gray-900 text-lg">"Mitra terpercaya untuk proyek skala nasional."</p>
              <div className="flex gap-1 mt-3">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-[#EE3539] rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. PRODUK ================= */}
      <section id="products" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-8">
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-2 uppercase">Produk Kami</h2>
              <p className="text-gray-500">Standar mutu tinggi untuk hasil maksimal.</p>
            </div>
            <Link to="/products" className="hidden md:flex items-center gap-2 text-[#EE3539] font-bold hover:text-gray-900 transition">
              Lihat Semua Katalog <ArrowUpRight size={20} /> {/* ganti tombol */}
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>

          {/* CTA TENGAH (FIX WARNA DARK BLUE) */}
          <div className="mt-20 bg-[#111827] p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 opacity-5">
              <Building2 size={300} strokeWidth={0.5} color="white" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Butuh Volume Besar?</h3>
              <p className="text-gray-400">Dapatkan harga khusus kontraktor untuk pemesanan di atas 100 sak.</p>
            </div>
            <div className="relative z-10">
              <Link to="/contact" className="inline-block bg-white text-gray-900 px-8 py-3 font-bold hover:bg-[#FAA954] hover:text-white transition">
                Minta Penawaran
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. SOLUSI (FIX BACKGROUND DARK) ================= */}
      <section className="py-24 bg-[#111827] text-white relative">
        <div className="absolute left-0 top-0 w-1/2 h-full bg-[#0B0F19] z-0 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="lg:sticky lg:top-32 h-fit">
              <div className="w-16 h-2 bg-[#EE3539] mb-8"></div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight uppercase">
                Masalah <br />
                Konstruksi?
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">Jangan biarkan kerusakan kecil menjadi fatal. Kami menyediakan solusi kimia konstruksi spesifik.</p>
              <Link to="/contact" className="text-[#FAA954] font-bold flex items-center gap-2 hover:text-white transition">
                <MessageSquare size={20} /> Konsultasi Gratis Teknisi
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {solutions.map((item) => (
                <Link
                  to={`/products${item.linkTarget}`}
                  key={item.id}
                  className="group bg-[#1F2937] hover:bg-[#EE3539] transition-colors duration-500 p-6 flex items-center gap-6 border-b border-gray-700 last:border-0 cursor-pointer rounded-sm"
                >
                  <div className="w-24 h-24 shrink-0 overflow-hidden bg-gray-700">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FAA954] group-hover:text-[#FFD991] uppercase tracking-wider mb-1">{item.desc}</p>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-4 group-hover:translate-x-0 text-white">
                    <ArrowUpRight size={24} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. ABOUT & STATS ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-6xl font-black text-gray-300 mb-6 -ml-1">SINCE 2010</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Membangun Kepercayaan.</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">PT. Maju Jaya bukan sekadar toko material. Kami adalah partner logistik proyek Anda.</p>

              <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
                <div>
                  <span className="block text-3xl font-black text-[#EE3539]">15+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Tahun</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-gray-900">500+</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Proyek</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-gray-900">100%</span>
                  <span className="text-xs text-gray-500 font-bold uppercase">Garansi</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-[#FFD991]/30 -z-10 transform rotate-2"></div>
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800" alt="Warehouse" className="w-full grayscale hover:grayscale-0 transition duration-700 shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5. PROYEK SLIDER ================= */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-black text-gray-900">JEJAK LANGKAH</h2>
            <p className="text-gray-500">Proyek strategis yang kami dukung.</p>
          </div>
          <div className="flex gap-2">
            <div className="w-10 h-1 bg-[#EE3539]"></div>
            <div className="w-20 h-1 bg-[#FAA954]"></div>
          </div>
        </div>

        <div className="w-full">
          <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} loop={true} autoplay={{ delay: 2500, disableOnInteraction: false }} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }} className="w-full">
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative h-64 group border-r border-gray-200 bg-white">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10 group-hover:bg-[#EE3539] transition-colors duration-500">
                    <div className="text-[#EE3539] mb-4 group-hover:text-white transition-colors">{project.icon}</div>
                    <h3 className="font-bold text-gray-900 text-lg group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mt-1 group-hover:text-[#FFD991] transition-colors">{project.location}</p>
                  </div>
                  <div className="absolute bottom-2 right-4 text-6xl font-black text-gray-100 group-hover:text-red-800 transition-colors pointer-events-none">0{project.id}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ================= 6. NEW FLOATING CTA (MODERN INDUSTRIAL) ================= */}
      <section className="relative z-20 -mb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Container Utama dengan Efek Glassmorphism & Gradient */}
          <div className="relative bg-gradient-to-r from-[#EE3539] to-[#c92a2e] rounded-2xl shadow-2xl overflow-hidden">
            {/* Background Pattern Halus */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

            {/* Hiasan Lingkaran Besar di Kanan */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-72 h-72 bg-black opacity-10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex flex-col md:flex-row items-center relative z-10">
              {/* Kiri: Teks & Ajakan */}
              <div className="p-10 md:p-16 md:w-3/5 text-center md:text-left">
                <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1 mb-6">
                  <span className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FAA954] rounded-full animate-pulse"></span>
                    Ready Stock 24 Jam
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  SIAP MEMULAI <br />
                  <span className="text-[#FAA954]">PROYEK BESAR?</span>
                </h2>

                <p className="text-white/90 text-lg mb-8 max-w-md mx-auto md:mx-0 font-medium">Dapatkan konsultasi teknis gratis dan hitungan estimasi material untuk efisiensi budget proyek Anda.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  {/* Tombol Utama: Putih Timbul */}
                  <Link
                    to="/contact"
                    className="group bg-white text-[#EE3539] px-8 py-4 rounded-xl font-bold hover:bg-[#111827] hover:text-white transition-all shadow-[0_4px_0_rgb(0,0,0,0.2)] hover:shadow-[0_2px_0_rgb(0,0,0,0.2)] hover:translate-y-[2px] flex items-center justify-center gap-2"
                  >
                    <Phone size={20} className="group-hover:rotate-12 transition-transform" />
                    Hubungi Kami
                  </Link>

                  {/* Tombol Kedua: Outline Transparan */}
                  <a href="#" className="group px-8 py-4 border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition flex items-center justify-center gap-2 backdrop-blur-sm">
                    <MessageSquare size={20} />
                    Chat WhatsApp
                  </a>
                </div>
              </div>

              {/* Kanan: Gambar Ilustrasi (Potongan Miring) */}
              <div className="hidden md:block md:w-2/5 h-full absolute right-0 top-0 bottom-0">
                {/* Bentuk Miring Pemisah */}
                <div className="absolute top-0 bottom-0 -left-12 w-24 bg-[#c92a2e] transform -skew-x-12 z-20"></div>
                <div className="absolute top-0 bottom-0 left-0 w-full h-full bg-gray-900 z-10 skew-x-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
                    alt="Project Discussion"
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-110 transition duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#c92a2e]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer yang lebih besar untuk menampung floating CTA */}
      <div className="h-25 bg-white"></div>

      {/* ================= ONLINE SHOPPING (OFFICIAL STORE) ================= */}
      <section className="py-24 bg-[#F9FAFB] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* Header Section */}
          <h2 className="text-3xl font-black text-[#111827] mb-3 uppercase">Official Store</h2>
          <p className="text-gray-500 mb-12 max-w-lg mx-auto text-lg">Belanja lebih aman dan mudah melalui mitra marketplace resmi kami. Dapatkan promo khusus dan cicilan 0%.</p>

          {/* Grid Tombol Marketplace */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* TOMBOL SHOPEE (Style Oranye) */}
            <a
              href="https://shopee.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-72 h-28 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#EE4D2D]"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-[#EE4D2D] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Logo */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
                alt="Shopee"
                className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />

              {/* Teks Kecil "Kunjungi Toko" (Muncul saat hover) */}
              <div className="absolute bottom-2 text-[10px] font-bold text-[#EE4D2D] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">KUNJUNGI TOKO</div>
            </a>

            {/* TOMBOL TOKOPEDIA (Style Hijau) */}
            <a
              href="https://tokopedia.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-72 h-28 bg-white rounded-xl shadow-sm border border-gray-200 flex items-center justify-center relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#42B549]"
            >
              {/* Background Hover Effect */}
              <div className="absolute inset-0 bg-[#42B549] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>

              {/* Logo */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg"
                alt="Tokopedia"
                className="h-10 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
              />

              {/* Teks Kecil "Kunjungi Toko" */}
              <div className="absolute bottom-2 text-[10px] font-bold text-[#42B549] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">KUNJUNGI TOKO</div>
            </a>
          </div>
        </div>
      </section>

      <div className="h-24 bg-gray-50"></div>
    </div>
  );
};

export default Home;
