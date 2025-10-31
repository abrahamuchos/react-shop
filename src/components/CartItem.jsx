/**
 * @typedef Item
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {number} price - Float
 * @property {number} discountPercentage - Float
 * @property {string} thumbnail
 * @property {number} qty
 */

import { useCart } from "../Hooks/useCart.js";

/**
 *
 * @param {Item} item
 * @returns {JSX.Element}
 * @constructor
 */
export default function CartItem({item}) {
  const {removeItem, addQty, subtractQty} = useCart();

  /**
   *
   * @param {number} id
   */
  const handleRemoveItem = (id) => {
    removeItem(id);
  }

  const handleAddQty = (id) => {
    addQty(id);
  }

  const handleSubtractQty = (id) => {
    subtractQty(id);
  }

  return (
    <div className="flex justify-center items-center">
      <img
        src={item.thumbnail}
        alt={item.title}
        className='w-1/2 md:w-3/12'
      />

      {/*Cart Item Info*/}
      <div className='text-left'>
        <h3 className='text-lg font-bold mb-4'>{item.title}</h3>
        <div className='flex items-center gap-2'>
          <span className='font-bold'>Qty:</span>
          <button
            className='rounded-full border-2 border-gray-400 px-2.5'
            onClick={() => handleSubtractQty(item.id)}
            disabled={(item.qty === 1)}
          >
            -
          </button>
          <span>{item.qty}</span>
          <button
            className='rounded-full border-2 border-gray-400 px-2.5'
            onClick={() => handleAddQty(item.id)}
          >
            +
          </button>
        </div>

        <p><span className='font-bold'>Category: </span>{item.category}</p>
        <p><span className='font-bold'>Price: </span>${item.price}</p>
        <button
          className='border-2 border-gray-200 px-2.5 mt-2.5 hover:bg-gray-200'
          onClick={() => handleRemoveItem(item.id)}
        >
          Remove
        </button>
      </div>
      {/*End Cart Item Info*/}
    </div>
  );
}



