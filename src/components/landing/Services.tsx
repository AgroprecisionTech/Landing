import { Wind, ScanLine, Layers } from "lucide-react"

const services = [
  { 
    icon: Wind, 
    title: "1. Aplicación Inteligente", 
    desc: "Fumigación, fertilización y siembra aérea. Ahorro directo en químicos mediante aplicación focalizada." 
  },
  { 
    icon: ScanLine, 
    title: "2. Auditoría de Cultivo", 
    desc: "Monitoreo multiespectral, conteo de plantas y peritaje. Detecta estrés hídrico antes de que haya pérdida visual." 
  },
  { 
    icon: Layers, 
    title: "3. Topografía Agrícola", 
    desc: "Fotogrametría y modelado de terreno. Optimiza tus canales de riego e infraestructura con precisión centimétrica." 
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-panel px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-agro-green">Maximización de Rendimientos</span>
          <h2 className="mt-3 font-display text-3xl font-bold text-slate-900 sm:text-4xl">
            Nuestros 3 Pilares de <span className="text-agro-orange">Rentabilidad</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-line bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-100">
                <s.icon className="size-6 text-agro-green" />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900">{s.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-fog">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}