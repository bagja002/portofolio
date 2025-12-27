import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Database, Brain, Sparkles } from 'lucide-react';

export default function Hero() {
    const handleClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
            {/* Subtle Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-center max-w-5xl mx-auto"
                >
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.8, ease: "backOut" }}
                        className="mb-10 relative inline-block group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] p-1.5 bg-gradient-to-br from-emerald-500 to-amber-500 relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]">
                            <img
                                src="/foto-profiile.jpeg"
                                alt="Bagja Lazwardi"
                                className="w-full h-full object-cover rounded-[1.7rem] border-4 border-slate-950"
                            />
                        </div>
                        <div className="absolute -bottom-2 -right-2 z-20 w-8 h-8 bg-emerald-500 rounded-full border-4 border-slate-950 flex items-center justify-center">
                            <div className="w-full h-full rounded-full animate-ping bg-emerald-500 opacity-20 absolute"></div>
                        </div>
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8 mx-auto w-fit"
                    >
                        <Sparkles className="w-4 h-4" />
                        <span>Available for Hire</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-['Outfit'] tracking-tight leading-tight"
                    >
                        Hi, I'm{' '}
                        <span className="inline-block bg-gradient-to-r from-emerald-400 via-cyan-400 to-amber-500 bg-clip-text text-transparent">
                            Bagja Lazwardi, S. Mat
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-xl sm:text-2xl lg:text-3xl text-slate-400 mb-6 max-w-3xl mx-auto leading-relaxed"
                    >
                        <span className="text-white font-semibold">Fullstack Developer</span>
                        {' '}&{' '}
                        <span className="text-white font-semibold">Backend Engineer</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-base sm:text-lg text-slate-500 mb-12 max-w-2xl mx-auto"
                    >
                        Specializing in system integration, building scalable architectures, and creating seamless connections between complex systems.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="#projects"
                            onClick={(e) => handleClick(e, '#projects')}
                            className="group px-8 py-4 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex items-center gap-2 cursor-pointer"
                        >
                            <span>View Work</span>
                            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => handleClick(e, '#contact')}
                            className="px-8 py-4 rounded-full bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white font-medium transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-600 cursor-pointer"
                        >
                            Get in Touch
                        </a>
                    </motion.div>

                    {/* Tech Icons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-slate-500"
                    >
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 group-hover:border-emerald-500/50 transition-colors">
                                <Code className="w-5 h-5 text-emerald-400" />
                            </div>
                            <span className="text-sm font-medium">Fullstack Dev</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 group-hover:border-amber-500/50 transition-colors">
                                <Database className="w-5 h-5 text-amber-400" />
                            </div>
                            <span className="text-sm font-medium">Data Analysis</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <div className="p-2 rounded-lg bg-slate-900/50 border border-slate-800 group-hover:border-cyan-500/50 transition-colors">
                                <Brain className="w-5 h-5 text-cyan-400" />
                            </div>
                            <span className="text-sm font-medium">AI Engineering</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}

            </div>
        </section>
    );
}
