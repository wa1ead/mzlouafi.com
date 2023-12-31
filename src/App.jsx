import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WebDev from "./components/services/WebDev";
import MobDev from "./components/services/MobDev";
import GraphDes from "./components/services/GraphDes";
import DigMark from "./components/services/DigMark";
import Provides from "./components/Provides";
import Mission from "./components/Mission";
import Values from "./components/Values";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <main>
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Hero />
                <Provides />
                <Services />
                <Mission />
                <Values />
              </React.Fragment>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/services/webdev" element={<WebDev />} />
          <Route path="/services/mobdev" element={<MobDev />} />
          <Route path="/services/graphdes" element={<GraphDes />} />
          <Route path="/services/digmark" element={<DigMark />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
};
export default App;
