import { mark } from "../assets";

export default function Approche() {
  return (
    <div className=" py-32">
      <h2 className="head_text pb-12">Notre Approche</h2>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 rounded-md bg-white">
        <div className="pt-12 text-xl leading-8 text-black">
          <p>
            MZ LOUAFI SARL A.U est une agence de communication digitale crée le
            26 août 2021, spécialisée en marketing digital, Création de site
            internet, Application WEB & Mobile, Référencement (SEO), Design
            graphique, basée à Technopark Casablanca. Notre agence intervient
            sur plusieurs axes qui permet de disposer d’une stratégie donnant
            lieu à des résultats réels et mesurables. Nous favorisons la
            connexion humaine grâce à des stratégies perspicaces, une conception
            sophistiquée et des expériences numériques percutantes.
          </p>
        </div>
        <div className="mx-auto my-4 flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
          <div className="w-full lg:max-w-lg lg:flex-auto">
            <img
              src={mark}
              alt="keep it simple"
              className=" mb-44 aspect-[6/5] w-full rounded-2xl bg-gray-50 object-cover lg:aspect-auto lg:h-[34.5rem]"
            />
          </div>
          <div className="w-full mt-20 lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul className="-my-8 divide-y divide-gray-900">
              {jobOpenings.map((opening) => (
                <li key={opening.id} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3">
                    <dt className="sr-only">Role</dt>
                    <dd className="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
                      {opening.role}
                      <span className="absolute inset-0" aria-hidden="true" />
                    </dd>
                    <dt className="sr-only">Description</dt>
                    <dd className="mt-2 w-full flex-none text-base leading-7 text-gray-700">
                      {opening.description}
                    </dd>
                  </dl>
                </li>
              ))}
            </ul>
            <div className="mt-8 justify-center flex border-t border-gray-100 pt-8">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Savoir Plus<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const jobOpenings = [
  {
    id: 1,
    role: "Inspirer et captiver",
    description:
      "La création est le point de départ de toute communication digitale efficace. Notre équipe de créatifs talentueux excelle dans la conception de contenu visuel et écrit percutant. Que ce soit à travers des vidéos accrocheuses, des infographies informatives, des articles de blog engageants, ou même des publicités innovantes, nous nous efforçons de créer un contenu qui se démarque dans le bruit numérique.",
  },
  {
    id: 2,
    role: " Établir des liens significatifs",
    description:
      "La véritable puissance de la communication digitale réside dans sa capacité à établir des connexions significatives avec votre public cible. Nous utilisons des stratégies de médias sociaux, de référencement, de marketing par e-mail et bien d'autres tactiques pour garantir que votre message atteigne les bonnes personnes au bon moment. Nous croyons en la construction de relations durables avec votre audience pour créer une fidélité à long terme.",
  },
  {
    id: 3,
    role: "Transformer les prospects en clients",
    description:
      "Une communication digitale efficace ne se limite pas à l'engagement ; elle doit également conduire à des résultats concrets. Notre approche est axée sur la conversion. Nous travaillons à optimiser votre site web pour encourager les actions telles que les achats en ligne, les demandes de devis, les inscriptions à la newsletter, etc. En utilisant des techniques avancées d'analyse et d'optimisation, nous maximisons le retour sur investissement de vos campagnes.",
  },
];
