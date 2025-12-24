import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between">

                    <div className="md:w-1/2 text-center md:text-left z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                                <span className="text-secondary font-medium tracking-wide text-sm">✨ Available for opportunities</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                Hi, I'm <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Aryan</span>
                            </h1>

                            <h2 className="text-2xl md:text-4xl font-semibold text-gray-300 mb-6">
                                <span className="text-primary">&lt;</span> Full-Stack Developer <span className="text-primary">/&gt;</span>
                            </h2>

                            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                                Building scalable web applications with a focus on Data Structures, Algorithms, and premium user experiences.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                                <Link to="projects" smooth={true} offset={-70} duration={500}>
                                    <button className="px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                        View Projects
                                    </button>
                                </Link>
                                <Link to="contact" smooth={true} offset={-70} duration={500}>
                                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 text-white font-semibold transition-colors">
                                        Contact Me
                                    </button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-6 mt-10 justify-center md:justify-start">
                                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                                    <Github className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors transform hover:scale-110">
                                    <Linkedin className="w-6 h-6" />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-accent transition-colors transform hover:scale-110">
                                    <Mail className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    <div className="md:w-1/2 mt-12 md:mt-0 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 animate-pulse blur-2xl"></div>
                                <div className="absolute inset-4 bg-darker rounded-full flex items-center justify-center border border-white/10 glass">
                                    <div className="text-center p-8">
                                        <div className="text-6xl mb-4">💻</div>
                                        <div className="font-mono text-primary text-xl">
                                            {`{ code: "clean" }`}
                                        </div>
                                        <div className="font-mono text-accent text-xl mt-2">
                                            {`{ ui: "modern" }`}
                                        </div>
                                    </div>
                                </div>

                                {/* Orbiting Elements */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 animate-float">
                                    <div className="bg-darker p-3 rounded-xl border border-white/10 shadow-xl glass">
                                        <span className="text-cyan-400 font-bold">React</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 right-10 translate-y-4 animate-float" style={{ animationDelay: '1s' }}>
                                    <div className="bg-darker p-3 rounded-xl border border-white/10 shadow-xl glass">
                                        <span className="text-purple-400 font-bold">Node.js</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-10 left-0 -translate-x-4 animate-float" style={{ animationDelay: '2s' }}>
                                    <div className="bg-darker p-3 rounded-xl border border-white/10 shadow-xl glass">
                                        <span className="text-yellow-400 font-bold">DSA</span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <Link to="about" smooth={true} offset={-70} duration={500} className="text-gray-400 hover:text-white cursor-pointer">
                        <ArrowDown className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
