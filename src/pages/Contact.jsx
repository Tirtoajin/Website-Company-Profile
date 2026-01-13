import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ArrowUpRight, ExternalLink } from "lucide-react";

const Contact = () => {
  const [formStatus, setFormStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
    }, 1500);
  };

  return (
    <div className="bg-[#F9FAFB] font-sans selection:bg-[#EE3539] selection:text-white">
      {/* ================= 1. HERO HEADER (INDUSTRIAL STYLE) ================= */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center pt-48 pb-12 overflow-hidden bg-[#111827]">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920" alt="Office Building" className="w-full h-full object-cover opacity-40" />
          {/* Gradient Overlay (Hitam ke Merah Transparan) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#111827] via-[#111827]/80 to-[#EE3539]/40"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-[#EE3539]"></div>
              <span className="text-[#FAA954] font-bold tracking-widest uppercase text-sm">Layanan Pelanggan</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Hubungi <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EE3539] to-[#FAA954]">Kami.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl border-l-4 border-[#EE3539] pl-6">Tim ahli kami siap membantu kebutuhan spesifikasi teknis dan penawaran harga terbaik untuk proyek Anda.</p>
          </div>
        </div>
      </section>

      {/* ================= 2. CONTENT SECTION (INFO & FORM) ================= */}
      <section className="py-24 relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* --- KOLOM KIRI: INFO KONTAK (4 Kolom) --- */}
            <div className="lg:col-span-5 space-y-8 mt-10 lg:mt-20">
              <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-[#EE3539]">
                <h3 className="text-2xl font-black text-[#111827] mb-6 uppercase">Informasi Kantor</h3>

                <div className="space-y-6">
                  {/* Item 1 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-[#EE3539] shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-lg">Kantor Pusat</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mt-1">Jl. Industri Raya No. 88, Kawasan Industri Cikarang, Bekasi, Jawa Barat 17530</p>
                    </div>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-[#EE3539] shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-lg">Layanan Telepon</h4>
                      <p className="text-gray-600 text-sm mt-1">(021) 8899-7766 (Hunting)</p>
                      <p className="text-gray-600 text-sm">0812-3456-7890 (WhatsApp)</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-[#EE3539] shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#111827] text-lg">Email Resmi</h4>
                      <p className="text-gray-600 text-sm mt-1">sales@sampurna.co.id</p>
                      <p className="text-gray-600 text-sm">info@sampurna.co.id</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box Jam Operasional */}
              <div className="bg-[#111827] p-8 rounded-xl shadow-lg text-white">
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Clock className="text-[#FAA954]" size={20} /> Jam Operasional
                </h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Senin - Jumat</span>
                    <span className="text-white font-bold">08:00 - 17:00</span>
                  </li>
                  <li className="flex justify-between border-b border-gray-700 pb-2">
                    <span>Sabtu</span>
                    <span className="text-white font-bold">08:00 - 14:00</span>
                  </li>
                  <li className="flex justify-between pt-2">
                    <span>Minggu / Libur</span>
                    <span className="text-[#EE3539] font-bold">Tutup</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* --- KOLOM KANAN: FORMULIR (8 Kolom) --- */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="bg-[#EE3539] p-6 text-white text-center">
                  <h2 className="text-2xl font-black uppercase tracking-wide">Kirim Pesan Proyek</h2>
                  <p className="text-white/80 text-sm mt-1">Isi formulir di bawah untuk respon cepat dari tim marketing kami.</p>
                </div>

                <div className="p-8 md:p-10">
                  {formStatus === "success" ? (
                    <div className="text-center py-10">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-[#111827] mb-2">Pesan Terkirim!</h3>
                      <p className="text-gray-500">Terima kasih. Kami akan menghubungi Anda dalam 1x24 jam.</p>
                      <button onClick={() => setFormStatus("idle")} className="mt-8 text-[#EE3539] font-bold hover:underline">
                        Kirim pesan baru
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            Nama Lengkap <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#EE3539] focus:border-transparent outline-none transition"
                            placeholder="Budi Santoso"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-gray-700 mb-2">
                            No. WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#EE3539] focus:border-transparent outline-none transition"
                            placeholder="0812xxxxxxx"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Perusahaan (Opsional)</label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#EE3539] focus:border-transparent outline-none transition"
                          placeholder="PT. Konstruksi Jaya"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Kebutuhan</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#EE3539] focus:border-transparent outline-none transition cursor-pointer">
                          <option>Penawaran Harga Material</option>
                          <option>Konsultasi Teknis</option>
                          <option>Kerjasama Vendor</option>
                          <option>Lainnya</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">
                          Pesan Anda <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          rows="4"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-[#EE3539] focus:border-transparent outline-none transition resize-none"
                          placeholder="Tuliskan detail kebutuhan volume atau pertanyaan Anda..."
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className={`w-full bg-[#EE3539] text-white font-bold text-lg py-4 rounded-lg hover:bg-[#c92a2e] transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                          formStatus === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                      >
                        {formStatus === "submitting" ? (
                          "Mengirim..."
                        ) : (
                          <>
                            Kirim Pesan Sekarang <Send size={20} />
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. MAP SECTION (FULL WIDTH) ================= */}
      <section className="h-[500px] w-full relative border-t-4 border-[#FAA954]">
        {/* Peta (Grayscale) */}
        <iframe
          title="Lokasi Kantor"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.0866160356!2d107.0872886737497!3d-6.284549553760447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698d5f30627d31%3A0x633f822295200384!2sKawasan%20Industri%20Jababeka!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter grayscale contrast-125 hover:filter-none transition-all duration-700"
        ></iframe>

        {/* Tombol Overlay Buka Peta */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none">
          <a
            href="https://goo.gl/maps/contoh"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto bg-white text-[#111827] px-6 py-3 rounded-full font-bold shadow-2xl flex items-center gap-2 hover:bg-[#EE3539] hover:text-white transition transform hover:scale-105"
          >
            <ExternalLink size={18} /> Buka Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
