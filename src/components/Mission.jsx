import mission from "../assets/mission.jpg";

export default function Mission() {
  return (
    <div className=" bg-slate-950 my-20 py-2 px-4 rounded-lg lg:mx-8 lg:my-60 lg:px-8 lg:py-4 ">
      {/* // Features */}
      <div className="my-20 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-20">
        {/* <!-- Grid --> */}
        <div className="mb-5 sm:mb-10">
          <div className="space-y-6 sm:space-y-8">
            {/* <!-- Title --> */}
            <div className="space-y-2 md:space-y-4">
              <h2 className="font-mons text-3xl lg:text-4xl text-gray-100">
                Nos missions :
              </h2>
              <p className="font-inter text-gray-400">
                Le monde digital, avec ses nouveautés incessantes et ses termes
                savants peut sembler compliqué au premier abord. Or, malgré
                cette façade parfois peu encourageante pour les non initiés,
                cette idée est à proscrire . <b>MZ LOUAFI</b> vous accompagne
                dans votre stratégie, & vous facilite l’accès à plusieurs
                nouvelles facettes :
              </p>
            </div>
            {/* <!-- End Title --> */}

            {/* <!-- List --> */}
            <ul role="list" className="space-y-2 sm:space-y-4">
              <li className="flex space-x-3">
                {/* <!-- Solid Check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                {/* <!-- End Solid Check --> */}

                <span className="font-inter sm:text-base text-gray-100">
                  <span className="font-bold">
                    L’accompagnement stratégique
                  </span>{" "}
                  et l’assistance dans vos projets de A à Z.
                </span>
              </li>

              <li className="flex space-x-3">
                {/* <!-- Solid Check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                {/* <!-- End Solid Check --> */}

                <span className="font-inter sm:text-base text-gray-100">
                  <span className="font-bold">
                    L’amélioration de votre notoriété
                  </span>{" "}
                  et votre image de marque sur les divers canaux digitaux.
                </span>
              </li>

              <li className="flex space-x-3">
                {/* <!-- Solid Check --> */}
                <svg
                  className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                    fill="currentColor"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                    fill="currentColor"
                  />
                </svg>
                {/* <!-- End Solid Check --> */}

                <span className="font-inter sm:text-base text-gray-100">
                  <span className="font-bold">
                    Proposer des solutions créatives
                  </span>{" "}
                  et pertinentes pour mener vers la réussite de vos projets.
                </span>
              </li>
            </ul>
            {/* <!-- End List --> */}
          </div>
        </div>
        {/* <!-- End Col --> */}

        <div>
          <img
            className="rounded-xl shadow-2xl"
            data-aos="zoom-out"
            src={mission}
            alt="Image Description"
          />
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
