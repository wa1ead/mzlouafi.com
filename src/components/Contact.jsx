import { FaPhoneFlip, FaEnvelope, FaMapPin } from "react-icons/fa6";

export default function Contact() {
  return (
    // <!-- Hire Us -->
    <>
      <div className=" bg-slate-950 py-12 px-4 sm:px-6 md:px-6 lg:px-8 mx-auto mt-40">
        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div
            className="sm:order-2"
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53206.59013979977!2d-7.683450632412853!3d33.54267333559201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d3c77d56d57%3A0x39c864bef89a71f5!2sTechnopark%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1694434963570!5m2!1sen!2sma"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <h1 className="flex items-center my-4 space-x-4">
              <FaMapPin size="25px" color="white" />
              <a
                href="https://goo.gl/maps/1HriGPN9Z1G78r4y6"
                className="text-xl font-inter text-white hover:text-blue-500 "
              >
                Bureau 262 Technopark, Route de Nouaceur, Casablanca 20000, MA
              </a>
            </h1>
          </div>
          {/* <!-- End Col --> */}

          <div
            className="sm:order-1 space-y-4 "
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <div className="text-6xl text-center font-mons text-white">
              <h1>Coordonnées :</h1>
            </div>

            <div className="space-y-16 mt-10 py-48">
              <h1 className="flex">
                <FaPhoneFlip size="40px" color="white" />
                <a
                  href="tel:+212645064545"
                  className="text-2xl font-inter text-white hover:text-blue-500 mx-4 my-2"
                >
                  FAX: +212645064545
                </a>
              </h1>
              <h1 className="flex">
                <FaEnvelope size="40px" color="white" />
                <a
                  href="mailto:contact@mzlouafi.com"
                  className="text-2xl font-inter text-white hover:text-blue-500 mx-4 mt-2"
                >
                  EMAIL: contact@mzlouafi.com
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[85rem] px-4 py-2 my-20 sm:px-6 lg:px-8 lg:mx-40 lg:py-14 bg-slate-950 rounded-lg"
        data-aos="flip-left"
        data-aos-duration="800"
      >
        <div className="max-w-xl mx-auto">
          <div className="text-center">
            <h1 className="text-3xl font-mons text-gray-800 sm:text-4xl dark:text-white">
              Contactez-nous!
            </h1>
            <p className="font-inter mt-1 text-gray-400">
              Faites-nous part de votre histoire et nous vous contacterons.
            </p>
          </div>

          <div className="mt-12">
            {/* <!-- Form --> */}
            <form>
              <div className="grid gap-4 lg:gap-6">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      name="hs-firstname-hire-us-2"
                      id="hs-firstname-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-hire-us-2"
                      className="block text-sm text-gray-700 font-medium dark:text-white"
                    >
                      Prenom
                    </label>
                    <input
                      type="text"
                      name="hs-lastname-hire-us-2"
                      id="hs-lastname-hire-us-2"
                      className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label
                    htmlFor="hs-work-email-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-work-email-hire-us-2"
                    id="hs-work-email-hire-us-2"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hs-about-hire-us-2"
                    className="block text-sm text-gray-700 font-medium dark:text-white"
                  >
                    Message
                  </label>
                  <textarea
                    id="hs-about-hire-us-2"
                    name="hs-about-hire-us-2"
                    rows="4"
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                  ></textarea>
                </div>
              </div>

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                >
                  Envoyer
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="font-inter text-sm text-gray-500">
                  Nous vous répondrons dans 1 à 2 jours ouvrables
                </p>
              </div>
            </form>
            {/* <!-- End Form --> */}
          </div>
        </div>
      </div>
    </>
  );
}
