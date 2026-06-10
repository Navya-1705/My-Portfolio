import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            icon: "▶️",
            title: "YouTube Clone",
            description:
                "A video streaming platform with a modern and responsive UI, featuring video search, playback, category-based browsing, and user-friendly navigation.",
            technologies: ["ReactJS", "HTML", "JavaScript", "TailwindCSS"],
            code: "https://github.com/Navya-1705/Youtube-using-ReactJS.git",
            demo: "https://youtube-clone-usingreactjs.netlify.app/",
        },
        {
            icon: "👨‍💼",
            title: "User Management App",
            description:
                "A React-based application that allows users to add, update, delete, and view user details using Context API and JSON Server.",
            technologies: ["ReactJS", "HTML", "JavaScript", "TailwindCSS"],
            code: "https://github.com/Navya-1705/User-management.git",
            demo: "https://user-management1-app.netlify.app/",
        },
        {
            icon: "📋",
            title: "TODO List",
            description:
                "A simple task management application that allows users to add, update, delete, and mark tasks as completed.",
            technologies: ["ReactJS", "HTML", "JavaScript", "TailwindCSS"],
            code: "https://github.com/Navya-1705/react-todo-list.git",
            demo: "https://todo-list-using.netlify.app/",
        },
    ];

    return (
        <div className="min-h-screen text-center py-10 bg-slate-950">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-4xl font-bold text-white">
                    Featured Projects
                </h1>

                <p className="mt-4 text-gray-400">
                    Here are some of my recent projects that showcase my skills
                    <br />
                    and passion for development.
                </p>

                <hr className="w-52 mx-auto my-8 border-orange-500" />
            </motion.div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                        }}
                        className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-lg"
                    >
                        {/* Icon */}
                        <motion.div
                            className="text-6xl mb-4"
                            whileHover={{ rotate: 10, scale: 1.2 }}
                        >
                            {project.icon}
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-3xl text-white font-bold mb-3">
                            {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-lg mb-4">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                            {project.technologies.map((item, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: i * 0.1,
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                    className="px-3 py-1 text-lg bg-gray-700 text-white rounded-full"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 justify-center text-white">
                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.code}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-lg"
                            >
                                <FaGithub />
                                Code
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 bg-pink-500 px-4 py-2 rounded-lg"
                            >
                                <FaExternalLinkAlt />
                                Demo
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Projects;