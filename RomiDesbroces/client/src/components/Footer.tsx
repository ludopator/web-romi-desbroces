import { Mail, Phone, MapPin } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
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
          {/* Logo & About */}
          <div>
            <img 
              src={logoImage} 
              alt="ROMI DESBROCES" 
              className="h-16 w-auto mb-4 brightness-0 invert"
              data-testid="img-footer-logo"
            />
            <p className="text-background/80 mb-4">
              Empresa profesional de desbroce y limpieza de terrenos. 
              Tu seguridad es nuestra prioridad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-links-title">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-footer-servicios"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("proceso")}
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-footer-proceso"
                >
                  Proceso de trabajo
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contacto")}
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-footer-contacto"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="text-footer-contact-title">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a 
                  href="tel:+34600123456" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-footer-phone"
                >
                  +34 600 123 456
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a 
                  href="mailto:info@romidesbroces.com" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-footer-email"
                >
                  info@romidesbroces.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span className="text-background/80">
                  Ciudad Real, España
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/80 text-sm" data-testid="text-copyright">
              © {currentYear} ROMI DESBROCES. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-facebook"
                >
                  <SiFacebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-instagram"
                >
                  <SiInstagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-linkedin"
                >
                  <SiLinkedin className="h-5 w-5" />
                </a>
              </div>
              
              <div className="flex gap-4 text-sm">
                <a 
                  href="#" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-legal"
                >
                  Aviso Legal
                </a>
                <a 
                  href="#" 
                  className="text-background/80 hover:text-background transition-colors"
                  data-testid="link-privacy"
                >
                  Privacidad
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
