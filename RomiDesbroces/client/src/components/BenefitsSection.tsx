import { ShieldCheck, Eye, Cog, Clock, FileCheck, Flame } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Cumplimiento normativo",
    description: "Respetamos todas las normativas en prevención de incendios y conservación de carreteras"
  },
  {
    icon: Eye,
    title: "Seguridad vial",
    description: "Mejoramos la visibilidad en curvas, cruces y accesos para una conducción más segura"
  },
  {
    icon: Cog,
    title: "Equipos propios y personal formado",
    description: "Maquinaria especializada, formación en PRL, EPIs y Seguro de RC"
  },
  {
    icon: Clock,
    title: "Planificación por campañas",
    description: "Adaptamos nuestro servicio a las necesidades del municipio (primavera, verano, etc.)"
  },
  {
    icon: Flame,
    title: "Prevención de incendios",
    description: "Reducimos el riesgo de incendios forestales y protegemos infraestructuras públicas"
  },
  {
    icon: FileCheck,
    title: "Respuesta rápida en urgencias",
    description: "Atención inmediata ante caída de árboles o vegetación que invada la calzada"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-benefits-title">
            ¿Por qué elegir ROMI DESBROCES?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesionales comprometidos con la seguridad vial y el mantenimiento de infraestructuras públicas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2" data-testid={`text-benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground" data-testid={`text-benefit-desc-${index}`}>
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
