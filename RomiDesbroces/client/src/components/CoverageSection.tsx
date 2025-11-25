import { MapPin, Clock, FileCheck, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CoverageSection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-coverage-title">
            Cobertura y experiencia
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trabajamos con empresas y administraciones de toda España, coordinando campañas de desbroce 
            por temporada y adaptándonos a las necesidades de cada cliente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid="text-coverage-location">
                  Cobertura nacional
                </h3>
                <p className="text-muted-foreground text-sm">
                  Desde Ciudad Real a toda España
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid="text-coverage-experience">
                  Experiencia desde 2004
                </h3>
                <p className="text-muted-foreground text-sm">
                  Más de 20 años de servicio profesional
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid="text-coverage-contracts">
                  Contratos flexibles
                </h3>
                <p className="text-muted-foreground text-sm">
                  Contratos anuales o por campaña
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2" data-testid="text-coverage-urgency">
                  Servicio de urgencias
                </h3>
                <p className="text-muted-foreground text-sm">
                  Respuesta rápida y disponibilidad inmediata
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-accent/30 rounded-md p-8 text-center">
          <p className="text-lg text-foreground mb-4">
            <strong>Equipos con PRL y Seguro de Responsabilidad Civil</strong>
          </p>
          <p className="text-muted-foreground">
            Todo nuestro personal cuenta con formación en Prevención de Riesgos Laborales y disponemos 
            de seguro de responsabilidad civil que cubre todos nuestros trabajos. Garantizamos el cumplimiento 
            de todas las normativas aplicables en materia de prevención de incendios y conservación de carreteras.
          </p>
        </div>
      </div>
    </section>
  );
}
