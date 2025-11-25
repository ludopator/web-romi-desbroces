import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      if (webhookUrl) {
        // Enviar datos al webhook
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            phone: formData.phone,
            message: formData.message,
            timestamp: new Date().toISOString(),
            source: 'ROMI DESBROCES - Formulario Web'
          })
        });

        if (!response.ok) {
          throw new Error('Error al enviar la solicitud');
        }

        toast({
          title: "Solicitud enviada correctamente",
          description: "Nos pondremos en contacto contigo pronto para preparar tu propuesta.",
        });
      } else {
        // Si no hay webhook configurado, solo mostrar mensaje
        console.log("Form submitted:", formData);
        toast({
          title: "Solicitud registrada",
          description: "Nos pondremos en contacto contigo pronto para preparar tu propuesta.",
        });
      }

      // Limpiar formulario
      setFormData({ name: "", phone: "", message: "" });
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      toast({
        title: "Error al enviar",
        description: "Ha ocurrido un error. Por favor, intenta llamarnos o usar WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Solicita un presupuesto para tu municipio o proyecto público
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos qué carreteras, caminos o zonas públicas necesitas desbrozar y te prepararemos una propuesta adaptada a tu Ayuntamiento o administración
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Formulario de contacto</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nombre y cargo</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Juan García, Técnico de Medio Ambiente"
                    required
                    disabled={isSubmitting}
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono de contacto</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="600 123 456"
                    required
                    disabled={isSubmitting}
                    data-testid="input-phone"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Descripción del proyecto</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe las carreteras, caminos o zonas que necesitan desbroce..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                    data-testid="input-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                  data-testid="button-submit-contact"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar propuesta"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" data-testid="text-phone-title">Teléfono</h3>
                    <a 
                      href="tel:+34600123456" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-phone"
                    >
                      +34 600 123 456
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Horario: Lunes a Viernes 8:00 - 18:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" data-testid="text-email-title">Email</h3>
                    <a 
                      href="mailto:info@romidesbroces.com" 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      data-testid="link-email"
                    >
                      info@romidesbroces.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      Respuesta en menos de 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground hover-elevate">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" data-testid="text-whatsapp-title">WhatsApp</h3>
                    <p className="mb-3 text-primary-foreground/90">
                      Contacta directamente por WhatsApp para consultas urgentes
                    </p>
                    <Button 
                      variant="secondary"
                      asChild
                      data-testid="button-whatsapp"
                    >
                      <a 
                        href="https://wa.me/34600123456" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Abrir WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
