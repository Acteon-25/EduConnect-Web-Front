import Header from "../components/Header";
import Footer from "../components/Footer";

const NostrosPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col ">
        <section className="py-10 ">
          <div className="mx-auto max-w-3xl px-6">
            <div className="text-center">
              <h2 className="font-extrabold text-4xl">Sobre Nosotros.</h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                En EduConnect, estamos comprometidos con el éxito académico de
                los estudiantes de colegio. Ofrecemos asesorías personalizadas y
                reforzamiento en diversas materias, adaptándonos a las
                necesidades individuales de cada alumno. Nuestro equipo de
                profesionales altamente calificados utiliza metodologías
                innovadoras y efectivas para potenciar el aprendizaje y
                fortalecer las habilidades de estudio.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              <div className="pt-6 text-center">
                <div className="flex justify-center mb-4"></div>
                <div className="rounded-md bg-gray-100 p-3">
                  <div className="text-base font-medium text-gray-900">
                    Mision
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Nuestra misión es empoderar a los estudiantes de colegio a
                    través de asesorías personalizadas y reforzamiento académico
                    de alta calidad, brindándoles las herramientas y el apoyo
                    necesario para alcanzar su máximo potencial y lograr sus
                    metas educativas.
                  </p>
                </div>
              </div>

              <div className="pt-6 text-center">
                <div className="flex justify-center mb-4"></div>
                <div className="rounded-md bg-gray-100 p-6">
                  <div className="text-base font-medium text-gray-900">
                    Vision
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Ser reconocidos como líderes en el apoyo educativo a nivel
                    nacional, transformando la vida de los estudiantes y
                    contribuyendo al desarrollo de una sociedad más preparada y
                    exitosa
                  </p>
                </div>
              </div>

              <div className="pt-6 text-center">
                <div className="flex justify-center mb-4"></div>
                <div className="rounded-md bg-gray-100 p-6">
                  <div className="text-base font-medium text-gray-900">
                    Valores
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    En EduConnect, nos regimos por los siguientes valores:
                    Excelencia académica Compromiso Responsabilidad Respeto
                    Integridad Colaboración, Lorem, ipsum dolor sit amet consectetur 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default NostrosPage;
