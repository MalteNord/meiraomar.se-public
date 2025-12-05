import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3">
      <Button className="w-64">
        <Link href="/shows">See Show Dates</Link>
      </Button>
      <Button variant="ghost" className="w-64">
        <Link href="/shop">Shop</Link>
      </Button>
      <Button variant="ghost" className="w-64">
        <Link href="/contact">Contact</Link>
      </Button>
    </div>
  );
}
