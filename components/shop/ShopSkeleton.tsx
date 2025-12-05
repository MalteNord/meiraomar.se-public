import { Card } from "@/components/ui/Card";

export default function ShopSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }, (_, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: skeleton items are static and never reorder
        <Card key={`skeleton-${i}`} className="p-0 overflow-hidden">
          <div className="relative aspect-[4/5] bg-[color:rgba(255,255,255,.08)] overflow-hidden">
            {/* Shimmer effect */}
            <div
              className="absolute inset-0 animate-shimmer"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)",
              }}
            />
            {/* Badge placeholder */}
            <div className="absolute left-2 top-2">
              <div className="h-5 w-16 bg-[color:rgba(255,255,255,.15)] rounded-full" />
            </div>
          </div>
          <div className="p-3 space-y-2">
            {/* Product name placeholder - 2 lines */}
            <div className="space-y-1.5">
              <div className="h-4 bg-[color:rgba(255,255,255,.12)] rounded w-full" />
              <div className="h-4 bg-[color:rgba(255,255,255,.12)] rounded w-2/3" />
            </div>
            {/* Price placeholder */}
            <div className="h-3 bg-[color:rgba(255,255,255,.1)] rounded w-20" />
          </div>
        </Card>
      ))}
    </div>
  );
}
