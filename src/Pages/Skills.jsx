import { FaCode, FaCog, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <FaCode />,
            color: "from-pink-400 to-purple-500",
            skills: [
                { name: "React", level: 90 },
                { name: "JavaScript", level: 85 },
                { name: "Tailwind CSS", level: 95 },
                { name: "HTML", level: 95 },
                { name: "CSS", level: 90 },
            ],
        },
        {
            title: "Backend",
            icon: <FaCog />,
            color: "from-cyan-400 to-blue-500",
            skills: [
                { name: "Python", level: 78 },
                { name: "PostgreSQL", level: 82 },
            ],
        },
        {
            title: "Tools & Others",
            icon: <FaTools />,
            color: "from-green-400 to-emerald-500",
            skills: [
                { name: "Git & GitHub", level: 92 },
                { name: "VS Code", level: 95 },
            ],
        },
    ];

    return (
        <div className="min-h-screen bg-[#0f172a] text-white py-20 px-6">

            {/* Heading */}
            <motion.div
                className="text-center"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h1 className="text-3xl md:text-5xl font-bold">
                    Skills & <span className="text-pink-400">Expertise</span>
                </h1>

                <p className="text-gray-400 mt-4">
                    Technologies and tools I use to bring ideas to life
                </p>

                <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full mt-6"></div>
            </motion.div>

            {/* Skill Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-7xl mx-auto">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2,
                        }}
                        viewport={{ once: true }}
                        whileHover={{
                            scale: 1.03,
                            y: -10,
                        }}
                        className="bg-slate-800/60 border border-slate-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl"
                    >
                        {/* Card Header */}
                        <div className="flex items-center gap-3 mb-8">
                            <motion.span
                                className="text-3xl text-pink-400"
                                animate={{ y: [0, -5, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 2,
                                }}
                            >
                                {category.icon}
                            </motion.span>

                            <h2 className="text-2xl font-bold">
                                {category.title}
                            </h2>
                        </div>

                        {/* Skills */}
                        {category.skills.map((skill, i) => (
                            <div key={i} className="mb-6">
                                <motion.div
                                    className="flex justify-between mb-2"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </motion.div>

                                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{
                                            duration: 1.5,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Skills;