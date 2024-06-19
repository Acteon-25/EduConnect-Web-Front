import api from './api';

const authService = {
  login: async (correoElectronico, contrasena) => {
    try {
      const response = await api.post('/login', { correoElectronico, contrasena });
      const { token, usuario } = response.data;
      localStorage.setItem('token', token);
      return usuario;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error al iniciar sesión');
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post(`/registro/${userData.tipoUsuario.toLowerCase()}`, userData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Error en el registro');
    }
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await api.get('/usuarios/current');
        return response.data;
      } catch (error) {
        console.error('Error al obtener el usuario actual:', error);
        authService.logout();
        return null;
      }
    } else {
      return null;
    }
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token; 
  }
};

export default authService;
