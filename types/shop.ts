export type ShopItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: "New" | "Exclusive" | "Limited" | "Sold Out";
  link: string;
  blurDataURL?: string;
};
