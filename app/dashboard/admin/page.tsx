export default function AdminDashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <header className="flex items-center justify-between pb-4 border-b">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <div className="flex space-x-2">
          {/* Action buttons placeholder */}
          <div className="h-9 w-24 bg-primary rounded-md opacity-80"></div>
        </div>
      </header>
      
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {/* Quick stat placeholders */}
        {[1,2,3,4].map((i) => (
          <div key={i} className="glass-panel p-6 rounded-xl flex flex-col space-y-2">
            <div className="text-sm font-medium text-muted-foreground">Metric {i}</div>
            <div className="text-3xl font-bold">---</div>
          </div>
        ))}
      </div>

      <div className="glass-panel p-6 rounded-xl min-h-[400px]">
        <h2 className="text-xl font-semibold mb-4">Live Performance Overview</h2>
        {/* Chart placeholder */}
        <div className="w-full h-[300px] bg-secondary/50 rounded-lg animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground">Chart Area</span>
        </div>
      </div>
    </div>
  )
}
