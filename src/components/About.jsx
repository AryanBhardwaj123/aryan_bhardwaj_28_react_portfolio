import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Brain } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Code className="w-8 h-8 text-secondary" />,
            title: "Clean Code",
            desc: "Writing maintainable, scalable, and efficient code is my priority."
        },
        {
            icon: <Brain className="w-8 h-8 text-accent" />,
            title: "Problem Solving",
            desc: "Strong foundation in DSA helps me tackle complex technical challenges."
        },
        {
            icon: <Server className="w-8 h-8 text-primary" />,
            title: "Full-Stack",
            desc: "Seamlessly bridging frontend elegance with backend robustness."
        },
        {
            icon: <Database className="w-8 h-8 text-emerald-400" />,
            title: "Scalability",
            desc: "Designing systems that grow with user demand."
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/2 space-y-6"
                    >
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a disciplined <span className="text-white font-semibold">Full-Stack Developer</span> committed to continuous improvement. My journey is defined by a rigorous routine and a deep passion for building scalable web applications.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Through my <span className="text-primary">100 Days of Code</span> challenge, I have cultivated a habit of daily consistency, solving algorithmic problems in C++ and mastering Data Structures and Algorithms. I believe that success is the sum of small efforts repeated day in and day out.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Beyond coding, I focus on system design and architecture, constantly pushing myself to understand the "why" behind every line of code. My goal is to leverage my problem-solving skills to build impactful digital solutions.
                        </p>
                    </motion.div>

                    <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                                whileHover={{ scale: 1.05, translateY: -5 }}
                                className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-all duration-300 group"
                            >
                                <div className="bg-white/5 p-3 rounded-lg w-fit mb-4 group-hover:bg-white/10 transition-colors">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{card.title}</h3>
                                <p className="text-sm text-gray-400">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
