export default function ManagerDashboardPage() {
  return (
    <div className="p-6 space-y-6 animate-in slide-in-from-bottom-4 fade-in duration-700">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vista de Manager</h1>
      </header>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        <div className="glass-panel p-6 rounded-xl col-span-2 min-h-[300px] transition-all hover:shadow-lg hover:shadow-primary/10">
          <h2 className="text-xl font-semibold mb-4">Evolución del Equipo</h2>
          <div className="w-full h-[200px] bg-secondary/10 rounded-lg animate-pulse border border-border/50"></div>
        </div>
        <div className="glass-panel p-6 rounded-xl flex flex-col transition-all hover:shadow-lg hover:shadow-secondary/10">
          <h2 className="text-xl font-semibold mb-4">Ranking</h2>
          <div className="space-y-4 flex-1">
             {[1,2,3].map((i) => (
                <div key={i} className="group flex justify-between items-center p-3 bg-secondary/5 rounded-lg border border-transparent hover:border-primary/30 transition-all hover:scale-105 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-secondary/50 group-hover:bg-primary transition-colors"></div>
                    <span className="font-medium group-hover:text-primary transition-colors">Empleado {i}</span>
                  </div>
                  <span className="font-bold text-primary group-hover:scale-110 transition-transform">-- pts</span>
                </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}
