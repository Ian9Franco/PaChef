"use client"

import { HelpCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { initTour } from "@/lib/tour-steps"
import { useAppStore } from "@/lib/store"

export function GuideButton() {
  const pathname = usePathname()
  const currentUser = useAppStore(s => s.currentUser)

  if (!currentUser) return null

  // Only show on dashboard pages realistically
  if (!pathname.startsWith("/dashboard")) return null

  const handleStartTour = () => {
    const role = currentUser.rol as "admin" | "manager" | "empleado"
    initTour(role)
  }

  return (
    <button
      onClick={handleStartTour}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-150 w-full"
    >
      <HelpCircle className="w-4 h-4 flex-shrink-0" />
      <span className="md:block hidden group-[.w-14]:hidden">Guía Interactiva</span>
    </button>
  )
}
