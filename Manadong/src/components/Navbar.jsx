import MyLogo from "../assets/Manadong.svg";

const Navbar = () => {
    return (
      <nav className="bg-blue-900 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="text-white font-bold text-lg">
            <a href="/">
                <img src={MyLogo} alt="Manadong" className="h-10" />
            </a>
          </div>
  
          {/* Menu Navigasi */}
          <div className=" lg:flex space-x-4">
            <a href="/" className="text-white hover:text-gray-300">
              Home
            </a>
            <a href="/about" className="text-white hover:text-gray-300">
              About
            </a>
            <a href="/services" className="text-white hover:text-gray-300">
              Services
            </a>
            <a href="/contact" className="text-white hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;