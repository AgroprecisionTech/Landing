const stats = [
  { value: "+7.100 ha", label: "tratadas con precisión" },
  { value: "36", label: "productores aumentaron su ROI" },
  { value: "0%", label: "compactación del suelo" },
  { value: "90%", label: "menos consumo de agua" },
]

export function StatsBar() {
  return (
    <section className="w-full bg-agro-green px-5 py-12 shadow-inner">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-8 text-sm font-bold tracking-widest text-green-100 uppercase">
          Únete a la nueva era agrícola 
        </p>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">+7.100 ha</span>
            <span className="mt-2 text-sm font-medium text-green-100">tratadas con precisión</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">36</span>
            <span className="mt-2 text-sm font-medium text-green-100">productores mejoraron su ROI</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">0%</span>
            <span className="mt-2 text-sm font-medium text-green-100">compactación del suelo</span>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-white">90%</span>
            <span className="mt-2 text-sm font-medium text-green-100">menos consumo de agua</span>
          </div>
        </div>
      </div>
    </section>
  )
}