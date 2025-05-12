import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { 
  Car, 
  Clock, 
  Calendar,
  Settings
} from "lucide-react"

const upcomingBooking = {
  service: "Full Service",
  date: "24 января",
  time: "14:00",
  status: "Подтверждено"
}

const previousBookings = [
  {
    service: "Quick Wash",
    date: "15 января",
    time: "11:30",
    status: "Завершено"
  },
  {
    service: "Premium Detail",
    date: "5 января",
    time: "10:00",
    status: "Завершено"
  }
]

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      {/* Profile Header */}
      <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6 mb-6">
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <svg
              className="h-full w-full text-zinc-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </Avatar>
          <div>
            <h1 className="text-xl font-semibold">Иван Петров</h1>
            <p className="text-zinc-400">+7 (999) 123-45-67</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            className="ml-auto"
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </Card>

      {/* Vehicle Info */}
      <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Car className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-medium">Мой автомобиль</h2>
        </div>
        <div className="space-y-2 text-zinc-300">
          <p>Tesla Model 3</p>
          <p>Белый • A123BC777</p>
        </div>
      </Card>

      {/* Upcoming Booking */}
      {upcomingBooking && (
        <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-medium">Ближайшая запись</h2>
          </div>
          <div className="space-y-2">
            <p className="text-lg">{upcomingBooking.service}</p>
            <div className="flex items-center gap-2 text-zinc-400">
              <Clock className="h-4 w-4" />
              <span>{upcomingBooking.date} • {upcomingBooking.time}</span>
            </div>
            <p className="text-green-500">{upcomingBooking.status}</p>
          </div>
        </Card>
      )}

      {/* Previous Bookings */}
      <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-6">
        <div className="flex items-center gap-3 mb-4">
          <Clock className="h-5 w-5 text-blue-500" />
          <h2 className="text-lg font-medium">История</h2>
        </div>
        <div className="space-y-4">
          {previousBookings.map((booking, index) => (
            <div 
              key={index}
              className="flex justify-between items-start py-3 border-t border-zinc-700"
            >
              <div>
                <p className="font-medium">{booking.service}</p>
                <p className="text-sm text-zinc-400">
                  {booking.date} • {booking.time}
                </p>
              </div>
              <span className="text-zinc-500">{booking.status}</span>
            </div>
          ))}
        </div>
      </Card>
    </main>
  )
}
