/**
 * Global state management using Zustand
 * Manages shopping cart state with persistence
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartItem, Product } from './types';

interface CartStore {
  items: CartItem[];
  
  // Add item to cart or increase quantity
  addItem: (product: Product) => void;
  
  // Remove item from cart
  removeItem: (productId: string) => void;
  
  // Update item quantity
  updateQuantity: (productId: string, quantity: number) => void;
  
  // Clear entire cart
  clearCart: () => void;
  
  // Get total number of items
  getTotalItems: () => number;
  
  // Get total price
  getTotalPrice: () => number;
  
  // Get item by product ID
  getItem: (productId: string) => CartItem | undefined;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.product.id === product.id
          );

          if (existingItem) {
            // Increase quantity if item already exists
            return {
              items: state.items.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          } else {
            // Add new item to cart
            return {
              items: [...state.items, { product, quantity: 1 }],
            };
          }
        });
      },

      removeItem: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0);
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) =>
            total + item.product.discountedPrice * item.quantity,
          0
        );
      },

      getItem: (productId) => {
        return get().items.find((item) => item.product.id === productId);
      },
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
