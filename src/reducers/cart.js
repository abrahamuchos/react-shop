/**
 * @typedef {object} State - Item state
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {number} price - Float
 * @property {number} discountPercentage - Float
 * @property {string} thumbnail
 * @property {number} qty
 */
/**
 * @typedef {object} Action
 * @property {'ADD_ITEM' | 'REMOVE_ITEM' | 'ADD_QTY' | 'SUBTRACT_QTY' } type
 * @property {number} [payload] - Data.
 */
/**
 * @typedef {[State, function(Action): void]} UseCartResult
 * El array retornado por el hook useCounter: [estado, dispatch].
 */
export const cartInitialState = [];

/**
 *
 * @param {Array<State>} state
 * @param action
 * @returns {Array<State>}
 */
export const cartReducer = (state, action) => {
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