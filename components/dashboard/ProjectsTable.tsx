import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { projects } from "@/lib/data"

const getStatusColor = (status: string) => {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-800"
    case "in-progress":
      return "bg-blue-100 text-blue-800"
    case "planning":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function ProjectsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Project Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Client</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Location</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Start Date</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">End Date</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{project.name}</td>
                  <td className="py-3 px-4 text-gray-600">{project.client}</td>
                  <td className="py-3 px-4 text-gray-600">{project.location}</td>
                  <td className="py-3 px-4">
                    <Badge className={getStatusColor(project.status)}>{project.status.replace("-", " ")}</Badge>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{project.startDate}</td>
                  <td className="py-3 px-4 text-gray-600">{project.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
