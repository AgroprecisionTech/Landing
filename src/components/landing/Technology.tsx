const fleet = [
  {
    name: "XAG P100 & P100 Pro",
    tag: "Aspersión y fertilización",
    specs: [
      "Tanque de 40 L para aspersión / 70 L para sólidos",
      "Abanico de pulverización de 11 metros",
      "Hasta 21 hectáreas por hora",
      "Radar matriz y visión binocular anticolisión",
    ],
  },
  {
    name: "DJI Mavic 3 Multiespectral",
    tag: "Monitoreo NDVI / NDRE",
    specs: [
      "Cámara RGB de 20MP + 4 cámaras multiespectrales",
      "Detecta estrés hídrico y deficiencias antes de ser visibles",
      "Mapas de prescripción para aplicación de tasa variable",
      "Módulo RTK para topografía centimétrica",
    ],
  },
]

export function Technology() {
  return (
    <section id="tecnologia" className="w-full bg-slate-950 px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
            Nuestra flota
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Ingeniería de vuelo <span className="text-orange-500">de grado profesional</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {fleet.map((f) => (
            <div key={f.name} className="rounded-3xl bg-white p-8 shadow-xl border border-slate-200 text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-600">{f.tag}</p>
              <h3 className="mt-2 font-display text-2xl font-black text-slate-900">{f.name}</h3>
              <ul className="mt-6 space-y-3">
                {f.specs.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-600" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}