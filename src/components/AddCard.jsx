// AddCard.jsx (ou o nome que você estiver usando para o componente de cartão de produto)
import React from 'react';
import '../components/styles/Card.css';

const ProductCard = ({ title, image, price, description, onAddToCart }) => {
  return (
    <div className="card-container">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-price">Preço: R$ {price}</p>
        <button className="btn-add-to-cart" onClick={onAddToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductCard;
