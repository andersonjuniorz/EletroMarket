import React from 'react';

function Sobre() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Sobre Nós</h1>
      <p className="text-center">
        Bem-vindo ao EletroMarket, sua loja online de eletrônicos de confiança.
      </p>
      <p>
        Nossa missão é fornecer produtos de alta qualidade a preços acessíveis. 
        Com uma equipe dedicada, garantimos a melhor experiência de compra possível.
      </p>
      <h4>O que oferecemos:</h4>
      <ul className="list-group">
        <li className="list-group-item">Eletrônicos de última geração</li>
        <li className="list-group-item">Atendimento ao cliente excepcional</li>
        <li className="list-group-item">Envios rápidos e seguros</li>
        <li className="list-group-item">Garantia de satisfação</li>
      </ul>
    </div>
  );
}

export default Sobre;
