import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const [filter, setFilter] = useState('All');

    const categories = ["All", "Coding & DSA", "Web Development", "Academic"];

    const certificates = [
        {
            title: "Data Structures & Algorithms in C++",
            issuer: "Apna College",
            category: "Coding & DSA",
            date: "2024",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop" // Placeholder
        },
        {
            title: "Full Stack Web Development",
            issuer: "Udemy / Coursera",
            category: "Web Development",
            date: "2024",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=600&auto=format&fit=crop" // Placeholder
        },
        {
            title: "MERN Stack Specialization",
            issuer: "Online Platform",
            category: "Web Development",
            date: "2024",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop" // Placeholder
        },
        // Add more certificates as needed
    ];

    const filteredCertificates = filter === 'All'
        ? certificates
        : certificates.filter(cert => cert.category === filter);

    return (
        <section id="certifications" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Achievements & <span className="text-primary">Certifications</span></h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
                </motion.div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg shadow-primary/25 scale-105'
                                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredCertificates.map((cert, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={index}
                            className="glass rounded-xl overflow-hidden border border-white/5 hover:border-primary/30 group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-darker to-transparent opacity-80"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/20 text-primary border border-primary/20">
                                        {cert.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {cert.title}
                                </h3>
                                <div className="flex justify-between items-center text-gray-400 text-sm">
                                    <span className="flex items-center gap-1">
                                        <Award size={16} className="text-secondary" />
                                        {cert.issuer}
                                    </span>
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredCertificates.length === 0 && (
                    <div className="text-center text-gray-500 py-12">
                        No certificates found in this category.
                    </div>
                )}
            </div>
        </section>
    );
};

export default Certifications;
