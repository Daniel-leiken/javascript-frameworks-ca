/**
 * Products Grid Component (Client-side)
 * Handles search and sort functionality
 */

'use client';

import { useState, useMemo } from 'react';
import { Product, SortOption } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { SearchBar } from './SearchBar';
import { SortDropdown } from './SortDropdown';

interface ProductsGridProps {
  initialProducts: Product[];
}

export function ProductsGrid({ initialProducts }: ProductsGridProps) {
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption | ''>('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return initialProducts;

    const lowerQuery = searchQuery.toLowerCase();
    return initialProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(lowerQuery) ||
        product.description.toLowerCase().includes(lowerQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  }, [initialProducts, searchQuery]);

  const sortedProducts = useMemo(() => {
    const products = [...filteredProducts];

    switch (sortOption) {
      case 'name-asc':
        return products.sort((a, b) => a.title.localeCompare(b.title));
      case 'name-desc':
        return products.sort((a, b) => b.title.localeCompare(a.title));
      case 'price-asc':
        return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
      case 'price-desc':
        return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
      case 'rating-desc':
        return products.sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  }, [filteredProducts, sortOption]);

  const handleClearSearch = () => {
    setInputValue('');
    setSearchQuery('');
  };

  return (
    <div>
      {/* Search and Sort Controls */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1 sm:max-w-md">
          <SearchBar
            query={inputValue}
            onQueryChange={setInputValue}
            onSearch={setSearchQuery}
          />
        </div>
        <SortDropdown value={sortOption} onChange={setSortOption} />
      </div>

      {/* Results Count */}
      <div className="mb-6 flex items-center justify-between">
        <p className="text-sm text-text-secondary">
          Showing <span className="font-semibold">{sortedProducts.length}</span>
          {searchQuery && ' matching'} products
        </p>
        {searchQuery && (
          <button
            onClick={handleClearSearch}
            className="text-sm text-brand hover:text-brand-dark"
          >
            Clear search
          </button>
        )}
      </div>

      {/* Products Grid */}
      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <p className="text-text-secondary">
            No products found matching &quot;{searchQuery}&quot;. Try a different search term.
          </p>
        </div>
      )}
    </div>
  );
}
