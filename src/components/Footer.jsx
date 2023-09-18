import logo from "../assets/logo.png";
import { FaLinkedin, FaPhoneFlip, FaEnvelope, FaMapPin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer>
      <div className="max-w-[85rem] pt-10 px-4 sm:px-6 lg:px-8 bg-slate-950">
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
            </div>
          </div>

          {/* <!-- End Col --> */}

          <ul className="text-center">
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mono text-white hover:text-blue-500"
                href="/"
              >
                Acceuil
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mono text-white hover:text-blue-500"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mono text-white hover:text-blue-500"
                href="/about"
              >
                A Propos
              </a>
            </li>
            <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
              <a
                className="inline-flex gap-x-2 font-mono text-white hover:text-blue-500"
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
          © 2023 - MZ LOUAFI
        </div>
      </div>
    </footer>
  );
}
