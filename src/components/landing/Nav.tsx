import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que-drones", label: "Por qué drones" },
  { href: "#tecnologia", label: "Tecnología" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "Faq" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line/60 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#" className="flex items-center gap-1 text-2xl font-black tracking-tighter">
          <span className="text-agro-green">AGROPRECISION</span>
          <span className="text-agro-orange">TECH</span>
        </a>
        
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-fog transition-colors hover:text-agro-green"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#contacto">
            <Button className="rounded-full bg-agro-orange px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-orange-600">
              Solicitar cotización
            </Button>
          </a>
        </div>

        <button
          className="text-slate-800 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line/60 bg-white px-5 py-4 md:hidden shadow-lg">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-semibold text-fog hover:text-agro-green"
              >
                {l.label}
              </a>
            ))}
            <a href="#contacto" onClick={() => setOpen(false)}>
              <Button className="w-full rounded-full bg-agro-orange text-white">Solicitar cotización</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}