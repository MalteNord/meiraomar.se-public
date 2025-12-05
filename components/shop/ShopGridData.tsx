import { cacheLife, cacheTag } from "next/cache";
import { sanityClient } from "@/lib/cms.client";
import type { ShopItem } from "@/types/shop";
import ShopGrid from "./ShopGrid";

export default async function ShopGridData() {
  "use cache";
  cacheLife("minutes");
  cacheTag("shop-grid-items");
  const query = `*[_type == "shopItem"] | order(_createdAt desc) {
    "id": _id,
    name,
    price,
    "image": image.asset->url,
    tag,
    link
  }`;

  const items = await sanityClient.fetch<ShopItem[]>(query);

  return <ShopGrid items={items} />;
}
