import { cn } from "@/lib/utils"

interface PESCardProps {
  name: string
  role?: string
  overallScore: number
  stats: {
    speed: number
    prod: number
    res: number
    comp: number
  }
  className?: string
}

export function PESCard({ name, role, overallScore, stats, className }: PESCardProps) {
  // Determinar gradiente según puntaje, estilo juegos (Oro, Plata, Bronce, etc)
  const isElite = overallScore >= 90
  const isGold = overallScore >= 80 && overallScore < 90
  
  const cardStyle = isElite 
    ? {
        bg: "from-yellow-400 via-orange-300 to-yellow-600",
        border: "border-yellow-300/50",
        shadow: "hover:shadow-yellow-500/40",
        text: "text-slate-900"
      }
    : isGold 
    ? {
        bg: "from-slate-300 via-slate-100 to-slate-400",
        border: "border-slate-300/50",
        shadow: "hover:shadow-slate-400/40",
        text: "text-slate-900"
      }
    : {
        bg: "from-primary via-primary/80 to-primary/90",
        border: "border-primary-foreground/20",
        shadow: "hover:shadow-primary/40",
        text: "text-primary-foreground"
      }

  return (
    <div className={cn(
      "group relative w-64 h-96 rounded-t-[20%] rounded-b-[10%] p-1 overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer", 
      "bg-gradient-to-b shadow-xl",
      cardStyle.bg,
      cardStyle.shadow,
      className
    )}>
      {/* Reflejo brilloso estilo carta */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-white/5 to-transparent pointer-events-none group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
      
      {/* Contenido interno de la tarjeta */}
      <div className={cn(
        "h-full w-full rounded-t-[18%] rounded-b-[8%] border-[3px] p-4 flex flex-col items-center backdrop-blur-sm transition-colors", 
        cardStyle.border,
        cardStyle.text,
        isElite || isGold ? "bg-white/10" : "bg-black/10"
      )}>
         
         <div className="w-full flex justify-between items-start">
           <div className="flex flex-col items-center transform group-hover:scale-110 transition-transform origin-top-left">
             <span className="text-5xl font-black drop-shadow-sm">{overallScore}</span>
             <span className="text-xs uppercase font-bold tracking-widest opacity-80">{role?.substring(0,3) || 'EMP'}</span>
           </div>
           {/* Placeholder para foto del empleado */}
           <div className="w-20 h-20 bg-black/20 rounded-full blur-[1px] shadow-inner border border-white/10 group-hover:border-white/30 transition-colors"></div>
         </div>

         <div className="mt-8 border-b-2 border-current/20 w-full text-center pb-2">
           <h2 className="text-xl font-black uppercase tracking-tighter drop-shadow-sm">{name}</h2>
         </div>

         <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 w-full px-2 text-sm font-bold">
           <div className="flex justify-between items-center group/stat">
             <span className="opacity-70 text-xs">VEL</span>
             <span className="text-lg group-hover/stat:scale-110 transition-transform">{stats.speed}</span>
           </div>
           <div className="flex justify-between items-center group/stat">
             <span className="opacity-70 text-xs">PRO</span>
             <span className="text-lg group-hover/stat:scale-110 transition-transform">{stats.prod}</span>
           </div>
           <div className="flex justify-between items-center group/stat">
             <span className="opacity-70 text-xs">RES</span>
             <span className="text-lg group-hover/stat:scale-110 transition-transform">{stats.res}</span>
           </div>
           <div className="flex justify-between items-center group/stat">
             <span className="opacity-70 text-xs">CUM</span>
             <span className="text-lg group-hover/stat:scale-110 transition-transform">{stats.comp}</span>
           </div>
         </div>
         
         <div className="mt-auto opacity-40 text-[9px] font-black tracking-[0.3em] uppercase">
           Statline <span className="text-red-500/80">///</span> Auth
         </div>
      </div>
    </div>
  )
}
