import webDev from "../assets/web_dev.jpg";
import mobDev from "../assets/mobile_dev.jpg";
import graphDes from "../assets/graphic_design.jpg";
import digMark from "../assets/marketing_dig.jpg";
import about from "../assets/about.jpg";

export default function Approche() {
  return (
    <div>
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={about}
        />
      </div>
      <div className="max-w-[1240px] mx-auto text-white relative ">
        <div className="px-4 py-12">
          <h2 className="text-4xl font-mons text-center text-slate-400 pt-40 lg:text-6xl">
            Qui somme nous?
          </h2>
          <p className="text-lg font-inter text-center mx-auto mt-6 text-white lg:text-xl py-4">
            SalutWeb est un service spécialisé dans le web et la communication
            digitale, déposé de la société MZ LOUAFI S.A.R.L AU. Nous proposons
            des services avancés et qualifiés pour vous affirmer dans le monde
            numérique. Notre expertise datant de 8 ans nous permet de vous
            fournir un service de haute qualité, tout en vous accompagnant dans
            la création de votre vitrine commerciale, afin de générer des
            résultats réels et mesurables.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-4 gap-y-8 px-4 pt-10 mb-10 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4">
              <h3 className="text-2xl font-mons text-gray-600 my-6">
                Inspirer et captiver :{" "}
              </h3>
              <p className="text-lg font-semibold ">
                La création est le point de départ de toute communication
                digitale efficace. Notre équipe de créatifs talentueux excelle
                dans la conception de contenu visuel et écrit percutant. Que ce
                soit à travers des vidéos accrocheuses, des infographies
                informatives, des articles de blog engageants, ou même des
                publicités innovantes, nous nous efforçons de créer un contenu
                qui se démarque dans le bruit numérique.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4">
              <h3 className="text-2xl font-mons text-gray-600 my-6">
                Établir des liens significatifs :{" "}
              </h3>
              <p className="text-lg font-semibold ">
                La véritable puissance de la communication digitale réside dans
                sa capacité à établir des connexions significatives avec votre
                public cible. Nous utilisons des stratégies de médias sociaux,
                de référencement, de marketing par e-mail et bien d'autres
                tactiques pour garantir que votre message atteigne les bonnes
                personnes au bon moment. Nous croyons en la construction de
                relations durables avec votre audience pour créer une fidélité à
                long terme.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4">
              <h3 className="text-2xl font-mons text-gray-600 my-6">
                Transformer les prospects en clients :{" "}
              </h3>
              <p className="text-lg font-semibold ">
                Une communication digitale efficace ne se limite pas à
                l'engagement ; elle doit également conduire à des résultats
                concrets. Notre approche est axée sur la conversion. Nous
                travaillons à optimiser votre site web pour encourager les
                actions telles que les achats en ligne, les demandes de devis,
                les inscriptions à la newsletter, etc. En utilisant des
                techniques avancées d'analyse et d'optimisation, nous maximisons
                le retour sur investissement de vos campagnes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-950 max-w-[85rem] px-2 py-10 mt-80 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="head_text">Services</h2>
          <p className="text-xl font-inter text-center mx-auto mt-6 lg:text-2xl text-gray-400">
            Parcourir les autres services.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-12">
          <div className="group relative cursor-pointer items-center justify-center rounded-lg  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/services/webdev">
              <div className="h-96 w-74">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  src={webDev}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex pt-8 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-mons text-white">
                  DEVELOPPEMENT WEB
                </h1>

                <button className="rounded-full bg-blue-600 py-2 px-3.5 font-inter text-sm capitalize text-white shadow shadow-black/60">
                  Voir Plus
                </button>
              </div>
            </a>
          </div>

          <div className="group relative cursor-pointer items-center justify-center rounded-lg  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/services/mobDev">
              <div className="h-96 w-74">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  src={mobDev}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex pt-8 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-mons text-white">
                  DEVELOPPEMENT MOBILE
                </h1>

                <button className="rounded-full bg-blue-600 py-2 px-3.5 font-inter text-sm capitalize text-white shadow shadow-black/60">
                  Voir Plus
                </button>
              </div>
            </a>
          </div>
          <div className="group relative cursor-pointer items-center justify-center rounded-lg  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/services/graphdes">
              <div className="h-96 w-74">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  src={graphDes}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex pt-8 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-mons text-white">
                  DESIGN GRAPHIQUE
                </h1>

                <button className="rounded-full bg-blue-600 py-2 px-3.5 font-inter text-sm capitalize text-white shadow shadow-black/60">
                  Voir Plus
                </button>
              </div>
            </a>
          </div>
          <div className="group relative cursor-pointer items-center justify-center rounded-lg  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <a href="/services/digmark">
              <div className="h-96 w-74">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                  src={digMark}
                  alt=""
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex pt-8 translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="text-3xl font-mons text-white">
                  MARKETING DIGITAL
                </h1>

                <button className="rounded-full bg-blue-600 py-2 px-3.5 font-inter text-sm capitalize text-white shadow shadow-black/60">
                  Voir Plus
                </button>
              </div>
            </a>
          </div>
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Card Blog --> */}
    </div>
  );
}
