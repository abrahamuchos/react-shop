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
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart'))|| [];

/**
 *
 * @param {Array<State>} cart
 */
const updateLocalStorage = (cart) => {
  const cartParse = JSON.stringify(cart);
  window.localStorage.setItem('cart', cartParse);
}

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
      const newState = [
        ...state,
        {
          ...item,
          qty: 1
        }
      ];
      updateLocalStorage(newState);

      return newState
    }
    case "REMOVE_ITEM": {
      const id = action.payload;
      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);

      return newState;
    }
    case "ADD_QTY": {
      const id = action.payload;
      const itemIndex = state.findIndex(item => item.id === id)

      if(itemIndex >= 0){
        const newState = [
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            qty: state[itemIndex].qty + 1
          },
          ...state.slice(itemIndex + 1)
        ];
        updateLocalStorage(newState);

        return newState;
      }else{
        throw new Error(`Item not found, it is not possible to add quantity`);
      }
    }
    case "SUBTRACT_QTY": {
      const id = action.payload;
      const itemIndex = state.findIndex(item => item.id === id)

      if(itemIndex >= 0 && state[itemIndex].qty > 1){
        const newState = [
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            qty: state[itemIndex].qty - 1
          },
          ...state.slice(itemIndex + 1)
        ];
        updateLocalStorage(newState);

        return newState;
      }else{
        throw new Error(`Item not found, quantity cannot be subtracted`);
      }
    }
    default:
      throw new Error(`Action cannot be support: ${action.type}`);
  }
}