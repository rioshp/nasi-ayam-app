import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="absolute flex items-center justify-between top-0 left-0 right-0 bg-gray-800 text-white p-4">
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
            <nav className="hidden md:block mt-2">
                <ul className="flex space-x-4 mr-40">
                    <li>
                        <a href="/" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400">
                            Beranda
                        </a>
                    </li>
                    <li>
                        <a href="/Pemesanan" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400">
                            Pemesanan
                        </a>
                    </li>
                    <li>
                        <a href="/Kontak" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400">
                            Kontak
                        </a>
                    </li>
                    <li>
                        <a href="/Testimoni" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400">
                            Testimoni
                        </a>
                    </li>
                </ul>
            </nav>
            {/* Mobile menu */}
            {menuOpen && (
                <nav className="absolute top-16 left-0 right-0 bg-gray-800 md:hidden z-10">
                    <ul className="flex flex-col space-y-2 p-4">
                        <li>
                            <a href="/" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400 block">
                                Beranda
                            </a>
                        </li>
                        <li>
                            <a href="/Pemesanan" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400 block">
                                Pemesanan
                            </a>
                        </li>
                        <li>
                            <a href="/Kontak" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400 block">
                                Kontak
                            </a>
                        </li>
                        <li>
                            <a href="/Testimoni" className="hover:text-yellow-400 p-3 border-2 rounded-[10px] border-yellow-400 block">
                                Testimoni
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
    );
};

export default Navbar;
