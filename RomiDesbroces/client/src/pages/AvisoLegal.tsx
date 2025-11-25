import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function AvisoLegal() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Aviso Legal
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Datos identificativos</h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa de los siguientes datos:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Denominación social:</strong> ROMI DESBROCES [Actualizar con razón social completa]</li>
                <li><strong>CIF/NIF:</strong> [Actualizar con CIF]</li>
                <li><strong>Domicilio social:</strong> [Actualizar con dirección completa], Ciudad Real, España</li>
                <li><strong>Teléfono:</strong> +34 600 123 456 [Actualizar]</li>
                <li><strong>Email:</strong> info@romidesbroces.com [Actualizar]</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Objeto</h2>
              <p>
                El presente sitio web tiene como finalidad dar a conocer los servicios de desbroce y mantenimiento de terrenos ofrecidos por ROMI DESBROCES, así como facilitar el contacto con potenciales clientes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Propiedad intelectual e industrial</h2>
              <p>
                Todos los contenidos de este sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, así como su diseño gráfico y códigos fuente, constituyen una obra cuya propiedad pertenece a ROMI DESBROCES, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Condiciones de uso</h2>
              <p>
                El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que ROMI DESBROCES ofrece a través de su sitio web y a no emplearlos para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Realizar actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
                <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
                <li>Provocar daños en los sistemas físicos y lógicos de ROMI DESBROCES, de sus proveedores o de terceras personas.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Exclusión de responsabilidad</h2>
              <p>
                ROMI DESBROCES no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran derivarse de la falta de disponibilidad o de continuidad del funcionamiento del sitio web y de los servicios habilitados en el mismo, así como de los errores en los contenidos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Legislación aplicable y jurisdicción</h2>
              <p>
                La relación entre ROMI DESBROCES y el usuario se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y Tribunales de Ciudad Real, salvo que la ley disponga otra cosa.
              </p>
            </section>

            <section className="bg-accent/30 p-6 rounded-lg mt-8">
              <p className="text-sm">
                <strong>Nota:</strong> Este texto es una plantilla base. Debes actualizarlo con los datos reales de tu empresa y, preferiblemente, revisarlo con un profesional legal para asegurar su cumplimiento normativo.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
