import React from "react";
import { Link } from "react-router-dom";
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Sobre Nós</h1>
        
        <section className="about-section">
        
        <p>
            A EletroMarket é uma empresa de e-commerce especializada em tecnologia, 
            dedicada a fornecer os melhores produtos eletrônicos e acessórios para 
            nossos clientes. Com uma ampla variedade de produtos, desde smartphones 
            e computadores até gadgets inovadores, estamos aqui para atender 
            todas as suas necessidades tecnológicas. Nossa plataforma é fácil de usar, 
            tornando a compra de tecnologia acessível e conveniente para todos.
          </p>
            
          <h2>Missão</h2>
          <p>
            Nossa missão é oferecer produtos de alta qualidade que melhorem a vida dos nossos clientes, 
            proporcionando inovação e excelência em cada experiência.
          </p>
        </section>

        <section className="about-section">
          <h2>Visão</h2>
          <p>
            Ser a referência em nosso segmento de mercado, reconhecida pela qualidade de nossos produtos 
            e pela confiança que nossos clientes depositam em nós.
          </p>
        </section>

        <section className="about-section">
          <h2>Valores</h2>
          <ul>
            <li>Qualidade: Comprometemo-nos com a excelência em tudo o que fazemos.</li>
            <li>Inovação: Buscamos constantemente novas soluções para atender nossos clientes.</li>
            <li>Transparência: Valorizamos a honestidade e a ética em nossas relações.</li>
            <li>Responsabilidade: Atuamos de forma sustentável e consciente.</li>
          </ul>
        </section>

        <div className="about-buttons">
          <Link to="/products">
            <button className="btn-primary">Ver Produtos</button>
          </Link>
          <Link to="/contact">
            <button className="btn-secondary">Entre em Contato</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
