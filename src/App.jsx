import Header from "./components/Header.jsx";
import Products from "./components/Products.jsx";
import Cart from "./components/Cart.jsx";

import './App.css'

function App() {

  return (
    <main className=''>
      <Header/>
      <Cart/>

      <div className="bg-blue-100 w-full h-[100px]"></div>

      <Products/>
    </main>
  )
}

export default App
