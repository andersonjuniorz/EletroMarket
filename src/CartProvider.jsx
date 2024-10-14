import React, { createContext, useState, useContext } from 'react';

// Criando o contexto
const CartContext = createContext();

// Componente CartProvider que vai encapsular toda a logica do carrinho
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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
          return acc;
        }
        return [...acc, item];
      }, [])
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook para usar o contexto do carrinho em outros componentes
export function useCart() {
  return useContext(CartContext);
}
