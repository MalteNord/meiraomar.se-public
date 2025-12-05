import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSettings",
  title: "Contact Settings",
  type: "document",
  fields: [
    defineField({
      name: "enabled",
      title: "Enable Contact Page",
      type: "boolean",
      description: "Toggle to show or hide the contact page and navigation link",
      initialValue: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Page Subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      enabled: "enabled",
    },
    prepare({ title, subtitle, enabled }) {
      return {
        title: title || "Contact Settings",
        subtitle: `${enabled ? "✓ Enabled" : "✗ Disabled"} • ${subtitle || ""}`,
      };
    },
  },
});
