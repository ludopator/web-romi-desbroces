import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import tractorImage from "@assets/generated_images/tractor_clearing_service_card.png";
import manualImage from "@assets/generated_images/manual_clearing_steep_terrain.png";
import urbanImage from "@assets/generated_images/urban_lot_cleaning_service.png";
import ruralImage from "@assets/generated_images/rural_road_maintenance_service.png";

const services = [
  {
    image: ruralImage,
    title: "Desbroce de carreteras y cunetas",
    description: "Desbroce mecanizado de márgenes de carretera, cunetas y taludes. Mejoramos la visibilidad, reducimos el riesgo de incendio y mantenemos la vía en condiciones seguras.",
    price: "desde 0,15€/m²",
    alt: "Desbroce de cunetas y márgenes de carretera",
    featured: true
  },
  {
    image: tractorImage,
    title: "Mantenimiento de caminos rurales y vías públicas",
    description: "Limpieza y acondicionamiento de caminos rurales, vías pecuarias y accesos a núcleos urbanos",
    price: "Por metros lineales",
    alt: "Mantenimiento de caminos rurales"
  },
  {
    image: urbanImage,
    title: "Desbroce en zonas periurbanas y polígonos",
    description: "Limpieza de vegetación en áreas industriales, polígonos y zonas de transición urbana",
    price: "Desde 0,20€/m²",
    alt: "Desbroce en polígonos industriales"
  },
  {
    image: manualImage,
    title: "Desbroce de fincas y parcelas",
    description: "Servicio adicional de limpieza de terrenos privados, fincas rústicas y parcelas",
    price: "Presupuesto personalizado",
    alt: "Desbroce de fincas privadas",
    secondary: true
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
            Servicios de desbroce y mantenimiento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especialistas en desbroce de carreteras, cunetas y caminos públicos, con servicio complementario de limpieza de fincas y parcelas privadas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden hover-elevate ${service.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              data-testid={`card-service-${index}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {service.featured && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    Principal
                  </div>
                )}
                {service.secondary && (
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                    Servicio adicional
                  </div>
                )}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-3" data-testid={`text-service-desc-${index}`}>
                  {service.description}
                </p>
                <p className="text-primary font-semibold mb-4" data-testid={`text-service-price-${index}`}>
                  {service.price}
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
