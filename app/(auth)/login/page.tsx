import Link from "next/link"
import { ShieldCheck, Users, LayoutDashboard } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none animate-pulse duration-7000" />

      <div className="glass-panel w-full max-w-md p-10 rounded-3xl flex flex-col items-center space-y-10 animate-in fade-in zoom-in-95 slide-in-from-bottom-8 duration-700 z-10 shadow-2xl shadow-primary/10">
        
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-black tracking-tighter bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent drop-shadow-sm">STATLINE</h1>
          <p className="text-muted-foreground font-medium text-lg">Medición de Rendimiento</p>
        </div>

        {/* Sección de Acceso para Desarrollo */}
        <div className="w-full space-y-4 pt-6 border-t border-border/50">
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-4 text-muted-foreground font-bold tracking-widest rounded-full border border-border/50 py-1 shadow-sm">
                Acceso de Desarrollo
              </span>
            </div>
          </div>
          
          <Link href="/dashboard/admin" className="block w-full group">
            <Button className="w-full h-14 text-lg justify-start rounded-xl shadow-md hover:shadow-primary/25 transition-all group-hover:scale-[1.02] group-hover:translate-x-1" variant="default">
              <ShieldCheck className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Entrar como Admin
            </Button>
          </Link>

          <Link href="/dashboard/manager" className="block w-full group">
            <Button className="w-full h-14 text-lg justify-start rounded-xl shadow-md hover:shadow-secondary/25 transition-all group-hover:scale-[1.02] group-hover:translate-x-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Users className="mr-4 h-6 w-6 group-hover:scale-110 transition-transform" />
              Entrar como Manager
            </Button>
          </Link>

          <Link href="/dashboard/employee" className="block w-full group">
            <Button className="w-full h-14 text-lg justify-start rounded-xl border-2 border-border/50 bg-background/50 hover:bg-accent/10 text-foreground transition-all group-hover:border-accent/50 group-hover:scale-[1.02] group-hover:translate-x-1">
              <LayoutDashboard className="mr-4 h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors" />
              Entrar como Empleado
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}
