import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderOpen, Users, Calendar, DollarSign } from "lucide-react"

const stats = [
  {
    title: "Total Projects",
    value: "24",
    change: "+12%",
    icon: FolderOpen,
    color: "text-blue-600",
  },
  {
    title: "Active Clients",
    value: "18",
    change: "+8%",
    icon: Users,
    color: "text-green-600",
  },
  {
    title: "This Month",
    value: "6",
    change: "+25%",
    icon: Calendar,
    color: "text-purple-600",
  },
  {
    title: "Revenue",
    value: "$45,200",
    change: "+15%",
    icon: DollarSign,
    color: "text-orange-600",
  },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
              <Icon className={`w-4 h-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600 font-medium">{stat.change} from last month</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
