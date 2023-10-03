import mobDev from "../../assets/mobile_dev.jpg";
import webDev from "../../assets/web_dev.jpg";
import digMark from "../../assets/marketing_dig.jpg";
import graphDes from "../../assets/graphic_design.jpg";
import {
  FaMobileScreen,
  FaReact,
  FaLock,
  FaCodeCompare,
} from "react-icons/fa6";
export default function MobbDev() {
  return (
    <>
      {/* // <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 my-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
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
            <h2 className="font-mons text-2xl md:text-3xl blue_gradient">
              DEVELOPPEMENT MOBILE
            </h2>
            <p className="font-inter mt-2 md:mt-4 text-black">
              Le développement mobile est aujourd'hui un élément incontournable
              pour toute entreprise qui souhaite rester compétitive dans l'ère
              numérique. Chez{" "}
              <span className="blue_gradient font-bold">MZ LOUAFI</span>, nous
              comprenons que les applications mobiles et les sites web réactifs
              sont essentiels pour atteindre votre public là où il se trouve,
              sur ses appareils mobiles. Notre équipe de développement mobile se
              démarque par son expertise dans la création d'expériences
              utilisateur exceptionnelles et performantes sur tous les écrans.
              Que vous envisagiez de lancer une application mobile innovante,
              d'améliorer une application existante ou de créer un site web
              optimisé pour les appareils mobiles, notre service de
              développement mobile est conçu pour répondre à vos besoins. Nous
              sommes fiers de notre capacité à développer des solutions pour
              différentes plates-formes, à garantir la sécurité des données et à
              simplifier l'intégration avec d'autres systèmes. Opter pour{" "}
              <span className="blue_gradient font-bold">MZ LOUAFI</span>
              pour vos besoins en développement mobile, c'est choisir la
              qualité, la polyvalence, la performance et la tranquillité
              d'esprit. Nous sommes là pour faire de votre présence mobile un
              atout majeur dans votre réussite numérique.
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
                  <h3 className="text-xl font-mons blue_gradient">
                    Expérience Mobile Optimale :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Notre équipe de développement mobile est spécialisée dans la
                    création d'applications mobiles et de sites web réactifs qui
                    offrent une expérience utilisateur exceptionnelle sur tous
                    les appareils, qu'il s'agisse de smartphones, de tablettes
                    ou d'autres dispositifs mobiles. Nous nous assurons que vos
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
                  <h3 className="text-xl font-mons blue_gradient">
                    Plateformes Multiples :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
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
                  <h3 className="text-xl font-mons blue_gradient">
                    Performance et Sécurité :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    La performance et la sécurité sont cruciales pour le succès
                    d'une application mobile. Notre équipe s'engage à créer des
                    applications rapides, fiables et sécurisées. Nous suivons
                    les meilleures pratiques en matière de sécurité pour
                    protéger les données de vos utilisateurs et garantir une
                    expérience sans faille.
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
                  <h3 className="text-xl font-mons blue_gradient">
                    Intégration et Mises à Jour Facilitées :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Nous ne nous contentons pas de développer des applications
                    mobiles, nous nous assurons également qu'elles puissent
                    s'intégrer parfaitement à d'autres systèmes ou services. De
                    plus, nous proposons des solutions de gestion de contenu
                    pour que vous puissiez facilement mettre à jour le contenu
                    de votre application sans tracas.
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
          <h2 className="text-2xl font-mons text-center text-white lg:text-4xl">
            Services
          </h2>
          <p className="text-xl font-inter text-center mx-auto mt-6 lg:text-2xl text-gray-400">
            Parcourir les autres services.
          </p>
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-12">
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
    </>
  );
}
