import Typed from "react-typed";
import netBack from "../assets/netBackground.mp4";
export default function Hero() {
  return (
    <div>
      <div className="background-video">
        <video src={netBack} autoPlay loop muted />
      </div>
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto p-24 sm:py-40 lg:py-40">
          <div className="text-center">
            <h1 className="head_text">Digitaliser Votre Business</h1>
            <h1 className="head_text ">
              <span className="blue_gradient font-black">MZ LOUAFI</span>
            </h1>
            <h2 className="desc">
              <p className="my-4">
                <b>Agence de communication digitale specialiste dans</b>
              </p>
              <Typed
                strings={[
                  "La creation de Site Internet",
                  "Application Mobile",
                  "Marketing Digital",
                  "Design Graphique",
                ]}
                typeSpeed={60}
                backSpeed={40}
                loop
                className="font-semibold"
              />
            </h2>
          </div>
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Voir Plus
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-blue-400"
            >
              Contactez-nous <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </div>
    </div>
  );
}
