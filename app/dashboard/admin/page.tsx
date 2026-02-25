export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Panel de Control (Admin)</h1>
        <div className="flex space-x-2">
          {/* Placeholder de botones de acción */}
          <div className="h-9 w-24 bg-primary rounded-md opacity-80 hover:opacity-100 transition-opacity cursor-pointer"></div>
        </div>
      </header>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Placeholders de estadísticas rápidas */}
        {[1,2,3,4].map((i) => (
          <div key={i} className="glass-panel p-6 rounded-xl flex flex-col space-y-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">Métrica {i}</div>
            <div className="text-3xl font-bold text-foreground">---</div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-6 rounded-xl min-h-[400px] transition-all hover:shadow-xl hover:shadow-secondary/20">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
          Rendimiento en Vivo
        </h2>
        {/* Placeholder del gráfico */}
        <div className="w-full h-[300px] bg-secondary/10 rounded-lg animate-pulse flex items-center justify-center border border-border/50">
          <span className="text-muted-foreground">Espacio del gráfico</span>
        </div>
      </div>
    </div>
  )
}
