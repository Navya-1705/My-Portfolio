import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 md:px-8 py-10 md:py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

        {/* Portfolio Info */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Portfolio
          </h2>

          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Building amazing web experiences with modern
            technologies and creative solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-2 md:space-y-3">
            <li>
              <NavLink
                to="/"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-orange-400 transition"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            Stay Updated
          </h2>

          <p className="text-gray-400 mb-4 text-sm md:text-base">
            Get notified about new projects and updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-400"
            />

            <button className="bg-orange-500 px-5 py-3 rounded-lg w-full sm:w-auto hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-gray-400 text-sm md:text-base">

        <p className="flex flex-wrap justify-center md:justify-start items-center gap-2">
          © 2026 Made with
          <FaRegHeart className="text-red-500" />
          by Navya Nandini Kanupuru
        </p>

        <p>
          Designed & Developed with React + Vite + Tailwind CSS
        </p>

      </div>
    </footer>
  );
}

export default Footer;