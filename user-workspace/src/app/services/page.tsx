import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    name: "Quick Wash",
    duration: "30 min",
    price: "₽800",
    features: ["Exterior Wash", "Hand Dry", "Tire Shine"],
  },
  {
    id: 2,
    name: "Full Service",
    duration: "1 hour",
    price: "₽1500",
    features: ["Exterior Wash", "Interior Cleaning", "Vacuum", "Tire Shine", "Window Cleaning"],
  },
  {
    id: 3,
    name: "Premium Detail",
    duration: "2 hours",
    price: "₽3000",
    features: [
      "Deep Exterior Wash",
      "Interior Deep Clean",
      "Wax Protection",
      "Leather Treatment",
      "Engine Bay Cleaning",
      "Premium Tire Care",
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Select Service</h1>
      </div>

      {/* Services List */}
      <div className="space-y-4">
        {services.map((service) => (
          <Card 
            key={service.id}
            className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-medium">{service.name}</h2>
                <p className="text-zinc-400">{service.duration}</p>
              </div>
              <span className="text-xl font-semibold">{service.price}</span>
            </div>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="text-zinc-300 flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href={`/booking?service=${service.id}`}>
              <Button 
                className="w-full mt-4 neumorphic-button bg-zinc-800 hover:bg-zinc-700"
              >
                Select
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    </main>
  )
}
