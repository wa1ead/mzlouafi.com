import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaTwitter,
  FaPhoneFlip,
  FaEnvelope,
  FaMapPin,
} from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="pt-2">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-slate-950">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10 text-center">
          <div className="w-60 mx-auto">
            <a href="/" aria-label="MZ LOUAFI">
              <img src={logo} />
            </a>
            <div className="md:text-center space-x-2">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="https://www.linkedin.com/company/mzlouafi/"
              >
                <FaLinkedin />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition hover:text-gray-200 hover:bg-gray-800 focus:ring-offset-slate-900"
                href="#"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                </svg>
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="#"
              >
                <FaTwitter />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-slate-900"
                href="#"
              >
                <svg
                  className="w-3.5 h-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- End Col --> */}

          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mons text-white hover:text-blue-500"
                href="/"
              >
                Acceuil
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mons text-white hover:text-blue-500"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mons text-white hover:text-blue-500"
                href="/about"
              >
                A Propos
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mons text-white hover:text-blue-500"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="grid space-y-8 font-inter text-white">
            <a
              href="tel:+212645064545"
              className="flex justify-start items-center hover:text-blue-500"
            >
              <FaPhoneFlip size="20px" />
              <span className="mx-4">+212645064545</span>
            </a>
            <a
              href="mailto:contact@mzlouafi.com"
              className="flex justify-start items-center hover:text-blue-500"
            >
              <FaEnvelope size="20px" />
              <span className="mx-4">contact@mzlouafi.com</span>
            </a>
            <a
              className="flex justify-start items-start hover:text-blue-500"
              href="https://goo.gl/maps/1HriGPN9Z1G78r4y6"
            >
              <FaMapPin size="20px" />
              <span className="mx-4">
                Bureau 262 Technopark, Route de Nouaceur, Casablanca 20000, MA
              </span>
            </a>
          </div>
        </div>
        {/* <!-- End Grid --> */}
        <div className="flex justify-evenly pt-4 text-white font-mono text-sm">
          Copyright © 2023 MZ LOUAFI
        </div>
      </div>
    </footer>
  );
}
