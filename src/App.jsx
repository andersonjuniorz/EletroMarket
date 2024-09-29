import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <h1>Bem-vindo ao EletroMarket!</h1>
        <p>Esta é uma simples aplicação de carrinho de compras.</p>
      </div>
    </div>
  )
}