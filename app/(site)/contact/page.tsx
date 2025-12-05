import { cacheLife, cacheTag } from "next/cache";
import { Suspense } from "react";
import ContactPersonList from "@/components/contact/ContactPersonList";
import ContactSkeleton from "@/components/contact/ContactSkeleton";
import ContactForm from "@/components/forms/ContactForm";
import { getContactPersons, getContactSettings } from "@/lib/cms.client";

async function ContactContent() {
  "use cache";
  cacheLife("minutes");
  cacheTag("contact-page");
  const settings = await getContactSettings();
  const persons = await getContactPersons();

  return (
    <div className="container-page pt-10 pb-16">
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        <section className="flex-1 max-w-xl">
          <h1 className="text-3xl sm:text-4xl font-display">Contact</h1>
          <div className="mt-8">
            <ContactPersonList persons={persons} />
          </div>
        </section>
        {settings?.enabled && (
          <section className="flex-1 max-w-2xl mt-10 pt-10 border-t border-[color:rgba(255,255,255,.06)] lg:mt-0 lg:pt-0 lg:border-t-0">
            <h1 className="text-3xl sm:text-4xl font-display">{settings?.title || "Contact"}</h1>
            <p className="mt-2 text-sm mb-6">{settings?.subtitle || "Get in touch with us"}</p>
            <ContactForm />
          </section>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactSkeleton />}>
      <ContactContent />
    </Suspense>
  );
}
