import React from 'react';
import '../components/styles/Card.css';

const RemoveCard = ({ title, image, price, qtd, onRemove }) => {
    return (
        <div className="card-container">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-price">Preço: R$ {price}</p>
                <p className="card-qtd">Quantidade: {qtd}</p>
                <button className="btn-add-to-cart" onClick={onRemove}>Remover do Carrinho</button>
            </div>
        </div>
    );
};


export default RemoveCard;
