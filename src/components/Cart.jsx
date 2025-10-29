import { useState } from "react";

import CartItem from "./CartItem.jsx";

import { FaShoppingCart } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Cart() {
  const [isVisible, setIsVisible] = useState(/**@type {boolean}*/false)

  const handleToggleCart = () => {
    setIsVisible(prevState => !prevState)
  }

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
        <ul className='w-full'>
          <li>
            <CartItem/>
          </li>
          <hr/>
          <li>
            <CartItem/>
          </li>
          <hr/>
        </ul>

        {/*Cart Info*/}
        <div className='text-right'>
          <h3 className='text-xl'>Sub Total: $3405</h3>
          <h3 className='text-xl'>Tax (16%): $100</h3>
          <h3 className='text-3xl mt-2.5'>Total: $3505</h3>
        </div>
        {/*End Cart Info*/}
      </aside>
      {/*End Cart list items*/}
    </>
  );
}



