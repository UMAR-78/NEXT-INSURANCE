import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BusinessInsurance from "./Components/BusinessInsurance";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Components/ProtectedRoutes";
import AutoServicesSection from "./Components/AutoServicesSection";
import WhyNext from "./Components/WhyNext";
import SignUp from "./Pages/SignUp";
import { useLocation } from "react-router-dom";

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
  const hideHeaderFooter = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="">
      {!hideHeaderFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/business-insurance" element={<BusinessInsurance />} />
        <Route path="/auto-services" element={<AutoServicesSection />} />
        <Route path="/why-next" element={<WhyNext />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
