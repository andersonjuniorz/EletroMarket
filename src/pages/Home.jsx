import React from "react";
import { Link } from "react-router-dom";
import '../Styles/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bem-vindo ao Meu Site</h1>
        <p className="home-description">Esta é a página inicial do nosso site. Explore nossos produtos, conheça mais sobre nós e entre em contato!</p>
        <div className="home-buttons">

            <Link to="/products">
                <button className="btn-primary">Ver Produtos</button>            
            </Link>

            <Link to="/About">
                <button className="btn-secondary">Saiba Mais</button>            
            </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
