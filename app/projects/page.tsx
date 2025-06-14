import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url(/images/hero-bg1.jpg)" }}
      >
        <div className="absolute inset-0 bg-[#E1EBE2]"></div>
        <div className="relative z-10 text-center text-white px-4">
          <nav className="text-sm mb-4">
            <span className="opacity-80">Home</span>
            <span className="mx-2">{">"}</span>
            <span>Projects</span>
          </nav>
          <h1 className="text-xl font-bold mb-4">PROJECTS</h1>
          <p className=" max-w-2xl mx-auto">
            Transform Your Garden into a Personal Paradise!
          </p>
        </div>
      </div>
      <div className="py-16">
        <ProjectsGrid projects={projects} />
      </div>
      <Footer />
    </main>
  );
}
