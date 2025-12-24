import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", level: 90, color: "bg-orange-500" },
                { name: "C++", level: 85, color: "bg-blue-600" },
                { name: "Python", level: 80, color: "bg-yellow-500" },
                { name: "JavaScript", level: 95, color: "bg-yellow-400" },
            ]
        },
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: 90, color: "bg-cyan-400" },
                { name: "Tailwind CSS", level: 95, color: "bg-cyan-500" },
                { name: "HTML5/CSS3", level: 100, color: "bg-orange-600" },
                { name: "TypeScript", level: 80, color: "bg-blue-500" },
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", level: 85, color: "bg-green-500" },
                { name: "Express", level: 85, color: "bg-white" },
                { name: "MongoDB", level: 80, color: "bg-green-600" },
                { name: "MySQL", level: 75, color: "bg-orange-500" },
            ]
        },
        {
            title: "Core CS",
            skills: [
                { name: "Data Structures", level: 90, color: "bg-red-500" },
                { name: "Algorithms", level: 85, color: "bg-purple-500" },
                { name: "OS/Networks", level: 75, color: "bg-gray-500" },
                { name: "Git/GitHub", level: 90, color: "bg-white" },
            ]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-darker/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300"
                        >
                            <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
                            <div className="space-y-6">
                                {category.skills.map((skill, index) => (
                                    <div key={index}>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-gray-300 font-medium">{skill.name}</span>
                                            <span className="text-gray-400 text-sm">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                                className={`h-full rounded-full ${skill.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
