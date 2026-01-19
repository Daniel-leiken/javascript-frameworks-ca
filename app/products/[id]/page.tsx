/**
 * Product Details Page
 * Dynamic route: /products/[id]
 */

import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { fetchProductById, fetchProducts } from '@/lib/api';
import { ProductDetail } from '@/components/ProductDetail';
import { LoadingPage } from '@/components/LoadingSpinner';

type Props = {
  params: Promise<{ id: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  try {
    const product = await fetchProductById(id);
    return {
      title: `${product.title} | ShopHub`,
      description: product.description,
    };
  } catch {
    return {
      title: 'Product Not Found | ShopHub',
    };
  }
}

// Generate static params for all products (optional, for static generation)
export async function generateStaticParams() {
  try {
    const products = await fetchProducts();
    return products.map((product) => ({
      id: product.id,
    }));
  } catch {
    return [];
  }
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  
  try {
    const product = await fetchProductById(id);
    
    return (
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Suspense fallback={<LoadingPage />}>
          <ProductDetail product={product} />
        </Suspense>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
