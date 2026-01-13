import { useParams, Link, useSearchParams } from "react-router-dom";
import { products } from "../data/products";
import { ChevronRight, Home, MessageSquare, FilterX } from "lucide-react";

const Products = () => {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const problemFilter = searchParams.get("masalah");

  // --- LOGIKA FILTER CERDAS ---
  let filteredProducts = products;
  let pageTitle = "Semua Katalog Produk";
  let pageSubtitle = "Menampilkan seluruh koleksi material konstruksi kami.";

  if (problemFilter) {
    // 1. Filter berdasarkan Masalah
    filteredProducts = products.filter((p) => p.tags && p.tags.includes(problemFilter));

    const formatTitle = problemFilter.replace(/-/g, " ").toUpperCase();
    pageTitle = `Solusi: ${formatTitle}`;
    pageSubtitle = `Rekomendasi produk terbaik untuk menangani masalah ${formatTitle.toLowerCase()}.`;
  } else if (category) {
    // 2. Filter berdasarkan Kategori
    filteredProducts = products.filter((p) => p.category === category);
    pageTitle = category === "semen" ? "Solusi Dinding & Plesteran" : "Material Konstruksi Pendukung";
    pageSubtitle = "Produk berkualitas berdasarkan kategori pilihan Anda.";
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* ================= 1. BREADCRUMB & HEADER ================= */}
      <div className="pt-42 pb-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-400 mb-6 gap-2">
            <Link to="/" className="hover:text-red-600 flex items-center gap-1">
              <Home size={14} /> Beranda
            </Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-medium capitalize">{problemFilter ? "Solusi Masalah" : category ? category.replace("-", " ") : "Katalog"}</span>
          </div>

          {/* Title Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-start gap-4">
              <div className="w-1.5 h-12 bg-red-600 rounded-full shrink-0"></div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 capitalize">{pageTitle}</h1>
                <p className="text-gray-500 mt-1">{pageSubtitle}</p>
              </div>
            </div>

            {/* Tombol Reset Filter */}
            {problemFilter && (
              <Link to="/products" className="bg-white border border-gray-300 text-gray-700 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-gray-100 hover:text-red-600 transition">
                <FilterX size={16} /> Lihat Semua Produk
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ================= 2. PRODUCT GRID ================= */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
              <p className="text-gray-500 text-lg mb-4">Mohon maaf, produk untuk solusi ini sedang stok ulang.</p>
              <Link to="/contact" className="text-white bg-red-600 px-6 py-3 rounded-lg font-bold inline-block hover:bg-red-700 transition">
                Hubungi CS untuk Alternatif
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((item) => (
                <div key={item.id} className="group border border-gray-200 rounded-xl p-5 hover:shadow-xl hover:border-red-200 transition-all duration-300 bg-white flex flex-row gap-5 items-start relative">
                  {/* 1. GAMBAR (Klik lari ke Detail) */}
                  <Link to={`/product/${item.id}`} className="w-1/3 shrink-0 cursor-pointer">
                    <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center p-2 overflow-hidden relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-110 transition duration-500" />
                      {/* Badge Masalah */}
                      {problemFilter && <div className="absolute top-0 left-0 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-br-lg">Solusi Tepat</div>}
                    </div>
                  </Link>

                  {/* 2. KONTEN */}
                  <div className="w-2/3 flex flex-col h-full justify-between">
                    <div>
                      {/* Judul (Klik lari ke Detail) */}
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2 group-hover:text-red-600 transition cursor-pointer">{item.name}</h3>
                      </Link>
                      <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-3">{item.longDesc || "Deskripsi produk belum tersedia."}</p>
                    </div>

                    {/* HARGA & TOMBOL MARKETPLACE */}
                    <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-50">
                      <span className="font-bold text-gray-900 text-sm">{item.price}</span>

                      <div className="flex gap-2">
                        {/* Tombol Shopee */}
                        <a
                          href={item.shopeeLink || "https://shopee.co.id"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-orange-500 hover:bg-orange-50 transition p-1.5"
                          title="Beli di Shopee"
                        >
                          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg" alt="Shopee" className="w-full h-full object-contain" />
                        </a>

                        {/* Tombol Tokopedia */}
                        <a
                          href={item.tokopediaLink || "https://tokopedia.com"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 border border-gray-200 rounded flex items-center justify-center hover:border-green-500 hover:bg-green-50 transition p-1.5"
                          title="Beli di Tokopedia"
                        >
                          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Tokopedia.svg" alt="Tokopedia" className="w-full h-full object-contain" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Chat */}
      <div className="fixed bottom-8 right-8 z-40 flex items-end flex-col gap-2">
        <div className="bg-white p-4 rounded-xl shadow-xl border border-gray-200 mb-2 animate-fade-in-up max-w-xs relative hidden md:block">
          <p className="text-sm text-gray-700">{problemFilter ? `Butuh bantuan teknis soal ${problemFilter.replace(/-/g, " ")}?` : "Halo! Ada yang bisa kami bantu?"}</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
        </div>
        <Link to="/contact" className="bg-yellow-400 text-gray-900 p-4 rounded-full shadow-lg hover:bg-yellow-300 transition hover:scale-110 flex items-center justify-center border-4 border-white">
          <MessageSquare size={28} fill="black" className="text-black" />
        </Link>
      </div>
    </div>
  );
};

export default Products;
