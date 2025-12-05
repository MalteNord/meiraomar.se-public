import { defineField, defineType } from "sanity";

export default defineType({
  name: "heroSettings",
  title: "Hero Settings",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Hero Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
