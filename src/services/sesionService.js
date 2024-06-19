import api from './api';

const sesionService = {
  obtenerSesionesPorUsuario: async (idUsuario, rol) => {
    try {
      const endpoint = rol === 'ESTUDIANTE' ? `/estudiantes/${idUsuario}/sesiones` : `/asesores/${idUsuario}/sesiones`;
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener las sesiones');
    }
  },

  crearSesion: async (sesionData) => {
    try {
      const response = await api.post('/sesiones', sesionData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al crear la sesión');
    }
  },

  obtenerSesionPorId: async (idSesion) => {
    try {
      const response = await api.get(`/sesiones/${idSesion}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener la sesión');
    }
  },

  actualizarSesion: async (idSesion, sesionData) => {
    try {
      const response = await api.put(`/sesiones/${idSesion}`, sesionData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al actualizar la sesión');
    }
  },

  cancelarSesion: async (idSesion) => {
    try {
      await api.delete(`/sesiones/${idSesion}`);
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al cancelar la sesión');
    }
  },

  obtenerUrlJitsi: async (idSesion) => {
    try {
      const response = await api.get(`/sesiones/${idSesion}/url-jitsi`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al obtener la URL de Jitsi');
    }
  },
};

export default sesionService;