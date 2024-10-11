import React from 'react';
import ProductList from '../Components/ProductList'; // Ajuste o caminho se necessário
import '../Styles/Products.css';

const Products = ({ onAddToCart }) => {
    // A função de adição ao carrinho já é passada como prop, então você não precisa recriá-la
    const handleAddToCart = (product) => {
        onAddToCart(product); // Chama a função passada por prop
        alert(`${product.name} foi adicionado ao carrinho!`); // Mostra o alerta
    };

    return (
        <div className="products-container">
            <h1>Lista de Produtos</h1>
            {/* Passa o handleAddToCart para o ProductList */}
            <ProductList onAddToCart={handleAddToCart} />
        </div>
    );
};

export default Products;
