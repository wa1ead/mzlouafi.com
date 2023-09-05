export default function Hero() {
  return (
    <div>
      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-40 lg:py-40">
          <div className="text-center">
            <h1 className="head_text">Digitaliser Votre Business</h1>
            <h1 className="head_text mt-8">
              <span className="blue_gradient">MZ LOUAFI</span>
            </h1>
            <h2 className="desc">
              <b>Agence de communication digitale specialiste dans</b>
              <br />
              La creation de Site Internet & Application Mobile
              <br />
              Marketing Digital, Design Graphique
            </h2>
            <div className="mt-20 flex items-center justify-center gap-x-6">
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
        </div>
        <div aria-hidden="true"></div>
      </div>
    </div>
  );
}
