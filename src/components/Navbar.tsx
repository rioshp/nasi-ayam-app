const Navbar = () => {
  return (
    <nav className="absolute flex items-center justify-between top-0 left-0 right-0 bg-gray-800 text-white p-4">
      <h1 className="text-2xl ml-20 font-bold">Nasi Ayam YUK YAK YUK</h1>
      <nav className="mt-2">
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
    </nav>
  );
};

export default Navbar;
