export default function EmployeeDashboardPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mis Estadísticas Personales</h1>
        <div className="h-10 w-32 bg-primary/80 hover:bg-primary transition-colors cursor-pointer rounded-md"></div>
      </header>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        <div className="glass-panel p-6 rounded-xl flex items-center justify-center min-h-[250px] relative overflow-hidden group cursor-pointer transition-all hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1">
           <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent group-hover:opacity-75 transition-opacity"></div>
           <div className="z-10 text-center transform group-hover:scale-110 transition-transform duration-500">
             <div className="text-5xl font-black text-primary mb-2 drop-shadow-md">94</div>
             <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">Puntaje General</div>
           </div>
        </div>

        <div className="glass-panel p-6 rounded-xl min-h-[250px] relative transition-all hover:shadow-xl hover:shadow-secondary/20">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            Sesión Actual
          </h2>
          <div className="flex flex-col items-center justify-center h-full space-y-4 pb-8">
            <div className="text-4xl font-mono tracking-widest text-foreground hover:text-primary transition-colors cursor-default">00:00:00</div>
            <div className="text-sm text-muted-foreground">Listo para arrancar el producto</div>
          </div>
        </div>
      </div>
    </div>
  )
}
