import { FaShoppingCart, FaFireAlt } from "react-icons/fa";

function Produtos(props) {
  return (

    <main>
      <div className='productCard'>
      <img src={props.image} alt={props.name} width={"100%"} className='ProductImage'/>

      <FaShoppingCart className="productCard__Cart"/>
      <FaFireAlt className="productCard__fastSelling"/>

      <div className='productCard_content'>
        <h3 className='productName'>{props.name}</h3>
        <div className="productPrice">${props.price}</div>
      </div>
    </div>
    </main>
  );
}

export default Produtos;
