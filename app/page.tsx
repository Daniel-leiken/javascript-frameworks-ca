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
    <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8 lg:mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl lg:text-5xl">
          Discover Amazing Products
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200">
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
