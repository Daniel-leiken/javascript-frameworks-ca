/**
 * Checkout Success Page
 */

import { Metadata } from 'next';
import { CheckoutSuccess } from '@/components/CheckoutSuccess';

export const metadata: Metadata = {
  title: 'Order Successful | ShopHub',
  description: 'Your order has been placed successfully',
};

export default function CheckoutSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <CheckoutSuccess />
    </div>
  );
}
