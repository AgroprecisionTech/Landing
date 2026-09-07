export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-display text-sm font-bold">
          AGRO<span className="text-neon">PRECISION</span>
          <span className="text-sky">TECH</span>
        </p>
        <p className="text-xs text-fog">
          © {year} AgroprecisionTECH · Soluciones Tecnológicas e Ingeniería · Calabozo, Guárico
        </p>
      </div>
    </footer>
  )
}