import DashboardLayout from "@/components/dashboard/DashboardLayout"
import ProjectsTable from "@/components/dashboard/ProjectsTable"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DashboardProjectsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            <p className="text-gray-600">Manage your garden and landscape projects</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Project
          </Button>
        </div>

        <ProjectsTable />
      </div>
    </DashboardLayout>
  )
}
