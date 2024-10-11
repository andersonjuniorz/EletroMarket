import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'; // Adicionando os ícones de redes sociais
import '../Styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", formData);
        alert("Mensagem enviada com sucesso!");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h1 className="contact-title">Entre em Contato</h1>
                
                <section className="contact-section">
                    <p>Estamos sempre aqui para ajudar! Se você tiver alguma dúvida, sugestão ou feedback, não hesite em entrar em contato conosco.</p>
                    
                    <h2>Formulário de Contato</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <div className="input-group">
                                <FontAwesomeIcon icon={faUser} className="input-icon" />
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <div className="input-group">
                                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message">Mensagem:</label>
                            <div className="input-group">
                                <FontAwesomeIcon icon={faComment} className="input-icon" />
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn-submit">Enviar Mensagem</button>
                    </form>
                </section>

                <section className="contact-section">
                    <h2>Nosso Endereço</h2>
                    <p>Avenida da Tecnologia, 123<br />Rio de Janeiro, RJ, 01234-567</p>
                </section>

                <section className="contact-section">
                    <h2>Formas de Contato</h2>
                    <p>Email: contato@eletromarket.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                </section>

                <section className="contact-section">
                    <h2>Siga-nos</h2>
                    <p>Fique por dentro das novidades e promoções seguindo nossas redes sociais:</p>
                    <ul className="social-links">
                        <li>
                            <a href="https://www.facebook.com/eletromarket" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="social-icon" /> Facebook
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/eletromarket" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="social-icon" /> Instagram
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/eletromarket" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} className="social-icon" /> Twitter
                            </a>
                        </li>
                    </ul>
                </section>

                <div className="contact-buttons">
                    <Link to="/about">
                        <button className="btn-secondary">Sobre Nós</button>
                    </Link>
                    <Link to="/products">
                        <button className="btn-secondary">Ver Produtos</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Contact;
