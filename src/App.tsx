import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import BusinessInsurance from "./Components/BusinessInsurance";

const App: React.FC = () => {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business-insurance" element={<BusinessInsurance />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
