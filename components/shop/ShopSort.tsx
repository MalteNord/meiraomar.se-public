"use client";

import { Select } from "@/components/ui/Select";

type SortOption = "default" | "name-az" | "name-za" | "price-low" | "price-high" | "tag-grouped";

interface ShopSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export default function ShopSort({ value, onChange }: ShopSortProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as SortOption);
  };

  return (
    <>
      <div className="mt-6 mb-4 flex items-center gap-3">
        <label htmlFor="sort-select" className="text-sm text-[var(--foreground-muted)]">
          Sort by:
        </label>
        <Select id="sort-select" value={value} onChange={handleChange}>
          <option value="default">Default</option>
          <option value="name-az">Name: A-Z</option>
          <option value="name-za">Name: Z-A</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="tag-grouped">Tag: Grouped</option>
        </Select>
      </div>

      <div />
    </>
  );
}

export type { SortOption };
