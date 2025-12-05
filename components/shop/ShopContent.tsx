"use client";

import { createContext, useContext, useState } from "react";
import ShopSort, { type SortOption } from "./ShopSort";

interface ShopSortContextValue {
  sortBy: SortOption;
  setSortBy: (value: SortOption) => void;
}

const ShopSortContext = createContext<ShopSortContextValue | null>(null);

export function useShopSort() {
  const context = useContext(ShopSortContext);
  if (!context) {
    throw new Error("useShopSort must be used within ShopContent");
  }
  return context;
}

interface ShopContentProps {
  children: React.ReactNode;
}

export default function ShopContent({ children }: ShopContentProps) {
  const [sortBy, setSortBy] = useState<SortOption>("default");

  return (
    <ShopSortContext.Provider value={{ sortBy, setSortBy }}>
      <ShopSort value={sortBy} onChange={setSortBy} />
      {children}
    </ShopSortContext.Provider>
  );
}

export type { SortOption };
