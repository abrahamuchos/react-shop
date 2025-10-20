import Card from "./Card.jsx";

import { products } from '../mocks/products.json';

export default function Products() {

  return (
    <section>
      <ul className='w-full grid grid-cols-1
      md:grid-cols-2 md:gap-2
      lg:grid-cols-4 lg:gap-4'>
        {products.map((product) => (
          <li key={product.id}>
            <Card product={product}/>
          </li>
        ))}
      </ul>

    </section>
  );
}



