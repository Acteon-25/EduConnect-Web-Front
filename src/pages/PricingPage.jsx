import Header from "../components/Header";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

const PricingPage = () => {

  return (
<>
      <Header />

      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Planes de Suscripción
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Elige el plan que mejor se adapte a tus necesidades de
              aprendizaje.
            </p>
          </div>

          {/* Tarjetas de Planes */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Tarjeta Plan Básico */}
            <PricingCard
              plan="Básico"
              precio="49.99/mes"
              caracteristicas={[
                "Acceso a asesorias personalizadas",
                "Soporte en horario laboral",
                "Foro",
                "Acceso limitado a material de la biblioteca",
                "Comentarios y evaluaciones sobre asesorías",
              ]}
              value="ESTUDIANTE_PRO"

            />

            {/* Tarjeta Plan Premium */}
            <PricingCard
              plan="Premium"
              precio="79.99/mes"
              caracteristicas={[
                "Acceso ilimitado a la biblioteca virtual",
                "Soporte 24hs",
                "Acceso a reportes de notas y comentarios del alumno",
                "El número del sr. vásquez",
              ]}
              highlighted 
              value="ESTUDIANTE_PRO"


            />

            {/* Tarjeta Plan Super ArchiMegaPremium */}
            <PricingCard
              plan="Super ArchiMegaPremium"
              precio="119.99/mes"
              caracteristicas={[
                "Asesorías múltiples en 1 día",
                "Capacitación Soporte 24hs",
                "Elección de Asesores",
                "El número del CEO Jhonatan Fernandez para llamarlo directamente",
                "Acceso al código fuente",
                "Acceso a la casa del sr. vásquez",
                "Acceso a party de 5 de divine a +",
              ]}
              value="ESTUDIANTE_PRO"

            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PricingPage;
