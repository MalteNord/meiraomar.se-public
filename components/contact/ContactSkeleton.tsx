export default function ContactSkeleton() {
  return (
    <div className="container-page pt-10 pb-16 !mx-0">
      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-start">
        {/* Contact persons section */}
        <section className="flex-1 max-w-xl">
          {/* Page title */}
          <div className="h-9 sm:h-10 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-40" />

          <div className="mt-8 grid gap-16">
            {Array.from({ length: 2 }, (_, i) => `contact-skeleton-${i}`).map((key) => (
              <div key={key} className="space-y-2">
                {/* Person title */}
                <div className="h-6 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-48" />
                {/* Description */}
                <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-64" />
                {/* Email */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse" />
                  <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-44" />
                </div>
                {/* Phone */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse" />
                  <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-32" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
