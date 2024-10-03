import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    const product = productData.find(item => item.id === id);
    //console.log('Produto encontrado:', product);
    if (product) {
      setCartItems(prevItems => [...prevItems, product]);
      //console.log('Itens no carrinho após adicionar:', [...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
