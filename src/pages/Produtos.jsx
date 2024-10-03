function Produtos(props) {
  return (
    <main>
      <div className='productCard'>
        <img src={props.image} alt={props.name} width={"100%"} height={"100%"} className='ProductImage' />

        <div className='productCard_content'>
          <h3 className='productName'>{props.name}</h3>
          <div className="productPrice">${props.price}</div>

          <button onClick={() => props.addToCart(props.id)} className="addToCartButton">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    </main>
  );
}

export default Produtos;
