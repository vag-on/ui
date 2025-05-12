import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 space-y-6">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-32 bg-zinc-800" />
        <Skeleton className="h-8 w-8 rounded-full bg-zinc-800" />
      </div>

      {/* Main Card Skeleton */}
      <Card className="bg-zinc-800/50 border-zinc-700 p-6">
        <div className="flex flex-col items-center">
          <Skeleton className="h-48 w-64 rounded-lg bg-zinc-800 mb-4" />
          <Skeleton className="h-6 w-32 bg-zinc-800 mb-2" />
          <Skeleton className="h-4 w-24 bg-zinc-800" />
        </div>
      </Card>

      {/* Action Buttons Skeleton */}
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-24 bg-zinc-800" />
        <Skeleton className="h-24 bg-zinc-800" />
      </div>

      {/* Time Slots Skeleton */}
      <Card className="bg-zinc-800/50 border-zinc-700 p-4">
        <Skeleton className="h-6 w-40 bg-zinc-800 mb-4" />
        <div className="grid grid-cols-2 gap-3">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 bg-zinc-800" />
          ))}
        </div>
      </Card>
    </div>
  )
}
