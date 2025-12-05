import { defineField, defineType } from "sanity";

export default defineType({
  name: "showsSettings",
  title: "Shows Settings",
  type: "document",
  fields: [
    defineField({
      name: "subtitle",
      title: "Shows Subtitle",
      type: "string",
      description: "Optional subtitle to display on the shows page",
    }),
  ],
  preview: {
    select: {
      subtitle: "subtitle",
    },
    prepare({ subtitle }) {
      return {
        title: "Shows Page Settings",
        subtitle: subtitle || "No subtitle set",
      };
    },
  },
});
