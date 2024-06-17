import { Navigate, useLocation } from "react-router-dom";
// import { useLocalStorage } from 'react-use';
import { useAuth } from '@/hooks/auth';

export const Protected = ({ children }) => {
  // const [ token ] = useLocalStorage("weevite-token", null);
  let { token } = useAuth();
  let location = useLocation();

  if (!token) {
    // Redirect them to the login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience.
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};