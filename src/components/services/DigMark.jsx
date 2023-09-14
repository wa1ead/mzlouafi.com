import digMark from "../../assets/marketing_dig.jpg";
import mobDev from "../../assets/mobile_dev.jpg";
import webDev from "../../assets/web_dev.jpg";
import graphDes from "../../assets/graphic_design.jpg";
import {
  FaArrowTrendUp,
  FaShareNodes,
  FaSistrix,
  FaArrowsToEye,
} from "react-icons/fa6";
export default function DigMark() {
  return (
    <>
      {/* // <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 my-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="aspect-w-16 aspect-h-7">
          <img
            className="w-full h-[600px] object-cover rounded-xl"
            src={digMark}
            alt="Image Description"
          />
        </div>

        {/* <!-- Grid --> */}
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-mons text-2xl md:text-3xl blue_gradient">
              MARKETING DIGITAL
            </h2>
            <p className="font-inter mt-2 md:mt-4 text-black">
              Le marketing digital est le pilier central de la réussite en ligne
              dans le monde moderne. Chez{" "}
              <span className="blue_gradient font-bold">MZ LOUAFI</span>, nous
              sommes passionnés par la création de stratégies de marketing
              digital efficaces qui propulsent nos clients vers le succès. Notre
              équipe d'experts se distingue par sa capacité à concevoir des
              campagnes marketing personnalisées, à utiliser une variété de
              canaux numériques pour atteindre les audiences cibles et à mesurer
              précisément la performance à l'aide d'outils analytiques avancés.
              Que vous cherchiez à augmenter votre visibilité en ligne, à
              générer des leads qualifiés, à améliorer vos conversions ou à
              renforcer la notoriété de votre marque, notre service de marketing
              digital est conçu pour répondre à vos besoins. Nous travaillons en
              partenariat avec vous pour définir des objectifs clairs et
              mesurables, puis nous mettons en œuvre des stratégies
              personnalisées pour les atteindre. Choisir{" "}
              <span className="blue_gradient font-bold">MZ LOUAFI</span> pour
              vos besoins en marketing digital, c'est choisir l'expertise, la
              diversité des canaux, l'analyse de données approfondie et la
              transparence. Nous sommes là pour faire passer votre présence en
              ligne au niveau supérieur et pour vous aider à réaliser vos
              ambitions numériques.
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaArrowTrendUp size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Stratégies Personnalisées :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Notre équipe de marketing digital est spécialisée dans la
                    création de stratégies sur mesure pour répondre aux besoins
                    spécifiques de chaque client. Nous comprenons que chaque
                    entreprise est unique, et nous adaptons nos approches en
                    conséquence pour maximiser les résultats.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaShareNodes size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Expérience Multicanale :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Nous maîtrisons une gamme complète de canaux de marketing
                    digital, notamment la publicité en ligne, les médias
                    sociaux, le référencement, le marketing par e-mail et bien
                    plus encore. Cela nous permet de concevoir des campagnes
                    intégrées qui touchent votre public où qu'il soit en ligne.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaSistrix size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Analyse de Données et Mesure de la Performance :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Notre service de marketing digital repose sur une analyse
                    approfondie des données. Nous utilisons des outils avancés
                    pour surveiller et mesurer la performance de chaque
                    campagne. Cela nous permet d'ajuster en temps réel nos
                    stratégies pour optimiser les résultats et maximiser le
                    retour sur investissement.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaArrowsToEye size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Transparence Totale :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Nous croyons en la transparence totale avec nos clients.
                    Vous aurez un accès complet aux données et aux rapports de
                    performance, vous permettant de suivre de près l'impact de
                    nos efforts. Nous travaillons en étroite collaboration avec
                    vous pour définir des objectifs clairs et mesurables, et
                    nous mettons tout en œuvre pour les atteindre.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}
            </div>
          </div>
          {/* <!-- End Col --> */}
        </div>
        {/* <!-- End Grid --> */}
        <div className="text-center pt-16">
          <div className="inline-block bg-white border border-blue-900 shadow-sm rounded-full">
            <div className="py-3 px-4 flex items-center gap-x-2">
              <a
                className="inline-flex items-center gap-x-1.5 text-blue-900 decoration-2 hover:text-blue-600 font-medium"
                href="/contact"
              >
                Contactez-nous!
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
      </div>
      {/* <!-- Card Blog --> */}
      <div className="bg-slate-950 max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Title --> */}
        <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
          <h2 className="text-2xl font-mons md:text-4xl md:leading-tight dark:text-white">
            Services
          </h2>
          <p className="font-inter mt-1 text-gray-400">
            Parcourir les autres services.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-12">
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
          {/* <!-- End Grid --> */}
        </div>
      </div>
      {/* <!-- End Card Blog --> */}
    </>
  );
}
