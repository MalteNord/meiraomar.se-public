import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import PageTransition from "@/components/layout/PageTransition";
import CloudyBackground from "@/components/visual/CloudyBackground";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CloudyBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </div>
    </>
  );
}
