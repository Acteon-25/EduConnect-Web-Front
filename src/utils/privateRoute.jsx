import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function PrivateRoute({ allowedRoles }) {
  const { user, isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? (
    allowedRoles.includes(user.tipoUsuario) ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace /> 
    )
  ) : (
    <Navigate to="/login" replace /> 
  );
}

export default PrivateRoute;