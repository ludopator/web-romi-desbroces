import { Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/generated_images/romi_desbroces_company_logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <img
              src={logoImage}
              alt="ROMI DESBROCES"
              className="h-16 w-auto mb-4 bg-white p-2 rounded"
            />
            <p className="text-background/80 mb-4">
              Especialistas en desbroce de carreteras y tratamiento con herbicida.
              Personal certificado y maquinaria propia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              {[
                { id: "servicios", label: "Servicios" },
                { id: "maquinaria", label: "Maquinaria" },
                { id: "certificaciones", label: "Certificaciones" },
                { id: "zona", label: "Zona de servicio" },
                { id: "contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href="tel:+34644494617"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  +34 644 49 46 17
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href="mailto:proyectos@romidesbroces.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  proyectos@romidesbroces.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <span className="text-background/80">
                  Calle Francisco Mejía 14, 13300 Valdepeñas, Ciudad Real
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm">
              © {currentYear} ROMI DESBROCES. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
