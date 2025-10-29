import { useContext } from "react";

import { CartContext } from "../context/cart.jsx";


function useCart(){
  const {cart, setCart} =  useContext(CartContext);

  /**
   * Add new item into cart
   * @param {Product} item
   * @param {number} [qty=1]
   */
  const addItem = (item, qty = 1) => {
    setCart((prevState) => ([
      ...prevState,
      {
        ...item,
        qty: qty,
      },
    ]));
  }

  /**
   * Remove an item from a cart
   * @param {number} id - Product id
   */
  const removeItem = (id) => {
    setCart((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
  }

  /**
   * Validate if item exists into cart
   * @param id
   * @returns {boolean}
   */
  const existsItem = (id) => {
    return !!cart.find((item) => item.id === id)
  }

  const addQty = (id) => {
    setCart((prevState) => {
      const itemToUpdate = prevState.find(item => item.id === id);

      return ([
        ...prevState.filter((item) => item !== itemToUpdate),
        {
          ...itemToUpdate,
          qty: itemToUpdate.qty + 1,
        },
      ]);
    });
  }

  const subtractQty = (id) => {
    setCart((prevState) => {
      const itemToUpdate = prevState.find(item => item.id === id);

      if(itemToUpdate.qty === 1) {
        return prevState;

      }else{
        return ([
          ...prevState.filter((item) => item !== itemToUpdate),
          {
            ...itemToUpdate,
            qty: itemToUpdate.qty - 1,
          },
        ]);
      }
    });
  }

  return {cart, addItem, removeItem, existsItem, addQty, subtractQty}
}

export { useCart };