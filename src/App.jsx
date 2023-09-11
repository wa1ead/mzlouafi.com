import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Provides from "./components/Provides";
import Advantages from "./components/Advantages";
import Feedback from "./components/Feedback";
import Approche from "./components/Approche";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <main>
      <div className="pb-4">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Hero />
                <Services />
                <Provides />
                <Advantages />
                <Newsletter />
              </React.Fragment>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Feedback />} />
          <Route path="/about" element={<Approche />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};
export default App;
