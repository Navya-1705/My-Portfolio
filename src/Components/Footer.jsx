import { NavLink } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-gray-900 text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">


        <div>
          <h2 className="text-2xl font-bold mb-4">Portfolio</h2>

          <p className="text-gray-400 leading-relaxed">
            Building amazing web experiences with modern
            technologies and creative solutions.
          </p>
        </div>


        <div>
          <h2 className="text-2xl font-bold mb-4">
            Quick Links
          </h2>

          <ul className="space-y-3">
            <li>
              <NavLink
                to="/"
                className="text-gray-400 hover:text-orange-400 "
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className="text-gray-400 hover:text-orange-400 "
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className="text-gray-400 hover:text-orange-400 "
              >
                Projects
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/skills"
                className="text-gray-400 hover:text-orange-400 "
              >
                Skills
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-orange-400 "
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>


        <div>
          <h2 className="text-2xl font-bold mb-4">
            Stay Updated
          </h2>

          <p className="text-gray-400 mb-4">
            Get notified about new projects and updates.
          </p>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 outline-none focus:border-orange-400"
            />

            <button className="bg-orange-500 px-5 py-3 rounded-lg hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <hr className="my-8 border-gray-700" />

   
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">

        <p className="flex items-center gap-2">
          © 2026 Made with
          <FaRegHeart className="text-red-500" />
          by Navya Nandini Kanupuru
        </p>

        <p>
          Designed & Developed with React + Vite + Tailwind CSS
        </p>

      </div>
    </div>
  );
}

export default Footer;