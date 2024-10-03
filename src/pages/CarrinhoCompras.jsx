import React from 'react';

function CarrinhoCompras({ cartItems, removeFromCart }) {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <div className="productList">
          {cartItems.map(item => (
            <div className='productCard' key={item.id}>
              <img src={item.image} alt={item.name} className='ProductImage' />
              
              <div className='productCard_content'>
                <h3 className='productName'>{item.name}</h3>
                <div className="productPrice">${item.price}</div>
                
                <button onClick={() => removeFromCart(item.id)} className="addToCartButton">
                  Remover
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CarrinhoCompras;
