import { Button } from "@/components/ui/button";
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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Maquinaria profesional desbrozando cunetas y márgenes de carretera" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/45 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
        <img 
          src={logoImage} 
          alt="ROMI DESBROCES" 
          className="h-24 sm:h-32 md:h-36 lg:h-40 w-auto mx-auto mb-6 sm:mb-8 drop-shadow-lg"
          data-testid="img-hero-logo"
        />
        <h1 
          className="hero-title text-white mb-4 sm:mb-6 leading-tight" 
          data-testid="text-hero-title"
        >
          Especialistas en desbroce de carreteras y obra pública
        </h1>
        <p 
          className="hero-subtitle text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto" 
          data-testid="text-hero-subtitle"
        >
          Mantenimiento profesional de cunetas, márgenes de carretera, caminos rurales y fincas. Prevención de incendios y seguridad vial para empresas y administraciones.
        </p>
        <Button
          size="lg"
          onClick={scrollToContact}
          className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-primary/90 backdrop-blur-sm hover:bg-primary shadow-lg"
          data-testid="button-presupuesto-hero"
        >
          Solicita presupuesto gratis
        </Button>
      </div>
    </section>
  );
}
