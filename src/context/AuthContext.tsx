import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string) => Promise<void>;
  logout: () => void;
  user: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('isAuthenticated'));
  const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem('user') || 'null'));
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('user');
    }
  }, [isAuthenticated, user]);

  const login = async (email: string) => {
    // Placeholder for login logic; actual API call should be made in Login component
    setIsAuthenticated(true);
    setUser({ email });
    navigate("/profile");
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate("/");
  };

  const value = { isAuthenticated, login, logout, user };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
