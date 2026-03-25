/**
 * Not Found Page for Product Details
 */

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="font-serif text-4xl font-bold text-foreground">Product Not Found</h1>
        <p className="mt-4 text-lg text-text-secondary">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Back to Products
        </Link>
      </div>
    </div>
  );
}
