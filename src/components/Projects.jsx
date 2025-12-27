import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const projects = [
        {
            title: "E-Commerce Platform",
            desc: "A full-featured online store with cart functionality, payment gateway integration, and admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Redux"],
            category: "Full Stack",
            github: "#",
            demo: "#",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "Task Management App",
            desc: "Real-time task collaboration tool with drag-and-drop interface and team workspace features.",
            tech: ["React", "Firebase", "Tailwind", "DnD"],
            category: "Frontend",
            github: "#",
            demo: "#",
            color: "from-cyan-500 to-blue-500"
        },
        {
            title: "Algorithm Visualizer",
            desc: "Interactive visualization of sorting and pathfinding algorithms to understand their mechanics.",
            tech: ["JavaScript", "HTML5", "CSS3"],
            category: "Algorithms",
            github: "#",
            demo: "#",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Social Media Dashboard",
            desc: "Analytics dashboard for social media metrics with data visualization charts.",
            tech: ["Next.js", "Chart.js", "TypeScript"],
            category: "Full Stack",
            github: "#",
            demo: "#",
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Loan Tracker Application",
            desc: "A full-stack Loan Tracker application built to help students monitor and manage their education loan utilization efficiently. The platform includes expense tracking, real-time analytics, and a clean, user-friendly dashboard.",
            tech: ["React", "Node.js", "Express.js", "MongoDB", "MERN"],
            category: "Full Stack",
            github: "#",
            demo: "#",
            color: "from-emerald-500 to-teal-500"
        },
        {
            title: "AR Furniture Shopping Website",
            desc: "An Augmented Reality–based furniture shopping website that enhances the online shopping experience. Users can visualize furniture in real time using AR for immersive product interaction.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "AR"],
            category: "Full Stack",
            github: "#",
            demo: "#",
            color: "from-violet-600 to-fuchsia-600"
        }
    ];

    const categories = ["All", "Full Stack", "Frontend", "Algorithms"];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-darker/50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-8"></div>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-white/10 ${filter === cat
                                    ? 'bg-primary text-white shadow-[0_0_15px_rgba(14,165,233,0.5)]'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layout
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="glass rounded-xl overflow-hidden border border-white/5 group hover:border-primary/30"
                        >
                            {/* Image Placeholder with Gradient */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.color} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                                    <div className="flex gap-4">
                                        <a href={project.github} className="p-2 bg-white/20 rounded-full hover:bg-white/40 text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className="p-2 bg-white/20 rounded-full hover:bg-white/40 text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity">
                                    <Code2 className="text-white/30 h-16 w-16" />
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/30 rounded-full border border-cyan-800">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
