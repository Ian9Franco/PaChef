import Link from "next/link"
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  Settings,
  LogOut
} from "lucide-react"

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r border-border/50 bg-background/50 backdrop-blur-xl flex flex-col items-center py-8 z-20 shadow-lg">
      <div className="text-3xl font-black tracking-tighter mb-12 bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-sm hover:scale-105 transition-transform cursor-default">
        STATLINE
      </div>

      <nav className="w-full flex-1 px-4 space-y-2">
        <Link href="/dashboard/employee" className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-primary/10 transition-all hover:translate-x-1">
          <LayoutDashboard size={20} className="text-primary group-hover:scale-110 transition-transform" />
          <span className="font-medium text-foreground">Mis Stats</span>
        </Link>
        <Link href="/dashboard/manager" className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-secondary/10 transition-all hover:translate-x-1">
          <Users size={20} className="text-muted-foreground group-hover:text-secondary group-hover:scale-110 transition-all" />
          <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">Vista del Equipo</span>
        </Link>
        <Link href="/dashboard/admin" className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-primary/5 transition-all hover:translate-x-1">
          <ShieldCheck size={20} className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
          <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">Panel Admin</span>
        </Link>
      </nav>

      <div className="w-full px-4 mt-auto">
        <Link href="/settings" className="group flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-accent/10 transition-all hover:translate-x-1 mb-2">
          <Settings size={20} className="text-muted-foreground group-hover:text-accent group-hover:rotate-90 transition-all duration-300" />
          <span className="font-medium text-muted-foreground group-hover:text-foreground transition-colors">Configuración</span>
        </Link>
        <button className="group flex w-full items-center space-x-3 px-4 py-3 rounded-xl hover:bg-destructive/10 text-destructive transition-all hover:translate-x-1">
          <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Cerrar Sesión</span>
        </button>
      </div>
    </div>
  )
}
