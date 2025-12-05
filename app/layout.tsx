import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Carattere } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";
const display = Bodoni_Moda({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const carattere = Carattere({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-carattere",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://meiraomar.se"),
  title: {
    default: "Meira Omar",
    template: "%s — Meira Omar",
  },
  description: "The official website of Swedish artist Meira Omar.",
  openGraph: {
    title: "Meira Omar",
    type: "website",
    url: "https://meiraomar.se",
    siteName: "Meira Omar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Meira Omar",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "https://meiraomar.se" },
};

export const viewport: Viewport = {
  themeColor: "#520b0b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${carattere.variable} antialiased bg-cloud text-white flex flex-col min-h-screen`}
      >
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </body>
    </html>
  );
}
