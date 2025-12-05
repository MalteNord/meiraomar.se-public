import { defineField, defineType } from "sanity";

export default defineType({
  name: "shopItem",
  title: "Shop Item",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      type: "url",
      validation: (Rule) =>
        Rule.required().uri({
          allowRelative: true,
          scheme: ["http", "https", "mailto", "tel"],
        }),
    }),
    defineField({
      name: "tag",
      type: "string",
      options: {
        list: [
          { title: "New", value: "New" },
          { title: "Exclusive", value: "Exclusive" },
          { title: "Limited", value: "Limited" },
          { title: "Sold Out", value: "Sold Out" },
          { title: "Men's", value: "Men's" },
          { title: "Women's", value: "Women's" },
          { title: "Unisex", value: "Unisex" },
          { title: "Kids", value: "Kids" },
          { title: "Hats", value: "Hats" },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      price: "price",
    },
    prepare({ title, media, price }) {
      return {
        title,
        subtitle: `${price} SEK`,
        media,
      };
    },
  },
});
