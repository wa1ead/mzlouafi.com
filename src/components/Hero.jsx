import Typed from "react-typed";
import netBack from "../assets/netBackground.mp4";
export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <video
        className="w-full h-full object-cover"
        src={netBack}
        autoPlay
        loop
        muted
      />
      <div
        className="absolute w-full h-full top-0 left-0"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto px-20 py-36">
          <div className="text-center">
            <h1 className="head_text">Digitaliser Votre Business</h1>
            <h1 className="text-5xl lg:text-6xl py-8">
              <span className="blue_gradient font-black">MZ LOUAFI</span>
            </h1>
            <h2 className="desc">
              <p className=" my-4">
                <b>Agence de communication digitale specialiste dans</b>
              </p>
              <Typed
                strings={[
                  "La creation de Site Web",
                  "La creation d'Application Mobile",
                  "Le Design Graphique",
                  "Le Marketing Digital",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="font-inter"
              />
            </h2>
          </div>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="/about"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Voir Plus
            </a>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </div>
    </div>
  );
}
