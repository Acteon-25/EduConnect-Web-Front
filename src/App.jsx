import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import LoginUserPage from "./pages/LoginUserPagina"
import PricingPage from "./pages/PricingPage"
import ErrorPage from "./pages/ErrorPage"
import BibliotecaPage from "./pages/BibliotecaPage"
import DashboardPage from "./pages/DashboardPage"
import EditProfilePage from "./pages/EditProfile"
import NosotrosPage from './pages/NosotrosPage'
import RestablecerPage from './pages/RestablecerPage'
import RegisterAsesorPage from './pages/RegisterAsesorPage'
import AdministracionUsuariosPage from "./pages/AdministracionUsuariosPage"
import AdministrarAsesoresPage from "./pages/AdministrarAsesoresPage"
import MeetingPage from "./pages/MeetingPage"
import ConfirmarContraPage from "./pages/ConfirmarContraPage"
import AsesorDetailsPage from './pages/AsesorDetailsPage'
import IngresarCalificacion from './pages/IngresarCalificacion'
import PerfilUsuario from './pages/PerfilUsuario'



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registerAlumno" element={<RegisterPage />} />
          <Route path="/registerAsesor" element={<RegisterAsesorPage />} />
          <Route path="/login/:id" element={<LoginUserPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/restablecer-clave" element={<RestablecerPage />} />
          <Route path="/biblioteca" element={<BibliotecaPage />} />
          <Route path="/administrarAsesores" element={<AdministrarAsesoresPage />} />
          <Route path="/administracionUsuarios" element={<AdministracionUsuariosPage />} />
          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/confirmarContra" element={<ConfirmarContraPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/admin/asesores/:id" element={<AsesorDetailsPage />} />
          <Route path="/asesor/ingresarCalificacion" element={<IngresarCalificacion />} />
          <Route path="/usuario/perfilUsuario/:id" element={<PerfilUsuario />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
