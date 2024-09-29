import logo from '../assets/logo.png'; // Coloque a imagem da logo na pasta assets

function Sidebar() {
  return (
    <div className="bg-dark text-white" style={{ width: '250px', height: '100vh' }}>
      <div className="d-flex align-items-center p-3">
        <img src={logo} alt="Logo" className="me-2" style={{ width: '40px', height: '40px', borderRadius: '100%' }} />
        <h4 className="m-0">EletroMarket</h4>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-dark text-white">
          <a href="#" className="text-white">Home</a>
        </li>
        <li className="list-group-item bg-dark text-white">
          <a href="#" className="text-white">Produtos</a>
        </li>
        <li className="list-group-item bg-dark text-white">
          <a href="#" className="text-white">Sobre</a>
        </li>
        <li className="list-group-item bg-dark text-white">
          <a href="#" className="text-white">Contato</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
