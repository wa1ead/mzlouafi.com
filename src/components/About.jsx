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
          <h2 className="head_text pt-20">À propos de nous:</h2>
          <p className="desc py-4">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-4 gap-y-8 px-4 pt-10 mb-10 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-4">
              <h3 className="text-2xl text-gray-600 my-6">
                Inspirer et captiver :{" "}
              </h3>
              <p className="text-lg font-bold ">
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
              <h3 className="text-2xl text-gray-600 my-6">
                Établir des liens significatifs :{" "}
              </h3>
              <p className="text-lg font-bold ">
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
              <h3 className="text-2xl text-gray-600 my-6">
                Transformer les prospects en clients :{" "}
              </h3>
              <p className="text-lg font-bold ">
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
    </div>
  );
}
