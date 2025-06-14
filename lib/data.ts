import type { Project, Service, Client, DashboardProject, Inquiry } from "./types"

export const projects: Project[] = [
  {
    id: "1",
    name: "Serenity Grove",
    location: "North Carolina",
    image: "/placeholder.svg?height=400&width=600",
    description: "A peaceful Asian-inspired garden with traditional pavilion and water features.",
    status: "completed",
    client: "John Smith",
    startDate: "2024-01-15",
    endDate: "2024-03-20",
  },
  {
    id: "2",
    name: "Nature's Palette",
    location: "California",
    image: "/placeholder.svg?height=400&width=600",
    description: "Modern landscape design with native plants and sustainable irrigation.",
    status: "in-progress",
    client: "Sarah Johnson",
    startDate: "2024-02-01",
    endDate: "2024-04-15",
  },
  {
    id: "3",
    name: "Urban Oasis",
    location: "New York",
    image: "/placeholder.svg?height=400&width=600",
    description: "Rooftop garden transformation with vertical growing systems.",
    status: "planning",
    client: "Mike Chen",
    startDate: "2024-03-01",
    endDate: "2024-05-30",
  },
  {
    id: "4",
    name: "Cottage Garden",
    location: "Vermont",
    image: "/placeholder.svg?height=400&width=600",
    description: "Traditional English cottage garden with perennial borders.",
    status: "completed",
    client: "Emma Wilson",
    startDate: "2023-09-15",
    endDate: "2023-11-30",
  },
]

export const services: Service[] = [
  {
    id: "1",
    name: "Garden Design",
    description: "Custom garden design services tailored to your space and preferences.",
    price: "From $500",
  },
  {
    id: "2",
    name: "Garden Maintenance",
    description: "Regular maintenance services to keep your garden healthy and beautiful.",
    price: "From $150/month",
  },
  {
    id: "3",
    name: "Planting Services",
    description: "Professional planting of trees, shrubs, and seasonal flowers.",
    price: "From $200",
  },
  {
    id: "4",
    name: "Tree Care",
    description: "Expert tree pruning, removal, and health assessment services.",
    price: "From $300",
  },
  {
    id: "5",
    name: "Irrigation Services",
    description: "Installation and maintenance of efficient watering systems.",
    price: "From $800",
  },
  {
    id: "6",
    name: "Specialty Services",
    description: "Unique landscaping solutions including water features and hardscaping.",
    price: "Custom Quote",
  },
]

export const clients: Client[] = [
  {
    id: "1",
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "(555) 123-4567",
    address: "123 Oak Street, North Carolina",
    projects: 2,
    totalSpent: 15000,
  },
  {
    id: "2",
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    phone: "(555) 234-5678",
    address: "456 Pine Avenue, California",
    projects: 1,
    totalSpent: 8500,
  },
  {
    id: "3",
    name: "Mike Chen",
    email: "mike.chen@email.com",
    phone: "(555) 345-6789",
    address: "789 Maple Drive, New York",
    projects: 1,
    totalSpent: 12000,
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma.wilson@email.com",
    phone: "(555) 456-7890",
    address: "321 Birch Lane, Vermont",
    projects: 3,
    totalSpent: 22000,
  },
]

export const dashboardProjects: DashboardProject[] = [
  {
    id: "1",
    name: "Serenity Grove",
    client: "John Smith",
    status: "completed",
    progress: 100,
    dueDate: "2024-03-20",
  },
  {
    id: "2",
    name: "Nature's Palette",
    client: "Sarah Johnson",
    status: "in-progress",
    progress: 65,
    dueDate: "2024-04-15",
  },
  {
    id: "3",
    name: "Urban Oasis",
    client: "Mike Chen",
    status: "planning",
    progress: 15,
    dueDate: "2024-05-30",
  },
]

export const inquiries: Inquiry[] = [
  {
    id: "1",
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    subject: "Garden Design Consultation",
    message: "I would like to discuss redesigning my backyard garden.",
    date: "2024-01-15",
    status: "new",
  },
  {
    id: "2",
    name: "Robert Taylor",
    email: "robert.taylor@email.com",
    subject: "Tree Removal Service",
    message: "Need to remove a large oak tree from my property.",
    date: "2024-01-14",
    status: "responded",
  },
  {
    id: "3",
    name: "Jennifer Davis",
    email: "jennifer.davis@email.com",
    subject: "Irrigation System",
    message: "Looking for an automated irrigation system installation.",
    date: "2024-01-13",
    status: "new",
  },
]
