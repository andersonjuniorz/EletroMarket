import React from 'react';
import ProductData from '../Data/ProductData';
import ProductCard from '../Components/AddCard'; // Ajuste se necessário
import '../Components/Styles/ProductList.css';

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
