import { createContext, useContext, useMemo } from 'react';
import { useLocalStorage } from 'react-use';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("weevite-token", null);

  const login = async ({ token}) => {
    setToken(token);
  };

  const logout = () => {
    setToken(null);
  };

  const value = useMemo(
    () => ({
      token,
      login,
      logout,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
