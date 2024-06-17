import { useState } from 'react';
import axios from 'axios';


function CalificarEstudiante() {
  const [nota, setNota] = useState('');
  const [comentario, setComentario] = useState('');
  const [mensaje, setMensaje] = useState(null); 
  const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null); // Limpiar mensaje de error anterior

//     try {
//       const token = localStorage.getItem('token');
//       const estudianteId = 123; // Reemplaza con el ID real del estudiante
//       const response = await axios.post(
//         `/api/estudiantes/${estudianteId}/calificaciones`,
//         { nota, comentario },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log('Calificación enviada:', response.data);
//       setMensaje('Calificación enviada con éxito');
//       setNota('');
//       setComentario('');
//     } catch (error) {
//       console.error('Error al enviar calificación:', error);
//       setError('Error al enviar la calificación. Por favor, inténtalo de nuevo.');
//     }
//   };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Calificar Estudiante</h1>

      {mensaje && <p className="text-green-500 mb-4">{mensaje}</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form  className="space-y-4">
      <div>
          <label htmlFor="nota" className="block text-sm font-medium text-gray-700">
            Estudiante:
          </label>
          <input
            type="number"
            id="nota"
            // value={nota}
            // onChange={(e) => setNota(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="nota" className="block text-sm font-medium text-gray-700">
            Sesion:
          </label>
          <input
            type="number"
            id="nota"
            // value={nota}
            // onChange={(e) => setNota(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="nota" className="block text-sm font-medium text-gray-700">
            Nota:
          </label>
          <input
            type="number"
            id="nota"
            // value={nota}
            // onChange={(e) => setNota(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label htmlFor="comentario" className="block text-sm font-medium text-gray-700">
            Comentario:
          </label>
          <textarea
            id="comentario"
            // value={comentario}
            // onChange={(e) => setComentario(e.target.value)}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar Calificación
        </button>
      </form>
    </div>
  );
}

export default CalificarEstudiante;
