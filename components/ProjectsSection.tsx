import { projects } from "@/lib/data"
import ProjectCard from "./ProjectCard"

export default function ProjectsSection() {
  const featuredProjects = projects.slice(0, 2)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
