/**
 * API integration for Noroff Online Shop API
 * Documentation: https://docs.noroff.dev/docs/v2/basic/online-shop
 */

import { Product, ApiResponse, ApiError } from './types';

const API_BASE_URL = 'https://v2.api.noroff.dev/online-shop';

/**
 * Fetch all products from the API
 * GET /online-shop
 */
export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Ensure fresh data on each request
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const result: ApiResponse<Product[]> = await response.json();
    return result.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetch a single product by ID
 * GET /online-shop/<id>
 */
export async function fetchProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Product not found');
      }
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    const result: ApiResponse<Product> = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
}

/**
 * Search products by query string
 * Performs client-side filtering of products
 */
export async function searchProducts(query: string): Promise<Product[]> {
  const products = await fetchProducts();
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) {
    return products;
  }

  return products.filter(product =>
    product.title.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Handle API errors consistently
 */
export function handleApiError(error: unknown): ApiError {
  if (error instanceof Error) {
    return {
      message: error.message,
      statusCode: 500,
    };
  }
  return {
    message: 'An unexpected error occurred',
    statusCode: 500,
  };
}
