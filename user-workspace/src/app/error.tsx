'use client'

import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-4 flex flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-semibold">Что-то пошло не так</h2>
        <p className="text-zinc-400 max-w-sm mx-auto">
          Произошла ошибка при загрузке страницы. Пожалуйста, попробуйте снова или свяжитесь с поддержкой.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button 
            onClick={reset}
            className="neumorphic-button bg-zinc-800 hover:bg-zinc-700"
          >
            Попробовать снова
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.location.href = '/'}
            className="neumorphic-button bg-zinc-800 hover:bg-zinc-700"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
  )
}
