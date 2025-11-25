import { Search, Scissors, Trash2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Análisis del terreno",
    description: "Evaluamos las características de tu finca para determinar el mejor método de trabajo"
  },
  {
    number: "02",
    icon: Scissors,
    title: "Desbroce mecanizado/manual",
    description: "Utilizamos maquinaria especializada o trabajo manual según las necesidades del terreno"
  },
  {
    number: "03",
    icon: Trash2,
    title: "Retirada o trituración",
    description: "Gestionamos los restos vegetales mediante retirada o trituración in situ"
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Entrega limpia y segura",
    description: "Tu terreno queda completamente limpio, seguro y listo para su uso"
  }
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-process-title">
            Nuestro proceso de trabajo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un método profesional y eficiente, paso a paso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                {/* Connecting line (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border z-0"></div>
                )}
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-4 text-3xl font-bold">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-md bg-accent/50 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2" data-testid={`text-step-title-${index}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground" data-testid={`text-step-desc-${index}`}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
