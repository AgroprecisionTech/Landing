export function Faq() {
  const faqs = [
    {
      q: "¿El dron penetra bien el follaje?",
      a: "Sí. La turbulencia controlada generada por los potentes rotores empuja el cultivo hacia abajo, permitiendo que las microgotas del químico penetren uniformemente hasta el envés de la hoja y los tallos inferiores."
    },
    {
      q: "¿Qué pasa si hace mucho viento?",
      a: "Nuestros equipos resisten vientos moderados y minimizan la deriva gracias a la aplicación a baja altura (2-3 metros sobre el cultivo). Además, al contar con operación nocturna, podemos aprovechar las ventanas de clima perfecto."
    },
    {
      q: "¿Cobran por hectárea o por día?",
      a: "El modelo es por hectárea aplicada. Operamos de manera transparente y eficiente. Contáctanos para hacer una evaluación de tu terreno y darte un presupuesto exacto sin costos ocultos."
    }
  ]

  return (
    <section id="faq" className="w-full bg-white px-5 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-bold text-slate-900">Preguntas Frecuentes del Productor</h2>
        <div className="mt-10 space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <h3 className="font-bold text-slate-900">{faq.q}</h3>
              <p className="mt-2 text-sm font-medium text-fog">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}