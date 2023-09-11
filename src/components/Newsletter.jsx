export default function Newsletter() {
  return (
    // <!-- Subscribe -->
    <div className="max-w-6xl py-10 px-4 sm:px-6 lg:px-8 lg:py-16 mx-auto bg-slate-950 rounded-md">
      <div className="max-w-xl text-center mx-auto">
        <div className="mb-5">
          <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
            Inscrivez-vous à notre newsletter
          </h2>
        </div>

        <form>
          <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="py-3 px-4 block w-full shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500 bg-slate-900 text-gray-400"
                placeholder="Entrer votre email"
              />
            </div>
            <a
              className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#"
            >
              S`inscrire
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
