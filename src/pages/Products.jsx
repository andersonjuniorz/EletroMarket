import React from 'react';
import ProductList from '../components/ProductList';
import '../styles/Products.css';

const Products = ({ onAddToCart }) => {
    const handleAddToCart = (product) => {
        onAddToCart(product);
        alert(`${product.name} foi adicionado ao carrinho!`);
    };

    return (
        <div className="products-container">
            <h1>Lista de Produtos</h1>
            <ProductList onAddToCart={handleAddToCart} />
        </div>
    );
};

export default Products;
