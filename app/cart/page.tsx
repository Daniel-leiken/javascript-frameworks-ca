/**
 * Shopping Cart Page
 */

import { Metadata } from 'next';
import { CartContent } from '@/components/CartContent';

export const metadata: Metadata = {
  title: 'Shopping Cart | ShopHub',
  description: 'Review your shopping cart and proceed to checkout',
};

export default function CartPage() {
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-200">Shopping Cart</h1>
      <CartContent />
    </div>
  );
}
