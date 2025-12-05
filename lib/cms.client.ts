import "server-only";

import { createClient } from "@sanity/client";
import { cacheLife } from "next/cache";
import type { ContactPerson, ContactSettings } from "@/types/contact";
import type { HeroSettings } from "@/types/hero";
import type { ShopItem } from "@/types/shop";
import type { ShowDate, ShowsSettings } from "@/types/shows";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false, // Disabled for development to avoid caching issues
});

export async function getShowDates(): Promise<ShowDate[]> {
  "use cache";
  cacheLife("minutes");

  const query = `*[_type == "showDate"] | order(date asc) {
    "id": _id,
    event,
    city,
    venue,
    country,
    date,
    soldOut,
    link
  }`;
  return sanityClient.fetch(query);
}

export async function getShopItems(): Promise<ShopItem[]> {
  "use cache";
  cacheLife("minutes");

  const query = `*[_type == "shopItem"] | order(_createdAt desc) {
    "id": _id,
    name,
    price,
    tag,
    link,
    "image": image.asset->url,
    "blurDataURL": image.asset->metadata.lqip
  }`;

  return sanityClient.fetch(query);
}

export async function getHeroSettings(): Promise<HeroSettings | null> {
  "use cache";
  cacheLife("hours");

  const query = `*[_type == "heroSettings"][0] {
    "id": _id,
    title,
    description
  }`;
  return sanityClient.fetch(query);
}

export async function getShowsSettings(): Promise<ShowsSettings | null> {
  "use cache";
  cacheLife("hours");

  const query = `*[_type == "showsSettings"][0] {
    "id": _id,
    subtitle
  }`;
  return sanityClient.fetch(query);
}

export async function getContactSettings(): Promise<ContactSettings | null> {
  "use cache";
  cacheLife("seconds");

  const query = `*[_type == "contactSettings"][0] {
    "id": _id,
    enabled,
    title,
    subtitle
  }`;
  return sanityClient.fetch(query);
}

export async function getContactPersons(): Promise<ContactPerson[]> {
  "use cache";
  cacheLife("hours");

  const query = `*[_type == "contactPerson"] | order(_createdAt asc) {
    "id": _id,
    title,
    description,
    email,
    phoneNumber
  }`;
  return sanityClient.fetch(query);
}
