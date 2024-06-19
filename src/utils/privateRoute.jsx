import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ allowedRoles, children }) {
  const { isAuthenticated } = useContext(AuthContext);

  const hasRequiredRole = allowedRoles.includes(user?.tipoUsuario); 

  return isAuthenticated && hasRequiredRole ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;