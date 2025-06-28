import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/services.jpg/?height=800&width=1200')`,
        }}
      >
        {/* Header Component */}
        <Header />

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-white max-w-2xl pt-32">
              {/* Breadcrumb */}
              <nav className="mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                  <span className="text-gray-300">{">"}</span>
                  <span className="text-white font-medium">Services</span>
                </div>
              </nav>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#F17105]">
                OUR SERVICES
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-gray-200 font-light">
                Transform Your Business with Our Expert IT Solutions!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Content */}
      <div className="container mx-auto px-4 max-w-7xl">
        <ServicesSection />
      </div>

      <Footer />
    </main>
  );
}
