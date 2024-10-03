import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Sidebar() {
  return (
    <div className="bg-dark text-white" style={{ width: '250px' }}>
      <div className="d-flex align-items-center p-3">
        <img src={logo} alt="Logo" className="me-2" style={{ width: '40px', height: '40px', borderRadius: '100%' }} />
        <h4 className="m-0">EletroMarket</h4>
      </div>
      <ul className="list-group list-group-flush">
        <hr />
        <li className="list-group-item bg-dark">
          <Link to="/" className="sidebar-link">Home</Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/sobre" className="sidebar-link">Sobre</Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/produtos" className="sidebar-link">Produtos</Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/carrinhoCompras" className="sidebar-link">Carrinho de Compras</Link>
        </li>
        <li className="list-group-item bg-dark">
          <Link to="/contato" className="sidebar-link">Contato</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
