import { ArrowRight, ShieldCheck, Target } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import xagImage from "@/assets/XAG_P100.jpg" // <- Importación correcta desde assets

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#fafaf9]">
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 lg:grid-cols-2 lg:py-28">
        <div className="md:rise">
          <Badge className="border-agro-green/40 bg-agro-green/10 text-agro-green">
            🛰️ Fumigación de precisión para el llano venezolano
          </Badge>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Deja de perder químicos y rendimiento <span className="text-agro-green">por pisoteo.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-fog sm:text-lg font-medium">
            Obtén dosis exactas, cero deriva y aplicación hasta 21 ha/hora. Aumenta tu margen de ganancia desde el primer vuelo con nuestra flota XAG y DJI.
          </p>

          <div className="mt-9 flex flex-col gap-2 sm:flex-row sm:items-start">
            <div className="flex flex-col items-center sm:items-start">
              <a href="#contacto" className="w-full sm:w-auto">
                <Button className="min-h-[48px] w-full bg-agro-orange text-white hover:bg-orange-700 sm:w-auto">
                  Agendar Vuelo de Prueba
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </a>
              <span className="mt-2 text-xs font-semibold text-fog">Sin compromiso. Operamos en tu propio lote.</span>
            </div>
          </div>
        </div>

        {/* Contenedor de la imagen real XAG_P100.jpg */}
        <div className="md:rise relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
          <div className="absolute inset-0 overflow-hidden rounded-3xl border-4 border-white shadow-xl bg-slate-200">
            <img 
              src={xagImage} 
              alt="Drone XAG operando en campo" 
              className="h-full w-full object-cover"
            />
          </div>
           
          <div className="absolute -bottom-4 -left-4 z-10 flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-md">
            <ShieldCheck className="size-5 text-agro-green" /> Cero compactación
          </div>
          <div className="absolute -right-2 top-4 z-10 flex items-center gap-2 rounded-2xl border border-line bg-white px-4 py-3 text-xs font-bold text-slate-800 shadow-md">
            <Target className="size-5 text-agro-orange" /> Ahorro del 30% en insumos
          </div>
        </div>
      </div>
    </section>
  )
}