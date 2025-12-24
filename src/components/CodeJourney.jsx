import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code2, Youtube, Trophy, CheckCircle2, Terminal } from 'lucide-react';

const CodeJourney = () => {
    const milestones = [
        {
            date: "September 22",
            title: "The Beginning",
            description: "Started the 100 Days of Code challenge during Navratri. Committed to daily consistency.",
            icon: <Calendar className="w-6 h-6" />,
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            date: "Daily Routine",
            title: "DSA with C++",
            description: "Following Apna College's DSA playlist. Creating lecture-wise practice files (e.g., Lec90.cpp) in VS Code.",
            icon: <Terminal className="w-6 h-6" />,
            color: "text-secondary",
            bg: "bg-secondary/10",
            border: "border-secondary/20"
        },
        {
            date: "Consistency",
            title: "Problem Solving",
            description: "Solving at least one LeetCode problem every single day to strengthen algorithmic thinking.",
            icon: <Code2 className="w-6 h-6" />,
            color: "text-accent",
            bg: "bg-accent/10",
            border: "border-accent/20"
        },
        {
            date: "Ongoing",
            title: "Milestones Reached",
            description: " maintaining a discipline-driven routine, focusing on long-term growth and mastery.",
            icon: <Trophy className="w-6 h-6" />,
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20"
        }
    ];

    return (
        <section id="journey" className="py-20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">100 Days of <span className="text-primary">Code</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                    <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                        A journey of discipline, consistency, and continuous learning. Started on September 22nd.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line for Desktop */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent hidden md:block rounded-full"></div>

                    <div className="space-y-12 md:space-y-24">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Content Card */}
                                <div className="flex-1 w-full">
                                    <div className={`glass p-8 rounded-2xl border ${item.border} hover:scale-[1.02] transition-transform duration-300 relative group`}>
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${item.color.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                                        <div className="flex items-center gap-4 mb-4">
                                            <div className={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                                {item.icon}
                                            </div>
                                            <div>
                                                <span className={`text-sm font-mono ${item.color}`}>{item.date}</span>
                                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                            </div>
                                        </div>

                                        <p className="text-gray-400 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Timeline Node */}
                                <div className="relative flex items-center justify-center z-10">
                                    <div className={`w-12 h-12 rounded-full border-4 border-darker ${item.bg} flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                                        <div className={`w-4 h-4 rounded-full ${item.color.replace('text', 'bg')}`}></div>
                                    </div>
                                </div>

                                {/* Spacer for Timeline alignment */}
                                <div className="flex-1 hidden md:block"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodeJourney;
