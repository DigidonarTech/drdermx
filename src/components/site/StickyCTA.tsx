import { MessageCircle } from "lucide-react";

export function StickyCTA() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20DRDERMX%2C%20I%20need%20a%20consultation"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-5 py-3.5 rounded-full shadow-glow font-semibold text-sm transition-all">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </span>
    </a>
  );
}
