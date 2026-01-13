import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- PERBAIKAN PATH IMPORT DI SINI ---
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Route Produk Detail (Single) */}
            <Route path="/product/:id" element={<ProductDetail />} />

            {/* Route Produk List (Kategori) */}
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/products" element={<Products />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
