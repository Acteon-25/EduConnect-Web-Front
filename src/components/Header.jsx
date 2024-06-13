import { NavLink, useNavigate, Link } from "react-router-dom";
import Logo from "../icons/Logo.svg";
import LineDrop from "../icons/LineDrop.svg";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const navigate = useNavigate();
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-4 w-full mx-auto bg-green-700 px-5">
      <div className="flex justify-between w-full">
        <Link to="/">
        <img src={Logo} alt="" className="rounded-full size-12" />
        </Link>
        <img
          src={LineDrop}
          alt=""
          className="size-12 cursor-pointer mx-2 md:hidden block"
          onClick={handleClick}
        />
      </div>
      <nav
        className={
          menuOpen
            ? `md:flex-row gap-x-10 md:z-auto md:relative bg-green-700 w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-500 flex flex-col items-center`
            : " md:relative md:opacity-100 md:top-0 md:z-auto md:w-auto md:py-0 md:pl-0 md:justify-between md:gap-x-10 items-center opacity-0 top-[-400px] z-[-1] absolute flex"
        }
      >
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 py-1 px-5 mx-auto rounded-xl text-white"
              : "text-white"
          }
          to="/"
        >
          Inicio
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 py-1 px-5 mx-auto rounded-xl text-white"
              : "text-white"
          }
          to="/nosotros"
        >
          Nosotros
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 py-1 px-5 mx-auto rounded-xl text-white"
              : "text-white"
          }
          to="/biblioteca"
        >
          Biblioteca
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-green-500 py-1 px-5 mx-auto rounded-xl text-white"
              : "text-white"
          }
          to="/pricing"
        >
          Precios
        </NavLink>
        <button
          className="text-white"
          onClick={() => {
            navigate("/login");
          }}
        >
          Iniciar sesión
        </button>
      </nav>
    </header>
  );
};

export default Header;
