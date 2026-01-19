/**
 * Header Component
 * Displays site navigation and shopping cart indicator
 */

'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { ShoppingCart } from './icons/ShoppingCart';

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">
              ShopHub
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>

          {/* Cart Button */}
          <Link
            href="/cart"
            className="relative flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Navigation */}
        <nav className="flex md:hidden items-center space-x-6 pb-3">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Products
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
