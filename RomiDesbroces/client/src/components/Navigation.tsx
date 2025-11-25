import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/generated_images/romi_desbroces_company_logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img 
              src={logoImage} 
              alt="ROMI DESBROCES Logo" 
              className="h-10 w-auto"
              data-testid="img-logo"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("ayuntamientos")}
              className="text-foreground hover:text-primary transition-colors font-semibold"
              data-testid="link-ayuntamientos"
            >
              Clientes
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-servicios"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("proceso")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-proceso"
            >
              Proceso
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="link-contacto"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              data-testid="button-presupuesto-nav"
            >
              Presupuesto Gratis
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t" data-testid="mobile-menu">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("ayuntamientos")}
                className="text-foreground hover:text-primary transition-colors text-left px-2 font-semibold"
                data-testid="link-ayuntamientos-mobile"
              >
                Clientes
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="link-servicios-mobile"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("proceso")}
                className="text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="link-proceso-mobile"
              >
                Proceso
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="text-foreground hover:text-primary transition-colors text-left px-2"
                data-testid="link-contacto-mobile"
              >
                Contacto
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="w-full"
                data-testid="button-presupuesto-mobile"
              >
                Presupuesto Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
