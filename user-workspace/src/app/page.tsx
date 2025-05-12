import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">CarWash</h1>
        <Avatar className="h-8 w-8">
          <svg
            className="h-full w-full text-zinc-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </Avatar>
      </div>

      {/* Vehicle Card */}
      <Card className="bg-zinc-800/50 border-zinc-700 p-6 mb-6 backdrop-blur-sm">
        <div className="flex flex-col items-center">
          <div className="w-64 h-40 mb-4 flex items-center justify-center text-zinc-600">
            <svg
              className="h-full w-full"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </div>
          <h2 className="text-xl font-medium mb-2">Your Vehicle</h2>
          <p className="text-zinc-400">Last wash: 2 weeks ago</p>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <Button 
          variant="outline" 
          className="h-24 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800"
        >
          Quick Wash
        </Button>
        <Button 
          variant="outline" 
          className="h-24 bg-zinc-800/50 border-zinc-700 hover:bg-zinc-800"
        >
          Full Service
        </Button>
      </div>

      {/* Available Time Slots */}
      <Card className="bg-zinc-800/50 border-zinc-700 p-4">
        <h3 className="text-lg font-medium mb-4">Available Today</h3>
        <div className="grid grid-cols-2 gap-3">
          {["10:00", "11:30", "13:00", "14:30"].map((time) => (
            <Button
              key={time}
              variant="outline"
              className="bg-zinc-700/50 border-zinc-600 hover:bg-zinc-700"
            >
              {time}
            </Button>
          ))}
        </div>
      </Card>
    </main>
  )
}
