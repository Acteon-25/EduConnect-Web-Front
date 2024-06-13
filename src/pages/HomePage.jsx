import Goals from "../components/Goals";
import SectionContainer from "../components/SectionContainer";
import Profesor from '../img/ProfesorOscuro.jpeg'
import Alumno from '../img/AlumnoOscuro.jpeg'
import { useNavigate } from 'react-router-dom'
import Header from "../components/Header"
import Footer from "../components/Footer"

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <br />
      <SectionContainer className="grid grid-cols-2">
        <h1 className="text-5xl font-bold grid-cols-1">Donde el conocimiento y el éxito se encuentran</h1>
        <img src="https://st2.depositphotos.com/2379655/7898/i/450/depositphotos_78986424-stock-photo-curious-school-student-reading-a.jpg" alt="" className="w-full grid-cols-1" />
      </SectionContainer>
      <SectionContainer className="text-center">
        <div>
          <h2>Nuestros Exitos</h2>
          <p>Estamos orgullosos de la enseñanza que brindan nuestros asesores, pendientes siempre de la educacion que se imparte a los alumnos</p>
        </div>
        <div className="grid grid-cols-5">
          <Goals
            num="12K+"
            text="Estudiantes"
          />
          <Goals
            num="12K+"
            text="Estudiantes"
          />
          <Goals
            num="12K+"
            text="Estudiantes"
          />
          <Goals
            num="12K+"
            text="Estudiantes"
          />
          <Goals
            num="12K+"
            text="Estudiantes"
          />
        </div>
      </SectionContainer>
      <SectionContainer className="text-center">
        <h2>Que es tal Educconect</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa et optio repudiandae commodi pariatur atque?</p>
        <div className="grid grid-cols-2 text-center px-8 gap-4">
          <div className="bg-local bg-cover aspect-video w-full rounded-xl place-content-center my-5" style={{
            backgroundImage: `url(${Alumno})`
          }}>
            <h3 className="text-3xl text-white font-bold m-3">Para estudiante</h3>
            <button className="border border-white text-white rounded-xl py-1 px-4" onClick={() => {
              navigate("/registerAlumno");
            }}>Comenzar clases hoy</button>
          </div>
          <div className="bg-local bg-cover aspect-video w-full rounded-xl place-content-center my-5" style={{
            backgroundImage: `url(${Profesor})`
          }}>
            <h3 className="text-3xl text-white font-bold m-3">Para asesor</h3>
            <button className="border border-white text-white rounded-xl py-1 px-4" onClick={() => {
              navigate("/registerAsesor");
            }} >Comenzar a enseñar hoy</button>
          </div>
        </div>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default HomePage;