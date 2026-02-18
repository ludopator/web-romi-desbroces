import { Card, CardContent } from "@/components/ui/card";
import { Truck, Tractor } from "lucide-react";

const maquinaria = [
  {
    src: "/images/maquinaria/tractor.png",
    title: "Tractor de desbroce",
    alt: "Tractor profesional de desbroce para mantenimiento de cunetas y márgenes de carretera",
    icon: Tractor,
  },
  {
    src: "/images/maquinaria/furgoneta1.png",
    title: "Furgoneta de apoyo 1",
    alt: "Furgoneta de apoyo para equipo de desbroce y tratamiento con herbicida en carreteras",
    icon: Truck,
  },
  {
    src: "/images/maquinaria/furgoneta2.png",
    title: "Furgoneta de apoyo 2",
    alt: "Furgoneta de apoyo para transporte de equipos de desbroce y señalización vial",
    icon: Truck,
  },
];

export default function MaquinariaSection() {
  return (
    <section id="maquinaria" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Maquinaria y equipo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipos propios y preparados para trabajos en carreteras y terrenos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {maquinaria.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="overflow-hidden hover-elevate">
                <div className="relative h-56 bg-accent/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      const parent = target.parentElement;
                      if (parent) {
                        const placeholder = parent.querySelector(".placeholder-icon");
                        if (placeholder) {
                          (placeholder as HTMLElement).style.display = "flex";
                        }
                      }
                    }}
                  />
                  <div
                    className="placeholder-icon absolute inset-0 flex-col items-center justify-center bg-accent/50 hidden"
                  >
                    <Icon className="h-16 w-16 text-muted-foreground/40 mb-2" />
                    <span className="text-sm text-muted-foreground/60">Foto pendiente</span>
                  </div>
                </div>
                <CardContent className="pt-4 pb-4">
                  <h3 className="text-lg font-semibold text-center">{item.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Para usar tus propias fotos, sustituye los archivos en <code className="bg-accent px-1 rounded text-xs">/public/images/maquinaria/</code> (tractor.png, furgoneta1.png, furgoneta2.png)
        </p>
      </div>
    </section>
  );
}
