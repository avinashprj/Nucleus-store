import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthContext } from '../../store/Context/AuthContext';

function PrivateRoute() {
  const {
    user: { id },
  } = useAuthContext();
  const location = useLocation();
  return id ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export { PrivateRoute };
