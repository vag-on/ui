"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00",
  "13:00", "14:00", "15:00", "16:00",
  "17:00", "18:00", "19:00", "20:00"
]

export default function BookingPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string>("")

  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <Link href="/services">
          <Button variant="ghost" size="icon" className="mr-2">
            <ChevronLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-2xl font-semibold">Select Date & Time</h1>
      </div>

      {/* Calendar */}
      <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-4 mb-6">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="text-white"
          disabled={(date) => date < new Date()}
        />
      </Card>

      {/* Time Slots */}
      <Card className="neumorphic-card bg-zinc-800/50 border-zinc-700 p-4">
        <h2 className="text-lg font-medium mb-4">Available Time Slots</h2>
        <div className="grid grid-cols-3 gap-3">
          {timeSlots.map((time) => (
            <Button
              key={time}
              variant={selectedTime === time ? "default" : "outline"}
              className={`
                neumorphic-button
                ${selectedTime === time 
                  ? "bg-blue-600 hover:bg-blue-700" 
                  : "bg-zinc-800/50 hover:bg-zinc-700"}
              `}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </Button>
          ))}
        </div>

        {/* Confirm Button */}
        <Button 
          className="w-full mt-6 neumorphic-button bg-blue-600 hover:bg-blue-700"
          disabled={!date || !selectedTime}
        >
          Confirm Booking
        </Button>
      </Card>
    </main>
  )
}
