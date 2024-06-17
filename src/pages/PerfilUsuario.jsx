import { useState, useEffect } from 'react';
import axios from 'axios';

function PerfilUsuario() {
  const [usuario, setUsuario] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerDatosUsuario = async () => {
      try {
        const token = `eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJob2xhQGhvbGF4ZGRkZC5jb20iLCJhdXRob3JpdGllcyI6IkVTVFVESUFOVEUiLCJleHAiOjE3MTg0MTIzNzB9.fvRbgztIsXCDe8UpsOQNk6MqFAS-IkBbU0gzpEtX8EOWnNCi8DD8nFM56Qg1vnJ7KchZQAsvMO-5AXXcegVrpg`;




        const response = await axios.get('http://localhost:8080/estudiantes/perfil', {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setUsuario(response.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
        setError('No se pudo cargar la información del perfil.');
      }
    };

    obtenerDatosUsuario();
  }, []); 

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!usuario) {
    return <div>Cargando perfil...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p>Nombre: {usuario.nombre}</p>
        <p>Correo electrónico: {usuario.correoElectronico}</p>
        <p>Tipo Usuario : {usuario.tipoUsuario}</p>
        <p>Estado : {usuario.estado}</p>
      </div>
    </div>
  );
}

export default PerfilUsuario;
