import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackWhatsApp } from "@/lib/tracking";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34644494617?text=Hola%2C%20quiero%20un%20presupuesto%20de%20desbroce"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      data-track="whatsapp"
      onClick={trackWhatsApp}
    >
      <Button
        size="lg"
        className="h-14 w-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white animate-pulse"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </a>
  );
}
