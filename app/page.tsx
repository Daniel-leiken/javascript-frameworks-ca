import { Suspense } from 'react';
import { Metadata } from 'next';
import { ProductList } from '@/components/ProductList';
import { LoadingPage } from '@/components/LoadingSpinner';

export const metadata: Metadata = {
  title: 'Products | ShopHub',
  description: 'Browse our collection of quality products at great prices. Find amazing deals and discounts on top-rated items.',
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Discover Amazing Products
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Browse our collection of quality products at great prices
        </p>
      </div>

      {/* Product Grid */}
      <Suspense fallback={<LoadingPage />}>
        <ProductList />
      </Suspense>
    </div>
  );
}
