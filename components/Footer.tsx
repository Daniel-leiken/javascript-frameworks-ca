/**
 * Footer Component
 * Minimal, centered footer
 */

import Link from 'next/link';
import { Logo } from './icons/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          {/* Brand */}
          <Link href="/" className="inline-flex justify-center">
            <Logo size="sm" />
          </Link>

          {/* Navigation */}
          <nav className="mt-6 flex items-center justify-center gap-6 text-sm">
            <Link href="/" className="text-text-secondary transition-colors hover:text-foreground">
              Products
            </Link>
            <span className="text-border-custom">|</span>
            <Link href="/contact" className="text-text-secondary transition-colors hover:text-foreground">
              Contact
            </Link>
            <span className="text-border-custom">|</span>
            <Link href="/cart" className="text-text-secondary transition-colors hover:text-foreground">
              Cart
            </Link>
          </nav>

          {/* Copyright */}
          <div className="mt-8 text-xs text-text-secondary">
            <p>&copy; {currentYear} ShopHub. All rights reserved.</p>
            <p className="mt-1">JavaScript Frameworks Course Assignment — Noroff</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
