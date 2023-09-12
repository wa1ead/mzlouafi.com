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
          <Route path="/services/webdev" element={<WebDev />} />
          <Route path="/services/mobdev" element={<MobDev />} />
          <Route path="/services/graphdes" element={<GraphDes />} />
          <Route path="/services/digmark" element={<DigMark />} />
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
