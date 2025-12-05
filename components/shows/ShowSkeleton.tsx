import { Card } from "@/components/ui/Card";

export default function ShowSkeleton() {
  return (
    <div className="mt-6 grid gap-4">
      {Array.from({ length: 5 }, (_, i) => `show-skeleton-${i}`).map((key) => (
        <Card key={key} className="flex items-center justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="h-5 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-1/2" />
            <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-1/3" />
          </div>
          <div className="flex items-center">
            <div className="h-6 w-20 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse" />
          </div>
          <div className="text-right space-y-2">
            <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-20 ml-auto" />
            <div className="h-4 bg-[color:rgba(255,255,255,.06)] rounded animate-pulse w-24 ml-auto" />
          </div>
        </Card>
      ))}
    </div>
  );
}
