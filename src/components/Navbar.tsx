import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute flex items-center justify-between top-0 left-0 right-0 bg-linear-45/oklch from-orange-600 to-orange-400 text-white p-4">
      <h1 className="text-2xl ml-4 md:ml-20 font-bold">YUK YAK YUK</h1>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden mr-4"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/* Desktop menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 mr-20">
          <li>
            <a
              href="/nasi-ayam-app/"
              className="hover:text-yellow-400 p-2 font-semibold rounded-[10px] "
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/Order"
              className="hover:text-yellow-400 p-2 font-semibold rounded-[10px] "
            >
              Order
            </a>
          </li>
          <li>
            <a
              href="/Contact"
              className="hover:text-yellow-400 p-2 font-semibold rounded-[10px] "
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="absolute top-16 left-0 right-0 min-h-screen bg-linear-45/oklch from-gray-200 to-gray-700 md:hidden z-10">
          <ul className="flex flex-col space-y-2 p-4">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 p-3 border-b rounded-lg block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/Order"
                className="hover:text-yellow-400 p-3 border-b rounded-lg block"
              >
                Order
              </a>
            </li>
            <li>
              <a
                href="/Contact"
                className="hover:text-yellow-400 p-3 border-b rounded-lg block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
};

export default Navbar;
