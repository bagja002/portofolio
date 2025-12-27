import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Set scrolled state for background
            setScrolled(currentScrollY > 50);

            // Auto-hide on scroll down, show on scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setHidden(true);
            } else {
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: hidden ? -100 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800/50 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">

                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm font-medium cursor-pointer relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>
                        <div className="flex items-center space-x-3 pl-4 border-l border-slate-700">
                            <a href="https://github.com/bagja002" target="_blank" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                                <Github size={18} />
                            </a>
                            <a href="https://www.linkedin.com/in/bagja-lazwardi-221935174/" target="_blank" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                                <Linkedin size={18} />
                            </a>
                            <a href="mailto:barjafaskan9@gmail.com" target="_blank" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-200">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-slate-800 transition-all"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-lg border-b border-slate-800"
                    >
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleClick(e, link.href)}
                                    className="text-slate-300 hover:text-white hover:bg-slate-800 block px-4 py-3 rounded-lg text-base font-medium cursor-pointer transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-3 px-4 py-2 pt-4 border-t border-slate-800 mt-2">
                                <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
