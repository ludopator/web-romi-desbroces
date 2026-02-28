import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import logoImage from "@assets/generated_images/romi_desbroces_company_logo.png";

export default function Gracias() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <img
        src={logoImage}
        alt="ROMI DESBROCES"
        className="h-20 sm:h-24 w-auto mb-8"
      />
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <CheckCircle2 className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
        Gracias por contactar
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center max-w-md">
        Hemos recibido tu solicitud. Te responderemos en breve.
      </p>
      <Button asChild size="lg">
        <a href="/">Volver a inicio</a>
      </Button>
    </div>
  );
}
