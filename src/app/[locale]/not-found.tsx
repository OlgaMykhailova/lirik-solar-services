import NotFoundPage from "@/components/notFound/NotFound";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <NotFoundPage />
      </main>
      <Footer />
    </>
  );
}
