import React from 'react';
import ProductData from '../data/ProductData';
import ProductCard from '../components/AddCard'; // Ajuste se necessário
import '../components/styles/ProductList.css';

const ProductList = ({ onAddToCart }) => {
  return (
    <div className="product-list">
      {ProductData.map((product) => (
        <ProductCard
          key={product.id}
          title={product.name}
          image={product.image}
          price={product.price}
          description={`Descrição do ${product.name}`}
          onAddToCart={() => onAddToCart(product)} // Adicionando a função de adicionar ao carrinho
        />
      ))}
    </div>
  );
};

export default ProductList;
