export function About() {
  return (
    <section id="nosotros" className="border-y border-line/60 bg-panel/30">
      <div className="mx-auto max-w-4xl px-5 py-24 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-sky">Nosotros</span>
        <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
          Soluciones tecnológicas <span className="text-neon">e ingeniería</span> para el agro
        </h2>
        <p className="mt-6 text-fog">
          AgroprecisionTECH nació en Calabozo, Estado Guárico, con un objetivo
          claro: aplicar tecnología de vanguardia al sector agrícola e
          industrial venezolano. Usamos vehículos aéreos no tripulados (VANT)
          para que la fumigación, fertilización y monitoreo de cultivos sean
          precisos, eficientes y responsables con el ambiente.
        </p>
        <p className="mt-4 text-fog">
          Nuestra visión es ser la empresa de referencia en la aplicación de
          tecnología con drones a nivel nacional y regional, destacando
          siempre por nuestra calidad y excelencia de servicio.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {["Innovación", "Calidad", "Sostenibilidad"].map((v) => (
            <div key={v} className="rounded-2xl border border-line bg-ink/60 px-4 py-5">
              <p className="font-display font-semibold text-neon">{v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}