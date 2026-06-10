import {
    FaRegEnvelope,
    FaLocationArrow,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 py-10 md:py-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                        Get In Touch
                    </h1>

                    <p className="text-gray-600 mt-4 text-sm md:text-base">
                        Have a project in mind or just want to say hi?
                        <br className="md:hidden" />
                        Feel free to reach out!
                    </p>

                    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

                    {/* Left Card */}
                    <motion.div
                        className="bg-white p-5 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Let's Connect
                        </h2>

                        <p className="text-gray-600 leading-7 mb-8 text-sm md:text-base">
                            I'm always open to discussing new projects,
                            creative ideas, or opportunities to be part
                            of your vision. Let's build something amazing
                            together!
                        </p>

                        {/* Email */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="bg-orange-100 p-4 rounded-full">
                                <FaRegEnvelope className="text-orange-500 text-xl" />
                            </div>

                            <div>
                                <h4 className="text-gray-500 text-sm">
                                    Email
                                </h4>

                                <a
                                    href="mailto:navyanandini.kanupuru@gmail.com"
                                    className="font-semibold hover:text-orange-500 break-all"
                                >
                                    navyanandini.kanupuru@gmail.com
                                </a>
                            </div>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            className="flex items-center gap-4 mb-8"
                        >
                            <div className="bg-orange-100 p-4 rounded-full">
                                <FaLocationArrow className="text-orange-500 text-xl" />
                            </div>

                            <div>
                                <h4 className="text-gray-500 text-sm">
                                    Location
                                </h4>

                                <h3 className="font-semibold">
                                    Nellore, India
                                </h3>
                            </div>
                        </motion.div>

                        <hr className="my-6" />

                        {/* Social Links */}
                        <h2 className="text-xl font-semibold mb-4">
                            Follow Me
                        </h2>

                        <div className="flex flex-wrap gap-4">
                            <motion.a
                                whileHover={{ scale: 1.2, rotate: 10 }}
                                href="https://github.com/Navya-1705"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-100 p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                            >
                                <FaGithub size={22} />
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.2, rotate: -10 }}
                                href="https://www.linkedin.com/in/navyanandini-kanupuru-98094532a"
                                target="_blank"
                                rel="noreferrer"
                                className="bg-gray-100 p-4 rounded-full hover:bg-orange-500 hover:text-white transition"
                            >
                                <FaLinkedin size={22} />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Card */}
                    <motion.div
                        className="bg-white p-5 md:p-8 rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6">

                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    YOUR NAME
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your Name..."
                                    className="w-full border border-gray-300 rounded-xl px-3 md:px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    YOUR EMAIL
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Your Email..."
                                    className="w-full border border-gray-300 rounded-xl px-3 md:px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-gray-700 mb-2"
                                >
                                    MESSAGE
                                </label>

                                <textarea
                                    id="message"
                                    rows="5"
                                    placeholder="Tell me about your project..."
                                    className="w-full border border-gray-300 rounded-xl px-3 md:px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="w-full bg-orange-500 text-white py-3 rounded-xl font-medium text-sm md:text-base hover:bg-orange-600 transition"
                            >
                                Send Message
                            </motion.button>

                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default Contact;