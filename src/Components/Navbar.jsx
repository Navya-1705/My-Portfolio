import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "bg-orange-400 text-white rounded-full px-4 py-2"
      : "text-gray-600 hover:text-orange-500";

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        <div className="flex items-center gap-2">
          <FaCircleUser className="text-3xl text-orange-500" />
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            Portfolio
          </h2>
        </div>


        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkStyle}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkStyle}>
            About
          </NavLink>

          <NavLink to="/projects" className={navLinkStyle}>
            Projects
          </NavLink>

          <NavLink to="/skills" className={navLinkStyle}>
            Skills
          </NavLink>

          <NavLink to="/contact" className={navLinkStyle}>
            Contact
          </NavLink>
        </div>

        {/* Desktop Button */}
        <button className="hidden md:block bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
          Get In Touch
        </button>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-2xl text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white border-t">
          <NavLink
            to="/"
            className={navLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={navLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            className={navLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={navLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Skills
          </NavLink>

          <NavLink
            to="/contact"
            className={navLinkStyle}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
            Get In Touch
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;