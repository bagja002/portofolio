import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'capabilities', href: '#skills' },
    { name: 'stack', href: '#stack' },
    { name: 'register', href: '#projects' },
    { name: 'contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        let lastY = window.scrollY;

        const handleScroll = () => {
            const y = window.scrollY;
            setHidden(y > lastY && y > 120);
            lastY = y;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (e, href) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
    };

    return (
        <motion.header
            initial={{ y: 0 }}
            animate={{ y: hidden && !isOpen ? -80 : 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-void/95 backdrop-blur-sm"
        >
            {/* A status line, the way tmux or vim carries one. */}
            <div className="term flex h-11 items-center justify-between gap-4 text-[0.8125rem]">
                <a
                    href="#top"
                    onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex shrink-0 items-baseline gap-1.5 whitespace-nowrap"
                >
                    <span className="font-semibold text-amber">~</span>
                    <span className="text-bright">bagja.lazwardi</span>
                    <span className="hidden text-dim sm:inline">/ system register</span>
                </a>

                <nav className="hidden items-center gap-5 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollTo(e, link.href)}
                            className="text-dim transition-colors hover:text-amber"
                        >
                            <span className="text-rule-lit">[</span>
                            {link.name}
                            <span className="text-rule-lit">]</span>
                        </a>
                    ))}
                </nav>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                    className="text-body transition-colors hover:text-amber md:hidden"
                >
                    {isOpen ? <X size={19} strokeWidth={1.75} /> : <Menu size={19} strokeWidth={1.75} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        className="overflow-hidden border-t border-rule bg-void md:hidden"
                    >
                        <ul className="term py-3">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => scrollTo(e, link.href)}
                                        className="flex items-baseline gap-3 py-2.5 text-body transition-colors hover:text-amber"
                                    >
                                        <span className="text-amber">&gt;</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
