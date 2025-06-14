import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ProjectsSection from "@/components/ProjectsSection"
import ServicesSection from "@/components/ServicesSection"
import ConsultationSection from "@/components/ConsultationSection"
import Footer from "@/components/Footer"
import AboutSection from "@/components/aboutUsSection"
import ContactSection from "@/components/ContactSection"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <div className="bg-[#E1EBE2] h-[20rem] flex justify-around items-center text-gray-800">
        <div className="text-center">
          <h2 className="text-2xl md:text-2xl font-bold mb-4">Quick Contact</h2>
          <p>Phone: +250 784 869 860</p>
          <p>Email: aamityltd@gmail.com</p>
        </div>
        <div className="text-center">
          <h2 className="text-2xl md:text-2xl font-bold mb-4">Our Location</h2>
          <p>Address: KK 523 St</p>
          <p>Kigali, Rwanda</p>
        </div>
      </div>
      <AboutSection />
      {/* <ProjectsSection /> */}
      {/* <ServicesSection /> */}
      <ConsultationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
