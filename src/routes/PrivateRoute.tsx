import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isAuthenticated = true// insert your authentication checking logic here
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet/> : null;
};

export default PrivateRoute;