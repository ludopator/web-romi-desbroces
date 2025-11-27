import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import tractorImage from "@assets/generated_images/tractor_clearing_service_card.png";
import manualImage from "@assets/generated_images/manual_clearing_steep_terrain.png";
import ruralImage from "@assets/generated_images/rural_road_maintenance_service.png";

const services = [
  {
    image: ruralImage,
    title: "Desbroce de carreteras y cunetas",
    description: "Desbroce mecanizado de márgenes de carretera, cunetas y taludes. Mejoramos la visibilidad y mantenemos la vía en condiciones seguras.",
    alt: "Desbroce de cunetas y márgenes de carretera",
  },
  {
    image: tractorImage,
    title: "Mantenimiento de caminos y fincas",
    description: "Limpieza y acondicionamiento de caminos rurales, fincas rústicas y parcelas.",
    alt: "Mantenimiento de caminos rurales"
  },
  {
    image: manualImage,
    title: "Poda de árboles en altura",
    description: "Poda profesional de árboles en altura con personal cualificado y equipamiento especializado.",
    alt: "Poda de árboles en altura",
  },
  {
    image: ruralImage,
    title: "Prevención de incendios",
    description: "Creación de cortafuegos, desbroce de perímetros y limpieza de zonas forestales para prevenir incendios.",
    alt: "Prevención de incendios forestales",
  },
  {
    image: tractorImage,
    title: "Retirada y triturado de restos vegetales",
    description: "Recogida, triturado y gestión de restos vegetales procedentes de podas y desbroces.",
    alt: "Triturado de restos vegetales",
  }
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="servicios" className="py-16 sm:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones profesionales de desbroce, poda y mantenimiento de terrenos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover-elevate"
              data-testid={`card-service-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4" data-testid={`text-service-desc-${index}`}>
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={scrollToContact}
                  data-testid={`button-service-quote-${index}`}
                >
                  Solicitar presupuesto
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
