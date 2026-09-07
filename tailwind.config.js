/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        panel: "#f8f9fa", // Blanco/Gris muy claro para fondos
        ink: "#ffffff", // Fondos de tarjetas
        line: "#e5e7eb", // Bordes sutiles
        fog: "#4b5563", // Gris oscuro para textos secundarios (legibilidad al sol)
        "agro-green": "#166534", // Verde profundo (Autoridad/Campo)
        "agro-orange": "#ea580c", // Naranja (Maquinaria/CTAs)
        sky: "#0ea5e9", // Acentos secundarios
      }
    },
  },
  plugins: [],
}