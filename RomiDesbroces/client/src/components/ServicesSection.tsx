import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Route, Leaf, Trees } from "lucide-react";
import ruralImage from "@assets/generated_images/rural_road_maintenance_service.png";
import tractorImage from "@assets/generated_images/tractor_clearing_service_card.png";
import manualImage from "@assets/generated_images/manual_clearing_steep_terrain.png";

const services = [
  {
    image: ruralImage,
    icon: Route,
    title: "Desbroce de carreteras",
    description:
      "Siegas mecanizadas de cunetas, arcenes y márgenes. Repaso manual en zonas de difícil acceso. Mantenimiento preventivo por campañas (primavera, verano, otoño).",
    alt: "Desbroce profesional de cunetas y márgenes de carretera",
    principal: true,
  },
  {
    image: tractorImage,
    icon: Leaf,
    title: "Herbicidas en carreteras",
    description:
      "Tratamientos con herbicida en primavera y otoño. Productos autorizados, cumplimiento normativo y documentación completa. Personal con carné de aplicador de fitosanitarios.",
    alt: "Tratamiento con herbicida autorizado en cunetas de carretera",
    principal: true,
  },
  {
    image: manualImage,
    icon: Trees,
    title: "Otros trabajos",
    description:
      "Desbroce de fincas, parcelas y caminos rurales. Poda de árboles y limpieza de terrenos.",
    alt: "Desbroce de fincas y parcelas",
    principal: false,
  },
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
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Nuestros servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Especializados en desbroce de carreteras y tratamientos con herbicida
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-elevate ${
                !service.principal ? "opacity-85" : ""
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                {service.principal && (
                  <span className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
                    Principal
                  </span>
                )}
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <Button variant="outline" className="w-full" onClick={scrollToContact}>
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
