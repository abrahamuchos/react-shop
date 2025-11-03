import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

/**
 *
 * @param {Product} product
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({product}) {
  const {addItem, existsItem} = useContext(CartContext);
  const isInACart = existsItem(product.id);

  /**
   * Handle add item to cart
   * @param {Product} product
   */
  const handleAddCartItem = (product) => {
    addItem(product);
  }


  return (
    <div className='flex flex-col gap-4 border-2 border-violet-300 rounded-2xl'>
      {/*Card Img*/}
      <img src={product.thumbnail} alt={product.title}/>
      {/*End Card Img*/}

      {/*Card Body*/}
      <div className='px-4 py-2 border-t-2 border-violet-300 bg-violet-200 rounded-b-2xl'>
        {/*Card Info*/}
        <div>
          <h3 className='text-lg font-bold max-h-7 truncate'>{product.title}</h3>
          <span>{product.category}</span>
          <span>$ {product.price}</span>
        </div>
        {/*End Card Info*/}

        {/*Card CTA*/}
        <div className='mt-2'>
          <button
            className={(isInACart ? 'bg-red-300' : 'bg-red-400') + ' py-2 px-4 rounded-lg'}
            onClick={() => handleAddCartItem(product)}
            disabled={isInACart}
          >
            {isInACart ?
              'Añadido al carrito'
              : 'Agregar al carrito'
            }
          </button>
        </div>
        {/*End Card CTA*/}
      </div>
      {/*End Card Body*/}
    </div>
  );
}



