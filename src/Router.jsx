// AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Contact from "./Pages/Contact";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";

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
