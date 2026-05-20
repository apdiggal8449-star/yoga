import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from '../assets/om.webp';
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);

  const navRef = useRef();

  const closeMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
    setClassesOpen(false);
  };

  // ✅ CLOSE WHEN CLICK OUTSIDE (IMPORTANT FIX)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md bg-orange-500 sticky top-0 z-50">

      <nav ref={navRef} className="max-w-7xl mx-auto px-4 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
  src={Logo}
  alt="Logo"
  className="w-12 h-12 brightness-0 font-bold invert sepia saturate-[1000%] hue-rotate-[320deg]"
/>
            <h1 className="text-black font-bold text-xl">Om Yogshala</h1>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-8 text-white font-medium">

            <li>
              <Link to="/" onClick={closeMenu}>Home</Link>
            </li>

            <li>
              <Link to="/about" onClick={closeMenu}>About Us</Link>
            </li>

            {/* SERVICES */}
            <li className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-black"
              >
                Yoga Services <ChevronDown size={18} />
              </button>

              {servicesOpen && (
                <div className="absolute top-8 left-0 bg-orange-500 w-56 rounded shadow-lg text-white">

                  <Link to="/homeyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes
                  </Link>

                  <Link to="/onlineyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Online Yoga Classes
                  </Link>

                  <Link to="/corporateyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Corporate Yoga Classes
                  </Link>

                  <Link to="/pragnancyyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Pregnancy Yoga Classes
                  </Link>

                  <Link to="/meditationyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Meditation & Pranayama
                  </Link>

                  <Link to="/stresyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Yoga for Stress Relief
                  </Link>

                </div>
              )}
            </li>

            {/* CLASSES */}
            <li className="relative">
              <button
                onClick={() => setClassesOpen(!classesOpen)}
                className="flex items-center gap-1 hover:text-black"
              >
                Yoga Classes <ChevronDown size={18} />
              </button>

              {classesOpen && (
                <div className="absolute top-8 left-0 bg-orange-500 w-60 rounded shadow-lg text-white">

                  <Link to="/delhi" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Delhi
                  </Link>

                  <Link to="/noida" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Noida
                  </Link>

                  <Link to="/ghaziabad" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Ghaziabad
                  </Link>

                  <Link to="/greater-noida" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Greater Noida
                  </Link>

                  <Link to="/faridabad" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Faridabad
                  </Link>

                  <Link to="/gurgaon" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Gurgaon
                  </Link>

                </div>
              )}
            </li>

            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/writeus" onClick={closeMenu}>Write For Us</Link></li>
              <li><Link to="/admin-login" onClick={closeMenu}>Admin</Link></li>

          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="lg:hidden bg-orange-500 pb-5 text-white">

            <Link to="/" onClick={closeMenu} className="block px-4 py-2">Home</Link>

            <Link to="/about" onClick={closeMenu} className="block px-4 py-2">About</Link>

            {/* MOBILE SERVICES */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full text-left px-4 py-2 flex justify-between"
            >
              Yoga Services <ChevronDown size={18} />
            </button>

            {servicesOpen && (
              <div className="pl-6">
                 <Link to="/homeyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes
                  </Link>

                  <Link to="/onlineyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Online Yoga Classes
                  </Link>

                  <Link to="/corporateyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Corporate Yoga Classes
                  </Link>

                  <Link to="/pragnancyyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Pregnancy Yoga Classes
                  </Link>

                  <Link to="/meditationyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Meditation & Pranayama
                  </Link>

                  <Link to="/stresyoga" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Yoga for Stress Relief
                  </Link>
              </div>
            )}

            {/* MOBILE CLASSES */}
            <button
              onClick={() => setClassesOpen(!classesOpen)}
              className="w-full text-left px-4 py-2 flex justify-between"
            >
              Yoga Classes <ChevronDown size={18} />
            </button>

            {classesOpen && (
              <div className="pl-6">
                                 <Link to="/delhi" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Delhi
                  </Link>

                  <Link to="/noida" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Noida
                  </Link>

                  <Link to="/ghaziabad" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Ghaziabad
                  </Link>

                  <Link to="/greater-noida" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Greater Noida
                  </Link>

                  <Link to="/faridabad" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Faridabad
                  </Link>

                  <Link to="/gurgaon" onClick={closeMenu} className="block px-4 py-2 hover:bg-orange-600">
                    Home Yoga Classes in Gurgaon
                  </Link>

              </div>
            )}

            <Link to="/blog" onClick={closeMenu} className="block px-4 py-2">Blog</Link>
            <Link to="/contact" onClick={closeMenu} className="block px-4 py-2">Contact</Link>

          </div>
        )}

      </nav>
    </header>
  );
}