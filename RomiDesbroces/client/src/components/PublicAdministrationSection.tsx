import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Route, Trees, Flame, FileCheck, Users } from "lucide-react";

const services = [
  {
    icon: Route,
    title: "Desbroce de cunetas y márgenes de carretera",
    description: "Mantenimiento especializado de infraestructuras viales para mejorar visibilidad y seguridad"
  },
  {
    icon: Trees,
    title: "Mantenimiento de caminos rurales y vías pecuarias",
    description: "Limpieza y acondicionamiento de accesos rurales y vías de comunicación"
  },
  {
    icon: Building2,
    title: "Desbroce en zonas periurbanas y accesos",
    description: "Limpieza de vegetación en entradas a núcleos urbanos y zonas de transición"
  },
  {
    icon: Users,
    title: "Polígonos industriales y zonas logísticas",
    description: "Mantenimiento de áreas empresariales y espacios de actividad económica"
  },
  {
    icon: Flame,
    title: "Franjas de seguridad contra incendios",
    description: "Creación y mantenimiento de perímetros de protección en carreteras y zonas habitadas"
  },
  {
    icon: FileCheck,
    title: "Contratos de mantenimiento periódico",
    description: "Campañas anuales o por temporada adaptadas a las necesidades del municipio"
  }
];

const certifications = [
  {
    icon: FileCheck,
    title: "Experiencia desde 2004",
    description: "Más de 20 años prestando servicios a Ayuntamientos y Administraciones"
  },
  {
    icon: FileCheck,
    title: "Seguro de RC",
    description: "Responsabilidad civil completa para todos nuestros trabajos"
  },
  {
    icon: FileCheck,
    title: "PRL y formación",
    description: "Personal certificado en prevención de riesgos laborales"
  },
  {
    icon: FileCheck,
    title: "Cumplimiento normativo",
    description: "Adheridos a normativas de prevención de incendios y conservación vial"
  }
];

export default function PublicAdministrationSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="ayuntamientos" className="py-16 sm:py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 px-4 py-2 rounded-md mb-4">
            <Building2 className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Sector Público</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4" data-testid="text-admin-title">
            Servicios para Ayuntamientos y Obras Públicas
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto mb-6">
            En ROMI DESBROCES estamos especializados en el mantenimiento de carreteras y espacios públicos. 
            Trabajamos con Ayuntamientos y Administraciones de toda España para mantener cunetas, márgenes 
            de carretera y caminos rurales limpios y seguros.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 hover-elevate" data-testid={`card-admin-service-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-md bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-primary-foreground" data-testid={`text-admin-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm" data-testid={`text-admin-service-desc-${index}`}>
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="bg-primary-foreground/10 rounded-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-center mb-8" data-testid="text-certifications-title">
            Garantía profesional y cumplimiento normativo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <div key={index} className="text-center" data-testid={`cert-${index}`}>
                  <div className="w-16 h-16 rounded-md bg-primary-foreground/10 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-1 text-primary-foreground" data-testid={`text-cert-title-${index}`}>
                    {cert.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/80" data-testid={`text-cert-desc-${index}`}>
                    {cert.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              data-testid="button-admin-proposal"
            >
              Solicita propuesta para tu municipio
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={scrollToContact}
              data-testid="button-admin-download"
            >
              Descarga información para Administraciones Públicas
            </Button>
          </div>
        </div>

        {/* Municipalities Section */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-lg text-primary-foreground/90 mb-6">
            Trabajamos con Ayuntamientos y Administraciones de toda España, coordinando campañas de desbroce 
            por temporada y adaptándonos a los planes de prevención de incendios de cada comunidad autónoma
          </p>
          <div className="flex flex-wrap justify-center gap-4 opacity-60">
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-md text-sm font-medium">
              Ciudad Real
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-md text-sm font-medium">
              Toledo
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-md text-sm font-medium">
              Cuenca
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-md text-sm font-medium">
              Albacete
            </div>
            <div className="px-6 py-3 bg-primary-foreground/10 rounded-md text-sm font-medium">
              Guadalajara
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
