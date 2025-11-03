import { createContext, useReducer } from "react";

import {cartInitialState, cartReducer} from '../reducers/cart.js';

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export default function CartProvider({children}) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  /**
   *
   * @param item
   */
  const addItem = (item) => dispatch({
    type: 'ADD_ITEM',
    payload: item,
  });

  /**
   *
   * @param id
   */
  const removeItem = (id) => dispatch({
    type: 'REMOVE_ITEM',
    payload: id,
  });

  /**
   *
   * @param id
   */
  const addQty = (id) => dispatch({
    type: 'ADD_QTY',
    payload: id,
  });

  /**
   *
   * @param id
   */
  const subtractQty = (id) => dispatch({
    type: 'SUBTRACT_QTY',
    payload: id,
  });

  /**
   *
   * @param id
   * @returns {boolean}
   */
  const existsItem = (id) => {
    return !!state.find((item) => item.id === id)
  }

  /**
   *
   * @returns {number}
   */
  const totalItems = () => {
    let count = 0;

    state.forEach((item) => count += item.qty);

    return count;
  }

  return (
    <CartContext.Provider value={{
      cart: state,
      addItem,
      removeItem,
      addQty,
      subtractQty,
      existsItem,
      totalItems,
    }}>
      {children}
    </CartContext.Provider>
  );
}



