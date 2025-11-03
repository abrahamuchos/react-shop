import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { FiltersProvider } from "./context/filters.jsx";
import CartProvider from "./context/cart.jsx";

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <FiltersProvider>
      <App />
    </FiltersProvider>
  </CartProvider>
,
)
