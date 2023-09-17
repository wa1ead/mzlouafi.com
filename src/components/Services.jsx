import { Link } from "react-router-dom";
import WebDev from "../assets/web_dev.jpg";
import MobDev from "../assets/mobile_dev.jpg";
import MarkDig from "../assets/marketing_dig.jpg";
import GraphDes from "../assets/graphic_design.jpg";

export default function Services() {
  return (
    // <!-- Card Blog -->
    <div className=" rounded-lg px-4 py-10 mx-20 my-40 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Title --> */}
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-mons md:text-4xl md:leading-tight">
          PRESTATIONS
        </h2>
        <p className="mt-1 blue_gradient font-inter text-xl">
          Nous fournissons de nombreux services à nos clients!
        </p>
      </div>
      {/* <!-- End Title --> */}
      {/* <!-- Grid --> */}
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {/* <!-- Card --> */}
        <Link
          className="group rounded-xl overflow-hidden"
          to="/services/webdev"
          data-aos="fade-down-right"
          data-aos-duration="800"
        >
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={WebDev}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-incons blue_gradient group-hover:text-black ">
                DEVELOPPEMENT WEB
              </h3>
              <p className="mt-3 text-black font-inter">
                Créez une présence en ligne exceptionnelle avec notre service de
                développement web.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:text-blue-400 font-medium">
                Voir plus
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </Link>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <Link
          className="group rounded-xl overflow-hidden"
          to="/services/mobdev"
          data-aos="fade-down-left"
          data-aos-duration="800"
        >
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={MobDev}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-incons blue_gradient group-hover:text-black">
                DEVELOPPEMENT MOBILE
              </h3>
              <p className="mt-3 text-black font-inter">
                Transformez vos idées en applications mobiles captivantes grâce
                à notre service de développement mobile.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:text-blue-400 font-medium">
                Voir plus
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </Link>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <Link
          className="group rounded-xl overflow-hidden"
          to="/services/graphdes"
          data-aos="fade-up-right"
          data-aos-duration="800"
        >
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={GraphDes}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-incons blue_gradient group-hover:text-black">
                DESIGN GRAPHIQUE
              </h3>
              <p className="mt-3 text-black font-inter">
                Exprimez votre identité visuelle avec notre service de design
                graphique.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:text-blue-400 font-medium">
                Voir plus
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </Link>

        {/* <!-- End Card --> */}
        {/* <!-- Card --> */}
        <Link
          className="group rounded-xl overflow-hidden"
          to="/services/digmark"
          data-aos="fade-up-left"
          data-aos-duration="800"
        >
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={MarkDig}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-incons blue_gradient group-hover:text-black">
                MARKETING DIGITAL
              </h3>
              <p className="mt-3 text-black font-inter">
                Maximisez votre visibilité en ligne avec notre service de
                marketing digital.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:text-blue-400 font-medium">
                Voir plus
                <svg
                  className="w-2.5 h-2.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </p>
            </div>
          </div>
        </Link>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}

      {/* <!-- Card --> */}
      <div
        className="text-center pt-16"
        data-aos="zoom-in-down"
        data-aos-duration="800"
      >
        <div className="inline-block bg-white border border-blue-900 shadow-sm rounded-full">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-900 decoration-2 hover:text-blue-500 font-medium"
              href="/about"
            >
              A propos
              <svg
                className="w-2.5 h-2.5"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- End Card --> */}
    </div>
  );
}
