export default function Feedback() {
  return (
    // <!-- Hire Us -->
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-4 bg-slate-950 rounded-lg">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
            Contactez-nous!
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
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
              <p className="text-sm text-gray-500">
                Nous vous répondrons dans 1 à 2 jours ouvrables
              </p>
            </div>
          </form>
          {/* <!-- End Form --> */}
        </div>
      </div>
    </div>
  );
}
