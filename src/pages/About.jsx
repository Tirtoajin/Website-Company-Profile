import { Link } from "react-router-dom";
import { TrendingUp, ShieldCheck, Target, BrickWall, ArrowRight, Quote, Check, Phone, MessageSquare } from "lucide-react";

const About = () => {
  const values = [
    { title: "Presisi", desc: "Takaran dan volume yang akurat sesuai standar ISO." },
    { title: "Integritas", desc: "Transparansi harga dan spesifikasi material." },
    { title: "Kecepatan", desc: "Logistik terintegrasi untuk pengiriman on-time." },
    { title: "Inovasi", desc: "Adopsi teknologi material terbaru (hebel/mortar)." },
  ];

  return (
    <div className="bg-white font-sans selection:bg-red-600 selection:text-white">
      {/* ================= 1. HERO SECTION (TYPOGRAPHY HEAVY) ================= */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gray-50 overflow-hidden">
        {/* Background Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm1 1h38v38H1V1z' fill='%23000000' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="border-l-4 border-red-600 pl-6 md:pl-10">
            <h4 className="text-red-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">Profil Perusahaan</h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[0.9] tracking-tight mb-8">
              MEMBANGUN <br />
              <span className=" bg-clip-text bg-linier-to-r from-gray-500 to-gray-800">WARISAN.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl font-light leading-relaxed">Lebih dari sekadar distributor. Kami adalah insinyur di balik rantai pasok material konstruksi yang efisien dan terpercaya.</p>
          </div>
        </div>

        {/* Floating Image Absolute */}
        <div className="hidden lg:block absolute right-0 bottom-0 w-1/3 h-3/4 bg-gray-200 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800" alt="Building" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000" />
        </div>
      </section>

      {/* ================= 2. THE STORY (ASYMMETRICAL LAYOUT) ================= */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left: Sticky Title */}
            <div className="lg:w-1/3 lg:sticky lg:top-32">
              <h2 className="text-6xl font-black text-gray-200 mb-2">2010</h2>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Awal Perjalanan</h3>
              <div className="w-20 h-2 bg-red-600"></div>
            </div>

            {/* Right: Content */}
            <div className="lg:w-2/3">
              <p className="text-2xl text-gray-900 font-medium leading-relaxed mb-8">"Kami memulai bisnis ini karena frustrasi melihat banyaknya proyek mangkrak akibat keterlambatan material dan kualitas semen yang tidak konsisten."</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600 leading-relaxed mb-12">
                <div>
                  <p className="mb-4">PT. Maju Jaya Cement didirikan di Bekasi dengan satu armada truk dan gudang seluas 100m². Fokus kami saat itu sederhana: mengirimkan pesanan tepat waktu, apapun kondisinya.</p>
                  <p>Dedikasi pada ketepatan waktu ini membuat kami cepat dikenal di kalangan kontraktor lokal.</p>
                </div>
                <div>
                  <p className="mb-4">Kini, kami telah berkembang menjadi distributor utama untuk berbagai merek semen nasional, produsen bata ringan (hebel), dan inovator mortar instan.</p>
                  <p>Fasilitas kami mencakup gudang terintegrasi seluas 2 hektar dan armada logistik yang menjangkau seluruh Jabodetabek dan Jawa Barat.</p>
                </div>
              </div>

              {/* Stats Grid - Technical Look */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-200 py-8 gap-8">
                <div>
                  <span className="block text-4xl font-black text-gray-900">500+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Klien Aktif</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-gray-900">2Ha</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Area Gudang</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-gray-900">50+</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Armada</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-gray-900">100%</span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Original</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. CORE VALUES (TECHNICAL GRID STYLE) ================= */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase mb-2">Filosofi Kami</h2>
            <h3 className="text-4xl md:text-5xl font-black">DNA PERUSAHAAN</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-700 border-l">
            {values.map((val, idx) => (
              <div key={idx} className="p-8 border-r border-b border-gray-700 hover:bg-gray-800 transition duration-300 group">
                <div className="mb-6 opacity-50 group-hover:opacity-100 transition">
                  <CheckCircleIcon idx={idx} />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-red-500 transition">{val.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. VIDEO COMPANY PROFILE ================= */}
      <section className="py-24 bg-[#F9FAFB] border-t border-gray-200 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-[#EE3539]/10 px-4 py-1.5 rounded-full mb-4">
              <div className="w-2 h-2 bg-[#EE3539] rounded-full animate-pulse"></div>
              <span className="text-[#EE3539] text-xs font-bold tracking-widest uppercase">Company Profile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-[#111827] uppercase leading-tight">Lihat Kami Beraksi</h2>
          </div>

          {/* Video Container dengan Frame Premium */}
          <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden border-8 border-white bg-black group">
            {/* Aspect Ratio 16:9 agar responsive */}
            <div className="aspect-video w-full relative">
              <iframe
                className="w-full h-full object-cover"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=X-wJj0q-f6qX_qX-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

              {/* Efek Hover Overlay (Opsional - memberikan kesan cinema) */}
              <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-[#EE3539]/20 transition-all duration-500 rounded-lg"></div>
            </div>
          </div>

          {/* Caption Bawah Video */}
          <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">Mengintip dapur pacu operasional kami. Mulai dari pengelolaan gudang terintegrasi hingga kesiapan armada logistik dalam melayani proyek Anda.</p>
        </div>
      </section>
    </div>
  );
};

// Helper Icon Component for Values Section
const CheckCircleIcon = ({ idx }) => {
  const icons = [<ShieldCheck size={32} />, <BrickWall size={32} />, <TrendingUp size={32} />, <Target size={32} />];
  return icons[idx] || <Check size={32} />;
};

export default About;
