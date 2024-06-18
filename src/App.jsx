import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import PrivateRoute from "./utils/privateRoute";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LoginUserPage from "./pages/LoginUserPagina";
import PricingPage from "./pages/PricingPage";
import ErrorPage from "./pages/ErrorPage";
import BibliotecaPage from "./pages/BibliotecaPage";
import DashboardPage from "./pages/DashboardPage";
import EditProfilePage from "./pages/EditProfile";
import NosotrosPage from './pages/NosotrosPage';
import RestablecerPage from './pages/RestablecerPage';
import RegisterAsesorPage from './pages/RegisterAsesorPage';
import AdministracionUsuariosPage from "./pages/AdministracionUsuariosPage";
import AdministrarAsesoresPage from "./pages/AdministrarAsesoresPage";
import MeetingPage from "./pages/MeetingPage";
import ConfirmarContraPage from "./pages/ConfirmarContraPage";
import AsesorDetailsPage from './pages/AsesorDetailsPage';
import PerfilUsuario from './pages/PerfilUsuario';
import MiMembresiaPage from './pages/MiMembresiaPage';
import authService from "./services/authService";

function App() {
  const { user, setUser, login, logout, getCurrentUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      setIsLoading(true);
      try {
        const authenticatedUser = await authService.getCurrentUser();
        setUser(authenticatedUser);
      } catch (error) {
        console.error('Error al verificar la autenticación:', error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
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

          {/* Rutas protegidas para estudiantes */}
          <Route element={<PrivateRoute allowedRoles={['ESTUDIANTE', 'ESTUDIANTE_PRO']} />}>
            <Route path="/biblioteca" element={<BibliotecaPage />} />
            {/* ... otras rutas protegidas para estudiantes */}
          </Route>

          {/* Rutas protegidas para asesores */}
          <Route element={<PrivateRoute allowedRoles={['ASESOR']} />}>
            <Route path="/editProfile" element={<EditProfilePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
           
            {/* ... otras rutas protegidas para asesores */}
          </Route>

          {/* Rutas protegidas para administradores */}
          <Route element={<PrivateRoute allowedRoles={['ADMIN']} />}>
            <Route path="/administracionUsuarios" element={<AdministracionUsuariosPage />} />
            <Route path="/administrarAsesores" element={<AdministrarAsesoresPage />} />
            <Route path="/admin/asesores/:id" element={<AsesorDetailsPage />} />
            {/* ... otras rutas protegidas para administradores */}
          </Route>

          <Route path="/meeting" element={<MeetingPage />} />
          <Route path="/confirmarContra" element={<ConfirmarContraPage />} />
          <Route path="/usuario/perfilUsuario/:id" element={<PerfilUsuario />} />
          <Route path="/miMembresia" element={<MiMembresiaPage />} />
          {/* ... otras rutas ... */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;