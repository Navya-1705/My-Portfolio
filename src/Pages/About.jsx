import { motion } from "framer-motion";

function About() {
    const technologies = [
        "HTML",
        "TailwindCSS",
        "JavaScript",
        "ReactJS",
        "Python",
        "PostgreSQL",
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-5xl font-bold text-gray-900">
                        About Me
                    </h1>

                    <div className="w-24 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
                </motion.div>

                {/* Content */}
                <div className="flex flex-col md:flex-row gap-10 p-10">

                    {/* Left Side */}
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <motion.img
                            src="https://img.magnific.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?semt=ais_hybrid&w=740&q=80"
                            alt="Developer"
                            className="rounded-3xl shadow-xl"
                            whileHover={{ scale: 1.05 }}
                        />

                        <h2 className="text-3xl font-bold text-gray-800 mt-6">
                            Passionate Developer
                        </h2>

                        <p className="text-orange-500 mt-2">
                            Building the future, one line at a time
                        </p>
                    </motion.div>

                    {/* Right Side */}
                    <motion.div
                        className="md:w-2/3"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 leading-8">
                            I'm a passionate Full Stack Developer who enjoys building
                            modern, responsive, and user-friendly web applications.

                            <br /><br />

                            I love turning ideas into real projects using technologies
                            like React, JavaScript, Python, and other modern web tools.
                            I enjoy learning new skills, solving problems, and creating
                            applications that provide a great user experience.
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap gap-3 mt-6">
                            {technologies.map((tech, index) => (
                                <motion.button
                                    key={index}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition"
                                >
                                    {tech}
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default About;