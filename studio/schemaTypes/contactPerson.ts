import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactPerson",
  title: "Contact Person",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Job title or role (e.g., 'Booking Manager', 'Press Contact')",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of what this contact handles",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required().email().error("Please enter a valid email address"),
    }),
    defineField({
      name: "phoneNumber",
      title: "Phone Number",
      type: "string",
      description: "Optional phone number for this contact",
    }),
  ],
  preview: {
    select: {
      title: "title",
      email: "email",
      phone: "phoneNumber",
    },
    prepare({ title, email, phone }) {
      return {
        title: title || "Untitled Contact",
        subtitle: phone ? `${email} • ${phone}` : email,
      };
    },
  },
});
