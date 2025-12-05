export const SITE = {
  name: "Meira Omar",
  url: "https://meiraomar.se",
  description:
    "Official website of Swedish artist Meira Omar. Listen to Hush Hush, explore show dates, merch, and more.",
};

export function absoluteUrl(path = "") {
  const base = SITE.url.replace(/\/$/, "");
  const p = path ? (path.startsWith("/") ? path : `/${path}`) : "";
  return `${base}${p}`;
}
