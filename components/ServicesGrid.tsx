import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Service } from "@/lib/types"

interface ServicesGridProps {
  services: Service[]
}

export default function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-green-700">{service.name}</CardTitle>
              <CardDescription className="text-lg font-semibold text-gray-900">{service.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Button className="w-full bg-green-600 hover:bg-green-700">Learn More</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
