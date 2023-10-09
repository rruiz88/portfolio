const Navbar = () => {
  const navToggle = () => {
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");
    btn?.classList.toggle("open");
    menu?.classList.toggle("flex");
    menu?.classList.toggle("hidden");
  };

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
          type="button"
          className="z-30 block md:hidden focus:outline-none hamburger"
          onClick={navToggle}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}
      <div
        id="menu"
        className="fixed inset-0 z-20 hidden flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-gray-600"
      >
        <div className="w-full py-3 text-center">
          <a href="#about" className="block hover:text-green-400">
            About
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#skills" className="block hover:text-green-400">
            Skills
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#projects" className="block hover:text-green-400">
            Projects
          </a>
        </div>
        <div className="w-full py-3 text-center">
          <a href="#contact" className="block hover:text-green-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
