import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import productData from './components/productData';
// Components
import Sidebar from './components/Sidebar';
// Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';
import CarrinhoCompras from './pages/CarrinhoCompras';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  // Funcao para adicionar itens ao carrinho
  const addToCart = (id) => {
    const product = productData.find(item => item.id === id);
    setCartItems(prevItems => [...prevItems, product]);
  };
  

  // Funcao para remover itens do carrinho
  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={
            <main>
              <h1>Nossos Produtos</h1>
              <div className="productList">
                {productData.map((product) => (
                  <Produtos
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </main>
          } />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/carrinhoCompras" element={
            <CarrinhoCompras 
              cartItems={cartItems} 
              removeFromCart={removeFromCart} 
            />} 
          />
          <Route path="/contato" element={<Contatos />} />
        </Routes>
      </div>
    </div>
  );
}
