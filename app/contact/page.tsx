import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url(/images/hero-bg1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <nav className="text-sm mb-4">
            <span className="opacity-80">Home</span>
            <span className="mx-2">{">"}</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">CONTACT</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Get in Touch for Your Garden Transformation
          </p>
        </div>
      </div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
