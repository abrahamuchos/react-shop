import { useContext } from "react";
import { CartContext } from "../context/cart.jsx";

/**
 *
 * @param {Product} product
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({product}) {1
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
    <div className='flex flex-col gap-4 bg-white border-2 border-white rounded-2xl'>
      {/*Card Img*/}
      <img src={product.thumbnail} alt={product.title}/>
      {/*End Card Img*/}

      {/*Card Body*/}
      <div className='px-4 py-2 rounded-b-2xl'>
        {/*Card Info*/}
        <div>
          <h3 className='text-xl font-bold max-h-7 truncate'>{product.title}</h3>
          <p className='text-sm text-slate-800'>{product.category}</p>
          <p className='text-lg font-bold'>$ {product.price}</p>
        </div>
        {/*End Card Info*/}

        {/*Card CTA*/}
        <div className='mt-2'>
          <button
            className='btn-primary'
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



