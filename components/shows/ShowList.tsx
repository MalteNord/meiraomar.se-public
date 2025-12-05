import Link from "next/link";
import { Card } from "@/components/ui/Card";
import type { ShowDate } from "@/types/shows";
import { formatDate } from "@/utils/format";

export default function ShowList({ dates }: { dates: ShowDate[] }) {
  return (
    <div className="mt-6 grid gap-4">
      {dates.map((d) => {
        const cardContent = (
          <Card key={d.id} className="flex items-center justify-between gap-4">
            <div className="flex-1">
              {d.event && <p className="text-lg font-medium">{d.event}</p>}
              <p className={d.event ? "text-sm opacity-80" : "text-lg"}>
                {d.city}, {d.country}
              </p>
            </div>
            {d.soldOut && (
              <div className="flex items-center">
                <span className="text-[10px] uppercase tracking-[0.14em] px-3 py-1 rounded bg-[color:rgba(255,255,255,.08)]">
                  Sold Out
                </span>
              </div>
            )}
            <div className="text-right">
              <p className="text-sm font-medium">{formatDate(d.date)}</p>
              <p className="text-sm opacity-80">{d.venue}</p>
            </div>
          </Card>
        );

        return d.link ? (
          <Link href={d.link} target="_blank" key={d.id}>
            {cardContent}
          </Link>
        ) : (
          cardContent
        );
      })}
    </div>
  );
}
