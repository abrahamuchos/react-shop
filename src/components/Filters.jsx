import { useId } from "react";
import { useFilters } from "../Hooks/useFilters.js";


export default function Filters() {
  const {filters, setFilters} = useFilters();
  //const [minPrice, setMinPrice] = useState(/**@type{number|string}*/ 0)
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    //setMinPrice(event.target.value);
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value,
    }));
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value,
    }));
  }

  return (
    <section className='w-full flex justify-between lg:max-w-screen-md'>
      <div className='flex gap-2'>
        <label htmlFor={minPriceFilterId}>Min Price:</label>
        <input
          type="range"
          id={minPriceFilterId}
          min='0'
          max='1000'
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div className='flex gap-2'>
        <label htmlFor={categoryFilterId}>Category:</label>
        <select name="category" id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </section>
  );
}



