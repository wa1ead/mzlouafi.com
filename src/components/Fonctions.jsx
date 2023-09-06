import WebDev from "../assets/web_dev.jpg";
import MobDev from "../assets/mobile_dev.jpg";
import MarkDig from "../assets/marketing_dig.jpg";
import GraphDes from "../assets/graphic_design.jpg";

export default function Services() {
  return (
    // <!-- Card Blog -->
    <div className="max-w-[85rem] bg-blue-950 rounded-lg px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-8">
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
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                DEVELOPPEMENT WEB
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Créez une présence en ligne exceptionnelle avec notre service de
                développement web.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
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
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                DEVELOPPEMENT MOBILE
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Transformez vos idées en applications mobiles captivantes grâce
                à notre service de développement mobile.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
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
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                MARKETING DIGITAL
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Maximisez votre visibilité en ligne avec notre service de
                marketing digital.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
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
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-gray-300 dark:group-hover:text-white">
                DESIGN GRAPHIQUE
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                Exprimez votre identité visuelle avec notre service de design
                graphique.
              </p>
              <p className="mt-4 inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium">
                Read more
              </p>
            </div>
          </div>
        </a>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
