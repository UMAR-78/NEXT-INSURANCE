import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BusinessInsurance from "./Components/BusinessInsurance";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile"; // Make sure to import the Profile component
import { AuthProvider, useAuth } from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Router>
  );
};

const Main: React.FC = () => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="">
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/business-insurance" element={<BusinessInsurance />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> {/* Add protected route */}
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default App;
