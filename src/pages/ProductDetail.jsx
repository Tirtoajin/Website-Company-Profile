import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { ArrowRight, CheckCircle2, ChevronRight, Download, Home, ShoppingBag } from "lucide-react";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();

  // Cari produk berdasarkan ID
  const product = products.find((p) => p.id === parseInt(id));

  // Cari produk terkait (Kategori sama, tapi bukan produk ini)
  const relatedProducts = products.filter((p) => p.category === product?.category && p.id !== product?.id).slice(0, 3);

  // Scroll ke atas saat halaman dibuka/berpindah produk
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="pt-32 text-center">Produk tidak ditemukan.</div>;
  }

  return (
    <div className="bg-white min-h-screen font-sans pt-40 pb-20">
      {/* 1. BREADCRUMB */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center text-sm text-gray-500 gap-2">
          <Link to="/" className="hover:text-red-600">
            <Home size={14} />
          </Link>
          <ChevronRight size={14} />
          <Link to="/products" className="hover:text-red-600">
            Produk
          </Link>
          <ChevronRight size={14} />
          <span className="text-gray-900 font-bold truncate">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* === LEFT SIDE: IMAGE === */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-10 flex items-center justify-center relative">
              <img src={product.image} alt={product.name} className="w-full h-auto object-contain max-h-[400px] drop-shadow-xl hover:scale-105 transition duration-500" />
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Best Seller</div>
            </div>
          </div>

          {/* === RIGHT SIDE: CONTENT === */}
          <div className="lg:w-2/3">
            {/* Title Section */}
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">{product.name}</h1>
            <p className="text-xl font-bold text-red-600 mb-8">{product.price}</p>

            {/* DESKRIPSI BOX (Gaya MU - Dark Box) */}
            <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl mb-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-yellow-500 mb-4 border-b border-gray-700 pb-2 inline-block">Deskripsi Produk</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{product.longDesc}</p>

                {/* Tombol Beli di dalam Box */}
                <div className="flex gap-4">
                  <a href={product.shopeeLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition flex items-center gap-2 text-sm">
                    Beli di Shopee <ArrowRight size={16} />
                  </a>
                  <a
                    href={product.tokopediaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-gray-500 text-white px-6 py-3 rounded-lg font-bold hover:border-white transition flex items-center gap-2 text-sm"
                  >
                    Tokopedia
                  </a>
                </div>
              </div>
              {/* Hiasan background */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-800 rounded-full opacity-50"></div>
            </div>

            {/* SPECS & FEATURES (Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Feature List */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-red-600" /> Keunggulan
                </h3>
                <ul className="space-y-2">
                  {product.features?.map((feat, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 shrink-0"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Application Area */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Home size={20} className="text-red-600" /> Area Aplikasi
                </h3>
                <ul className="space-y-2">
                  {product.application?.map((app, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 shrink-0"></span>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* DOWNLOADS (Technical Data Sheet Mockup) */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition bg-white w-full sm:w-auto min-w-[200px]">
                <div className="text-left">
                  <span className="block text-xs text-gray-400 font-bold">PDF DOCUMENT</span>
                  <span className="font-bold text-sm">Technical Data Sheet</span>
                </div>
                <Download size={18} />
              </button>
              <button className="flex items-center justify-between px-4 py-3 border border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition bg-white w-full sm:w-auto min-w-[200px]">
                <div className="text-left">
                  <span className="block text-xs text-gray-400 font-bold">PDF DOCUMENT</span>
                  <span className="font-bold text-sm">Brosur Produk</span>
                </div>
                <Download size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* === RELATED PRODUCTS SECTION === */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 border-t border-gray-100 pt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produk Terkait Lainnya</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedProducts.map((item) => (
                <Link to={`/products/${item.id}`} key={item.id} className="group bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg transition block">
                  <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center p-4">
                    <img src={item.image} alt={item.name} className="h-full object-contain group-hover:scale-110 transition duration-500" />
                  </div>
                  <h3 className="font-bold text-gray-900 group-hover:text-red-600 transition truncate">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Lihat Detail <ArrowRight size={14} className="inline ml-1" />
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
