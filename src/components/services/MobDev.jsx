import mobDev from "../../assets/mobile_dev.jpg";
import {
  FaMobileScreen,
  FaReact,
  FaLock,
  FaCodeCompare,
} from "react-icons/fa6";
export default function MobbDev() {
  return (
    // <!-- Features -->
    <div className="max-w-[85rem] px-4 py-10 my-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="aspect-w-16 aspect-h-7">
        <img
          className="w-full h-[600px] object-cover rounded-xl"
          src={mobDev}
          alt="Image Description"
        />
      </div>

      {/* <!-- Grid --> */}
      <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
        <div className="lg:col-span-1">
          <h2 className="font-bold text-2xl md:text-3xl blue_gradient">
            DEVELOPPEMENT MOBILE
          </h2>
          <p className="mt-2 md:mt-4 text-black">
            Le développement mobile est aujourd'hui un élément incontournable
            pour toute entreprise qui souhaite rester compétitive dans l'ère
            numérique. Chez{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span>, nous
            comprenons que les applications mobiles et les sites web réactifs
            sont essentiels pour atteindre votre public là où il se trouve, sur
            ses appareils mobiles. Notre équipe de développement mobile se
            démarque par son expertise dans la création d'expériences
            utilisateur exceptionnelles et performantes sur tous les écrans. Que
            vous envisagiez de lancer une application mobile innovante,
            d'améliorer une application existante ou de créer un site web
            optimisé pour les appareils mobiles, notre service de développement
            mobile est conçu pour répondre à vos besoins. Nous sommes fiers de
            notre capacité à développer des solutions pour différentes
            plates-formes, à garantir la sécurité des données et à simplifier
            l'intégration avec d'autres systèmes. Opter pour{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span>
            pour vos besoins en développement mobile, c'est choisir la qualité,
            la polyvalence, la performance et la tranquillité d'esprit. Nous
            sommes là pour faire de votre présence mobile un atout majeur dans
            votre réussite numérique.
          </p>
        </div>
        {/* <!-- End Col --> */}

        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaMobileScreen size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Expérience Mobile Optimale :
                </h3>
                <p className="mt-1 text-gray-950">
                  Notre équipe de développement mobile est spécialisée dans la
                  création d'applications mobiles et de sites web réactifs qui
                  offrent une expérience utilisateur exceptionnelle sur tous les
                  appareils, qu'il s'agisse de smartphones, de tablettes ou
                  d'autres dispositifs mobiles. Nous nous assurons que vos
                  clients puissent interagir avec votre entreprise en toute
                  simplicité, où qu'ils soient.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaReact size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Plateformes Multiples :
                </h3>
                <p className="mt-1 text-gray-950">
                  Que vous ayez besoin d'une application iOS, Android ou
                  hybride, nous avons l'expertise pour répondre à vos besoins.
                  Nous développons des applications mobiles compatibles avec
                  différentes plates-formes, ce qui vous permet d'atteindre un
                  public plus large et de maximiser votre présence sur le
                  marché.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaLock size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Performance et Sécurité :
                </h3>
                <p className="mt-1 text-gray-950">
                  La performance et la sécurité sont cruciales pour le succès
                  d'une application mobile. Notre équipe s'engage à créer des
                  applications rapides, fiables et sécurisées. Nous suivons les
                  meilleures pratiques en matière de sécurité pour protéger les
                  données de vos utilisateurs et garantir une expérience sans
                  faille.
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-5">
              <div className="mt-0">
                <FaCodeCompare size="25" />
              </div>
              <div className="grow">
                <h3 className="text-lg font-semibold blue_gradient">
                  Intégration et Mises à Jour Facilitées :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous ne nous contentons pas de développer des applications
                  mobiles, nous nous assurons également qu'elles puissent
                  s'intégrer parfaitement à d'autres systèmes ou services. De
                  plus, nous proposons des solutions de gestion de contenu pour
                  que vous puissiez facilement mettre à jour le contenu de votre
                  application sans tracas.
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
