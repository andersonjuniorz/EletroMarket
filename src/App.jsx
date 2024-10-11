import './App.css'
import AppRoutes from './Router';
import React, { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]); // Estado do carrinho

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, qtd: item.qtd + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, qtd: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === id) {
          if (item.qtd > 1) {
            return [...acc, { ...item, qtd: item.qtd - 1 }];
          }
          return acc; // Remove o item se a quantidade for 1
        }
        return [...acc, item];
      }, [])
    );
  };

  return (
    <AppRoutes cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
  );
}

export default App;