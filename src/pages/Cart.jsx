import React from 'react';
import RemoveCard from '../Components/RemoveCard'; // Ajuste o caminho se necessário
import '../Styles/Cart.css';

const Cart = ({ cart, onRemove }) => {
    return (
        <div className="Cart-container">            
            <h1>Página do Carrinho</h1>
            {cart.length > 0 ? (
                <div className="cart-list"> {/* Adicione este contêiner */}
                    {cart.map((product) => (
                        <RemoveCard
                            key={product.id}
                            title={product.name}
                            image={product.image}
                            price={product.price}
                            qtd={product.qtd}
                            onRemove={() => onRemove(product.id)} // Chamando a função para remover
                        />
                    ))}
                </div>
            ) : (
                <p className='Empty-Cart'>Carrinho vazio</p>
            )}
        </div>
    );
};

export default Cart;
