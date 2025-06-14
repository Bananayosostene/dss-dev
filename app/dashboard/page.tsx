import DashboardLayout from "@/components/dashboard/DashboardLayout"
import DashboardStats from "@/components/dashboard/DashboardStats"
import RecentProjects from "@/components/dashboard/RecentProjects"
import RecentInquiries from "@/components/dashboard/RecentInquiries"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's what's happening with your garden business.</p>
        </div>

        <DashboardStats />

        <div className="grid lg:grid-cols-2 gap-8">
          <RecentProjects />
          <RecentInquiries />
        </div>
      </div>
    </DashboardLayout>
  )
}
