import graphDes from "../../assets/graphic_design.jpg";
import {
  FaLightbulb,
  FaLayerGroup,
  FaFileImage,
  FaCompassDrafting,
} from "react-icons/fa6";
export default function GraphDes() {
  return (
    // <!-- Features -->
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
          <h2 className="font-bold text-2xl md:text-3xl blue_gradient">
            DESIGN GRAPHIQUE
          </h2>
          <p className="mt-2 md:mt-4 text-black">
            Le design graphique est l'âme de toute identité visuelle réussie.
            Chez <span className="blue_gradient font-bold">MZ LOUAFI</span>,
            nous croyons en la puissance du design pour captiver, inspirer et
            communiquer. Notre équipe de designers graphiques talentueux combine
            créativité et expertise technique pour donner vie à des visuels qui
            racontent l'histoire de votre entreprise de manière mémorable. Nous
            nous engageons à créer des designs uniques, cohérents et adaptés à
            diverses plates-formes, du web à l'impression. Notre objectif est de
            vous aider à forger une identité visuelle distinctive qui se
            démarque dans un monde numérique en constante évolution. Que vous
            ayez besoin d'un nouveau logo, de supports marketing percutants,
            d'éléments visuels pour votre site web ou de tout autre élément de
            design, notre service est là pour transformer votre vision en
            réalité graphique. Choisir{" "}
            <span className="blue_gradient font-bold">MZ LOUAFI</span> pour vos
            besoins en design graphique, c'est choisir la créativité, la
            cohérence, la polyvalence et l'expertise. Nous sommes là pour donner
            vie à votre marque et la faire rayonner.
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Créativité et Originalité :
                </h3>
                <p className="mt-1 text-gray-950">
                  Notre équipe de designers graphiques est composée de créatifs
                  talentueux et innovants. Nous sommes déterminés à concevoir
                  des visuels uniques qui reflètent l'identité de votre marque.
                  Nous ne proposons pas de solutions "à la chaîne", mais des
                  designs sur mesure qui se démarquent dans un environnement
                  numérique saturé.
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Consistance Visuelle :
                </h3>
                <p className="mt-1 text-gray-950">
                  Nous comprenons l'importance de la cohérence visuelle pour
                  renforcer la reconnaissance de votre marque. Notre service de
                  design graphique s'engage à créer des éléments visuels qui
                  s'intègrent parfaitement dans l'ensemble de votre
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Adaptabilité Multiplateforme :
                </h3>
                <p className="mt-1 text-gray-950">
                  Que ce soit pour le web, les médias sociaux, l'impression ou
                  d'autres supports, nos designs sont conçus pour être
                  polyvalents. Nous nous assurons que vos visuels conservent
                  leur qualité et leur impact sur tous les canaux, garantissant
                  une expérience de marque homogène.
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
                <h3 className="text-lg font-semibold blue_gradient">
                  Expertise Technique :
                </h3>
                <p className="mt-1 text-gray-950">
                  Notre équipe maîtrise les derniers outils de conception
                  graphique et suit de près les tendances actuelles. Nous sommes
                  en mesure de fournir des fichiers prêts à l'emploi pour une
                  utilisation sur diverses plates-formes et canaux, ainsi que de
                  conseiller sur les meilleures pratiques en matière de
                  conception pour le web et l'impression.
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
