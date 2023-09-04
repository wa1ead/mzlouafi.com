import Hero from "./components/Hero";
import Services from "./components/Services";
import Approche from "./components/Carousel";
import netBack from "./assets/netBackground.mp4";
import WebDev from "./assets/web_dev.jpg";
import MobDev from "./assets/mobile_dev.jpg";
import MarkDig from "./assets/marketing_dig.jpg";
import GraphDes from "./assets/graphic_design.jpg";
import "./App.css";

const App = () => {
  return (
    <main>
      <div className="main">
        <div className="background-video">
          <video src={netBack} autoPlay loop muted />
        </div>
        <div className="app">
          <Hero />
          <Services services={serviceData} />
          <Approche />
        </div>
      </div>
    </main>
  );
};

const serviceData = [
  {
    image: WebDev,
    title: "DEVELOPPEMENT WEB",
    description:
      "Créez une présence en ligne exceptionnelle avec notre service de développement web.",
  },
  {
    image: MobDev,
    title: "DEVELOPPEMENT MOBILE",
    description:
      "Transformez vos idées en applications mobiles captivantes grâce à notre service de développement mobile.",
  },
  {
    image: MarkDig,
    title: "MARKETING DIGITAL",
    description:
      "Maximisez votre visibilité en ligne avec notre service de marketing digital.",
  },
  {
    image: GraphDes,
    title: "DESIGN GRAPHIQUE",
    description:
      "Exprimez votre identité visuelle avec notre service de design graphique.",
  },
];
export default App;
