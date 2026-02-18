import { ShieldCheck, FileCheck, AlertTriangle, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const garantias = [
  {
    icon: Award,
    title: "Carné de aplicador de fitosanitarios",
    description:
      "Personal con carné oficial de aplicador de productos fitosanitarios (herbicidas). Cumplimos toda la normativa vigente.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención de Riesgos Laborales",
    description:
      "Formación completa en PRL, uso de EPIs y procedimientos de trabajo seguro en vía pública.",
  },
  {
    icon: AlertTriangle,
    title: "Señalización vial",
    description:
      "Señalización y balizamiento de obras en carretera para garantizar la seguridad del tráfico durante los trabajos.",
  },
  {
    icon: FileCheck,
    title: "Documentación y trazabilidad",
    description:
      "Fichas de tratamiento, autorizaciones y documentación completa de cada actuación. Seguro de Responsabilidad Civil.",
  },
];

export default function CertificacionesSection() {
  return (
    <section id="certificaciones" className="py-16 sm:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certificaciones y garantías
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Personal con <strong>carné de aplicador de productos fitosanitarios</strong> (herbicidas) y procedimientos de trabajo seguro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {garantias.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
