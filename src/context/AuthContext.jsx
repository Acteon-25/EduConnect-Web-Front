import React, { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';

export const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false, 
  login: () => Promise.resolve(),
  logout: () => {},
  updateAuthStatus: () => {}, 
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Lógica para iniciar sesión
  const login = async (email, password) => {
    try {
      const user = await authService.login(email, password);
      setUser(user);
      setIsAuthenticated(true); 
      return user; 
    } catch (error) {
      // Manejar el error de inicio de sesión
      console.error('Error al iniciar sesión:', error.message);
      throw error;
    }
  };

  // Lógica para cerrar sesión
  const logout = () => {
    authService.logout();
    setUser(null);
    setIsAuthenticated(false); 
  };

  // Función para actualizar el estado de autenticación (llamada desde otros componentes)
  const updateAuthStatus = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      setIsAuthenticated(!!currentUser); 
    } catch (error) {
      console.error('Error al verificar la autenticación:', error);
      setIsAuthenticated(false); 
    } finally {
      setIsLoading(false);
    }
  };

  // Verificar autenticación inicial solo después de que el componente esté montado
  useEffect(() => {
    updateAuthStatus(); 
  }, []); 

  return (
    <AuthContext.Provider value={{ user, isLoading, isAuthenticated, login, logout, updateAuthStatus, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
