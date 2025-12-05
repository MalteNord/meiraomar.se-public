import { defineField, defineType } from "sanity";

export default defineType({
  name: "showDate",
  title: "Show Date",
  type: "document",
  fields: [
    defineField({
      name: "event",
      type: "string",
      description: "Name of the event or tour",
    }),
    defineField({
      name: "city",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "venue",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "country",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "soldOut",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "link",
      type: "url",
      description: "Optional link to ticket purchase or event details",
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ["http", "https"],
        }),
    }),
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "venue",
      date: "date",
    },
    prepare({ title, subtitle, date }) {
      return {
        title: `${title} - ${subtitle}`,
        subtitle: new Date(date).toLocaleDateString(),
      };
    },
  },
});
