import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { NavigationBar } from "@/components/navigation-bar"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "CarWash Booking App",
  description: "Book your car wash service easily",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="dark">
      <body className={inter.className}>
        <div className="max-w-md mx-auto min-h-screen pb-20">
          {children}
          <NavigationBar />
        </div>
      </body>
    </html>
  )
}
