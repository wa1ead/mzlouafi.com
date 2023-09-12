import digMark from "../../assets/marketing_dig.jpg";
import {
  FaArrowTrendUp,
  FaShareNodes,
  FaSistrix,
  FaArrowsToEye,
} from "react-icons/fa6";
export default function DigMark() {
  return (
    // <!-- Features -->
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
          <h2 className="font-bold text-2xl md:text-3xl blue_gradient">
            MARKETING DIGITAL
          </h2>
          <p className="mt-2 md:mt-4 text-black">
            Le marketing digital est le pilier central de la réussite en ligne
            dans le monde moderne. Chez{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span>, nous
            sommes passionnés par la création de stratégies de marketing digital
            efficaces qui propulsent nos clients vers le succès. Notre équipe
            d'experts se distingue par sa capacité à concevoir des campagnes
            marketing personnalisées, à utiliser une variété de canaux
            numériques pour atteindre les audiences cibles et à mesurer
            précisément la performance à l'aide d'outils analytiques avancés.
            Que vous cherchiez à augmenter votre visibilité en ligne, à générer
            des leads qualifiés, à améliorer vos conversions ou à renforcer la
            notoriété de votre marque, notre service de marketing digital est
            conçu pour répondre à vos besoins. Nous travaillons en partenariat
            avec vous pour définir des objectifs clairs et mesurables, puis nous
            mettons en œuvre des stratégies personnalisées pour les atteindre.
            Choisir <span className="blue_gradient font-bold">MZ LOUAFI</span>{" "}
            pour vos besoins en marketing digital, c'est choisir l'expertise, la
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Stratégies Personnalisées :
                </h3>
                <p className="mt-1 text-gray-950">
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Expérience Multicanale :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous maîtrisons une gamme complète de canaux de marketing
                  digital, notamment la publicité en ligne, les médias sociaux,
                  le référencement, le marketing par e-mail et bien plus encore.
                  Cela nous permet de concevoir des campagnes intégrées qui
                  touchent votre public où qu'il soit en ligne.
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Analyse de Données et Mesure de la Performance :
                </h3>
                <p className="mt-1 text-gray-950">
                  Notre service de marketing digital repose sur une analyse
                  approfondie des données. Nous utilisons des outils avancés
                  pour surveiller et mesurer la performance de chaque campagne.
                  Cela nous permet d'ajuster en temps réel nos stratégies pour
                  optimiser les résultats et maximiser le retour sur
                  investissement.
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Transparence Totale :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous croyons en la transparence totale avec nos clients. Vous
                  aurez un accès complet aux données et aux rapports de
                  performance, vous permettant de suivre de près l'impact de nos
                  efforts. Nous travaillons en étroite collaboration avec vous
                  pour définir des objectifs clairs et mesurables, et nous
                  mettons tout en œuvre pour les atteindre.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
