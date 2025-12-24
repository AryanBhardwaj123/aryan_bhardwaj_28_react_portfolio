import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Code2, Moon, Sun } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', to: 'about' },
        { name: 'Journey', to: 'journey' },
        { name: 'Cards', to: 'certifications' },
        { name: 'Profiles', to: 'profiles' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <Code2 className="h-8 w-8 text-primary" />
                        <span className="ml-2 text-2xl font-bold font-mono text-white tracking-tighter">
                            Dev<span className="text-primary">.</span>
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-300 hover:text-white hover:text-primary transition-colors cursor-pointer text-sm uppercase tracking-wider font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity transform hover:scale-105 duration-200">
                            Hire Me
                        </button>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass absolute w-full">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full font-medium">
                                Hire Me
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
