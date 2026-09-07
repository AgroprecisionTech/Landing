const rows = [
  { metodo: "Tractor / Terrestre", mermas: "Pisoteo de cultivo (5-10% pérdida), compactación del suelo", costo: "Gasto alto en combustible y agua" },
  { metodo: "Aeroatomización (Avioneta)", mermas: "Deriva por viento, aplicación poco uniforme", costo: "Desperdicio de agroquímicos en bordes" },
  { metodo: "Dron AgroprecisionTECH", mermas: "0% Pisoteo, 0% Compactación, Gota controlada", costo: "Ahorro de hasta 30% en químicos", destacado: true },
]

export function Comparativa() {
  return (
    <section className="w-full bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl font-bold text-slate-900 sm:text-4xl">
          El método tradicional te está costando dinero <span className="text-agro-orange">sin que lo veas</span>
        </h2>
        <p className="mt-4 text-base font-medium text-fog">
          Lo que usas hoy se come tu rentabilidad. Cada litro mal aplicado o planta pisada es dinero perdido. Compara nuestra precisión aérea frente a las mermas del pasado:
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-3xl border border-line shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-panel text-xs uppercase tracking-wider text-slate-700">
            <tr>
              <th className="px-6 py-4">Método</th>
              <th className="px-6 py-4">Pérdidas y Mermas</th>
              <th className="px-6 py-4">Impacto Financiero</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {rows.map((r) => (
              <tr key={r.metodo} className={r.destacado ? "border-t-2 border-agro-green bg-green-50/50" : "border-t border-line"}>
                <td className={`px-6 py-4 font-bold ${r.destacado ? "text-agro-green" : "text-slate-800"}`}>
                  {r.metodo}
                </td>
                <td className="px-6 py-4 text-fog font-medium">{r.mermas}</td>
                <td className="px-6 py-4 text-fog font-medium">{r.costo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}