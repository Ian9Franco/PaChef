"use client"

import { useState, useEffect } from "react"
import { Play, Pause, Square } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Stopwatch() {
  const [isActive, setIsActive] = useState(false)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((s) => s + 1)
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      if (interval) clearInterval(interval)
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, seconds])

  const formatTime = (totalSeconds: number) => {
    const hrs = Math.floor(totalSeconds / 3600)
    const mins = Math.floor((totalSeconds % 3600) / 60)
    const secs = totalSeconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="glass-panel p-6 rounded-3xl flex flex-col items-center space-y-8 transition-all hover:shadow-2xl hover:shadow-primary/10">
      <div className={`text-6xl font-mono tracking-widest transition-colors duration-500 drop-shadow-[0_0_12px_rgba(var(--primary),0.8)] ${isActive ? "text-secondary scale-105" : "text-primary hover:scale-[1.02]"}`}>
        {formatTime(seconds)}
      </div>

      <div className="flex space-x-6 items-center">
        {!isActive ? (
          <Button 
            onClick={() => setIsActive(true)} 
            size="lg" 
            className="rounded-full w-20 h-20 shadow-xl shadow-primary/30 hover:shadow-primary/50 transition-all hover:scale-110 active:scale-95 bg-gradient-to-br from-primary to-primary/80"
          >
            <Play fill="currentColor" className="w-10 h-10 ml-2" />
          </Button>
        ) : (
          <Button 
            onClick={() => setIsActive(false)} 
            size="lg" 
            variant="secondary"
            className="rounded-full w-20 h-20 shadow-xl shadow-secondary/30 hover:shadow-secondary/50 transition-all hover:scale-110 active:scale-95 bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground"
          >
            <Pause fill="currentColor" className="w-10 h-10" />
          </Button>
        )}
        
        <div className={`transition-all duration-300 ${!isActive && seconds === 0 ? "opacity-0 scale-50 w-0" : "opacity-100 scale-100 w-16"}`}>
          <Button 
            onClick={() => {
              setIsActive(false)
              setSeconds(0)
              // Emitir evento de stop a la DB después
            }} 
            size="icon" 
            variant="destructive"
            className="rounded-full w-16 h-16 shadow-lg shadow-destructive/30 hover:shadow-destructive/50 transition-all hover:scale-110 active:scale-95 bg-gradient-to-br from-destructive to-destructive/80"
            disabled={!isActive && seconds === 0}
          >
            <Square fill="currentColor" className="w-7 h-7" />
          </Button>
        </div>
      </div>

      <div className="text-sm font-bold uppercase tracking-widest h-5">
        <span className={`transition-all duration-300 ${isActive ? "text-secondary animate-pulse" : "text-muted-foreground"}`}>
          {isActive ? "Midiendo Tiempo..." : "Listo para arrancar"}
        </span>
      </div>
    </div>
  )
}
