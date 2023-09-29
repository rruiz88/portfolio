const Navbar = () => {
  return (
    <nav className="container relative mx-auto p-6">
      {/* <!-- Flex Container For Nav Items --> */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* <!-- Name --> */}
        <p className="text-blue-400 font-bold text-4xl">Roman Ruiz</p>

        {/* <!-- Menu Items --> */}
        <div className="hidden items-center space-x-10 uppercase md:flex">
          <a
            href="#about"
            className="tracking-widest text-blue-400 hover:text-green-400"
          >
            About
          </a>
          <a
            href="#skills"
            className="tracking-widest text-blue-400 hover:text-green-400"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="tracking-widest text-blue-400 hover:text-green-400"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="tracking-widest text-blue-400 hover:text-green-400"
          >
            Contact
          </a>
        </div>
        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className="z-30 block md:hidden focus:outline-none hamburger"
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
      <div
        id="menu"
        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue"
      >
        <div className="w-full py-3 text-center">
          <a href="#features" className="block hover:text-white">
            Features
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#download" className="block hover:text-white">
            Download
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#faq" className="block hover:text-white">
            FAQ
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#" className="block hover:text-softRed">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
