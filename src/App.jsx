import { Routes, Route } from 'react-router-dom';

//Components
import Sidebar from './components/Sidebar';

//Pages
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Produtos from './pages/Produtos';
import Contatos from './pages/Contatos';

export default function App() {
  return (
<div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/produtos" element={<Produtos/>} />
          <Route path="/sobre" element={<Sobre/>} />
          <Route path="/contato" element={<Contatos/>} />
        </Routes>
      </div>
    </div>
  )
}