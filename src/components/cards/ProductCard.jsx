import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden border border-gray-100">
      <div className="relative h-80 bg-gray-50 p-8 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
        <img src={product.image} alt={product.name} className="w-full h-full object-contain drop-shadow-xl transform group-hover:scale-105 transition duration-500" />
        <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full shadow-sm">{product.category}</div>
      </div>
      <div className="p-6 grow flex flex-col justify-between bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        <div>
          <h3 className="font-bold text-xl text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition">{product.name}</h3>
        </div>
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50">
          <div>
            <p className="text-sm text-gray-500 font-medium">Mulai dari:</p>
            <p className="text-2xl font-extrabold text-gray-900">
              {product.price.replace("Rp ", "")}
              <span className="text-sm font-normal text-gray-500">/sak</span>
            </p>
          </div>
          <div className="bg-red-50 text-red-600 p-3 rounded-full group-hover:bg-red-600 group-hover:text-white transition-colors shadow-sm">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
