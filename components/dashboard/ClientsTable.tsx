import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { clients } from "@/lib/data"

export default function ClientsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>All Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Email</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Phone</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Projects</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Total Spent</th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{client.name}</td>
                  <td className="py-3 px-4 text-gray-600">{client.email}</td>
                  <td className="py-3 px-4 text-gray-600">{client.phone}</td>
                  <td className="py-3 px-4 text-gray-600">{client.projects}</td>
                  <td className="py-3 px-4 text-gray-600">${client.totalSpent.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
