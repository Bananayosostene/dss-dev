import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { inquiries } from "@/lib/data"

const getStatusColor = (status: string) => {
  switch (status) {
    case "new":
      return "bg-red-100 text-red-800"
    case "responded":
      return "bg-blue-100 text-blue-800"
    case "closed":
      return "bg-gray-100 text-gray-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function RecentInquiries() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Inquiries</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inquiries.map((inquiry) => (
            <div key={inquiry.id} className="p-4 border rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{inquiry.name}</h3>
                  <p className="text-sm text-gray-600">{inquiry.email}</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{inquiry.subject}</p>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{inquiry.message}</p>
                </div>
                <div className="ml-4 text-right">
                  <Badge className={getStatusColor(inquiry.status)}>{inquiry.status}</Badge>
                  <p className="text-sm text-gray-600 mt-1">{inquiry.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
