/**
 * Product List Component
 * Fetches and displays all products with search and sort
 */

import { fetchProducts } from '@/lib/api';
import { Product } from '@/lib/types';
import { ProductsGrid } from './ProductsGrid';
import { ErrorMessage } from './ErrorMessage';

export async function ProductList() {
  let products: Product[];
  try {
    products = await fetchProducts();
  } catch {
    return (
      <ErrorMessage
        title="Failed to load products"
        message="We couldn't load the products. Please try again later."
      />
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-text-secondary">No products found.</p>
      </div>
    );
  }

  return <ProductsGrid initialProducts={products} />;
}
