/**
 * Empty Cart Component
 * Displayed when cart has no items
 */

import Link from 'next/link';

export function EmptyCart() {
  return (
    <div className="mt-16 text-center">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-brand-light">
        <svg
          className="h-12 w-12 text-brand"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
      <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
        Your cart is empty
      </h2>
      <p className="mt-2 text-text-secondary">
        Start shopping to add items to your cart
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        Browse Products
      </Link>
    </div>
  );
}
