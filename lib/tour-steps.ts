import { driver } from "driver.js"
import "driver.js/dist/driver.css"

type TourStepsMap = Record<string, Record<string, any[]>>;

export const tourSteps: TourStepsMap = {
  "/dashboard": {
    admin: [
      { element: "#admin-kpis", popover: { title: "Indicadores Clave", description: "Vista del resumen general del equipo, sesiones y el puntaje promedio actual.", side: "bottom", align: "start" } },
      { element: "#admin-player-cards", popover: { title: "Cartas de Jugador", description: "Estadísticas estilo deportivo. Haz clic en un jugador para detalles y notas.", side: "top", align: "start" } },
      { element: "#admin-ranking-chart", popover: { title: "Ranking Semanal", description: "Gráfico con el top de rendimiento desglosado.", side: "top", align: "start" } }
    ],
    manager: [
      { element: "#manager-view-tabs", popover: { title: "Vistas del Dashboard", description: "Navega entre las vistas para analizar rendimiento general, por producto o rankings.", side: "bottom", align: "center" } },
      { element: "#manager-kpis", popover: { title: "Métricas Generales", description: "Supervisa volúmenes y fluctuación porcentual del equipo.", side: "bottom", align: "start" } }
    ],
    empleado: [
      { element: "#empleado-stats", popover: { title: "Tus Estadísticas", description: "Visualiza tu tarjeta y puntaje en tiempo real.", side: "bottom", align: "start" } },
      { element: "#empleado-radar", popover: { title: "Radar de Crecimiento", description: "Tu rendimiento superpuesto al promedio de tu equipo.", side: "top", align: "start" } }
    ]
  },
  "/dashboard/empleados": {
    admin: [
      { element: "#empleados-search", popover: { title: "Buscador de Personal", description: "Filtra rápidamente por nombre, cargo o rol.", side: "bottom", align: "start" } },
      { element: "#empleados-table", popover: { title: "Gestión de Personal", description: "Listado del equipo. Haz clic en una fila para ver su tarjeta de rendimiento interactiva.", side: "top", align: "center" } },
      { element: "#empleados-new-btn", popover: { title: "Nuevo Empleado", description: "Crea nuevos perfiles y asigna sus roles.", side: "left", align: "start" } }
    ],
    manager: [
      { element: "#empleados-search", popover: { title: "Buscador de Personal", description: "Encuentra miembros de tu equipo rápidamente.", side: "bottom", align: "start" } },
      { element: "#empleados-table", popover: { title: "Listado Oficial", description: "Monitorea cargos y visualiza las tarjetas de rendimiento haciendo clic en cualquier fila.", side: "top", align: "center" } }
    ]
  },
  "/dashboard/productos": {
    admin: [
      { element: "#productos-search", popover: { title: "Buscador de Catálogo", description: "Encuentra productos por nombre.", side: "bottom", align: "start" } },
      { element: "#productos-grid", popover: { title: "Configuración de Productos", description: "Supervisa Multiplicadores de Valor, Tiempos Estándar (ideal) y Dificultades que afectarán los puntajes finales.", side: "top", align: "center" } }
    ],
    manager: [
      { element: "#productos-search", popover: { title: "Buscador de Catálogo", description: "Encuentra productos rápidamente.", side: "bottom", align: "start" } },
      { element: "#productos-grid", popover: { title: "Listado de Productos", description: "Consulta las expectativas de tiempos y dificultades para cada tarea.", side: "top", align: "center" } }
    ]
  },
  "/dashboard/sesiones": {
    admin: [
      { element: "#sesiones-timer", popover: { title: "Cronómetro de Producción", description: "Arranca una sesión de tiempo para un empleado. Calcula eficiencia en tiempo real respecto al estándar.", side: "bottom", align: "start" } },
      { element: "#sesiones-history", popover: { title: "Historial de Resultados", description: "Registro histórico de todas las sesiones, coloreadas por eficiencia (verde, amarillo, rojo).", side: "top", align: "start" } }
    ],
    manager: [
      { element: "#sesiones-timer", popover: { title: "Cronómetro de Producción", description: "Simula el arranque de sesión y observa la eficiencia de la tarea.", side: "bottom", align: "start" } },
      { element: "#sesiones-history", popover: { title: "Historial de Producción", description: "Monitorea la eficiencia real vs esperada de todas las sesiones de trabajo.", side: "top", align: "start" } }
    ],
    empleado: [
      { element: "#sesiones-timer", popover: { title: "Tu Cronómetro", description: "Selecciona el producto que vas a ensamblar e inicia la producción. ¡Trata de estar en verde!", side: "bottom", align: "center" } },
      { element: "#sesiones-history", popover: { title: "Tu Historial", description: "Lista de todos tus trabajos recientes y tu eficiencia particular en cada uno.", side: "top", align: "start" } }
    ]
  },
  "/dashboard/configuracion": {
    admin: [
      { element: "#config-weights", popover: { title: "Motor del Puntaje", description: "Este es el cerebro del Dashboard. Ajusta cómo impacta cada variable. ¡La suma SIEMPRE debe ser 100%!", side: "right", align: "start" } },
      { element: "#config-preview", popover: { title: "Simulador Inmediato", description: "Revisa aquí abajo el resultado teórico con datos prueba antes de guardar tus cambios.", side: "top", align: "start" } }
    ]
  }
}

export function initTour(role: string, pathname: string) {
  const pageSteps = tourSteps[pathname]
  
  // If the page isn't registered or the role doesn't have steps, fallback gracefully or do nothing
  if (!pageSteps) return
  
  // Try to find the role specifically, or default to admin if it's the only one (some generic cases)
  const steps = pageSteps[role] || pageSteps["admin"]
  
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
