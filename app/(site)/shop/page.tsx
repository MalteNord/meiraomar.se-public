import { Suspense } from "react";
import ShopContent from "@/components/shop/ShopContent";
import ShopGrid from "@/components/shop/ShopGrid";
import ShopSkeleton from "@/components/shop/ShopSkeleton";
import { getShopItems } from "@/lib/cms.client";

export default function ShopPage() {
  return (
    <section className="container-page pt-10 pb-16">
      <h1 className="text-3xl sm:text-4xl font-display">Shop</h1>
      <Suspense fallback={<ShopSkeleton />}>
        <ShopDataLoader />
      </Suspense>
    </section>
  );
}

async function ShopDataLoader() {
  const items = await getShopItems();
  return (
    <ShopContent>
      <ShopGrid items={items} />
    </ShopContent>
  );
}
