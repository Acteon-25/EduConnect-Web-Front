import SectionContainer from "../components/SectionContainer"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Alumno from '../img/AlumnoOscuro.jpeg'
import Header from "../components/Header"
import Footer from "../components/Footer"
import axios from 'axios'


const RegisterPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [nombre, setNombre] = useState();
  const [contrasena, setContrasena] = useState();

  async function crearEstudiante () {
      try {
        const nuevoEstudiante = {
          nombre: nombre,
          correoElectronico: email,
          contrasena: contrasena,
        };
        const response = await axios.post('http://localhost:8080/registro/estudiante', nuevoEstudiante);
        localStorage.setItem('token', response.data.tokenTemporal); 
        navigate('/pricing/')
      }catch (e){
        console.log('Error al crear usuario', e);
      }
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      crearEstudiante()

    }
  return (
    <>
      <Header />
      <SectionContainer className="grid sm:grid-cols-2  sm:py-16 p-5 lg:w-auto gap-4 place-items-center sm:my-32 md:place-items-center md:my-24 xl:my-0">
        <img src={Alumno} alt="" className="rounded-xl aspect-square sm:w-[300px] md:w-[380px] xl:w-[550px] " />
        <div className="">
          <h2>Bienvenido</h2>
          <div className="border bg-sky-400 rounded-full py-3 px-4 grid grid-cols-2">
            <button className="bg-sky-500 rounded-full text-white py-2" onClick={() => {
              navigate("/registerAlumno");
            }}>
              Registro de Alumno
            </button>
            <button className="rounded-full text-white py-2" onClick={() => {
              navigate("/registerAsesor");
            }}>
              Registro de Asesor
            </button>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto.</p>
          <form onSubmit={handleSubmit}>
          <h3>Email: </h3>
          <input type="email" name="" id="" placeholder="Ingrese su email" className="border border-sky-500 rounded-full px-4 py-1"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          required/>
          <h3>Nombre: </h3>
          <input type="text" placeholder="Ingrese su username" className="border border-sky-500 rounded-full px-4 py-1" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required />
          <h3>Contraseña</h3>
          <input type="password" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1"
           value={contrasena}
           onChange={(e) => setContrasena(e.target.value)}
           required 
           minLength="8"/>
          <button className="bg-sky-500 rounded-full text-white px-6 py-1 block my-4 ">
            Registrate
          </button>

          </form>
         
        </div>
      </SectionContainer>
      <Footer />
    </>
  )
}

export default RegisterPage