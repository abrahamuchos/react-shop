import { createContext, useReducer } from "react";

const initialState = [];


const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const item = action.payload;
      return [
        ...state,
        {
          ...item,
          qty: 1
        }
      ]
    }
    case "REMOVE_ITEM": {
      const id = action.payload;
      return state.filter((item) => item.id !== id)
    }
    case "ADD_QTY": {
      const id = action.payload;
      const itemIndex = state.findIndex(item => item.id === id)

      if(itemIndex >= 0){
        return ([
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            qty: state[itemIndex].qty + 1
          },
          ...state.slice(itemIndex + 1)
        ]);
      }else{
        throw new Error(`Item no encontrado, no es posible agregar cantidad`);
      }
    }
    case "SUBTRACT_QTY": {
      const id = action.payload;
      const itemIndex = state.findIndex(item => item.id === id)

      if(itemIndex >= 0 && state[itemIndex].qty > 1){
        return ([
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            qty: state[itemIndex].qty - 1
          },
          ...state.slice(itemIndex + 1)
        ]);
      }else{
        throw new Error(`Item no encontrado, no es posible agregar cantidad`);
      }
    }
    default:
      throw new Error(`Acción no soportada: ${action.type}`);
  }
}


// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext();

export default function CartProvider({children}) {
  const [state, dispatch] = useReducer(reducer, initialState);

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



