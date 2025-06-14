import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ServicesGrid from "@/components/ServicesGrid"
import { services } from "@/lib/data"

export default function ServicesPage() {
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
            <span>Services</span>
          </nav>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">SERVICES</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Professional Garden & Landscape Services
          </p>
        </div>
      </div>
      <div className="py-16">
        <ServicesGrid services={services} />
      </div>
      <Footer />
    </main>
  );
}
