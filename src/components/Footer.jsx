import { Link } from "react-router-dom"; // Si estás usando React Router para la navegación
import FaFacebook from "../icons/FaFacebook.svg";
import FaTwitter from "../icons/FaTwitter.svg";
import FaInstagram from "../icons/FaInstagram.svg";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          <div>
            <h3 className="text-2xl font-bold mb-2">EduConnect S.A.C</h3>
            <p className="text-M text-gray-400 ">
              Donde el conocimiento y el éxito se encuentran.
            </p>
            <div className="flex space-x-4 mt-4 ">
              <a href="#" className="text-gray-400 hover:text-white ">
                <img alt="face" src={FaFacebook} className="size-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={FaTwitter} className="size-10" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <img src={FaInstagram} className="size-10" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Planes</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/basico">Basico</Link>
              </li>
              <li>
                <Link to="/premium">Premium</Link>
              </li>
              <li>
                <Link to="/superpremium">Super Premium</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">Quiero ser asesor</Link>
              </li>
              <li>
                <Link to="/">OTRO</Link>
              </li>
              <li>
                <Link to="/">OTRO</Link>
              </li>
              <li>
                <Link to="/">OTRO</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Nosotros</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Guia</Link>
              </li>
              <li>
                <Link to="/">Testimonios</Link>
              </li>
              <li>
                <Link to="/">Licencia</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>
            Hecho con ❤️ EduConnect.
            <br />
            Héctor Vega - Jean Coaquira - Jhonatan Fernandez - Giancarlo Vasquez
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
