import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [servicesOpen, setServicesOpen] =
    useState(false);

  const [classesOpen, setClassesOpen] =
    useState(false);

  // close mobile menu
  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setClassesOpen(false);
  };

  return (
    <header className="w-full shadow-md bg-orange-500 sticky top-0 z-50">

      {/* SEO Friendly Nav */}
      <nav
        className="max-w-7xl mx-auto px-4 lg:px-8"
        aria-label="Main Navigation"
      >

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="Om Yogshala Home"
            onClick={closeMenu}
          >

            {/* Logo Circle */}
            <div
              className="
                w-14
                h-14
                border
                border-dashed
                border-white
                bg-orange-500
                flex
                items-center
                justify-center
                shadow-lg
              "
            >
              <span className="text-yellow-300 text-3xl font-bold">
                ॐ
              </span>
            </div>

            <h1 className="text-black font-bold text-2xl">
              Om Yogshala
            </h1>

          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-white font-medium">

            <li>
              <Link
                to="/"
                className="hover:text-black transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-black transition"
              >
                About Us
              </Link>
            </li>

            {/* Services Dropdown */}
            <li className="relative group">

              <button className="flex items-center gap-1 hover:text-black transition">
                Yoga Services
                <ChevronDown size={18} />
              </button>

              <div className="absolute top-6 left-0 bg-orange-500 text-white rounded-lg shadow-lg w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                <Link
                  to="/home-yoga"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes
                </Link>

                <Link
                  to="/online-yoga"
                  className="block px-4 py-3 "
                >
                  Online Yoga Classes
                </Link>

                <Link
                  to="/corporate-yoga"
                  className="block px-4 py-3 "
                >
                  Corporate Yoga Classes
                </Link>
                <Link
                  to="/corporate-yoga"
                  className="block px-4 py-3 "
                >
                  Pregnancy Yoga Classes
                </Link>
                <Link
                  to="/corporate-yoga"
                  className="block px-4 py-3 "                >
                  Meditation & Pranayama
                </Link>
                <Link
                  to="/corporate-yoga"
                  className="block px-4 py-3 "
                >
            Yoga for Stres relief
                </Link>
               </div>

            </li>

            {/* Classes Dropdown */}
            <li className="relative group">

              <button className="flex items-center gap-1 hover:text-black transition">
                Yoga Classes 
                <ChevronDown size={18} />
              </button>

              <div className="absolute top-6 left-0 bg-orange-500 text-white rounded-lg shadow-lg w-75 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">

                <Link
                  to="/beginner"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes in Delhi
                </Link>
                <Link
                  to="/advanced"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes in Noida
                </Link>

                <Link
                  to="/advanced"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes in Ghaziabad
                </Link>

                <Link
                  to="/meditation"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes in Greater Noida
                </Link>
                <Link
                  to="/advanced"
                  className="block px-4 py-3 "
                >
                  Home Yoga Classes in Faridabad
                </Link>
                 <Link
                  to="/meditation"
                  className="block px-4 py-3"
                >
                  Home Yoga Classes in Gurgaon
                </Link>

              </div>

            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-black transition"
              >
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-black transition"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/writeus"
                className="hover:text-black transition"
              >
                Write For Us
              </Link>
            </li>

          </ul>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <div className="lg:hidden bg-orange-500 pb-5">

            <ul className="flex flex-col gap-3 text-white font-medium">

              <li>
                <Link
                  to="/"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>

              {/* Mobile Services */}
              <li>

                <button
                  onClick={() =>
                    setServicesOpen(!servicesOpen)
                  }
                  className="flex items-center justify-between w-full py-2"
                >
                  Yoga Services
                  <ChevronDown size={18} />
                </button>

                {servicesOpen && (

                  <div className="pl-4 flex flex-col gap-2 mt-2">

                    <Link
                      to="/home-yoga"
                      onClick={closeMenu}
                    >
                      Home Yoga Classes
                    </Link>

                    <Link
                      to="/online-yoga"
                      onClick={closeMenu}
                    >
                      Online Yoga Classes
                    </Link>

                    <Link
                      to="/corporate-yoga"
                      onClick={closeMenu}
                    >
                      Corporate Yoga
                    </Link>

                  </div>

                )}

              </li>

              {/* Mobile Classes */}
              <li>

                <button
                  onClick={() =>
                    setClassesOpen(!classesOpen)
                  }
                  className="flex items-center justify-between w-full py-2"
                >
                  Yoga Classes
                  <ChevronDown size={18} />
                </button>

                {classesOpen && (

                  <div className="pl-4 flex flex-col gap-2 mt-2">

                    <Link
                      to="/beginner"
                      onClick={closeMenu}
                    >
                      Beginner Yoga
                    </Link>

                    <Link
                      to="/advanced"
                      onClick={closeMenu}
                    >
                      Advanced Yoga
                    </Link>

                    <Link
                      to="/meditation"
                      onClick={closeMenu}
                    >
                      Meditation Classes
                    </Link>

                  </div>

                )}

              </li>

              <li>
                <Link
                  to="/blog"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/write-for-us"
                  className="block py-2"
                  onClick={closeMenu}
                >
                  Write For Us
                </Link>
              </li>

            </ul>

          </div>

        )}

      </nav>

    </header>
  );
}