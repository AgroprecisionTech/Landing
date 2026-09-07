export function About() {
  return (
    <section id="nosotros" className="border-y border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
          Nosotros
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
          Soluciones tecnológicas <span className="text-orange-500">e ingeniería</span> para el agro
        </h2>
        <p className="mt-6 text-slate-300">
          AgroprecisionTECH nació en Calabozo, Estado Guárico, con un objetivo
          claro: aplicar tecnología de vanguardia al sector agrícola e
          industrial venezolano. Usamos vehículos aéreos no tripulados (VANT)
          para que la fumigación, fertilización y monitoreo de cultivos sean
          precisos, eficientes y responsables con el ambiente.
        </p>
        <p className="mt-4 text-slate-300">
          Nuestra visión es ser la empresa de referencia en la aplicación de
          tecnología con drones a nivel nacional y regional, destacando
          siempre por nuestra calidad y excelencia de servicio.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Innovación", "Calidad", "Sostenibilidad"].map((v) => (
            <div key={v} className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-5 shadow-md">
              <p className="font-display font-semibold text-emerald-400">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}