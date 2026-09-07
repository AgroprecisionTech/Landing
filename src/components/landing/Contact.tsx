import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-white">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          Tu cultivo no espera. <span className="text-agro-orange">Protege tu cosecha hoy.</span>
        </h2>
        <p className="mt-4 text-base font-medium text-fog">
          Agenda una evaluación técnica gratuita. Llevamos nuestra unidad UMRA a tu terreno para que veas el futuro operando en vivo.
        </p>

        <a href="https://wa.me/584241733186" className="mt-8 inline-block">
          <Button className="min-h-[48px] bg-agro-green text-white hover:bg-green-800 px-8 text-lg">
            Solicitar Evaluación Técnica
          </Button>
        </a>

        <div className="mt-12 grid gap-6 text-sm font-medium text-fog sm:grid-cols-3">
          <div className="flex flex-col items-center gap-2">
            <Mail className="size-6 text-agro-green" />
            agroprecisiontech@gmail.com
          </div>
          <div className="flex flex-col items-center gap-2">
            <Phone className="size-6 text-agro-green" />
            +58 424-1733186
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin className="size-6 text-agro-green" />
            Calabozo, Estado Guárico
          </div>
        </div>
      </div>
    </section>
  )
}