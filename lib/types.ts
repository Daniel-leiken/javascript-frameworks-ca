/**
 * TypeScript interfaces and types for the E-Commerce application
 */

// Product Review Interface
export interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

// Product Interface
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}

// Simplified Product for List View
export interface ProductListItem {
  id: string;
  title: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
}

// Cart Item Interface
export interface CartItem {
  product: Product;
  quantity: number;
}

// API Response Interface
export interface ApiResponse<T> {
  data: T;
  meta?: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
    totalCount: number;
  };
}

// Contact Form Data
export interface ContactFormData {
  fullName: string;
  subject: string;
  email: string;
  message: string;
}

// Form Validation Errors
export interface FormErrors {
  fullName?: string;
  subject?: string;
  email?: string;
  message?: string;
}

// Sort Options
export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'rating-desc';

// API Error Interface
export interface ApiError {
  message: string;
  statusCode?: number;
}
