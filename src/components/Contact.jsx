import contact from "../assets/contact.jpg";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    // <!-- Hire Us -->
    <>
      <div>
        <div className="w-full h-screen mb-[40rem] lg:mb-80">
          <div className="w-full h-[700px] bg-gray-900/90 absolute">
            <img
              className="w-full h-full object-cover mix-blend-overlay"
              src={contact}
            />
          </div>
          <div className="max-w-[1240px] mx-auto text-white relative ">
            <div className="px-4 py-12">
              <h2 className="text-4xl font-mons text-center text-slate-400 pt-40 lg:text-6xl">
                CONTACT
              </h2>
              <p className="desc py-4">Nous sommes là pour vous servir</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-40 text-black">
              <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                  <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                  <h3 className="text-xl text-gray-600 my-6">TELEPHONE : </h3>
                  <p className="text-2xl font-bold ">+212645064545</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                  <EnvelopeIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                  <h3 className="text-xl text-gray-600 my-6">EMAIL : </h3>
                  <p className="text-2xl font-bold ">contact@mzlouafi.com</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-2xl">
                <div className="p-8">
                  <MapPinIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                  <h3 className="text-xl text-gray-600 my-6">LOCATION : </h3>
                  <p className="text-2xl font-bold ">
                    Bureau 262 Technopark, Route de Nouaceur, Casablanca 20000,
                    MA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 py-4 bg-slate-950 ">
          <div className="rounded-lg">
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
          <div className="block sm:flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53206.59013979977!2d-7.683450632412853!3d33.54267333559201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62d3c77d56d57%3A0x39c864bef89a71f5!2sTechnopark%2C%20Casablanca!5e0!3m2!1sen!2sma!4v1694434963570!5m2!1sen!2sma"
              width="100%"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* <!-- End Col --> */}
        </div>
      </div>
    </>
  );
}
