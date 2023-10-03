import logo from "../assets/logo.png";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { FaLinkedin, FaFacebook } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer>
      <div className="pt-10 px-4 sm:px-6 lg:px-8 bg-gray-300 border-1 shadow-xl">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 text-center">
          <div className="w-60 max-md:mx-auto">
            <a href="/" aria-label="MZ LOUAFI">
              <img src={logo} />
            </a>
            <div className="md:text-start space-x-2">
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition hover:text-white hover:bg-blue-700 focus:ring-offset-slate-900"
                href="https://www.linkedin.com/company/mzlouafi/"
              >
                <FaFacebook />
              </a>
              <a
                className="inline-flex justify-center items-center w-8 h-8 text-center text-blue-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition hover:text-white hover:bg-blue-700 focus:ring-offset-slate-900"
                href="https://www.linkedin.com/company/mzlouafi/"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* <!-- End Col --> */}
          <div className="">
            <ul className="text-center">
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-slate-950">
                <a
                  className="inline-flex gap-x-2 font-inter text-blue-700 hover:text-blue-950"
                  href="/"
                >
                  Acceuil
                </a>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-slate-950">
                <a
                  className="inline-flex gap-x-2 font-inter text-blue-700 hover:text-blue-950"
                  href="/services"
                >
                  Services
                </a>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-slate-950">
                <a
                  className="inline-flex gap-x-2 font-inter text-blue-700 hover:text-blue-950"
                  href="/about"
                >
                  A Propos
                </a>
              </li>
              <li className="inline-block relative  last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-slate-950">
                <a
                  className="inline-flex gap-x-2 font-inter text-blue-700 hover:text-blue-950"
                  href="/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="grid space-y-4 font-inter text-slate-950">
            <a
              href="tel:+212645064545"
              className="flex justify-start items-center hover:text-blue-700"
            >
              <PhoneIcon className="w-8 text-slate-950 rounded-lg" />
              <span className="mx-4">+212645064545</span>
            </a>
            <a
              href="mailto:contact@mzlouafi.com"
              className="flex justify-start items-center hover:text-blue-500"
            >
              <EnvelopeIcon className="w-8 text-slate-950 rounded-lg" />
              <span className="mx-4">contact@mzlouafi.com</span>
            </a>
            <a
              className="flex justify-start items-start hover:text-blue-500"
              href="https://goo.gl/maps/1HriGPN9Z1G78r4y6"
            >
              <MapPinIcon className="w-12 text-slate-950 rounded-lg" />
              <span className="mx-4 text-left">
                Bureau 262 Technopark, Route de Nouaceur, Casablanca 20000, MA
              </span>
            </a>
          </div>
        </div>
        {/* <!-- End Grid --> */}
      </div>
      <div className="bg-gray-400 flex justify-evenly pt-2 text-slate-950 font-mono text-sm">
        Copyright © 2023 - MZ LOUAFI
      </div>
    </footer>
  );
}
