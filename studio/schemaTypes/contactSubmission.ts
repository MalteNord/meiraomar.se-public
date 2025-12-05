import { defineField, defineType } from "sanity";

export default defineType({
  name: "contactSubmission",
  title: "Contact Submissions",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) =>
        Rule.required()
          .email()
          .custom(async (email, context) => {
            if (!email) return true;

            const { document, getClient } = context;
            const client = getClient({ apiVersion: "2022-06-01" });

            // Query for existing documents with the same email, excluding the current document
            const query = `count(*[_type == "contactSubmission" && email == $email && _id != $id])`;
            const count = await client.fetch(query, {
              email,
              id: document?._id || "",
            });

            if (count > 0) {
              return "A submission with this email already exists";
            }

            return true;
          }),
      readOnly: true,
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
      readOnly: true,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
      submittedAt: "submittedAt",
    },
    prepare({ name, email, submittedAt }) {
      const date = submittedAt ? new Date(submittedAt).toLocaleDateString() : "Unknown date";
      return {
        title: name || "No name provided",
        subtitle: `${email} • ${date}`,
      };
    },
  },
  orderings: [
    {
      title: "Submitted Date, New",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
    {
      title: "Submitted Date, Old",
      name: "submittedAtAsc",
      by: [{ field: "submittedAt", direction: "asc" }],
    },
  ],
});
