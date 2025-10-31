import { useContext } from "react";

import { CartContext } from "../context/cart.jsx";


function useCart(){
  const {cart, setCart } =  useContext(CartContext);

  /**
   * Add new item into cart
   * @param {Product} item
   * @param {number} [qty=1]
   */
  const addItem = (item, qty = 1) => {
    setCart((prevCart) => ([
      ...prevCart,
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
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
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

  /**
   * Add quantity
   * @param {number} id - Product id
   */
  const addQty = (id) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find(item => item.id === id);

      return ([
        ...prevCart.filter((item) => item.id !== id),
        {
          ...itemToUpdate,
          qty: itemToUpdate.qty + 1,
        },
      ]);
    });
  }

  /**
   * Subtract quantity
   * @param {number} id - Product id
   */
  const subtractQty = (id) => {
    setCart((prevCart) => {
      const itemToUpdate = prevCart.find(item => item.id === id);

      if(itemToUpdate.qty === 1) {
        return prevCart;

      }else{
        return ([
          ...prevCart.filter((item) => item !== itemToUpdate),
          {
            ...itemToUpdate,
            qty: itemToUpdate.qty - 1,
          },
        ]);
      }
    });
  }

  /**
   * Count all items into a cart
   * @returns {number}
   */
  const totalItems = () => {
    let count = 0;

    cart.forEach((item) => count += item.qty);

    return count;
  }

  return {cart, addItem, removeItem, existsItem, addQty, subtractQty, totalItems}
}

export { useCart };