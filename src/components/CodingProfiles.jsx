import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, TrendingUp, Award } from 'lucide-react';

const CodingProfiles = () => {
    return (
        <section id="profiles" className="py-20 relative bg-black/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Coding <span className="text-primary">Profiles</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex justify-center">
                    <motion.a
                        href="https://leetcode.com/" // Replace with actual profile URL if known, or let user edit
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="group relative w-full max-w-2xl"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative glass p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center gap-8">

                            {/* Icon / Brand */}
                            <div className="bg-darker/50 p-6 rounded-2xl border border-white/5">
                                <Code className="w-16 h-16 text-yellow-500" />
                            </div>

                            {/* Content */}
                            <div className="text-center md:text-left flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                    LeetCode
                                    <ExternalLink size={18} className="text-gray-400 group-hover:text-yellow-500 transition-colors" />
                                </h3>
                                <p className="text-gray-400 mb-6">
                                    Actively solving algorithmic problems to strengthen problem-solving and DSA concepts.
                                    Consistent practice with focus on optimization.
                                </p>

                                {/* Stats (Mock Data - User can update) */}
                                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-4">
                                    <div>
                                        <div className="text-yellow-500 font-bold text-lg">Daily</div>
                                        <div className="text-xs text-gray-500">Consistency</div>
                                    </div>
                                    <div>
                                        <div className="text-blue-500 font-bold text-lg">C++</div>
                                        <div className="text-xs text-gray-500">Language</div>
                                    </div>
                                    <div>
                                        <div className="text-green-500 font-bold text-lg">DSA</div>
                                        <div className="text-xs text-gray-500">Focus</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
