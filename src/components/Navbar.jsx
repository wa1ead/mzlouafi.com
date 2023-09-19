import { Link } from "react-router-dom";
import logo from "../assets/white.jpeg";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed bg-gray-950 shadow-sm bg-opacity-95 bg-clip-padding blur-backdrop-filter inset-x-0 top-0 z-50 w-full">
      <nav
        className="flex items-center justify-between lg:px-2"
        aria-label="Global"
      >
        <div className="flex">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-8 max-lg:mx-2 lg:h-12 lg:w-12"
              src={logo}
              alt="MZ LOUAFI"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="flex text-lg font-incons leading-6 text-white hover:text-blue-500"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/contact"
            className="text-md font-inter leading-6 text-white hover:text-blue-500"
          >
            Contactez-nous <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-8" src={logo} alt="MZ LOUAFI" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-mons leading-7 text-white hover:bg-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-mons leading-7 text-white hover:bg-blue-600"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

const navigation = [
  { name: "Acceuil", to: "/" },
  { name: "Services", to: "/services" },
  { name: "A Propos", to: "/about" },
];
