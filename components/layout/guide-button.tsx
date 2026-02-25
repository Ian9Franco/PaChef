"use client"

import { HelpCircle } from "lucide-react"
import { usePathname } from "next/navigation"
import { initTour } from "@/lib/tour-steps"
import { useAppStore } from "@/lib/store"

import { cn } from "@/lib/utils"

export function GuideButton({ onClick, collapsed }: { onClick?: () => void, collapsed?: boolean }) {
  const pathname = usePathname()
  const currentUser = useAppStore(s => s.currentUser)

  if (!currentUser) return null

  // Only show on dashboard pages realistically
  if (!pathname.startsWith("/dashboard")) return null

  const handleStartTour = () => {
    const role = currentUser.rol
    initTour(role, pathname)
    onClick?.()
  }

  return (
    <button
      onClick={handleStartTour}
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-150 w-full",
        collapsed ? "justify-center px-2" : ""
      )}
    >
      <HelpCircle className="w-4 h-4 flex-shrink-0" />
      {!collapsed && <span>Guía Interactiva</span>}
    </button>
  )
}
