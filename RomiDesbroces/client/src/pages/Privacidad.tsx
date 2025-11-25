import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Responsable del tratamiento</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Identidad:</strong> ROMI DESBROCES [Actualizar con razón social]</li>
                <li><strong>CIF/NIF:</strong> [Actualizar con CIF]</li>
                <li><strong>Dirección:</strong> [Actualizar con dirección], Ciudad Real, España</li>
                <li><strong>Email:</strong> info@romidesbroces.com [Actualizar]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Datos que recopilamos</h2>
              <p>
                A través del formulario de contacto de esta web, podemos recopilar los siguientes datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Mensaje o consulta</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Finalidad del tratamiento</h2>
              <p>
                Los datos personales que nos facilites serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Responder a las consultas y solicitudes de presupuesto que nos envíes.</li>
                <li>Gestionar la relación comercial si llegas a ser cliente.</li>
                <li>Enviarte información sobre nuestros servicios si nos has dado tu consentimiento.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Legitimación</h2>
              <p>
                La base legal para el tratamiento de tus datos es:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Tu consentimiento al enviarnos el formulario de contacto.</li>
                <li>El interés legítimo de ROMI DESBROCES para atender tu solicitud.</li>
                <li>La ejecución de un contrato cuando seas cliente.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Conservación de datos</h2>
              <p>
                Conservaremos tus datos personales durante el tiempo necesario para atender tu solicitud y, posteriormente, durante los plazos legalmente establecidos para atender posibles responsabilidades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Destinatarios</h2>
              <p>
                No cederemos tus datos personales a terceros, salvo obligación legal o para la prestación de servicios directamente relacionados con la actividad empresarial.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Derechos del usuario</h2>
              <p>
                Tienes derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Acceso:</strong> Conocer si tratamos tus datos y obtener una copia.</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> Oponerte al tratamiento de tus datos.</li>
                <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento en determinadas circunstancias.</li>
                <li><strong>Portabilidad:</strong> Recibir tus datos en un formato estructurado.</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puedes contactarnos en: info@romidesbroces.com [Actualizar]
              </p>
              <p className="mt-4">
                También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Seguridad</h2>
              <p>
                ROMI DESBROCES ha adoptado las medidas técnicas y organizativas necesarias para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.
              </p>
            </section>

            <section className="bg-accent/30 p-6 rounded-lg mt-8">
              <p className="text-sm">
                <strong>Nota:</strong> Este texto es una plantilla base conforme al RGPD. Debes actualizarlo con los datos reales de tu empresa y, preferiblemente, revisarlo con un profesional legal para asegurar su cumplimiento normativo.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
