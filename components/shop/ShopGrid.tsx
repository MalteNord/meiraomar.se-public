"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Pagination } from "@/components/ui/Pagination";
import type { ShopItem } from "@/types/shop";
import { formatPrice } from "@/utils/format";
import { useShopSort } from "./ShopContent";

const ITEMS_PER_PAGE = 8;

export default function ShopGrid({ items }: { items: ShopItem[] }) {
  const { sortBy } = useShopSort();
  const [currentPage, setCurrentPage] = useState(1);

  // Sort items based on selected option
  const sortItems = (itemsToSort: ShopItem[]): ShopItem[] => {
    const sorted = [...itemsToSort];

    switch (sortBy) {
      case "name-az":
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
      case "name-za":
        return sorted.sort((a, b) => b.name.localeCompare(a.name));
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "tag-grouped":
        return sorted.sort((a, b) => {
          // Items with tags come first, sorted alphabetically by tag
          // Items without tags come last
          if (!a.tag && !b.tag) return 0;
          if (!a.tag) return 1;
          if (!b.tag) return -1;
          return a.tag.localeCompare(b.tag);
        });
      default:
        return sorted;
    }
  };

  const sortedItems = sortItems(items);

  // Calculate pagination
  const totalPages = Math.ceil(sortedItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = sortedItems.slice(startIndex, endIndex);

  // Reset to first page when sort changes
  // biome-ignore lint/correctness/useExhaustiveDependencies: sortBy change should trigger page reset
  useEffect(() => {
    setCurrentPage(1);
  }, [sortBy]);

  // Handle page change with scroll to top
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {currentItems.map((s) => {
          const cardContent = (
            <Card key={s.id} className="p-0 overflow-hidden">
              <div className="relative aspect-[4/5] bg-[color:rgba(255,255,255,.04)]">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  placeholder={s.blurDataURL ? "blur" : "empty"}
                  blurDataURL={s.blurDataURL}
                />

                {s.tag && (
                  <div className="absolute left-2 top-2">
                    <Badge>{s.tag}</Badge>
                  </div>
                )}
              </div>
              <div className="p-3 h-[82px] flex flex-col">
                <p className="text-sm line-clamp-2">{s.name}</p>
                <p className="text-xs">{formatPrice(s.price)}</p>
              </div>
            </Card>
          );

          return s.link ? (
            <Link href={s.link} target="_blank" key={s.id}>
              {cardContent}
            </Link>
          ) : (
            cardContent
          );
        })}
      </div>

      {/* Show pagination only if there are more than 8 items */}
      <Link
        href="https://meira.merchmakers.se/"
        target="_blank"
        className="flex justify-center mt-4"
      >
        <Badge className="px-6 py-2">View all products</Badge>
      </Link>
      {sortedItems.length > ITEMS_PER_PAGE && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
