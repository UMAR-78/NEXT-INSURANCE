import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import BusinessInsurance from "./Components/BusinessInsurance";
import Login from "./Pages/Login";

const App: React.FC = () => {
  return (
    <Router>
      <Main />
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
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
