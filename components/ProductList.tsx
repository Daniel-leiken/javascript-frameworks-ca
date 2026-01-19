/**
 * Product List Component
 * Fetches and displays all products in a responsive grid
 */

import { fetchProducts } from '@/lib/api';
import { ProductCard } from './ProductCard';
import { ErrorMessage } from './ErrorMessage';

export async function ProductList() {
  try {
    const products = await fetchProducts();

    if (!products || products.length === 0) {
      return (
        <div className="py-12 text-center">
          <p className="text-gray-600">No products found.</p>
        </div>
      );
    }

    return (
      <div>
        {/* Product Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Showing <span className="font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <ErrorMessage
        title="Failed to load products"
        message="We couldn't load the products. Please try again later."
      />
    );
  }
}
