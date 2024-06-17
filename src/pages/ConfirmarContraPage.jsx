import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import axios from "axios"
import { useState } from "react";


const ConfirmarContraPage = () => {
  const navigate = useNavigate()
  const tokenRestablecimiento = localStorage.getItem("token2")

  const [contrasena, setContrasena] = useState();

  async function change() {
    try {
      const res = await axios.post(`http://localhost:8080/restablecer-contrasena/${tokenRestablecimiento}`, {
        nuevaContrasena: contrasena,
      })
      console.log(res)
      console.log(tokenRestablecimiento)
      navigate(`/login`)
    } catch (error) {
      console.log(error);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    change()
  }



  return (
    <>
      <Header />
      <SectionContainer>
        <div className="flex items-center justify-center bg my-10">
          <form className="max-w-md p-8 " onSubmit={handleSubmit}>
            <h3 className="text-4xl font-bold text-center mb-4">
              Ingrese su nueva contraseña
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Su correo fue confirmado muchas gracias, ingrese su nueva contraseña
            </p>
            <div className="mb-4">
              <label className="text-sm font-bold">Contraseña</label>
            </div>

            <input
              type="text"
              placeholder="
         Ingresa tu nueva contraseña"
              className="shadow border rounded w-full py-2 px-3 mb-5"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />

            <button
              type="submit"
              className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded w-full"
            >
              Cambiar
            </button>

            <div className="text-center mt-4">
              <Link to="/login" className="text-blue-500 hover:text-blue-700">
                Volver
              </Link>
            </div>
          </form>
        </div>
      </SectionContainer>

      <Footer />
    </>
  );
};

export default ConfirmarContraPage;
