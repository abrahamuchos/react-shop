/**
 * @typedef Product
 * @property {number} id
 * @property {string} title
 * @property {string} description
 * @property {string} category
 * @property {number} price - Float
 * @property {number} discountPercentage - Float
 * @property {number} rating - Float
 * @property {number} stock - Float
 * @property {Array<string>} images
 * @property {string} thumbnail
 */

/**
 *
 * @param {Product} product
 * @returns {JSX.Element}
 * @constructor
 */
export default function Card({product}) {

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
          <button className='bg-red-400 py-2 px-4 rounded-lg'>Add Cart</button>
        </div>
        {/*End Card CTA*/}
      </div>
      {/*End Card Body*/}
    </div>
  );
}



