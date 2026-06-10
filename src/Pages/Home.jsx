import {
    FaRegHandSpock,
    FaGithub,
    FaLinkedinIn,
    FaRegEnvelope,
    FaArrowDown,
} from "react-icons/fa";

import { motion } from "framer-motion";

import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-50">


                <motion.div
                    className="flex items-center gap-2 mb-4"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <FaRegHandSpock className="text-4xl text-white bg-yellow-400 rounded-full p-1" />
                    <h2 className="text-xl font-medium text-gray-600">
                        Hello, I am
                    </h2>
                </motion.div>


                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Kanupuru Navya Nandini
                </motion.h1>


                <motion.h2
                    className="text-2xl md:text-3xl font-semibold text-orange-500 mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Full Stack Developer
                </motion.h2>


                <motion.p
                    className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    I specialize in developing responsive websites and web
                    applications using modern technologies.
                    <br />
                    Dedicated to writing clean code and delivering
                    exceptional user experiences.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                    >

                        <NavLink
                            to="/projects"
                            className="flex items-center justify-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition duration-300"
                        >
                            View My Work
                            <FaArrowDown />
                        </NavLink>

                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition"
                    >
                        Let's Connect
                    </motion.button>
                </motion.div>


                <motion.ul
                    className="flex gap-8 text-3xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3, duration: 1 }}
                >
                    <motion.li whileHover={{ scale: 1.3, y: -5 }}>
                        <a
                            href="https://github.com/Navya-1705/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 hover:text-black transition"
                        >
                            <FaGithub />
                        </a>
                    </motion.li>

                    <motion.li whileHover={{ scale: 1.3, y: -5 }}>
                        <a
                            href="https://www.linkedin.com/in/navyanandini-kanupuru-98094532a"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-700 hover:text-blue-600 transition"
                        >
                            <FaLinkedinIn />
                        </a>
                    </motion.li>

                    <motion.li whileHover={{ scale: 1.3, y: -5 }}>
                        <a
                            href="mailto:yourmail@gmail.com"
                            className="text-gray-700 hover:text-orange-500 transition"
                        >
                            <FaRegEnvelope />
                        </a>
                    </motion.li>
                </motion.ul>

                {/* Floating Arrow */}
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                    }}
                    className="mt-12 text-orange-500 text-3xl"
                >
                    <FaArrowDown />
                </motion.div>
            </div>

            <div className="min-h-screen">
                <About />
            </div>

            <div className="min-h-screen">
                <Projects />
            </div>

            <div className="min-h-screen">
                <Skills />
            </div>

            <div className="min-h-screen">
                <Contact />
            </div>
        </div>
    );
}

export default Home;