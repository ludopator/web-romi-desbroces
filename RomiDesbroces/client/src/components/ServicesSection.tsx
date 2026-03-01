import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Route, Leaf, Trees } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "Desbroce de carreteras",
    description:
      "Siegas mecanizadas de cunetas, arcenes y márgenes. Repaso manual en zonas de difícil acceso. Mantenimiento preventivo por campañas (primavera, verano, otoño).",
    principal: true,
  },
  {
    icon: Leaf,
    title: "Herbicidas en carreteras",
    description:
      "Tratamientos con herbicida en primavera y otoño. Productos autorizados, cumplimiento normativo y documentación completa. Personal con carné de aplicador de fitosanitarios.",
    principal: true,
  },
  {
    icon: Trees,
    title: "Otros terrenos",
    description:
      "Desbroce de fincas, parcelas y caminos rurales. Poda de árboles y limpieza de terrenos.",
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
            Especializados en desbroce de carreteras y tratamientos con herbicida.
            También trabajamos con administraciones cumpliendo requisitos técnicos y de seguridad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover-elevate flex flex-col ${
                !service.principal ? "opacity-85" : ""
              }`}
            >
              <CardContent className="pt-8 flex-grow flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">
                  {service.description}
                </p>
                <Button variant="outline" className="w-full mt-auto" onClick={scrollToContact}>
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
