import './App.css';
import AppRoutes from './Router';
import { CartProvider } from './CartProvider';

function App() {
  return (
    <CartProvider>
      <AppRoutes />
    </CartProvider>
  );
}

export default App;
