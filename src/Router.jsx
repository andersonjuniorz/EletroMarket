// AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from './pages/Home';
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";

//Components
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const AppRoutes = ({ cart, onAddToCart, onRemoveFromCart }) => {
  return (
    <Router>
      <Sidebar /> {/* Sidebar */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products onAddToCart={onAddToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} onRemove={onRemoveFromCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> {/* Footer */}
    </Router>
  );
};

export default AppRoutes;
