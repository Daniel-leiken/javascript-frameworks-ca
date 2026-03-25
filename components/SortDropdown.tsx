/**
 * Sort Dropdown Component
 * Allows users to sort products by various criteria
 */

'use client';

import { SortOption } from '@/lib/types';

interface SortDropdownProps {
  value: SortOption | '';
  onChange: (option: SortOption) => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-text-secondary">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-xl border border-border-custom px-3 py-2 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand"
      >
        <option value="">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="rating-desc">Rating (High to Low)</option>
      </select>
    </div>
  );
}
