import { driver } from "driver.js"
import "driver.js/dist/driver.css"

export const tourSteps = {
  admin: [
    {
      element: "#admin-kpis",
      popover: {
        title: "Indicadores Clave",
        description: "Aquí verás el resumen general del equipo, sesiones y el puntaje promedio actual.",
        side: "bottom",
        align: "start"
      }
    },
    {
      element: "#admin-player-cards",
      popover: {
        title: "Cartas de Jugador",
        description: "Estadísticas estilo deportivo. Haz clic en un jugador para ver sus métricas detalladas y agregar notas privadas.",
        side: "top",
        align: "start"
      }
    },
    {
      element: "#admin-ranking-chart",
      popover: {
        title: "Ranking Semanal",
        description: "Gráfico interactivo con el top de rendimiento. Observa los puntajes generales, desglosados en velocidad y productividad.",
        side: "top",
        align: "start"
      }
    }
  ],
  manager: [
    {
      element: "#manager-view-tabs",
      popover: {
        title: "Vistas del Dashboard",
        description: "Navega entre las distintas vistas para analizar el rendimiento de forma general, por producto o el ranking oficial.",
        side: "bottom",
        align: "center"
      }
    },
    {
      element: "#manager-kpis",
      popover: {
        title: "Métricas Generales",
        description: "Supervisa volúmenes de sesiones, estado de productos y la fluctuación porcentual del team.",
        side: "bottom",
        align: "start"
      }
    }
  ],
  empleado: [
    {
      element: "#empleado-stats",
      popover: {
        title: "Tus Estadísticas",
        description: "Visualiza tu tarjeta y puntaje en tiempo real en relación con las horas trabajadas.",
        side: "bottom",
        align: "start"
      }
    },
    {
      element: "#empleado-radar",
      popover: {
        title: "Radar de Crecimiento",
        description: "Tu rendimiento superpuesto al promedio de tu equipo. ¡Descubre qué habilidades puedes potenciar!",
        side: "top",
        align: "start"
      }
    }
  ]
}

export function initTour(role: "admin" | "manager" | "empleado") {
  const steps = tourSteps[role]
  
  if (!steps || steps.length === 0) return

  const tourObj = driver({
    showProgress: true,
    animate: true,
    nextBtnText: "Siguiente →",
    prevBtnText: "← Anterior",
    doneBtnText: "Finalizar",
    progressText: 'Paso {{current}} de {{total}}',
    allowClose: true,
    steps: steps as any
  })

  tourObj.drive()
}
