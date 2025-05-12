"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calendar, Settings, User } from "lucide-react"

const navItems = [
  { href: "/", icon: Home, label: "Главная" },
  { href: "/services", icon: Calendar, label: "Услуги" },
  { href: "/profile", icon: User, label: "Профиль" },
  { href: "/settings", icon: Settings, label: "Настройки" }
]

export function NavigationBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-4 py-2">
      <div className="max-w-md mx-auto flex justify-between items-center">
        {navItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center p-2 rounded-lg transition-colors
                ${isActive 
                  ? "text-blue-500" 
                  : "text-zinc-400 hover:text-zinc-300"}`}
            >
              <Icon className="h-6 w-6" />
              <span className="text-xs mt-1">{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
