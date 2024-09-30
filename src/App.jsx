import { Routes, Route } from 'react-router-dom';
import productData from './components/productData';
// Components
import Sidebar from './components/Sidebar';

// Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';

export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produtos"
            element={
              <div className="productList">
                {productData.map((product) => (
                  <Produtos
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </div>
            }
          />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contatos />} />
        </Routes>
      </div>
    </div>
  );
}
