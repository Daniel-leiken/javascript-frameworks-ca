/**
 * Header Component
 * Minimal, elegant navigation for a small menu
 */

'use client';

import Link from 'next/link';
import { useCartStore } from '@/lib/store';
import { ShoppingCart } from './icons/ShoppingCart';

export function Header() {
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-custom bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-serif text-xl sm:text-2xl font-bold text-foreground tracking-wide">
              ShopHub
            </span>
          </Link>

          {/* Navigation + Cart — always visible, even on mobile */}
          <nav className="flex items-center gap-6 sm:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
            >
              Contact
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative flex items-center gap-2 rounded-full bg-brand px-3 sm:px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-[10px] font-bold text-background">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
