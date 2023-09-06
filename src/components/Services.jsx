import WebDev from "../assets/web_dev.jpg";
import MobDev from "../assets/mobile_dev.jpg";
import MarkDig from "../assets/marketing_dig.jpg";
import GraphDes from "../assets/graphic_design.jpg";

export default function Services() {
  return (
    // <!-- Card Blog -->
    <div className="max-w-[85rem] bg-blue-950 rounded-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-8 my-8">
      {/* <!-- Title --> */}
      <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          PRESTATIONS
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Nous fournissons de nombreux services à nos clients!
        </p>
      </div>
      {/* <!-- End Title --> */}
      {/* <!-- Grid --> */}
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={WebDev}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white">
                DEVELOPPEMENT WEB
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
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
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={MobDev}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white">
                DEVELOPPEMENT MOBILE
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
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
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={MarkDig}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white">
                MARKETING DIGITAL
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
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
        </a>
        {/* <!-- End Card --> */}

        {/* <!-- Card --> */}
        <a className="group rounded-xl overflow-hidden" href="#">
          <div className="sm:flex">
            <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
              <img
                className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover rounded-xl"
                src={GraphDes}
                alt="Image Description"
              />
            </div>

            <div className="grow mt-4 sm:mt-0 sm:ml-6 px-4 sm:px-0">
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-200 dark:group-hover:text-white">
                DESIGN GRAPHIQUE
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
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
        </a>

        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}

      {/* <!-- Card --> */}
      <div className="text-center pt-16">
        <div className="inline-block bg-white border shadow-sm rounded-full dark:bg-slate-900 dark:border-gray-800">
          <div className="py-3 px-4 flex items-center gap-x-2">
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-400 decoration-2 hover:text-blue-600 font-medium"
              href="../docs/index.html"
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
