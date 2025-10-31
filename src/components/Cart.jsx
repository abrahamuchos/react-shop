import { useEffect, useState } from "react";

import CartItem from "./CartItem.jsx";

import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { useCart } from "../Hooks/useCart.js";

export default function Cart() {
  const [isVisible, setIsVisible] = useState(/**@type {boolean}*/false)
  const [calc, setCalc] = useState({
    subtotal: 0,
    tax: 0,
    total: 0,
    totalItems: 0,
  });
  const {cart, totalItems} = useCart();

  /**
   * Show and hide cart
   */
  const handleToggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

  const calcCart = () => {
    let subTotal = 0;
    cart.forEach((item) => subTotal += (item.price * item.qty))
    const tax =  Math.round(((subTotal * 16)/100))/100;
    const total = Math.round((subTotal + tax) * 100)/100;

    return {subTotal, tax, total};
  }

  useEffect(() => {
    if(cart.length){
      const {subTotal, tax, total} = calcCart();
      const items = totalItems();

      setCalc({
        subtotal: subTotal,
        tax: tax,
        total: total,
        totalItems: items
      })
    }
  }, [cart]);

  return (
    <>
      {/*Cart CTA*/}
      <div className='flex justify-end my-5 lg:my-7'>
        <button className='bg-red-400 rounded-full p-2' onClick={handleToggleCart}>
          {isVisible ? <MdClose/> : <FaShoppingCart/>}
        </button>
      </div>
      {/*End Cart CTA*/}

      {/*Cart list items*/}
      <aside className={isVisible ? 'block' : 'hidden'}>
        <h2>My Cart</h2>
        <ul className='w-full'>
          {cart.map((item) => (
            <li key={item.id}>
              <CartItem item={item}/>
              <hr/>
            </li>
          ))
          }

        </ul>

        {/*Cart Info*/}
        <div className='text-right'>
          <h3 className='text-xl'>
            Sub Total ({calc.totalItems} product):
            <span className='font-bold pl-2.5'>US${calc.subtotal}</span>
          </h3>
          <h3 className='text-xl'>
            Tax (16%):
            <span className='font-bold pl-2.5'>US${calc.tax}</span>
          </h3>
          <h3 className='text-3xl mt-2.5'>Total:
            <span className='font-bold pl-2.5'>US${calc.total}</span>
          </h3>
        </div>
        {/*End Cart Info*/}
      </aside>
      {/*End Cart list items*/}
    </>
  );
}



