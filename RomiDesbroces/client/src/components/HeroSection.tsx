import { Button } from "@/components/ui/button";
import { Phone, Check } from "lucide-react";
import heroImage from "@assets/generated_images/hero_image_land_clearing.png";
import logoImage from "@assets/generated_images/romi_desbroces_company_logo.png";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Maquinaria profesional desbrozando cunetas y márgenes de carretera"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h1 className="hero-title text-white mb-6 drop-shadow-md">
          Desbroce y control de vegetación
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 leading-snug max-w-3xl mx-auto font-medium">
          Cunetas, márgenes, caminos y todo tipo de terrenos
        </p>

        <div className="flex flex-col items-center gap-3 mb-10 sm:mb-12">
          {[
            "Seguridad en vía y señalización",
            "Documentación técnica incluida"
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-2 text-white/90 text-sm sm:text-base bg-black/20 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10">
              <Check className="h-4 w-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center gap-2 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-lg px-8 py-7 bg-primary hover:bg-primary/90 shadow-xl font-bold uppercase tracking-wide"
            >
              Solicitar presupuesto técnico
            </Button>
          </div>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="w-full sm:w-auto text-lg px-8 py-7 bg-transparent backdrop-blur-sm border-white/40 text-white hover:bg-white/10 hover:text-white font-semibold"
          >
            <a href="tel:+34644494617">
              <Phone className="h-5 w-5 mr-2" />
              ¿Prefieres hablar directamente?
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
