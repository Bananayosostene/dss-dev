import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Project } from "@/lib/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      <div className="aspect-[4/3] relative">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm opacity-90 mb-1">Name</p>
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-sm opacity-90 mb-1">Location</p>
            <p className="text-lg">{project.location}</p>
          </div>
          <button className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
