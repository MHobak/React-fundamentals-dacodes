import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = (sessionStorage.getItem('pelis-token') !== null)
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet/> : null;
};

export default PrivateRoute;