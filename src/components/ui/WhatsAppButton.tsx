import { Phone } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/584241733186"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex min-h-[48px] items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <Phone className="size-5" />
      <span className="hidden sm:inline">Chatear con un Ingeniero</span>
      <span className="inline sm:hidden">Asesoría</span>
    </a>
  );
}