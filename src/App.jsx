import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Approche from "./components/Approche";
import netBack from "./assets/netBackground.mp4";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="background-video">
        <video src={netBack} autoPlay loop muted />
      </div>
      <div className="pb-4">
        <Navbar />
      </div>
      <div>
        <Hero />
        <Services />
        <Approche />
      </div>
    </main>
  );
};
export default App;
