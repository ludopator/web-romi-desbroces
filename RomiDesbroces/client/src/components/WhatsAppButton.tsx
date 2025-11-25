import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34644494617"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      data-testid="button-whatsapp-float"
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
