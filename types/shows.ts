export type ShowDate = {
  id: string;
  event?: string;
  city: string;
  venue: string;
  country: string;
  date: string; // ISO
  soldOut?: boolean;
  link?: string;
};

export type ShowsSettings = {
  id: string;
  subtitle?: string;
};
