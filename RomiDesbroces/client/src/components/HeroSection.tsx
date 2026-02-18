import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/50 to-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <img
          src={logoImage}
          alt="ROMI DESBROCES"
          className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto mb-6 sm:mb-8 drop-shadow-lg"
        />
        <h1 className="hero-title text-white mb-4 sm:mb-6 leading-tight">
          Desbroce de carreteras y tratamiento con herbicida
        </h1>
        <p className="hero-subtitle text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto">
          Mantenimiento de cunetas, arcenes y márgenes + tratamientos autorizados con personal certificado.
        </p>

        <ul className="text-white/90 text-base sm:text-lg mb-8 space-y-2 max-w-xl mx-auto">
          <li className="flex items-center justify-center gap-2">
            <ChevronDown className="h-4 w-4 rotate-[-90deg] text-primary-foreground/80" />
            Señalización y trabajo seguro en vía
          </li>
          <li className="flex items-center justify-center gap-2">
            <ChevronDown className="h-4 w-4 rotate-[-90deg] text-primary-foreground/80" />
            Documentación y trazabilidad del tratamiento
          </li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-lg"
          >
            Pide presupuesto
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
          >
            <a href="tel:+34644494617">
              <Phone className="h-5 w-5 mr-2" />
              Llámanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
