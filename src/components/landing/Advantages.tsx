// src/components/Advantages.tsx (o como se llame este archivo en tu proyecto)

// Asegúrate de importar tus iconos (ajusta según los que uses de lucide-react)
import { Cpu, Target, ShieldCheck, Maximize, Wind, Route, Zap, Expand } from "lucide-react"

const advantages = [
  { icon: Cpu, title: "Última tecnología", desc: "Software de detección de requerimientos del cultivo. Aplican de forma inteligente y automática." },
  { icon: Target, title: "Precisión centimétrica", desc: "Dosis exacta con RTK, sin sobredosis ni daño a cultivos aledaños." },
  { icon: ShieldCheck, title: "Vuelo seguro", desc: "Sistema anticolisión. Menor riesgo de intoxicación, operación de día o de noche." },
  { icon: Maximize, title: "Diseño mejorado", desc: "Fácil transporte y manejo, incluso en lotes poco accesibles." },
  { icon: Wind, title: "Sin deriva", desc: "El flujo de aire empuja el producto directo a la planta, reduciendo evaporación." },
  { icon: Route, title: "Vuelo automático", desc: "Rutas pre-programadas para cobertura total sin dejar parches sin tratar." },
  { icon: Zap, title: "Gran desempeño", desc: "Cobertura rápida y eficiente, optimizando el tiempo de aplicación en campo." },
  { icon: Expand, title: "Mejor cobertura", desc: "Penetración profunda en el cultivo gracias al efecto vórtice de las hélices." },
]

export function Advantages() {
  return (
    <section id="por-que-drones" className="w-full bg-panel px-5 py-24">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Lo que ya es estándar en EE. UU. y Brasil, <span className="text-agro-green">hoy está en tu campo</span>
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-base font-medium leading-relaxed text-fog">
          Los agricultores más avanzados del mundo dejaron atrás la mochila y la avioneta. La agricultura de precisión con drones es hoy la referencia global para bajar costos y proteger el rendimiento.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((adv) => (
            <div 
              key={adv.title} 
              className="group flex flex-col items-start rounded-2xl border border-line bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-agro-green/30"
            >
              <div className="mb-4 rounded-lg bg-green-50 p-3 text-agro-green transition-colors group-hover:bg-agro-green group-hover:text-white">
                <adv.icon className="size-6" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-slate-900">{adv.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-fog">{adv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}