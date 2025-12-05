export function formatPrice(value: number, currency = "SEK") {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(iso: string) {
  const dt = new Date(iso);
  return new Intl.DateTimeFormat("sv-SE", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(dt);
}
