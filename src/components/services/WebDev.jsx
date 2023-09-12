import webDev from "../../assets/web_dev.jpg";
import { FaCircleNodes, FaDisplay, FaRecycle, FaGears } from "react-icons/fa6";
export default function WebDev() {
  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 my-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img
          className="w-full h-[600px] object-cover rounded-xl"
          src={webDev}
          alt="Image Description"
        />
      </div>

      {/* <!-- Grid --> */}
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl blue_gradient">
            DEVELOPPEMENT WEB
          </h2>
          <p className="mt-2 md:mt-4 text-black">
            Le développement web est la pierre angulaire de toute présence en
            ligne réussie. Chez{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span>, nous
            comprenons l'importance cruciale d'avoir un site web performant,
            convivial et adapté à vos besoins spécifiques. Notre équipe
            d'experts en développement web se distingue par son expertise
            technique de pointe, sa capacité à créer des sites web entièrement
            personnalisés et optimisés pour la conversion, ainsi que par son
            engagement envers la maintenance continue et le support client. Que
            vous cherchiez à lancer un nouveau site web ou à améliorer une
            plateforme existante, notre service de développement web vous assure
            une solution sur mesure qui non seulement reflète votre identité
            d'entreprise, mais qui génère également des résultats tangibles.
            Nous travaillons en étroite collaboration avec vous pour transformer
            vos idées en une réalité digitale, garantissant ainsi que votre
            présence en ligne soit un atout majeur dans la réalisation de vos
            objectifs commerciaux. Choisir{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span> pour
            votre développement web, c'est choisir l'excellence technique, la
            personnalisation, l'optimisation pour la conversion et le soutien
            continu. Nous sommes là pour faire de votre site web un moteur de
            succès numérique.
          </p>
        </div>
        {/* <!-- End Col --> */}

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaCircleNodes size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Expertise Technique de Pointe :
                </h3>
                <p className="mt-1 text-gray-950">
                  Notre équipe de développement web est composée d'experts
                  chevronnés maîtrisant les dernières technologies et tendances.
                  Nous utilisons des frameworks et des langages de programmation
                  de pointe pour garantir que votre site web soit à la fois
                  performant et sécurisé.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaDisplay size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Sites Web Personnalisés :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous comprenons que chaque entreprise est unique. C'est
                  pourquoi nous nous engageons à créer des sites web entièrement
                  personnalisés pour répondre aux besoins spécifiques de votre
                  entreprise. Que vous ayez besoin d'un site vitrine, d'une
                  boutique en ligne ou d'une plateforme complexe, nous concevons
                  des solutions sur mesure.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaRecycle size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Optimisation pour la Conversion :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous ne créons pas seulement des sites web, nous créons des
                  outils de conversion. Notre approche intègre des meilleures
                  pratiques en matière d'UX (expérience utilisateur) et de
                  conception centrée sur l'utilisateur pour garantir que chaque
                  visiteur de votre site soit incité à prendre des mesures, que
                  ce soit un achat, une inscription ou un contact.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaGears size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Maintenance Continue et Support :
                </h3>
                <p className="mt-1 text-gray-950">
                  Votre site web n'est pas "terminé" une fois qu'il est lancé.
                  Nous offrons des services de maintenance continue pour
                  garantir que votre site reste sécurisé, rapide et à jour. De
                  plus, notre équipe de support est là pour répondre à vos
                  questions et résoudre les problèmes rapidement, vous offrant
                  une tranquillité d'esprit totale.
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
