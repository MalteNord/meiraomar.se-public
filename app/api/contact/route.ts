import { createClient } from "@sanity/client";
import type { NextRequest } from "next/server";
import { contactSchema } from "@/utils/validations";

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body) {
      return new Response(JSON.stringify({ ok: false, error: "Invalid request body" }), {
        status: 400,
      });
    }

    // Validate the form data
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid form data", issues: validation.error.issues }),
        { status: 400 }
      );
    }

    // Check for duplicate email
    const existingSubmission = await sanityClient.fetch(
      `*[_type == "contactSubmission" && email == $email][0]`,
      { email: validation.data.email }
    );

    if (existingSubmission) {
      return new Response(
        JSON.stringify({ ok: false, error: "A submission with this email already exists" }),
        { status: 400 }
      );
    }

    // Save to Sanity
    const submission = await sanityClient.create({
      _type: "contactSubmission",
      name: validation.data.name,
      email: validation.data.email,
      message: validation.data.message || "",
      submittedAt: new Date().toISOString(),
    });

    return Response.json({ ok: true, id: submission._id });
  } catch (error) {
    console.error("Error saving contact submission:", error);
    return new Response(JSON.stringify({ ok: false, error: "Failed to save submission" }), {
      status: 500,
    });
  }
}
