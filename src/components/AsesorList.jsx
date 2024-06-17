import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Avatar from '../icons/Avatar.svg'

function AsesorList() {
  const [asesores, setAsesores] = useState([]);

  useEffect(() => {
    const fetchAsesores = async () => {
      try {
        const response = await axios.get('http://localhost:8080/admin/asesores/pendientes', { 
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        setAsesores(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchAsesores();
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8  ">
      <div className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {asesores.map((asesor) => (
          <div key={asesor.idAsesor} className="flex items-start gap-4 shadow-lg  p-4">
            <img 
              src={Avatar} 
              alt={`${asesor.usuario.nombre} avatar`}
              className="h-12 w-12 rounded-full" 
            />
            <div className="grid gap-1">
              <div className="font-medium">{asesor.usuario.nombre}</div>
              <div className="text-sm text-gray-500">{asesor.usuario.correoElectronico}</div>
              <div className="text-sm  text-gray-500 line-clamp-2">
                {asesor.especialidad || 'Sin Materia'} 
              </div>
              <div className="text-sm  text-gray-500 line-clamp-2">
                {asesor.usuario.estado || 'SIn estado'} 
              </div>
              <Link
                to={`/admin/asesores/${asesor.idAsesor}`}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-500 hover:text-blue-700"
              >
                Ver Detalles
                <svg
                  className="h-4 w-4" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AsesorList;