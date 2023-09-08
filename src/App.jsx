import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Provides from "./components/Provides";
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
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/provides" element={<Provides />} />
          <Route path="/" element={<Newsletter />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </div>
    </main>
  );
};
export default App;
