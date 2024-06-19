import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Alumno from '../img/AlumnoOscuro.jpeg';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionContainer from '../components/SectionContainer';
import authService from '../services/authService';
import { AuthContext } from '../context/AuthContext';

function Login() {

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");

    const { setUser, setIsAuthenticated, isLoading, setIsLoading} = useContext(AuthContext);
    const [error, setError] = useState("");

    const navigate = useNavigate();
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const loggedUser = await authService.login(email, contrasena);
            setUser(loggedUser);
            setIsAuthenticated(true);
            switch (loggedUser.tipoUsuario) {
                case 'ESTUDIANTE':
                case 'ESTUDIANTE_PRO':
                    navigate('/estudiantes/asesorias');
                    break;
                case 'ASESOR':
                    navigate('/asesores/perfil');
                    break;
                case 'ADMIN':
                    navigate('/admin/usuarios');
                    break;
                default:
                    navigate('/'); 
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false); 
        }
    };

  return (
    <>
      <Header />
      <SectionContainer className="grid sm:grid-cols-2 sm:py-16 p-5 lg:w-auto gap-4 place-items-center sm:my-32 md:place-items-center md:my-24 xl:my-0">
        <img src={Alumno} alt="Alumno" className="rounded-xl aspect-square sm:w-[300px] md:w-[380px] xl:w-[550px] " />
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4">Bienvenido</h2>
          <p className="text-gray-600 mb-4">Inicia sesión para acceder a tu cuenta</p>

          <h3>Correo</h3>
          <input 
            id='email' 
            type="text" 
            placeholder="Ingrese su Correo" 
            className="border border-sky-500 rounded-full px-4 py-1 mb-4 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />

          <h3>Contraseña: </h3>
          <input 
            id='contrasena' 
            type="password" 
            placeholder="Ingrese su contraseña" 
            className="border border-sky-500 rounded-full px-4 py-1 mb-4 w-full"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)} 
          />

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {isLoading ? (
            <button type="button" className="bg-sky-300 rounded-full text-white px-6 py-1 block my-4 cursor-not-allowed opacity-50" disabled>
              Iniciando sesión...
            </button>
          ) : (
            <button type='submit' className="bg-sky-500 rounded-full text-white px-6 py-1 block my-4">
              Login
            </button>
          )}

          <Link className="text-sky-500 hover:text-sky-900 transition duration-300 underline font-medium" to="/restablecer-clave">Olvidaste tu contraseña?</Link>
        </form>

        <div className="flex flex-row gap-2 my-3">
          <p className="text-gray-600">
            ¿Eres nuevo en EduConnect?
          </p>
          <Link className="text-red-600 underline" to="/registro">Registrate</Link>
        </div>
      </SectionContainer>
      <Footer />
    </>
  );
};

export default Login;
