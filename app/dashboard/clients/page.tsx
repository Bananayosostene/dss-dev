import DashboardLayout from "@/components/dashboard/DashboardLayout"
import ClientsTable from "@/components/dashboard/ClientsTable"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function DashboardClientsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Clients</h1>
            <p className="text-gray-600">Manage your client relationships</p>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Client
          </Button>
        </div>

        <ClientsTable />
      </div>
    </DashboardLayout>
  )
}
