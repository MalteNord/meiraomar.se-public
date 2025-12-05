import { Suspense } from "react";
import ShowList from "@/components/shows/ShowList";
import ShowSkeleton from "@/components/shows/ShowSkeleton";
import { getShowDates, getShowsSettings } from "@/lib/cms.client";

export default function ShowsPage() {
  return (
    <section className="container-page pt-10 pb-16">
      <h1 className="text-3xl sm:text-4xl font-display">Shows</h1>
      <Suspense fallback={<ShowSkeleton />}>
        <ShowDataLoader />
      </Suspense>
    </section>
  );
}

async function ShowDataLoader() {
  const [dates, settings] = await Promise.all([getShowDates(), getShowsSettings()]);

  return (
    <>
      <ShowList dates={dates} />
      {settings?.subtitle && <p className="mt-12 text-2xl text-center">{settings.subtitle}</p>}
    </>
  );
}
