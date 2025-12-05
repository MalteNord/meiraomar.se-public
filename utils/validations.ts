import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
