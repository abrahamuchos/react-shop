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
import { useFilters } from "../Hooks/useFilters.js";
import { products } from '../mocks/products.json';

import Card from "./Card.jsx";

export default function Products() {
  const {filterProduct} = useFilters();

  const filteredProduct = filterProduct(products);

  return (
    <section>
      <ul className='w-full grid grid-cols-1
      md:grid-cols-2 md:gap-2
      lg:grid-cols-4 lg:gap-4'>
        {filteredProduct.map((product) => (
          <li key={product.id}>
            <Card product={product}/>
          </li>
        ))}
      </ul>

    </section>
  );
}



