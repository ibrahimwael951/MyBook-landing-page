import Footer from "@/components/Footer";
import Book_Shelf from "@/components/Home page/Book_Shelf";
import Features from "@/components/Home page/Features";

export default function Page() {
  return (
    <main className="mt-24">
      <Features />
      <Book_Shelf />
      <Footer/>
    </main>
  );
}
