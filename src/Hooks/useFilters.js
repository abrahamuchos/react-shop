import { useContext } from "react";

import { FiltersContext } from "../context/filters.jsx";

/**
 * Custom Hook to filter products by category or min price
 * @returns {{setFilters: unknown, filterProduct: (function(Array<Product>): {id: number, title: string, description: string, category: string, price: number, discountPercentage: number, rating: number, stock: number, images: Array<string>, thumbnail: string}[]), filters: React.Context}}
 */
function useFilters() {
  const {filters, setFilters} = useContext(FiltersContext);

  /**
   * Filter product by category or min price
   * @param {Array<Product>} products
   * @returns {Array<Product>}
   */
  const filterProduct = (products) => {
    return products.filter((product) => {
      return product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
    });
  }

  return {filters, setFilters, filterProduct,}
}

export {useFilters};