import SectionContainer from "../components/SectionContainer"
import { useNavigate } from 'react-router-dom'
import Profesor from '../img/ProfesorOscuro.jpeg'
import Header from "../components/Header"
import Footer from "../components/Footer"
import { useState } from 'react'
import axios from 'axios'

const RegisterAsesorPage = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState();
  const [nombre, setNombre] = useState();
  const [contrasena, setContrasena] = useState();
  const [especialidad, setEspecialidad] = useState()


  async function registrarAsesor() {

    const nuevoAsesor = {
      usuario: {
        correoElectronico: email,
        nombre: nombre,
        contrasena: contrasena,
      },
      especialidad: especialidad,
    }

    try {

      const response = await axios.post('http://localhost:8080/registro/asesor', nuevoAsesor);
      localStorage.setItem('token', response.data.tokenTemporal);
      navigate('/')
    } catch (e) {
      console.log(e);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    registrarAsesor()
  }

  return (
    <>
      <Header />
      <SectionContainer className="grid sm:grid-cols-2  sm:py-16 p-5 lg:w-auto gap-4 place-items-center sm:my-32 md:place-items-center md:my-24 xl:my-0">
        <img src={Profesor} alt="" className="rounded-xl aspect-square sm:w-[300px] md:w-[380px] xl:w-[550px] " />
        <div className="">
          <h2>Bienvenido</h2>
          <div className="border bg-sky-400 rounded-full py-3 px-4 grid grid-cols-2">
            <button className="rounded-full text-white py-2" onClick={() => {
              navigate("/registerAlumno");
            }}>
              Registro de Alumno
            </button>
            <button className="bg-sky-500 rounded-full text-white py-2" onClick={() => {
              navigate("/registerAsesor");
            }}>
              Registro de Asesor
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iusto.</p>
            <h3>Correo Electronico: </h3>
            <input type="email" name="" id="" placeholder="Ingrese su email" className="border border-sky-500 rounded-full px-4 py-1"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Nombres</h3>
            <input type="text" placeholder="Ingrese su username" className="border border-sky-500 rounded-full px-4 py-1"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} />
            <h3>Contraseña</h3>
            <input type="password" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)} />
            <h3>Especialidad</h3>
            <input type="text" placeholder="Ingrese la especialidad" className="border border-sky-500 rounded-full px-4 py-1"
              value={especialidad}
              onChange={(e) => setEspecialidad(e.target.value)}
            />
            <h3>Ingreso de archivos</h3>
            <input type="file" placeholder="Ingrese su contraseña" className="border border-sky-500 rounded-full px-4 py-1"
            />
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

export default RegisterAsesorPage