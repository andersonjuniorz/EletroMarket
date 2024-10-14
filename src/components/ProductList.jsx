import React from 'react';
import ProductData from '../data/ProductData';
import ProductCard from '../components/AddCard';
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
          onAddToCart={() => onAddToCart(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
