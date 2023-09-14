import graphDes from "../../assets/graphic_design.jpg";
import mobDev from "../../assets/mobile_dev.jpg";
import webDev from "../../assets/web_dev.jpg";
import digMark from "../../assets/marketing_dig.jpg";
import {
  FaLightbulb,
  FaLayerGroup,
  FaFileImage,
  FaCompassDrafting,
} from "react-icons/fa6";
export default function GraphDes() {
  return (
    <>
      {/* // <!-- Features --> */}
      <div className="max-w-[85rem] px-4 py-10 my-20 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="aspect-w-16 aspect-h-7">
          <img
            className="w-full h-[600px] object-cover rounded-xl"
            src={graphDes}
            alt="Image Description"
          />
        </div>

        {/* <!-- Grid --> */}
        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-mons text-2xl md:text-3xl blue_gradient">
              DESIGN GRAPHIQUE
            </h2>
            <p className="font-inter mt-2 md:mt-4 text-black">
              Le design graphique est l'âme de toute identité visuelle réussie.
              Chez <span className="blue_gradient font-bold">MZ LOUAFI</span>,
              nous croyons en la puissance du design pour captiver, inspirer et
              communiquer. Notre équipe de designers graphiques talentueux
              combine créativité et expertise technique pour donner vie à des
              visuels qui racontent l'histoire de votre entreprise de manière
              mémorable. Nous nous engageons à créer des designs uniques,
              cohérents et adaptés à diverses plates-formes, du web à
              l'impression. Notre objectif est de vous aider à forger une
              identité visuelle distinctive qui se démarque dans un monde
              numérique en constante évolution. Que vous ayez besoin d'un
              nouveau logo, de supports marketing percutants, d'éléments visuels
              pour votre site web ou de tout autre élément de design, notre
              service est là pour transformer votre vision en réalité graphique.
              Choisir <span className="blue_gradient font-bold">MZ LOUAFI</span>{" "}
              pour vos besoins en design graphique, c'est choisir la créativité,
              la cohérence, la polyvalence et l'expertise. Nous sommes là pour
              donner vie à votre marque et la faire rayonner.
            </p>
          </div>
          {/* <!-- End Col --> */}

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaLightbulb size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Créativité et Originalité :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Notre équipe de designers graphiques est composée de
                    créatifs talentueux et innovants. Nous sommes déterminés à
                    concevoir des visuels uniques qui reflètent l'identité de
                    votre marque. Nous ne proposons pas de solutions "à la
                    chaîne", mais des designs sur mesure qui se démarquent dans
                    un environnement numérique saturé.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaLayerGroup size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Consistance Visuelle :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Nous comprenons l'importance de la cohérence visuelle pour
                    renforcer la reconnaissance de votre marque. Notre service
                    de design graphique s'engage à créer des éléments visuels
                    qui s'intègrent parfaitement dans l'ensemble de votre
                    communication, du logo aux supports marketing en passant par
                    les médias sociaux.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaFileImage size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Adaptabilité Multiplateforme :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Que ce soit pour le web, les médias sociaux, l'impression ou
                    d'autres supports, nos designs sont conçus pour être
                    polyvalents. Nous nous assurons que vos visuels conservent
                    leur qualité et leur impact sur tous les canaux,
                    garantissant une expérience de marque homogène.
                  </p>
                </div>
              </div>
              {/* <!-- End Icon Block --> */}

              {/* <!-- Icon Block --> */}
              <div className="flex gap-x-5">
                <div className="mt-0">
                  <FaCompassDrafting size="25" />
                </div>
                <div className="grow">
                  <h3 className="text-xl font-mons blue_gradient">
                    Expertise Technique :
                  </h3>
                  <p className="font-inter mt-1 text-gray-950">
                    Notre équipe maîtrise les derniers outils de conception
                    graphique et suit de près les tendances actuelles. Nous
                    sommes en mesure de fournir des fichiers prêts à l'emploi
                    pour une utilisation sur diverses plates-formes et canaux,
                    ainsi que de conseiller sur les meilleures pratiques en
                    matière de conception pour le web et l'impression.
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
          <p className="mt-1 text-gray-400">Parcourir les autres services.</p>
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
            <a href="/services/mobdev">
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
