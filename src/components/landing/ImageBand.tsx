import xag2 from "@/assets/Xag2.jpg"
import xag3 from "@/assets/XAG3.jpg"
import umra from "@/assets/UMRA.jpg"

export function ImageBand() {
  const images = [
    { src: xag2, title: "Operación en vuelo" },
    { src: xag3, title: "Telemetría y Precisión" },
    { src: umra, title: "Unidad Móvil (UMRA)" },
  ]

  return (
    <section className="w-full bg-[#fafaf9] px-5 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          {images.map((img, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-3xl border border-slate-200 shadow-xl aspect-[4/3] bg-slate-200"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-sm font-bold text-white tracking-wide drop-shadow-md">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}