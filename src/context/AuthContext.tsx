import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  user: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Replace with actual API call
    try {
      const response = await verifyPassword(email, password);
      if (response.success) {
        setIsAuthenticated(true);
        setUser({ email });
        navigate("/profile");
      } else {
        throw new Error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
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

// Mock API function to verify password
const verifyPassword = async (email: string, password: string) => {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      resolve({ success: true }); // Replace with actual API response handling
    }, 1000);
  });
};
