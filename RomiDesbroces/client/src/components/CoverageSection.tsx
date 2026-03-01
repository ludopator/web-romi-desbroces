import { MapPin, Clock, FileCheck, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CoverageSection() {
  return (
    <section id="zona" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Zona de servicio
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Base en Ciudad Real. Trabajamos en Castilla-La Mancha y provincias cercanas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="hover-elevate">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Base en Ciudad Real</h3>
                <p className="text-muted-foreground text-sm">
                  Valdepeñas, Ciudad Real y alrededores
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
                <h3 className="text-lg font-semibold mb-2">Experiencia desde 2004</h3>
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
                <h3 className="text-lg font-semibold mb-2">Contratos flexibles</h3>
                <p className="text-muted-foreground text-sm">
                  Contratos anuales o por campaña estacional
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
                <h3 className="text-lg font-semibold mb-2">Servicio de urgencias</h3>
                <p className="text-muted-foreground text-sm">
                  Respuesta rápida ante caída de árboles o vegetación en calzada
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Ciudad Real", "Toledo", "Cuenca", "Albacete", "Guadalajara"].map((prov) => (
            <span
              key={prov}
              className="px-5 py-2 bg-accent rounded-md text-sm font-medium text-foreground"
            >
              {prov}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
