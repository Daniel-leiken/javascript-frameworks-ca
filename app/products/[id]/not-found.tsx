/**
 * Not Found Page for Product Details
 */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Product Not Found</h1>
        <p className="mt-4 text-lg text-gray-200">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg bg-emerald-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
