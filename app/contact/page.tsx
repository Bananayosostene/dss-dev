import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mt-20">
      <ContactSection/>
      </div>
      <Footer />
    </main>
  );
}
